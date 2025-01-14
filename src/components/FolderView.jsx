// components/FolderView.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchContents } from '../services/github';
import { FOLDER_STRUCTURE } from '../config/structure';
import { getSimpleName, getActualName } from '../config/nameMapping';
import EnhancedFileViewer from './FileViewer';
import { FaDownload } from 'react-icons/fa'; // Import download icon from react-icons

// Add styles for interactive elements
const styles = {
  clickableItem: {
    cursor: 'pointer',
    transition: 'color 0.2s ease', // Smooth color transition on hover
    color: '#2c3e50', // Default color
  },
  itemHover: {
    color: '#3498db', // Color when hovering
  },
  iconWrapper: {
    marginRight: '8px',
    color: '#7f8c8d',
  },
  downloadButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#27ae60',
    padding: '8px',
    borderRadius: '4px',
    transition: 'background-color 0.2s ease',
  },
  tableHeader: {
    backgroundColor: '#f8f9fa',
    borderBottom: '2px solid #e9ecef',
  },
  tableRow: {
    transition: 'background-color 0.2s ease',
    '&:hover': {
      backgroundColor: '#f8f9fa',
    },
  }
};

const FolderView = () => {
  // State management for component
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null); 

  // Get URL parameters and navigation function
  const { repoName, '*': path } = useParams();
  const navigate = useNavigate();

  // Convert URL-friendly names to actual repository names
  const actualRepoName = getActualName(repoName);
  const actualPath = path ? path.split('/').map(getActualName).join('/') : '';

  useEffect(() => {
    const loadContents = async () => {
      // Handle root level - show available repositories
      if (!repoName) {
        setContents(Object.keys(FOLDER_STRUCTURE));
        return;
      }

      setLoading(true);
      try {
        // Handle first level directories from structure config
        if (!path && FOLDER_STRUCTURE[actualRepoName]) {
          setContents(FOLDER_STRUCTURE[actualRepoName].directories);
        } 
        // Fetch contents from GitHub for deeper paths
        else if (path) {
          const data = await fetchContents(actualRepoName, actualPath);
          setContents(Array.isArray(data) ? data : []);
        }
      } catch (error) {
        console.error('Error loading contents:', error);
        setContents([]);
      } finally {
        setLoading(false);
      }
    };

    loadContents();
  }, [repoName, path, actualRepoName, actualPath]);

  // Handle navigation between folders
  const handleNavigation = (itemName, isRoot = false) => {
    const simpleName = getSimpleName(itemName);
    if (isRoot) {
      navigate(`/${simpleName}`);
    } else {
      const currentPath = path ? path.split('/') : [];
      currentPath.push(simpleName);
      navigate(`/${repoName}/${currentPath.join('/')}`);
    }
  };

  // Render loading state
  const renderLoading = () => (
    <tr>
      <td colSpan="3" className="center aligned">
        <div className="ui active loader"></div>
      </td>
    </tr>
  );

  // Render repository list at root level
  const renderRepositories = () => (
    contents.map((repo) => (
      <tr key={repo} style={styles.tableRow}>
        <td>
          <div
            onClick={() => handleNavigation(repo, true)}
            onMouseEnter={() => setHoveredItem(repo)}
            onMouseLeave={() => setHoveredItem(null)}
            style={{
              ...styles.clickableItem,
              ...(hoveredItem === repo ? styles.itemHover : {})
            }}
          >
            <i className="folder icon" style={styles.iconWrapper}></i>
            {getSimpleName(repo)}
          </div>
        </td>
        <td>Repository</td>
        <td></td>
      </tr>
    ))
  );

  // Render folder/file contents
  const renderContents = () => {
    if (loading) return renderLoading();
    if (!repoName) return renderRepositories();

    return contents.map((item) => {
      const isDirectory = typeof item === 'string' || item.type === 'dir';
      const name = typeof item === 'string' ? item : item.name;
      const isHovered = hoveredItem === name;

      return (
        <tr 
          key={name}
          style={styles.tableRow}
        >
          <td>
            <div
              onClick={() => {
                if (isDirectory) {
                  handleNavigation(name);
                } else {
                  setSelectedFile(item);
                }
              }}
              onMouseEnter={() => setHoveredItem(name)}
              onMouseLeave={() => setHoveredItem(null)}
              style={{
                ...styles.clickableItem,
                ...(isHovered ? styles.itemHover : {})
              }}
            >
              <i 
                className={`${isDirectory ? 'folder' : 'file'} icon`}
                style={styles.iconWrapper}
              ></i>
              {getSimpleName(name)}
            </div>
          </td>
          <td>{isDirectory ? 'Folder' : name.split('.').pop().toUpperCase()}</td>
          <td>
            {!isDirectory && (
              <button
                style={styles.downloadButton}
                onClick={() => window.open(item.download_url, '_blank')}
                title="Download file"
              >
                <FaDownload />
              </button>
            )}
          </td>
        </tr>
      );
    });
  };


  // Render back button for navigation
  const renderBackButton = () => {
    if (!(repoName && path)) return null;
    
    return (
      <tr>
        <td colSpan="3">
          <i className="arrow left icon"></i>
          <span
            onClick={() => navigate(-1)}
            style={{ cursor: 'pointer', color: 'blue' }}
          >
            Back
          </span>
        </td>
      </tr>
    );
  };

  return (
    <div className="ui container" style={{ marginTop: '2rem' }}>
      <table className="ui very basic table">
        <thead>
          <tr style={styles.tableHeader}>
            <th>Name</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {renderBackButton()}
          {renderContents()}
        </tbody>
      </table>

      <EnhancedFileViewer
        file={selectedFile}
        isOpen={!!selectedFile}
        onClose={() => setSelectedFile(null)}
      />
    </div>
  );
};

export default FolderView;
// components/FolderView.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchContents } from '../services/github';
import { FOLDER_STRUCTURE } from '../config/structure';
import { getSimpleName, getActualName } from '../config/nameMapping';
import FileViewer from './FileViewer';

const FolderView = () => {
  // State management for component
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  
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
      <tr key={repo}>
        <td>
          <i className="folder icon"></i>
          {getSimpleName(repo)}
        </td>
        <td>Repository</td>
        <td>
          <button
            className="ui blue basic button"
            onClick={() => handleNavigation(repo, true)}
          >
            Open
          </button>
        </td>
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

      return (
        <tr key={name}>
          <td>
            <i className={`${isDirectory ? 'folder' : 'file'} icon`}></i>
            {getSimpleName(name)}
          </td>
          <td>
            {isDirectory ? 'Folder' : name.split('.').pop().toUpperCase()}
          </td>
          <td>
            {isDirectory ? (
              <button
                className="ui blue basic button"
                onClick={() => handleNavigation(name)}
              >
                Open
              </button>
            ) : (
              <div className="ui buttons">
                <button
                  className="ui blue basic button"
                  onClick={() => setSelectedFile(item)}
                >
                  View
                </button>
                <button
                  className="ui green basic button"
                  onClick={() => window.open(item.download_url, '_blank')}
                >
                  Download
                </button>
              </div>
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
          <tr>
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

      <FileViewer
        file={selectedFile}
        isOpen={!!selectedFile}
        onClose={() => setSelectedFile(null)}
      />
    </div>
  );
};

export default FolderView;
// components/FolderView.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchContents } from '../services/github';
import { FOLDER_STRUCTURE } from '../config/structure';
import FileViewer from './FileViewer';

const FolderView = () => {
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const { repoName, '*': path } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadContents = async () => {
      if (!repoName) {
        setContents(Object.keys(FOLDER_STRUCTURE));
        return;
      }

      setLoading(true);
      try {
        if (!path && FOLDER_STRUCTURE[repoName]) {
          setContents(FOLDER_STRUCTURE[repoName].directories);
        } else if (path) {
          const data = await fetchContents(repoName, path);
          setContents(data);
        }
      } catch (error) {
        console.error('Error loading contents:', error);
      } finally {
        setLoading(false);
      }
    };

    loadContents();
  }, [repoName, path]);

  const renderContent = () => {
    if (loading) {
      return (
        <tr>
          <td colSpan="3" className="center aligned">
            <div className="ui active loader"></div>
          </td>
        </tr>
      );
    }

    if (!repoName) {
      return contents.map((repo) => (
        <tr key={repo}>
          <td>
            <i className="folder icon"></i>
            {repo}
          </td>
          <td>Repository</td>
          <td>
            <button
              className="ui blue basic button"
              onClick={() => navigate(`/${repo}`)}
            >
              Open
            </button>
          </td>
        </tr>
      ));
    }

    return contents.map((item) => {
      const isDirectory = typeof item === 'string' || item.type === 'dir';
      const name = typeof item === 'string' ? item : item.name;

      return (
        <tr key={name}>
          <td>
            <i className={`${isDirectory ? 'folder' : 'file'} icon`}></i>
            {name}
          </td>
          <td>{isDirectory ? 'Folder' : name.split('.').pop().toUpperCase()}</td>
          <td>
            {isDirectory ? (
              <button
                className="ui blue basic button"
                onClick={() => navigate(`/${repoName}/${path ? `${path}/` : ''}${name}`)}
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
          {(repoName && path) && (
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
          )}
          {renderContent()}
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
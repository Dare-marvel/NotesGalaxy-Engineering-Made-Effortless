// hooks/useFolderContents.js
import { useState, useEffect } from 'react';
import { fetchContents } from '../services/github';
import { FOLDER_STRUCTURE } from '../config/structure';
import { getActualName } from '../config/nameMapping';

export const useFolderContents = (repoName, path) => {
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(false);

  const actualRepoName = getActualName(repoName);
  const actualPath = path ? path.split('/').map(getActualName).join('/') : '';

  useEffect(() => {
    const loadContents = async () => {
      if (!repoName) {
        setContents(Object.keys(FOLDER_STRUCTURE));
        return;
      }

      setLoading(true);
      try {
        if (!path && FOLDER_STRUCTURE[actualRepoName]) {
          setContents(FOLDER_STRUCTURE[actualRepoName].directories);
        } 
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

  return { contents, loading };
};
// services/github.js
import axios from 'axios';

const GITHUB_API_BASE = 'https://api.github.com/repos/dare-marvel';

export const fetchContents = async (repoName, path = '') => {
  try {
    const url = `${GITHUB_API_BASE}/${repoName}/contents/${path}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching contents:', error);
    return [];
  }
};

export const fetchFileContent = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching file content:', error);
    return null;
  }
};
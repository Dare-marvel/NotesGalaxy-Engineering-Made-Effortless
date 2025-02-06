import axios from 'axios';

const GITHUB_API_BASE = 'https://api.github.com/repos/dare-marvel';
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

const githubAxios = axios.create({
  headers: {
    'Authorization': `Bearer ${GITHUB_TOKEN}`,
    'Accept': 'application/vnd.github.v3+json'
  }
});

export const fetchContents = async (repoName, path = '') => {
  try {
    const url = `${GITHUB_API_BASE}/${repoName}/contents/${path}`;
    const response = await githubAxios.get(url);
    return response.data;
  } catch (error) {
    if (error.response?.status === 403) {
      throw new Error('GitHub API rate limit exceeded or authentication required');
    }
    throw error;
  }
};

export const fetchFileContent = async (url) => {
  try {
    const response = await githubAxios.get(url);
    return response.data;
  } catch (error) {
    if (error.response?.status === 403) {
      throw new Error('GitHub API rate limit exceeded or authentication required');
    }
    throw error;
  }
};
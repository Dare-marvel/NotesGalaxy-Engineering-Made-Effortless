export const SUPPORTED_IMAGE_TYPES = ['jpg', 'jpeg', 'png', 'gif'];
export const SUPPORTED_DOCUMENT_TYPES = ['doc', 'docx', 'ppt', 'pdf', 'pptx', 'xls', 'xlsx'];
export const MAX_RETRY_ATTEMPTS = 5;
export const RETRY_DELAY = 2000;

export const getFileExtension = (filename) => filename.split('.').pop().toLowerCase();

export const getGithubRawUrl = (url) => {
    return url.replace('github.com', 'raw.githubusercontent.com').replace('/blob/', '/');
};
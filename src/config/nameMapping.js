// config/nameMapping.js
export const NAME_MAPPINGS = {
    "Operating-Systems--OS--": "os",
    "NOTES/Chapterwise Handwritten Notes": "notes",
    "EXPERIMENTS/PDFS": "experiments",
    "BOOKS": "books",
    "QuestionPapers": "papers"
  };
  
  export const REVERSE_NAME_MAPPINGS = {
    "os": "Operating-Systems--OS--",
    "notes": "NOTES/Chapterwise Handwritten Notes",
    "experiments": "EXPERIMENTS/PDFS",
    "books": "BOOKS",
    "papers": "QuestionPapers"
  };
  
  export const getSimpleName = (actualName) => {
    return NAME_MAPPINGS[actualName] || actualName;
  };
  
  export const getActualName = (simpleName) => {
    return REVERSE_NAME_MAPPINGS[simpleName] || simpleName;
  };
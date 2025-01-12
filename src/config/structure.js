// src/config/structure.js
export const FOLDER_STRUCTURE = {
    "Operating-Systems--OS--": {
      directories: ["NOTES/Chapterwise Handwritten Notes", "EXPERIMENTS/PDFS", "BOOKS", "QuestionPapers"]
    },
    // "Operating-Systems": {
    //   directories: ["notes", "experiments", "codes", "previous-papers"]
    // }
    // Add other subjects as needed
  };
  
  export const constructGitHubUrl = (subject, directory, filename) => {
    const baseUrl = "https://raw.githubusercontent.com/dare-marvel";
    return `${baseUrl}/${subject}/main/${directory}/${filename}`;
  };
// styles/folderView.styles.js
export const styles = {
    clickableItem: {
      cursor: 'pointer',
      transition: 'color 0.2s ease',
      color: '#2c3e50',
    },
    itemHover: {
      color: '#3498db',
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
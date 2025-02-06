export const truncateByScreenSize = (text, breakpoints) => {
    // Get window width
    const width = window.innerWidth;
    
    // Find the appropriate breakpoint
    if (width < breakpoints.sm) {
      return text.length > breakpoints.mobileChars 
        ? `${text.slice(0, breakpoints.mobileChars)}...` 
        : text;
    } else if (width < breakpoints.md) {
      return text.length > breakpoints.tabletChars 
        ? `${text.slice(0, breakpoints.tabletChars)}...` 
        : text;
    } else {
      return text.length > breakpoints.desktopChars 
        ? `${text.slice(0, breakpoints.desktopChars)}...` 
        : text;
    }
  };
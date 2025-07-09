export const getFilenameFromName = (name) => {
  return name.replace(/\s+/g, '').replace(/[^\w]/g, '');
};

export const loadChannelsForSubject = async (subjectName) => {
  const filename = getFilenameFromName(subjectName);
  
  try {
    const module = await import(`../channelsData/${filename}.js`);
    const channels = module.default;
    
    if (!channels) {
      console.warn(`Export ${exportName} not found in ${filename}.js`);
      return [];
    }
    
    return channels;
  } catch (error) {
    console.error(`Error loading channels for ${subjectName} (${filename}):`, error);
    return [];
  }
};
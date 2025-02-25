import { useEffect, useState } from "react";

// Custom hook to manage the document title
const useDocTitle = (title) => {
  // State to store the document title
  const [doctitle, setDocTitle] = useState(title);

  useEffect(() => {
    // Update the document title whenever 'doctitle' changes
    document.title = doctitle;
  }, [doctitle]);

  // Return the current title and the function to update it
  return [doctitle, setDocTitle];
};

export { useDocTitle };

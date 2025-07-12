import { useEffect } from "react";

export const usePageMeta = (pageTitle, metaDescription) => {
  useEffect(() => {
    // Scroll to top smoothly
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    // Set the document title
    document.title = `NotesGalaxy | ${pageTitle}`;

    // Set or create the meta description tag
    let metaTag = document.querySelector("meta[name='description']");
    if (metaTag) {
      metaTag.setAttribute("content", metaDescription);
    } else {
      metaTag = document.createElement("meta");
      metaTag.name = "description";
      metaTag.content = metaDescription;
      document.head.appendChild(metaTag);
    }
  }, [pageTitle, metaDescription]);
};

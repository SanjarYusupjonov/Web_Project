import { useEffect } from "react";

const ScrollToTop = (props) => {
    // const location = useLocation();
    useEffect(() => {
      // Scrolls to top on mount
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
  
    return (
      <>
        {props.children}
      </>
    );
};

export default ScrollToTop;
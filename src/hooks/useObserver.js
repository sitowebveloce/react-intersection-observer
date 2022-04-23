import React from 'react';

export function useObserver(ref) {

    const [isIntersecting, setIntersecting] = React.useState(false);

     // OPTIONS
     const options = {
        // root: target.current,
        rootMargin: '-130px',
        threshold: 0.5, // A threshold of 1.0 means that when 100% of the target is visible within the element specified by the root option, the callback is invoked.
    };
  
    const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting),options);
  
    React.useEffect(() => {

        observer.observe(ref.current)
        // DISCONNECT 
        return () => observer.disconnect()
     
    }, []);
  
    return isIntersecting
  };
  
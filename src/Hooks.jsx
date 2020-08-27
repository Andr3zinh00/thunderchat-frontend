import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};


export const useWindowSize = () => {
  const sizes = useState({ width: undefined, height: undefined, });
  useEffect(() => {

    // eslint-disable-next-line
  }, []);

  return sizes;
}


export const useDisplayHeaderFooter = () => {
  const location = useLocation();

  const { pathname } = location;

  return (pathname === "/") || (pathname === "signup");
}
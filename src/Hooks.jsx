import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { displayHeaderFooter } from './redux/SideEffects/SideEffects.actions';

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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(displayHeaderFooter())
    return () => dispatch(displayHeaderFooter());
    // eslint-disable-next-line
  }, [])
}
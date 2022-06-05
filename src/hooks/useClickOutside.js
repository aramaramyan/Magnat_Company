import { useEffect } from "react";

export default function useClickOutside(ref, closeCallBack, elemRef) {
  useEffect(() => {
    const handleClose = (e) => {
      if(!ref.current.contains(e.target) && !elemRef.current.contains(e.target)) {
        closeCallBack();
      }
    }

    document.addEventListener('click', handleClose);

    return () => document.removeEventListener('click', handleClose);

  }, [ref, elemRef]);
}
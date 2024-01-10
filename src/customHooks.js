import { useState, useEffect } from "react";

const useLoader = (duration) => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, duration);
  }, [duration]);
  return isLoading;
};

export default useLoader;

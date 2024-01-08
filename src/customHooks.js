import { useState, useEffect } from "react";

const useLoader = () => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
  return isLoading;
};

export default useLoader;

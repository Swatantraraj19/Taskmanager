import { useState ,useEffect } from "react";

     export function useLocalStorage( key,initiaValue){

          // 1. Initialize state
  const [value, setValue] = useState(() => {
    // Get stored value from local storage
    const jsonValue = localStorage.getItem(key);
    
    // If we found a value, parse it and return it
    if (jsonValue != null) return JSON.parse(jsonValue);
    
    // Otherwise, return the initial value
    return initiaValue;
  });



  // 2. Save state to local storage when it changes
useEffect(() => {
  localStorage.setItem(key, JSON.stringify(value));
}, [key, value]);


return [value, setValue];
     }

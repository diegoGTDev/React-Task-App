import React from "react";

function useLocalStore(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);


  React.useEffect(() => {
    setTimeout(() => {
      try{
        const Items = localStorage.getItem(itemName);
        let parsedItems;
        if (!Items) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItems = initialValue;
        } else {
          parsedItems = JSON.parse(Items);
          setItem(parsedItems);
        }
  
        setLoading(false);
      }
      catch{
        setLoading(false);
        setError(true);
      }
    }, 2000);
  
  }, [])

  const saveItems = (items) => {
    localStorage.setItem(itemName, JSON.stringify(items));
    setItem(items);
  };

  return {item, saveItems, loading, error};
}

export { useLocalStore };

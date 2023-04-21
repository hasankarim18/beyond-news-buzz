import React, { useEffect, useState } from 'react';

const LeftNavigation = () => {
  const [categories, setCategories] = useState([])


  useEffect(() => {
    fetch("http://localhost:5000/categories")
    .then(res=> res.json())
    .then(data => setCategories(data))
    .catch(errro => console.log(error))
  }, [])

  console.log(categories);

    return (
      <div>
        <h2 className="text-danger">Left navigation</h2>
      </div>
    );
};

export default LeftNavigation;
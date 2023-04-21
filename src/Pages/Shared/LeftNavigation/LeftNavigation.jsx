import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNavigation = () => {
  const [categories, setCategories] = useState([])


  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((errro) => console.log(errro));
  }, [])

  console.log(categories);

    return (
      <div>
        <h4 className="text-dark">All Categories</h4>
        <div className="ps-4">
          {
            categories.map(category => (
              <p key={category.id}>
                <Link className="text-decoration-none nav-link" to={`/category/${category.id}`}>{category.name} </Link>
              </p>
            ))
          }
        </div>
      </div>
    );
};

export default LeftNavigation;
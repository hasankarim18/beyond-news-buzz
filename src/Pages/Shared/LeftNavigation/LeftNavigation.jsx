import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './LeftNavigation.css'

const LeftNavigation = () => {
  const [categories, setCategories] = useState([])


  useEffect(() => {
    fetch("https://newspaper.hasanmahbub.com/categories")
      .then((res) => res.json())
      .then((data) =>{
       
        setCategories(data);
      } )
      .catch((errro) => console.log(errro));
  }, [])

 

    return (
      <div>
        <h4 className="text-dark">All Categories</h4>
        <div className="ps-4 mt-4">
          {categories.map((category) => (
            <p className="ps-4 mt-2" key={category.id}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "category_active text-decoration-none nav-link p-3 rounded fs-5"
                    : "text-decoration-none nav-link p-3 rounded fs-5"
                }
                to={`/category/${category.id}`}
              >
                {category.name}{" "}
              </NavLink>
            </p>
          ))}
        </div>
      </div>
    );
};

export default LeftNavigation;
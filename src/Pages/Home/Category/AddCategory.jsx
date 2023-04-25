import React from 'react';
import axios from 'axios';

const AddCategory = () => {
    const addCategoryHandler = (event) => {
        event.preventDefault()
        const form = event.target 
        const name = form.cat_name.value
        console.log(name);
        axios
          .post("http://localhost:5000/categories/", {
            name,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    };
    return (
        <div>
            <h1>Add Category</h1>
            <form onSubmit={addCategoryHandler}>
                <input name="cat_name" placeholder='Category Name' type="text" className="form-control" />
                <button className="btn btn-success">Add Category</button>
            </form>
        </div>
    );
};

export default AddCategory;
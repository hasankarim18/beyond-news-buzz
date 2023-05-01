import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <div className="container"> 
                <h2>Our Terms and conditions</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo maiores natus fugit dignissimos veritatis commodi odio molestias dolorem sit, suscipit debitis porro amet perspiciatis, aliquid eius quia consequuntur laborum a ratione quos accusantium mollitia unde? Deleniti at praesentium cumque ea dolores veniam, ex quia minima non temporibus et voluptatem saepe!
                </p>
                <p>
                   Go Back to <Link to="/register"> Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Terms;
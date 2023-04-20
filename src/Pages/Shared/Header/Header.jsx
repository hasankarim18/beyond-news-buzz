import React from 'react';
import moment from "moment";

const Header = () => {
    return (
      <div>
        <div className="text-center">
          <h1 className="font_lobster text-center ">Beyond New Buzz</h1>
          <p>Journalism Without Fear or Favour</p>
          <p>{moment().format("dddd, MMMM  YYYY")}</p>
        </div>
      </div>
    );
};

export default Header;
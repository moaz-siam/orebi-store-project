import React from "react";
import { Link } from "react-router-dom";
import { saleImgOne, saleImgTwo, saleImgThree } from "../../../assets/images";
function Sale() {
  return (
    <div className="py-20 px-10 flex md:flex-row flex-col items-center gap-4 lg:gap-10">
      <div className="w-full md:w-2/3 md lg:w-1/2 h-full">
        <Link to={"/shop"}>
          <img
            src={saleImgOne}
            alt="test"
            className="w-full h-full object-cover"
          />
        </Link>
      </div>
      <div className="w-full md:w-2/3 lg:w-1/2 flex flex-col h-auto gap-4 lg:gap-10">
        <div className="h-1/2 w-full">
          <Link to="/shop">
            <img className="h-full w-full object-cover" src={saleImgTwo} alt="not img" />
          </Link>
        </div>
        <div className="h-1/2 w-full">
          <Link to="/shop">
            <img className="h-full w-full object-cover" src={saleImgThree} alt="not img" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sale;

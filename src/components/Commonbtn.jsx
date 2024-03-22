import React from "react";
const Commonbtn = (props) => {
  return (
    <div>
      <button onClick={props.click}  className=" cmn_btn text-white px-4 py-3 mt-4 ">
        {props.text}
      </button>
    </div>
  );
};
export default Commonbtn; 
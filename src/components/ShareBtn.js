import React from "react";

const ShareBtn = ({text}) => {
  return (
      <button className="share_btn">{text} <i className="fa-solid fa-share-nodes"></i></button>
  )
};

export default ShareBtn;
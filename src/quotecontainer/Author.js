import React from "react";

function Author({author, bg}){
  return (
    <div style={{color : bg}} className="Author">
      <p id="author">{`- ${author}`}</p>
    </div>
  )
}

export default Author;
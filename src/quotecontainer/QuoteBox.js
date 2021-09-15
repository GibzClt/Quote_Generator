import React from "react";
import Quote from "./Quote";
import Author from "./Author";
import Publish from "./Publish";

function QuoteBox(){
  return (
    <div className="QuoteBox">
      <Quote />
      <Author />
      <Publish />
    </div>
  )
}

export default QuoteBox;
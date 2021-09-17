import React, { useEffect, useState } from "react";
import Quote from "./Quote";
import Author from "./Author";
import Publish from "./Publish";

function QuoteBox({quote, author, getNew, bg}){
  
  return (
    <div  className="QuoteBox">
      <Quote bg={bg} quote={quote} />
      <Author bg={bg} author={author} />
      <Publish bg={bg} getNew={getNew} />
    </div>
  )
}

export default QuoteBox;
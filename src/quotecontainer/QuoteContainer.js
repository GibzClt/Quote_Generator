import React, {useEffect, useState} from "react";
import QuoteBox from "./QuoteBox";
import "./QuoteContainer.css";
import quotes from "../common/quotes.json";

function QuoteContainer(){
  const [id, setId] = useState(Math.floor(Math.random() * quotes.length));
  const [quote, setQuote] = useState(quotes[id]);
  const[bgColor, setBgColor] = useState("#dddddd")
  
  const handleClick=()=>{
    setId(Math.floor(Math.random() * quotes.length));
    console.log("id is", id)
  }

  useEffect(()=>{
    setQuote(quotes[id % quotes.length])
    setBgColor("#" + Math.floor(Math.random()*16777215).toString(16))
  }, [id])

  return(
    <main
      style={{
        background : bgColor,
        transition : "all 2s ease"
      }}
      id="quote-box"
    >
      <QuoteBox quote={quote.quote} author={quote.author} getNew={handleClick} bg={bgColor} />
    </main>
  )
}

export default QuoteContainer;
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

function Quote({quote, bg}){

  useEffect(()=>{
    const quoteContent = document.getElementById('text');
    quoteContent.style.animation = 
      quoteContent.style.animationName === "fadeIn1" ? "fadeIn2 2s linear 0s 1 normal forwards "
        : "fadeIn1 2s linear 0s 1 normal forwards ";
  },[quote])

  return (
    <div
      style={{
        color : bg,
        transition : "color 3s ease"
      }}
      className="Quote"
    >
      <FontAwesomeIcon icon={faQuoteLeft} />&emsp;
      <span id="text" >{quote}</span>
    </div>
  )
}

export default Quote;
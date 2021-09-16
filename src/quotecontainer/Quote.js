import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

function Quote({quote, bg}){
  return (
    <div
      style={{
        color : bg,
        transition : "color 3s ease"
      }}
      className="Quote"
    >
      <FontAwesomeIcon icon={faQuoteLeft} />
      <span id="text" >{quote}</span>
    </div>
  )
}

export default Quote;
import React from "react";
// import {  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faTumblr } from "@fortawesome/free-brands-svg-icons"


function Publish({getNew, bg}){
  return (
    <div className="Publish" >
      <a
        style={{
          width : "10%",
          height : "100%"
        }}
        href="https://twitter.com/intent/tweet/"
        id="tweet-quote"
      ><button
        style={{
          background : bg,
          transition : "background 3s ease",
          height : "100%",
          width : "100%",
          fontSize : "large"
        }}
      ><FontAwesomeIcon icon={faTwitter}/>
      </button>
      </a>
        <button
          className="btn"
          style={{
            background : bg,
            transition : "background 3s ease"
          }}
        ><FontAwesomeIcon icon={faTumblr}/>
        </button>
        <button
          className="btn"
          id="new-quote"
          onClick={getNew}  
          style={{
            background : bg,
            transition : "background 3s ease",
          }}
        >New Quote
        </button>
    </div>
  )
}

export default Publish;
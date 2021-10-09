import React from "react";
// import {  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faTumblr } from "@fortawesome/free-brands-svg-icons"


function Publish({getNew, bg, quote, author}){
  return (
    <div className="Publish" >
      <a
        style={{
          width : "10%",
          height : "100%",
          marginRight : "1%"
        }}
        href={"https://twitter.com/intent/tweet?&text="+ quote + "%0A-" + author} 
        id="tweet-quote"
      ><button
        style={{
          background : bg,
          transition : "background 3s ease",
          height : "100%",
          width : "100%",
          fontSize : "large",
          cursor : "pointer",
          border : "none",
        }}
      ><FontAwesomeIcon icon={faTwitter}/>
      </button>
      </a>
      <a
        style={{
          width : "100%",
          height : "100%",
          marginRight : "1%"
        }}
        href="https://www.tumblr.com/"
      >
        <button
          className="btn"
          style={{
            background : bg,
            transition : "background 3s ease"
          }}
        ><FontAwesomeIcon icon={faTumblr}/>
        </button>
      </a>
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
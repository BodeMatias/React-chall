import React from "react"

let Header = ({ type }) => {
   return (
      <header>
         <div className="header-container-1">
            <h1>DEMO Streaming</h1>
            <div>
               <a href="/" className="log-in">
                  Log in
               </a>
               <button className="btn">Start your free trial</button>
            </div>
         </div>
         <div className="header-container-2">
            {type && <h2>Popular {type}</h2>}
         </div>
      </header>
   )
}

export default Header

import React from "react"

let Footer = () => {
   let fbURL = require("../assets/social/facebook-white.svg")
   let igURL = require("../assets/social/instagram-white.svg")
   let twURL = require("../assets/social/twitter-white.svg")

   let appStoreURL = require("../assets/store/app-store.svg")
   let playStoreURL = require("../assets/store/play-store.svg")
   let windowsStoreURL = require("../assets/store/windows-store.svg")

   return (
      <footer>
         <div className="links">
            <a href="/">Home</a>
            <a href="/">Terms and Conditions</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Collection Statement</a>
            <a href="/">Help</a>
            <a href="/">Manage Account</a>
         </div>
         <span className="copy">
            Copyright &copy; 2016 DEMO Streaming. All Rights Reserved
         </span>
         <div className="socials">
            <div className="left-socials">
               <img alt="" src={fbURL.default} className="fb-social"></img>
               <img alt="" src={twURL.default} className="tw-social"></img>
               <img alt="" src={igURL.default} className="ig-social"></img>
            </div>
            <div className="stores">
               <img
                  alt=""
                  src={appStoreURL.default}
                  className="apple-store"
               ></img>
               <img
                  alt=""
                  src={playStoreURL.default}
                  className="play-store"
               ></img>
               <img
                  alt=""
                  src={windowsStoreURL.default}
                  className="windows-store"
               ></img>
            </div>
         </div>
      </footer>
   )
}

export default Footer

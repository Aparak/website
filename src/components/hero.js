import React from "react"
import PropTypes from "prop-types"

import app from "../images/app.svg"
import headerImage from "../images/header.png"
import logo from "../images/logo.svg"

const Header = ({ siteTitle }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      padding: "4rem 1rem",
      height: "100vh",
    }}
  >
    <div
      style={{
        backgroundImage: `url(${headerImage})`,
        position: "absolute",
        top: 0,
        zIndex: -5,
        height: "100vh",
        width: "100vw",
        opacity: 0.5,
      }}
    />
    <img style={{ width: "5.8em", marginTop: "5vh", }} src={logo} alt="Aparak logo" />
    <h3 style={{ textAlign: "center", maxWidth: 440, marginTop: "10vh", }}>
      We build applications for fun!
    </h3>
    <img style={{width: "25em", marginTop: "8vh", maxWidth: "90vh" }} src={app} alt="an app in a browser is floating over colorful graphics" />
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

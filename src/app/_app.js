import './globals.css'
import React from "react";
import PropTypes from "prop-types";

function MyApp({ Component, pageProps }) {
  //const getLayout = Component.getLayout || ((page) => page);
  return <Component {...pageProps}/>
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp
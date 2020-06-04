import Header from "./header"
import Theme from "./theme" 
import React from 'react'


const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};


const Layout = (props) => {
  return (
    <div>
      <Header />
      <Theme.Provider value={themes.light}>
          <div className="container">
            {props.children}  
          </div>
      </Theme.Provider>
     
    </div>
    
  );
};

export default Layout;

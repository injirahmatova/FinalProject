import { Provider } from "react-redux";

import React from "react";
import Router from "./Router/Router";
import Store from "./Redux/Store";

const App = () => {
  return (
   <Provider store={Store}>
      <Router />
   </Provider>
    
    
  );
};

export default App;

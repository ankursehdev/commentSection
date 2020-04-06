import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { commentDetails } from "./constants";

import Comment from "./component/";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Comment commentDetails={commentDetails} />
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Stateful from "./Stateful";
import AddMovie from "./movies/AddMovie";

function App() {
  return (
    <div className="vw-100 vh-100 d-flex justify-content-center align-items-center">
      {/* <Stateful language="pt-BR" /> */}
      <AddMovie />
    </div>
  );
}

export default App;

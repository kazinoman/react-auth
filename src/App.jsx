import React, { useState, Suspense } from "react";
import Button from "@mui/material/Button";

import "./App.css";
import Form from "./component/form";
import New from "./component/new";
import New2 from "./component/new2";
import PageRoute from "./page/PageRoute";
import Navigation from "./component/Navigation";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navigation />
      <Suspense fallback={<h1>Loading........</h1>}>
        <PageRoute />
      </Suspense>
    </div>
  );
}

export default App;

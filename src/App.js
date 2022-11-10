import logo from "./logo.svg";
import "./App.css";

import ChildComponent from "./child.js";
import TimerComponent from "./timer.js";

import MainPageComponent from "./main/index.js";
import { Switch, Route } from "react-router-dom";
import UploadPage from "./upload/index.js";
import ProductPage from "./product/index.js";

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

  return (
    <div>
      <Switch>
        <Route exact={true} path={"/"}>
          <MainPageComponent></MainPageComponent>
        </Route>
        <Route exact={true} path={"/product/:id"}>
          <ProductPage></ProductPage>
        </Route>
        <Route exact={true} path={"/upload"}>
          <UploadPage></UploadPage>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

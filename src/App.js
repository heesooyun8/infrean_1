import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import logo from "./logo.svg";
import "./App.css";

import ChildComponent from "./child.js";
import TimerComponent from "./timer.js";

import MainPageComponent from "./main/index.js";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import UploadPage from "./upload/index.js";
import ProductPage from "./product/index.js";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

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

  const history = useHistory();
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <Link to="/">
            <img src="images/icons/logo.png" />
          </Link>
          <Button
            size="large"
            onClick={function () {
              history.push("/upload");
            }}
            icon={<DownloadOutlined />}
          >
            상품 업로드
          </Button>
        </div>
      </div>
      <div id="body">
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
      <div id="footer"></div>
    </div>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Loading } from "./components/loading";
import React from "react";
import { useSelector } from "react-redux";
import Routes from "./configs/routes/routes";
import Layout from "./layouts";
import { selectorLoading } from "./redux/features/loading/slice";

function App() {
  const isLoading = useSelector(selectorLoading);

  return (
    <React.Fragment>
        <Layout>
          <Routes />
        </Layout>
      {/* {isLoading ? (
      ) : (
        <Loading type="fullscreen" />
      )} */}
    </React.Fragment>
  );
}

export default App;

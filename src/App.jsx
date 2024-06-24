import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import SiparisOlustur from "./components/SiparisOlustur";
import { Switch } from "react-router-dom";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Success from "./components/Success";
import { useState } from "react";

const initialOrder = {
  boyutSec: "",
  hamurKalinligi: "",
  ekMalzeme: [],
};

function App() {
  const [order, setOrder] = useState(initialOrder);

  return (
    <>
      <ToastContainer />
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/order">
          <SiparisOlustur setSiparis={setOrder} />
        </Route>
        <Route exact path="/success">
          <Success currentOrder={order} />
        </Route>
      </Switch>
    </>
  );
}

export default App;

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import SiparisOlustur from "./pages/SiparisOlustur";
import Success from "./pages/Success";
import Home from "./pages/Home";

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
        <Route path="/order">
          <SiparisOlustur setSiparis={setOrder} />
        </Route>
        <Route path="/success">
          <Success currentOrder={order} />
        </Route>
      </Switch>
    </>
  );
}

export default App;

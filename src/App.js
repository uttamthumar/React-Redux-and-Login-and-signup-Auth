import React from "react";
import Routers from "./routers";
import Home from "./components/Home";
import {Header} from "./components/Header"
import {Cart} from "./components/Cart"

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import  store  from "./redux/store";
function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Cart />
          <Home />
        </BrowserRouter>
      </Provider>
    </div>
  );
}
export default App;

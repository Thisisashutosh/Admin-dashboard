import { Home } from "./pages/homepage/Home";
import { List } from "./pages/list/List";
import { Login } from "./pages/login/Login";
import { New } from "./pages/new/New";
import { Single } from "./pages/single/Single";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {

  const {darkMode}= useContext(DarkModeContext)
  return (
    <div className={darkMode?"app dark": "app"}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route index element={<Login />} /> */}
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/users" element={<List />}>
            <Route exact path="/users/new" element={<New />} />
          </Route>
          <Route exact path="/single" element={<Single />} />
          <Route exact path="/products" element={<List />} />
          {/* <Route index element={<List />} />
              <Route exact path=":productId" element={<Single />} />
              <Route exact path="new" element={<New />} /> */}
          {/* </Route> */}
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

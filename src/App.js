import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import DashboardHome from "./components/DashboardHome";
import Donors from "./components/Donors";
import Home from "./components/Home";
import Receiver from "./components/Receiver";
import Requested from "./components/Requested";

import { store } from "./Redux/Store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard" element={<DashboardHome />} />
            <Route path="donors" element={<Donors />} />
            <Route path="receiver" element={<Receiver />} />
            <Route path="requested" element={<Requested />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

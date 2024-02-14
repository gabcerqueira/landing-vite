import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

//<-- Pages -->

import Login from "../pages/Login/Login";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import NeedHelp from "../pages/NeedHelp/NeedHelp";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/need-help" element={<NeedHelp />} />
      </Switch>
    </Router>
  );
}

export default Routes;

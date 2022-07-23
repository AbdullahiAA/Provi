import { Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { Redirect } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Cards from "./components/pages/Card/Cards";
import Request from "./components/pages/Request/Request";
import Settings from "./components/pages/Settings/Settings";
import ForgotPassword from "./pages/ForgotPassword/forgot-password";
import ChangePassword from "./pages/ChangePassword/change-password";
import ICDashboard from "./pages/ICDashboard/ICDashboard";
import ICSettings from "./pages/ICSettings/ICSettings";
import SASettings from "./pages/SASettings/SASettings";
import ICPrintedCards from "./pages/ICPrintedCards/ICPrintedCards";
import BMSettings from "./pages/BMSettings/BMSettings";
import BUSettings from "./pages/BUSettings/BUSettings";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login" />
        </Route>
        <Route path="/ic-dashboard" exact>
          <ICDashboard />
        </Route>
        <Route path="/ic-printed-cards" exact>
          <ICPrintedCards />
        </Route>
        <Route path="/ic-settings" exact>
          <ICSettings />
        </Route>
        <Route path="/sa-settings" exact>
          <SASettings />
        </Route>
        <Route path="/bm-settings" exact>
          <BMSettings />
        </Route>
        <Route path="/bu-settings" exact>
          <BUSettings />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/forgot-password">
          <ForgotPassword />
        </Route>
        <Route path="/change-password">
          <ChangePassword />
        </Route>
        <Route path="/signup" exact>
          <Signup />
        </Route>
        <Layout>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/cards">
            <Cards />
          </Route>
          <Route path="/request">
            <Request />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
        </Layout>
      </Switch>
    </>
  );
}

export default App;

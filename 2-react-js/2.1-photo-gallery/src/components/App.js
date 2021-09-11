import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import AuthProvider from "../contexts/AuthContext";
import PhotoProvider from "../contexts/PhotoContext";
import Signup from "./Signup";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ResetPassword from "./ResetPassword";
import UpdateProfile from "./UpdateProfile";
import NavTop from "./NavTop";
import Gallery from "./Gallery/Gallery";

function App() {
  return (
    <AuthProvider>
      <PhotoProvider>
        <Router>
          <NavTop />
          <Container
            className="d-flex align-items-start justify-content-center"
            style={{ minHeight: "100vh" }}
          >
            <div className="w-100" style={{ maxWidth: "1080px" }}>
              <Switch>
                <PrivateRoute exact path="/" component={Gallery} />
                <PrivateRoute
                  path="/update-profile"
                  component={UpdateProfile}
                />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/reset-password" component={ResetPassword} />
                <Route path="/gallery" component={Gallery} />
              </Switch>
            </div>
          </Container>
        </Router>
      </PhotoProvider>
    </AuthProvider>
  );
}

export default App;

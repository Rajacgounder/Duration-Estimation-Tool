import React, { component, Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import ProjectList from "./containers/projects/ProjectList";
import Dashboard from "./containers/dashboard/Dashboard";
import ProjectDetails from "./containers/projects/ProjectDetails";
import SignIn from "./containers/auth/SignIn";
import SignUp from "./containers/auth/SignUp";
import CreateProject from "./containers/projects/CreateProject";
import Consent from "./containers/consent/Consent";
//import Upload from "./upload/Upload";
import Request from "./containers/client/final"
import ClientDash from "./containers/dashboard/ClientDash"
import SupervisorDash from "./containers/dashboard/superVisor"
import Roles from "./containers/projects/Key"
import Duration from "./containers/superVisor/Timeduration"
import Client from "./containers/auth/ClientLogin"
import ImageUpload from "./containers/client/srsupload"
import Permission from "./containers/consent/Premission"
import Keylogin from "./containers/auth/Keylogin"
import Show from "./containers/superVisor/ShowSupervisor";
import Edit from './containers/superVisor/EditSupervisor';
import Create from './containers/superVisor/CreateSupervisor';
import SupervisorShow from './containers/superVisor/SupervisorShow'
import Keyshow from './containers/superVisor/ViewSupervisor'


// import CreateProject from "./containers/projects/CreateProject"

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/create" component={CreateProject} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/Consent" component={Consent}/>
      {/* <Route path="/Upload" component={Upload}/> */}
          <Route path="/final" component={Request}/>
          <Route path="/ClientDash" component={ClientDash}/>
          <Route path="/SupervisorDash" component={SupervisorDash}/>
          <Route path="/Key" component={Roles}/>
          <Route path="/Timeduration" component={Duration}/>
          <Route path="/ClientLogin" component={Client}/>
          <Route path="/srsupload" component={ImageUpload}/>
          <Route path="/Premission" component={Permission}/>
          <Route path="/Keylogin" component={Keylogin}/>
          <Route path="/CreateProject" component={CreateProject}/>
          <Route exact path='/SupervisorShow' component={SupervisorShow} />
          <Route path='/edit/:id' component={Edit} />
        <Route path='/CreateSupervisor' component={Create} />
        <Route path='/show/:id' component={Show} />
        <Route exact path='/ViewSupervisor' component={Keyshow} />
        </Switch>
      </Router>
    );
  }
}

export default App;

import React, { Component } from "react";
// import Notifications from "./Notifications";
// import ProjectList from "../projects/ProjectList";
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Link, NavLink } from "react-router-dom";
import { compose } from 'redux';
import { Redirect } from 'react-router-dom'
import './dash.css';
import Srs from '../images/srs.png'
import Consent from '../images/consent.jpg'
import Duration from '../images/duration.jpg'

class KeyroleDash extends Component {
  
  render() {
    const { projects, auth, notifications } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className="dashboard container my-3">
        <div className="row">
          {/* <div className="col-sm-12 col-md-6 project-list">
            <ProjectList projects={projects} />
          </div>
          <div className="col-sm-12 col-md-6">
            <Notifications notifications={notifications} />
          </div> */}
          <div>
          {/* <Link to="/Consent" className="navbar-brand ml-3 ml-md-0">
          Consent <i className="text-danger fas fa-box-open mx-1"></i>
        </Link>
        <Link to="/Upload" className="navbar-brand ml-3 ml-md-0">
          Upload <i className="text-danger fas fa-box-open mx-1"></i>
        </Link>
        <Link to="/final" className="navbar-brand ml-3 ml-md-0">
          REquest <i className="text-danger fas fa-box-open mx-1"></i>
        </Link> */}
        
        <div class="image-section">
      <div class="section-style">
        <img src={Srs} height="200" width="400" alt="" />
      <p>VIEW SRS</p>
      </div>
     
      <Link to="/Premission">
      <div class="section-style">
        <img src={Consent} height="200" width="400" alt="" />
      <p>VIEW CONSENT</p>
      </div></Link>
          
      <Link to="/Timeduration">
      <div class="section-style">
        <img src={Duration} height="200" width="400" alt="" />
        <p>SELECT TIME DURATION</p>
      </div></Link>
    </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.firestore.ordered.projects,
  auth: state.firebase.auth,
  notifications: state.firestore.ordered.notifications
})

export default compose(connect(mapStateToProps),firestoreConnect([{collection: 'projects', orderBy: ['createdAt', 'desc']},{collection: 'notifications', limit:5, orderBy:['time', 'desc']}]))(KeyroleDash);
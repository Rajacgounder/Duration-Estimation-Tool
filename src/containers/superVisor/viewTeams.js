import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../config/fbConfig';



class ViewTeam extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('teams');
    this.unsubscribe = null;
    this.state = {
      keys: []
    };
  }
  onCollectionUpdate = (querySnapshot) => {
    const keys = [];
    querySnapshot.forEach((doc) => {
      const { name, emailid, password, phoneno, address, designation, companyname, experience } = doc.data();
      keys.push({
        key: doc.id,
        doc, // DocumentSnapshot
        name,
        emailid,
        designation,
        experience,
      });
    });
    this.setState({
      keys
    });
  }
  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }
  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              <center>Teams</center>
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/" class="btn btn-primary">Send Consent</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email-ID</th>
                  <th>Designation</th>
                  <th>Experience</th>
                </tr>
              </thead>
              <tbody>
                {this.state.keys.map(board =>
                  <tr>
                    <td>{board.name}</td>
                    <td>{board.emailid}</td>
                    <td>{board.designation}</td>
                    <td>{board.experience}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default ViewTeam;
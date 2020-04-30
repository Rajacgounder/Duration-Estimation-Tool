import React, { Component } from "react";
import './finalstyle.css';
import firebase from '../../config/fbConfig';



class Request extends Component{

    constructor() {
        super();
        this.ref = firebase.firestore().collection("final");
        this.state = {
          accepted:"Your project is been accepted",
          notclear:"Need some explanation about the time duration and send a detailed information",
          rejected:"Your project is been rejected",
        };
      }
      onChange = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
      };
      onSubmit = (e) => {
        e.preventDefault();
    
        const {
         accepted,
         notclear,
         rejected,
        } = this.state;
    
        this.ref
          .add({
        accepted,
         notclear,
         rejected,
          })
          .then((docRef) => {
            this.setState({
                accepted:"Your project is been accepted",
                notclear:"Need some explanation about the time duration and send a detailed information",
                rejected:"Your project is been rejected",
            });
            this.props.history.push("/ClientDash");
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });
      };

    render(){
      const{
        accepted,
        notclear,
        rejected,
      }=this.state;
        return(
         
          <form onSubmit={this.onSubmit}>
            <center>
            <div class="container pt-4">
                <button type="submit" id="one" class="btn btn-danger" value={accepted} onChange={this.onChange}>Rejected</button>
                <button type="submit" id="two" value={notclear} class="btn btn-primary" onChange={this.onChange}>Not Clear</button>
                <button type="submit" id="three" value={rejected} class="btn btn-success" onChange={this.onChange}>Accepted</button>
            </div>
            </center>
            </form>
        )
    }
}
export default (Request);
import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Participant from '../src/components/Participant/Participant';

const SERVICE_ID = "gmail";
const TEMPLATE_ID = "template_4gSlCuE9_clone"

class App extends Component {

state = {
    numParticipants: 4,
    participants: [
      {id: 0, name: "", email: ""},
      {id: 1, name: "", email: ""},
      {id: 2, name: "", email: ""},
      {id: 3, name: "", email: ""}
    ],
    invalid: true
}

updateState = (participant) => {
  let result = this.state.participants;
  for(let i = 0; i < this.state.numParticipants; i++) {
    if(participant.id === result[i].id){
      result[i] = participant;
    }
  }
  this.setState({participants: result});
}

onAddClick (e) {
  this.setState({numParticipants: this.state.numParticipants + 1});
  let result = this.state.participants;
  result.push({id: this.state.numParticipants - 1, name: "", email: ""});
}

onRemoveClick(e) {
  if(this.state.numParticipants > 3) {
    let newParticipants = this.state.participants;
    newParticipants.pop();
    this.setState(
      {
        numParticipants: this.state.numParticipants - 1,
        participants: newParticipants
      }
      );
  } else {
    alert('Must have at least 3 participants.');
  }
}

onSubmit(event) {

  console.log("Clicked submit");
  event.preventDefault();

  //Validation commented out for testing
  /*
  if (!event.target.checkValidity()) {
    this.setState({ invalid: true });
    console.log("Invalid");
    return;
  } else {
    this.setState({
    invalid: false,
    });
  }*/

  //Email sending commented out for testing
  /*
  let template_params = {
    "to": "oscar@zealley.com",
    "to_name": "Oscar",
    "santa_recipient": "Barbara"
  }

  window.emailjs.send(SERVICE_ID, TEMPLATE_ID, template_params)
  .then(function(response) {
    console.log('SUCCESS!', response.status, response.text);
 }, function(error) {
    console.log('FAILED...', error);
 });

 */




  let resultString = JSON.stringify(this.state.participants);
  console.log(resultString);
  console.log(generateMailList(this.state.participants));
}

render() {
  let participantHolder = [];
  for(let i = 0; i < this.state.numParticipants; i++) {
    participantHolder.push(<Participant id={i} updateState={this.updateState}></Participant>)
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="jumbotron" id="content">
            <form className="well form-vertical" action=" " id="santa_form" onSubmit={(e) => this.onSubmit(e)} noValidate>
                <fieldset>
                  <legend><center><h2><b>Secret Santa</b></h2></center></legend><br />
                  {participantHolder}
                </fieldset>
                <div className="text-center">
                  <AddButton onClick={()=> this.onAddClick()}></AddButton>
                  <br/>
                  <br/>
                  <RemoveButton onClick={(e) => this.onRemoveClick(e)}></RemoveButton>
                  <br/>
                  <br/>
                </div>
                <div className="text-center">
                  <button className="btn btn-primary btn-sm">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>  
    </div>
  );
}
}

class AddButton extends React.Component {
  render() {
    return (
      <button type ="button" className="btn btn-primary btn-sm" id="addButton" onClick={this.props.onClick}>
        Add participant
      </button>
    );
  };
}

class RemoveButton extends React.Component {
  render() {
    return (
      <button type ="button" className="btn btn-danger btn-sm" id="removeButton" onClick={this.props.onClick}>
        Remove last participant
      </button>
    );
  };
}

function generateMailList(formData) {
  let result = [];

  let names
  //names = pickFromHat(formData) ******* Function to create ********
  names = ["Aidan", "Francesca", "Oscar"];

  let i = 0;

  for(let participant of formData) {
    let contact = {
      "to": participant.email,
      "to_name": participant.name,
      "santa_recipient": names[i++]
    };
    result.push(contact);
  }

  return result;
}
/*
function pickFromHat(formData) {
  let result = [];
  let names = [];
  for(let participant of formData) {
    result.push(contact);
  }
}
*/
export default App;

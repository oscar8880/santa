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
  let result = this.state.participants;
  result.push({id: this.state.numParticipants, name: "", email: ""});
  this.setState({numParticipants: this.state.numParticipants + 1,
  participants: result});
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

  if (!event.target.checkValidity()) {
    this.setState({ invalid: true });
    alert("All fields are required and emails must be in email format.");
    return;
  } else {
    this.setState({
    invalid: false,
    });
  }

  let mailList = generateMailList(this.state.participants);
  this.sendMails(mailList);

  let resultString = JSON.stringify(this.state.participants);
  console.log(resultString);
  console.log(generateMailList(this.state.participants));
}

sendMails(mailList) {
  let succeeded = true;
  for(let mailee of mailList) {
    window.emailjs.send(SERVICE_ID, TEMPLATE_ID, mailee)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
      succeeded = false;
      console.log('FAILED...', error);
    });
  }

  if(succeeded) {
    alert('Emails successfully sent!');
    this.setState({
      numParticipants: 4,
      participants: [
        {id: 0, name: "", email: ""},
        {id: 1, name: "", email: ""},
        {id: 2, name: "", email: ""},
        {id: 3, name: "", email: ""}
      ]
  })
  } else {
    alert('One or more emails failed to send. Verify that the addresses provided are correct.');
  }
}

render() {
  let participantHolder = [];
  for(let i = 0; i < this.state.numParticipants; i++) {
    participantHolder.push(<Participant id={i} updateState={this.updateState}></Participant>)
  }

  return (
    <div>
  
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="jumbotron" id="content">
              <form className="well form-vertical" action=" " id="santa_form" onSubmit={(e) => this.onSubmit(e)} noValidate>
                  <fieldset>
                    <legend><center><h2><b>Secret Santa</b></h2></center></legend><br />
                    {participantHolder}
                  </fieldset>
                  <div className="text-center">
                    <span>
                      <AddButton onClick={()=> this.onAddClick()}></AddButton>
                      <span>  </span>
                      <RemoveButton onClick={(e) => this.onRemoveClick(e)}></RemoveButton>
                    </span>
                    <br/>
                    <br/>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-secondary btn-sm">Submit</button>
                  </div>
                </form>
              </div>
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
  names = pickFromHat(formData);

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


function pickFromHat(formData) {

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
   }

  function shiftArray(array, times) {
  let output = array;
  let appender = array.slice(array.length - times);
  for(let i = 0; i < times; i++) {
    output.pop();
  }
  output = appender.concat(output);

  return output;
}

  let originalNames = [];
  let result = [];
  for(let participant of formData) {
    originalNames.push(participant.name);
  }
  let count = originalNames.length;
  let shiftTimes = getRandomInt(1, count);
  result = shiftArray(originalNames, shiftTimes);

  return result;
}

export default App;

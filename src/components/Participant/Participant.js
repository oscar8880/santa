import React, { Component } from "react";

class Participant extends Component {

    state = {
        id: this.props.id,
        name: "",
        email: "",
    };

    formChange(e) {
        this.setState({ [e.target.name]: e.target.value },
          () => {this.props.updateState(this.state);} );        
    }

    render() {
        return (
            <div className="form-group">
                    <h5 className="col">Participant {this.props.id + 1}</h5>
                    <div className="row">
                      <div className="col">
                        <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Name"
                        name = "name"
                        onChange={(e) => {this.formChange(e)}}
                        required/>
                      </div>
                      <div className="col">
                        <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Email address"
                        name = "email"
                        onChange={(e) => {this.formChange(e)}}
                        required/>
                      </div>
                    </div>
                    {/*}
                    <div className="row-md">
                      <div className="col-sm">
                        <label className="col-sm control-label" for="email">Name</label>
                        <input 
                        className="form-control" 
                        type = "text"
                        name= "name"
                        onChange={(e) => {this.formChange(e)}}
                        required
                        />
                      </div>
                      <br/>
                      <div className="col-sm">
                        <label className="col-sm control-label" for="email">Email</label>
                        <input 
                        className="form-control" 
                        type = "email"
                        name="email"
                        onChange={(e) => {this.formChange(e)}}
                        onFocusOut={(e) => {this.formChange(e)}}
                        required
                        />
                      </div>
        {*/}
                      <br/>
                  </div>
        );
    }
}

export default Participant;
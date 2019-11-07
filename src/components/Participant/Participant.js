import React, { Component } from "react";

class Participant extends Component {

    state = {
        id: this.props.id,
        name: "",
        email: "",
    };

    formChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        let updatedState = this.state;
        this.props.updateState(updatedState);
    }

    render() {
        return (
            <div className="form-group">
                    <h4 className="col">Participant {this.props.id + 1}</h4>
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
                        required
                        />
                      </div>
                      <br/>
                    </div>
                  </div>
        );
    }
}

export default Participant;
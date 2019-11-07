import React, { Component } from "react";

class ParticipantForm extends Component {

    render() {
        (
            <form className="well form-vertical" action=" " method="post" id="contact_form">
                <fieldset>
                  {/* Form Name */}
                  <legend><center><h2><b>Secret Santa</b></h2></center></legend><br />
                  {/* Text input*/}
                  <Participant name = "You" />
                </fieldset>
              </form>
        )
    }

}

export default ParticipantForm;
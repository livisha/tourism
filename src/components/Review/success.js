import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
export class Success extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    return (
      <MuiThemeProvider>
            <AppBar title="Success" />
            <div class="jumbotron">
              <h1 class="display-4">Thank You For Your Submission!</h1>
              <p class="lead">
                Your review will help us to improve our facilities. Hope you
                will visit us soon...!
              </p>
              <hr class="my-4"></hr>
              <p>You will get an email with further instructions.</p>
            </div>
      </MuiThemeProvider>
    );
  }
}

export default Success;

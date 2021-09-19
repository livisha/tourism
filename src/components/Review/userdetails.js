import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import "./rstyle.css";
import Button from 'react-bootstrap/Button';

export class UserDetail extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <AppBar title="Enter User Details" />
        <div className="review-block">
          <div class="form-group col-md-9">
            <input
              id="text"
              placeholder="Enter your First Name"
              label="First Name"
              onChange={handleChange("firstName")}
              defaultValue={values.firstName}
            ></input>
          </div>
          <br />
          <div class="form-group col-md-9">
            <input
              id="text"
              placeholder="Enter Your Last Name"
              label="Last Name"
              onChange={handleChange("lastName")}
              defaultValue={values.lastName}
            ></input>
          </div>
          <br />
          <div class="form-group col-md-9">
            <input
              id="text"
              placeholder="Enter Your Email"
              label="Email"
              onChange={handleChange("email")}
              defaultValue={values.email}
            ></input>
          </div>
          <br />
          <div class="form-group col-md-9">
            <input
              id="text"
              placeholder="Enter Your PNR"
              label="Email"
              onChange={handleChange("pnr")}
              defaultValue={values.pnr}
            ></input>
          </div>
          <br />
          <Button
          variant="outline-primary"
            onClick={this.continue}
          >
            Continue
          </Button>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default UserDetail;

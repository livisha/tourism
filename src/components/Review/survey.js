import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export class SurveyDetail extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
            <AppBar title="Enter Personal Details" />
            <div className="survey-block">
              <div class="form-group col-md-9">
                <input
                  id="text"
                  placeholder="Enter Your Flight On-Time"
                  label="Flight-On Time"
                  onChange={handleChange("flightontime")}
                  defaultValue={values.flightontime}
                ></input>
              </div>
              <br />
              <div class="form-group col-md-9">
                <input
                  id="text"
                  placeholder="Enter Your Food Quality"
                  label="Food Quality"
                  onChange={handleChange("fquality")}
                  defaultValue={values.fquality}
                ></input>
              </div>
              <br />
              <div class="form-group col-md-9">
                <input
                  id="text"
                  placeholder="Enter Your Service offered"
                  label="Service Offered"
                  onChange={handleChange("serviceoffered")}
                  defaultValue={values.serviceoffered}
                ></input>
              </div>
              <br />
              <div class="form-group col-md-9">
                <input
                  id="text"
                  placeholder="Enter Your Security"
                  label="Security"
                  onChange={handleChange("security")}
                  defaultValue={values.security}
                ></input>
              </div>
              <br />
              <div class="form-group col-md-9">
                <input
                  id="text"
                  placeholder="Enter Your Food Check-in process"
                  label="Check-In Process"
                  onChange={handleChange("checkinprocess")}
                  defaultValue={values.checkinprocess}
                ></input>
              </div>
              <br />
              <div class="form-group col-md-9">
                <input
                  id="text"
                  placeholder="Enter Your Check-out"
                  label="Check-Out Process"
                  onChange={handleChange("checkoutprocess")}
                  defaultValue={values.checkoutprocess}
                ></input>
              </div>
              <br />
              <Button
                class="btn btn-primary"
                color="primary"
                variant="contained"
                onClick={this.continue}
              >
                Continue
              </Button>
            </div>
      </MuiThemeProvider>
    );
  }
}

export default SurveyDetail;

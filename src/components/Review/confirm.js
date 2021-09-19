import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { List, ListItem, ListItemText } from "@material-ui/core/";
import Button from "@material-ui/core/Button";

export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const {
      values: { firstName, lastName, email, pnr, flightontime, fquality, serviceoffered, security, checkinprocess, checkoutprocess }
    } = this.props;
    return (
      
   <MuiThemeProvider>
             <AppBar title="Confirm User Data" />
             <div className="confirm-block">
               <div className="details_block">
               <List>
                 <ListItem>
                   <ListItemText primary="First Name" secondary={firstName} />
                 </ListItem>
                 <ListItem>
                  <ListItemText primary="Last Name" secondary={lastName} />
                 </ListItem>
                 <ListItem>
                   <ListItemText primary="Email" secondary={email} />
                 </ListItem>
             <ListItem>
                   <ListItemText primary="PNR" secondary={pnr} />
               </ListItem>
                 <ListItem>
                   <ListItemText primary="Flight-On Time" secondary={flightontime} />
                 </ListItem>
                 <ListItem>
               <ListItemText primary="Food Quality" secondary={fquality} />
                 </ListItem>
                 <ListItem>
                   <ListItemText primary="Service Offered" secondary={serviceoffered} />
               </ListItem>
                 <ListItem>
                  <ListItemText primary="Security" secondary={security} />
                 </ListItem>
                 <ListItem>
                  <ListItemText primary="Check-In Process" secondary={checkinprocess} />
                 </ListItem>
               <ListItem>
                 <ListItemText primary="Check-Out Process" secondary={checkoutprocess} />
               </ListItem>
               </List>
               </div>
               <br />
              <Button
                 color="secondary"
                 variant="contained"
                 onClick={this.back}
                 class="btn btn-primary"
               >
                 Back
               </Button>
               <br />
               <Button
                 color="primary"
                 variant="contained"
                 onClick={this.continue}
                 class="btn btn-dark"
               >
                 Confirm & Continue
               </Button>
             </div>
       </MuiThemeProvider>

    );
  }
}

export default Confirm;

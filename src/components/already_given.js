import React from "react";
import Dialog from "@material-ui/core/Dialog";
import "../App.css";
const Already_Given = () => {
    return(
          <Dialog open fullWidth maxWidth="sm" classname="feedback-box">
            <div className="heading">
              <h1>Already submitted!</h1>
              <p>
                You have already filled the feedback form. Hope to see you again...!
              </p>
              <hr class="my-4"></hr>
            </div>
          </Dialog> 
    );
};

export default Already_Given;
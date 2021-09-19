import React from "react";
import { Link } from "react-router-dom";
import { MdFeedback } from "react-icons/md";

import "./rlstyle.css";

function ReviewList() {
  const flight = [
    {
      name: "FL-0012",
      departuretime: "9:30AM",
      arrivaltime: "10:30AM"
    },
    {
      name: "FL-0012",
      departuretime: "9:30AM",
      arrivaltime: "10:30AM"
    },
    {
      name: "FL-0012",
      departuretime: "9:30AM",
      arrivaltime: "10:30AM"
    },
    {
      name: "FL-0012",
      departuretime: "9:30AM",
      arrivaltime: "10:30AM"
    },
    {
      name: "FL-0012",
      departuretime: "9:30AM",
      arrivaltime: "10:30AM"
    },
    {
      name: "FL-0012",
      departuretime: "9:30AM",
      arrivaltime: "10:30AM"
    },
    {
      name: "FL-0012",
      departuretime: "9:30AM",
      arrivaltime: "10:30AM"
    },
    {
      name: "FL-0012",
      departuretime: "9:30AM",
      arrivaltime: "10:30AM"
    },
    {
      name: "FL-0012",
      departuretime: "9:30AM",
      arrivaltime: "10:30AM"
    },
    {
      name: "FL-0012",
      departuretime: "9:30AM",
      arrivaltime: "10:30AM"
    },
    {
      name: "FL-0012",
      departuretime: "9:30AM",
      arrivaltime: "10:30AM"
    },
    {
      name: "FL-0012",
      departuretime: "9:30AM",
      arrivaltime: "10:30AM"
    }
  ];
  return (
    
    <div className="back">
    <div className="filgthslist">
    <h1 id="head">Flights:</h1>
      <div className="listitems">
        <ol>
          {flight.map((flight) => (
            <p>
              <li>
                {flight.name}
                <br />
                ({flight.departuretime} - {flight.arrivaltime}){" "}
                <Link className="Link-feedback" to="/Review">
                <MdFeedback />
                </Link>
              </li>
            </p>
          ))}
        </ol>
      </div>
      </div>
    </div>
  );
}

export default ReviewList;

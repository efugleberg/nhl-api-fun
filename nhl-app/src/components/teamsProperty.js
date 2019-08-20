import React from "react";
// import {Link} from '';

const TeamProperty = props => {
  return (
    <div className="teams">
      <h3 className="name"> City: {props.city.locationName}</h3>
      <p>Team Name: {props.city.teamName}</p>
      <p>Venue: {props.city.venue.name}</p>
      {/* <p>Link {props.city.officialSiteUrl}</p> */}
    </div>
  );
};

export default TeamProperty;

import React from "react";
// import {Link} from '';

const TeamProperty = props => {
  return (
    <div className="teams">
      <h3 className="name"> City: {props.item.locationName}</h3>
      <p>Team Name: {props.item.teamName}</p>
      <p>Venue: {props.item.venue.name}</p>
      {/* <p>Link {props.item.officialSiteUrl}</p> */}
    </div>
  );
};

export default TeamProperty;

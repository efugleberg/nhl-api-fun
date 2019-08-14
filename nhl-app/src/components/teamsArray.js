import React from "react";
import TeamProperty from "./teamsProperty";

const TeamsArray = props => {
    console.log('props', props)
  return (
    <div className="teamsArray">
      {props.teams.map(item => (
        <TeamProperty key={item.id} item={item} />
      ))}
    </div>
  );
};

export default TeamsArray;
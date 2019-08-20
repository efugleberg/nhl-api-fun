import React from "react";
import TeamProperty from "./teamsProperty";

const TeamsArray = props => {
    console.log('props', props)
  return (
    <div className="teamsArray">
      {props.teams.map(team => (
        <TeamProperty key={team.id} city={team} />
      ))}
    </div>
  );
};

export default TeamsArray;
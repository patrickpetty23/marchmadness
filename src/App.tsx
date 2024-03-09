import React from 'react';
import './App.css';
import data from './.CollegeBasketballTeams.json';

const teams = data.teams;

type TeamProps = (typeof data.teams)[0];

class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;

    return (
      <div>
        <h2>{oneTeam.school}</h2>
        <h3>Mascot: {oneTeam.name}</h3>
        <h3>
          Location: {oneTeam.city},{oneTeam.state}
        </h3>
      </div>
    );
  }
}

function Header() {
  return (
    <div>
      <h1>March Madness 2024</h1>
    </div>
  );
}

// Function to render team names
function TeamNames() {
  return (
    <div>
      {teams.map((oneTeam) => (
        <Team {...oneTeam} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      {/* Call the renderTeamNames function */}
      <TeamNames />
    </div>
  );
}

export default App;

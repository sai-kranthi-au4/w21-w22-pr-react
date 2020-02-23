import React from "react";
import UserInput from "./components/UserInput/UserInput";
import UserData from "./components/UserData/UserData";
import Cities from "./components/Cities/Cities";
import "./App.css";

class App extends React.Component {
  state = {
    userDetails: [],
    cities: []
  };
  handleInputSubmit = data => {
    this.setState({ userDetails: [...this.state.userDetails, data] });
    if (this.state.cities.indexOf(data.city) === -1) {
      this.setState({ cities: [...this.state.cities, data.city] });
    }
  };
  render() {
    const { userDetails, cities } = this.state;
    return (
      <div className="container mt-2 pb-2" style={{ border: "1px solid #000" }}>
        <UserInput handleInputSubmit={this.handleInputSubmit} />
        <div className="container mt-4">
          <div className="row justify-content-between">
            <div className="col-5 p-4 userData">
              <UserData userDetails={userDetails} />
            </div>
            <div className="col-5 p-4 cities">
              <Cities cities={cities} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

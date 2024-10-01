import { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  render() {
    axios
      .get("http://localhost:8080/test/api")
      .then((response) => console.log(response.data))
      .catch((error) => console.error("Error:", error));
    return <div className="App"></div>;
  }
}

export default App;

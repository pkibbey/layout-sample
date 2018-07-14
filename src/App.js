import React, { Component } from 'react';
import Strain from "./Strain"
import "./App.css"

class App extends Component {
  constructor() {
    super();
    this.state = {
        data: [],
        columns: 0
    };
  }

  componentDidMount() {
    this.fetchData();
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  fetchData = () => {
    fetch('https://www-integration.leafly.io/api2/strains/lists')
      .then(results => results.json())
      .then(data => {
          this.setState({data});
      })
  }

  updateDimensions = () => {
    if (window.innerWidth < (180 * 1)) {
      this.setState({ columns: 0 });
    } else if (window.innerWidth < (180 * 2 + 10)) {
      this.setState({ columns: 1 });
    } else if (window.innerWidth < (180 * 3 + 20)) {
      this.setState({ columns: 2 });
    } else if (window.innerWidth < (180 * 4 + 30)) {
      this.setState({ columns: 3 });
    } else if (window.innerWidth < (180 * 5 + 40)) {
      this.setState({ columns: 4 });
    } else if (window.innerWidth < (180 * 6 + 50)) {
      this.setState({ columns: 5 });
    } else {
      this.setState({ columns: 6 });
    }
  }

  render() {
    const { data, columns } = this.state;

    return (
      <React.Fragment className="App">
        {data.map((item, index) => <Strain item={item} key={index} noPaddding={columns - 1 === index % columns} />)}
      </React.Fragment>
    );
  }
}

export default App;

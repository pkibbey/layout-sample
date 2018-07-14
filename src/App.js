import React, { Component } from 'react';
import Strain from "./Strain"

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
    const w = window.innerWidth;

    if (w < 180) { this.setColumns(0); }
    else if (w < 370) { this.setColumns(1); }
    else if (w < 560) { this.setColumns(2); }
    else if (w < 750) { this.setColumns(3); }
    else if (w < 940) { this.setColumns(4); }
    else if (w < 1130) { this.setColumns(5); }
    else { this.setColumns(6); }
  }

  setColumns(columns) {
    this.setState({ columns });
  }

  render() {
    const { data, columns } = this.state;

    return (
      <React.Fragment>
        {data.map((item, index) => <Strain item={item} key={index} noPaddding={columns - 1 === index % columns} />)}
      </React.Fragment>
    );
  }
}

export default App;

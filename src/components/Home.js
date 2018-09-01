import React, { Component } from 'react';

import { getArrivals, formatDate, getStartHour } from '../utils/api';
import SelectFlightType from './SelectFlightType';
import FlightGrid from './FlightGrid';
import Loading from './Loading';

import mockData from '../utils/mockData';

class Home extends Component {
  state = {
    flightType: null,
    flights: null,
    airport: 'SVO',
    date: null,
    startHour: null,
  }

  componentDidMount() {
    this.updateFlightType('arr')
  }

  updateFlightType = async (flightType) => {
    const { airport } = this.state;
    const date = formatDate();
    const startHour = getStartHour();
    this.setState(() => ({
      flightType,
      flights: null,
    }));

    // const flights = await getArrivals(airport, date, startHour);
    this.setState(() => ({ flights: mockData }));
  }


  render() {
    const { flightType, flights } = this.state;
    return (
      <div>
        <SelectFlightType
          selectedFlightType={flightType}
          onSelect={this.updateFlightType}
        />
        {!flights ? <Loading /> : <FlightGrid flights={flights} type={flightType} />}
      </div>
    );
  }
}

export default Home;

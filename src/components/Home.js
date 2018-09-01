import React, { Component } from 'react';

import { getArrivals } from '../utils/api';
import { getCurrentHour, formatTodaysDate } from '../utils/helpers'
import { flightType } from '../constants';


import SelectFlightType from './SelectFlightType';
import FlightGrid from './FlightGrid';
import Loading from './Loading';

import mockArrivals from '../utils/mockArrivals';
import mockDepartures from '../utils/mockDepartures';

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
    const date = formatTodaysDate();
    const startHour = getCurrentHour();
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

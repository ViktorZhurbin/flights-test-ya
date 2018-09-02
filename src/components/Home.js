import React, { Component } from 'react';

// import { getArrivals } from '../utils/api';
import { flightType } from '../constants';

import SelectFlightType from './SelectFlightType';
import FlightGrid from './FlightGrid';
import Loading from './Loading';

import mockArrivals from '../utils/mockArrivals';
import mockDepartures from '../utils/mockDepartures';

class Home extends Component {
  state = {
    queryType: flightType.DEPARTURE,
    flights: null,
    searchQuery: null,
    airport: 'SVO',
    date: null,
    startHour: null,
  }

  componentDidMount() {
    this.updateFlights(this.state.queryType)
  }

  updateFlights = (type) => {
    // const date = formatTodaysDate();
    // const startHour = getCurrentHour();
    const { ARRIVAL } = flightType;
    const flights = type === ARRIVAL ? mockArrivals : mockDepartures;
    // const flights = await getArrivals(airport, date, startHour);
    this.setState({
      queryType: type,
      flights,
    });
  }

  filterByFlightNumber = () => {
    this.setState({
      searchQuery: this.search.value,
    }, () => {
      let filterResult;
      const { searchQuery, queryType } = this.state;
      const { ARRIVAL } = flightType;
      const flights = queryType === ARRIVAL ? mockArrivals : mockDepartures;
      if (searchQuery) {
        filterResult = flights.filter(flight =>
          String(flight['flightNumber']).includes(searchQuery)
        );
      } else {
        filterResult = flights;
      }
      this.setState({
        flights: filterResult,
      });
    })
  }

  render() {
    const { queryType, flights } = this.state;
    // console.log("STATE: " + queryType);
    // console.log("TYPE: " + flights.request.type);
    return (
      <div className="home-page" >
        <SelectFlightType
          selectedFlightType={queryType}
          onSelect={this.updateFlights}
        />
        <input
          type="search"
          className="search"
          placeholder="Поиск по номеру рейса"
          onChange={this.filterByFlightNumber}
          ref={input => this.search = input}
        />
        {!flights ? <Loading /> : <FlightGrid flights={flights} type={queryType} />}
      </div>
    );
  }
}

export default Home;

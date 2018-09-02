import React, { Component } from 'react';

import { flightType } from '../constants';
import { fetchFlightsByAirport } from '../utils/api';

import {
  SelectFlightType,
  FlightGrid,
  Loading,
  SearchBar,
} from '../components';
// import FlightGrid from '../components/FlightGrid';
// import Loading from '../components/Loading';

class Home extends Component {
  state = {
    queryType: flightType.ARRIVAL,
    flights: null,
    searchQuery: '',
    airport: 'SVO',
    date: null,
    startHour: null,
  }

  componentDidMount() {
    this.updateFlights(this.state.queryType)
  }

  updateFlights = async (type) => {
    const flights = await fetchFlightsByAirport(type);
    this.setState({
      queryType: type,
      flights,
    });
  }

  onFilterByFlight = (e) => {
    const searchQuery = e.target.value;
    this.setState({
      searchQuery,
    }, async () => {
      const { queryType } = this.state;
      const flights = await fetchFlightsByAirport(queryType);
      const filterResult = searchQuery
        ? flights.filter(flight =>
          String(flight['flightNumber']).includes(searchQuery)
        )
        : flights;
      this.setState({
        flights: filterResult,
      });
    })
  }

  render() {
    const { queryType, flights, searchQuery } = this.state;
    return (
      <div className="home-page" >
        <SelectFlightType
          selectedFlightType={queryType}
          onSelect={this.updateFlights}
        />
        <SearchBar
          value={searchQuery}
          onSelect={e => this.onFilterByFlight(e)}
        />
        {!flights ? <Loading /> : <FlightGrid flights={flights} type={queryType} />}
      </div>
    );
  }
}

export default Home;

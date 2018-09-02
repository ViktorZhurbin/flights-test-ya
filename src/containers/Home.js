import React, { Component } from 'react';

import { flightType } from '../constants';
import { fetchFlightsByAirport } from '../utils/api';

import SelectFlightType from '../components/SelectFlightType';
import FlightGrid from '../components/FlightGrid';
import Loading from '../components/Loading';

class Home extends Component {
  state = {
    queryType: flightType.ARRIVAL,
    flights: null,
    searchQuery: null,
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

  filterByFlightNumber = () => {
    this.setState({
      searchQuery: this.search.value,
    }, async () => {
      const { searchQuery, queryType } = this.state;
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
    const { queryType, flights } = this.state;
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

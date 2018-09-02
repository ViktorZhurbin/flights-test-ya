import React, { Component } from 'react';

import { flightType } from '../constants';
import { fetchFlightsByAirport } from '../utils/api';
import {
  SelectFlightType,
  FlightGrid,
  Loading,
  SearchBar,
} from '../components';

class Home extends Component {
  state = {
    queryType: flightType.ARRIVAL,
    flights: null,
    searchQuery: '',
    loading: true,
    airport: 'SVO',
    date: null,
    startHour: null,
  }

  componentDidMount() {
    const { queryType } = this.state;
    this.updateFlights(queryType);
  }

  updateFlights = async (type) => {
    const flights = await fetchFlightsByAirport(type);
    this.setState({
      queryType: type,
      flights,
      loading: false,
    });
  }

  onFilterByFlight = (e) => {
    const searchQuery = e.target.value;
    this.setState({
      searchQuery,
      loading: true,
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
        loading: false,
      });
    });
  }

  render() {
    const { queryType, flights, searchQuery, loading } = this.state;
    return (
      <div className="home-page">
        <SelectFlightType
          selectedFlightType={queryType}
          onSelect={this.updateFlights}
        />
        <SearchBar
          value={searchQuery}
          onSelect={e => this.onFilterByFlight(e)}
        />
        {loading
          ? <Loading />
          : (
            <FlightGrid
              flights={flights}
              type={queryType}
            />
          )
        }
      </div>
    );
  }
}

export default Home;

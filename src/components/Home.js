import React, { Component } from 'react';

import { flightType } from '../constants';
import { fetchData } from '../utils/api';
import mockArrivals from '../utils/mockArrivals';
import mockDepartures from '../utils/mockDepartures';

import SelectFlightType from './SelectFlightType';
import FlightGrid from './FlightGrid';
import Loading from './Loading';

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

  updateFlights = async (type) => {
    console.log('Updating');
    // const date = formatTodaysDate();
    // const startHour = getCurrentHour();
    // const { ARRIVAL } = flightType;
    // const flights = type === ARRIVAL ? mockArrivals : mockDepartures;
    // const { queryType } = this.state;
    const flights = await fetchData(type);
    this.setState({
      queryType: type,
      flights,
    });
  }

  filterByFlightNumber = async () => {
    console.log('Filtering');
    this.setState({
      searchQuery: this.search.value,
    }, () => {
      const { searchQuery, queryType } = this.state;
      const { ARRIVAL } = flightType;
      // const flights = queryType === ARRIVAL ? mockArrivals : mockDepartures;
      const flights = fetchData(queryType);
      let filterResult;
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
    console.log("STATE: " + queryType);
    console.log(flights);
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

export default {
  "request": {
    "type": "dep",
    "airport": {
      "requestedCode": "SVO",
      "airport": {
        "fs": "SVO",
        "iata": "SVO",
        "icao": "UUEE",
        "name": "Sheremetyevo International Airport",
        "city": "Moscow",
        "cityCode": "MOW",
        "countryCode": "RU",
        "countryName": "Russian Federation",
        "regionName": "Europe",
        "timeZoneRegionName": "Europe/Moscow",
        "localTime": "2018-09-01T21:01:35.255",
        "utcOffsetHours": 3,
        "latitude": 55.966324,
        "longitude": 37.416574,
        "elevationFeet": 630,
        "classification": 1,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/SVO?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/SVO?codeType=fs"
      }
    },
    "date": {
      "year": "2018",
      "month": "9",
      "day": "1",
      "interpreted": "2018-09-01"
    },
    "hourOfDay": {
      "requested": "20",
      "interpreted": 20
    },
    "numHours": {
      "requested": "1",
      "interpreted": 1
    },
    "utc": {
      "requested": "false",
      "interpreted": false
    },
    "codeType": {},
    "maxFlights": {
      "requested": "20",
      "interpreted": 20
    },
    "extendedOptions": {
      "requested": "useInlinedReferences",
      "interpreted": "useInlinedReferences"
    },
    "url": "https://api.flightstats.com/flex/flightstatus/rest/v2/json/airport/status/SVO/dep/2018/9/1/20"
  },
  "appendix": {},
  "flightStatuses": [
    {
      "flightId": 971823535,
      "carrier": {
        "fs": "SU",
        "iata": "SU",
        "icao": "AFL",
        "name": "Aeroflot",
        "phoneNumber": "+7 495 223-55-55",
        "active": true
      },
      "flightNumber": "1144",
      "departureAirport": {
        "fs": "SVO",
        "iata": "SVO",
        "icao": "UUEE",
        "name": "Sheremetyevo International Airport",
        "city": "Moscow",
        "cityCode": "MOW",
        "countryCode": "RU",
        "countryName": "Russian Federation",
        "regionName": "Europe",
        "timeZoneRegionName": "Europe/Moscow",
        "localTime": "2018-09-01T21:01:35.308",
        "utcOffsetHours": 3,
        "latitude": 55.966324,
        "longitude": 37.416574,
        "elevationFeet": 630,
        "classification": 1,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/SVO?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/SVO?codeType=fs"
      },
      "arrivalAirport": {
        "fs": "AAQ",
        "iata": "AAQ",
        "icao": "URKA",
        "name": "Anapa Airport",
        "city": "Anapa",
        "cityCode": "AAQ",
        "countryCode": "RU",
        "countryName": "Russian Federation",
        "regionName": "Europe",
        "timeZoneRegionName": "Europe/Moscow",
        "localTime": "2018-09-01T21:01:35.308",
        "utcOffsetHours": 3,
        "latitude": 45.001659,
        "longitude": 37.346599,
        "elevationFeet": 141,
        "classification": 4,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/AAQ?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/AAQ?codeType=fs"
      },
      "departureDate": {
        "dateLocal": "2018-09-01T20:50:00.000",
        "dateUtc": "2018-09-01T17:50:00.000Z"
      },
      "arrivalDate": {
        "dateLocal": "2018-09-01T23:10:00.000",
        "dateUtc": "2018-09-01T20:10:00.000Z"
      },
      "status": "A",
      "schedule": {
        "flightType": "J",
        "serviceClasses": "RFJY",
        "restrictions": ""
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateLocal": "2018-09-01T20:50:00.000",
          "dateUtc": "2018-09-01T17:50:00.000Z"
        },
        "publishedArrival": {
          "dateLocal": "2018-09-01T23:10:00.000",
          "dateUtc": "2018-09-01T20:10:00.000Z"
        },
        "scheduledGateDeparture": {
          "dateLocal": "2018-09-01T20:50:00.000",
          "dateUtc": "2018-09-01T17:50:00.000Z"
        },
        "estimatedGateDeparture": {
          "dateLocal": "2018-09-01T20:44:00.000",
          "dateUtc": "2018-09-01T17:44:00.000Z"
        },
        "actualGateDeparture": {
          "dateLocal": "2018-09-01T20:44:00.000",
          "dateUtc": "2018-09-01T17:44:00.000Z"
        },
        "scheduledGateArrival": {
          "dateLocal": "2018-09-01T23:10:00.000",
          "dateUtc": "2018-09-01T20:10:00.000Z"
        },
        "estimatedGateArrival": {
          "dateLocal": "2018-09-01T23:05:00.000",
          "dateUtc": "2018-09-01T20:05:00.000Z"
        }
      },
      "flightDurations": {
        "scheduledBlockMinutes": 140
      },
      "airportResources": {
        "departureTerminal": "D",
        "departureGate": "11"
      },
      "flightEquipment": {
        "scheduledEquipment": {
          "iata": "32A",
          "name": "Airbus A320 (sharklets)",
          "turboProp": false,
          "jet": true,
          "widebody": false,
          "regional": false
        },
        "actualEquipment": {
          "iata": "320",
          "name": "Airbus A320",
          "turboProp": false,
          "jet": true,
          "widebody": false,
          "regional": false
        },
        "tailNumber": "VP-BKP"
      }
    },
    {
      "flightId": 971823608,
      "carrier": {
        "fs": "SU",
        "iata": "SU",
        "icao": "AFL",
        "name": "Aeroflot",
        "phoneNumber": "+7 495 223-55-55",
        "active": true
      },
      "flightNumber": "1140",
      "departureAirport": {
        "fs": "SVO",
        "iata": "SVO",
        "icao": "UUEE",
        "name": "Sheremetyevo International Airport",
        "city": "Moscow",
        "cityCode": "MOW",
        "countryCode": "RU",
        "countryName": "Russian Federation",
        "regionName": "Europe",
        "timeZoneRegionName": "Europe/Moscow",
        "localTime": "2018-09-01T21:01:35.309",
        "utcOffsetHours": 3,
        "latitude": 55.966324,
        "longitude": 37.416574,
        "elevationFeet": 630,
        "classification": 1,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/SVO?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/SVO?codeType=fs"
      },
      "arrivalAirport": {
        "fs": "AER",
        "iata": "AER",
        "icao": "URSS",
        "name": "Sochi International Airport",
        "city": "Adler/Sochi",
        "cityCode": "AER",
        "countryCode": "RU",
        "countryName": "Russian Federation",
        "regionName": "Europe",
        "timeZoneRegionName": "Europe/Moscow",
        "localTime": "2018-09-01T21:01:35.309",
        "utcOffsetHours": 3,
        "latitude": 43.44884,
        "longitude": 39.941106,
        "elevationFeet": 89,
        "classification": 3,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/AER?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/AER?codeType=fs"
      },
      "departureDate": {
        "dateLocal": "2018-09-01T20:45:00.000",
        "dateUtc": "2018-09-01T17:45:00.000Z"
      },
      "arrivalDate": {
        "dateLocal": "2018-09-01T23:15:00.000",
        "dateUtc": "2018-09-01T20:15:00.000Z"
      },
      "status": "A",
      "schedule": {
        "flightType": "J",
        "serviceClasses": "RFJY",
        "restrictions": ""
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateLocal": "2018-09-01T20:45:00.000",
          "dateUtc": "2018-09-01T17:45:00.000Z"
        },
        "publishedArrival": {
          "dateLocal": "2018-09-01T23:15:00.000",
          "dateUtc": "2018-09-01T20:15:00.000Z"
        },
        "scheduledGateDeparture": {
          "dateLocal": "2018-09-01T20:45:00.000",
          "dateUtc": "2018-09-01T17:45:00.000Z"
        },
        "estimatedGateDeparture": {
          "dateLocal": "2018-09-01T20:39:00.000",
          "dateUtc": "2018-09-01T17:39:00.000Z"
        },
        "actualGateDeparture": {
          "dateLocal": "2018-09-01T20:39:00.000",
          "dateUtc": "2018-09-01T17:39:00.000Z"
        },
        "estimatedRunwayDeparture": {
          "dateLocal": "2018-09-01T20:56:00.000",
          "dateUtc": "2018-09-01T17:56:00.000Z"
        },
        "actualRunwayDeparture": {
          "dateLocal": "2018-09-01T20:56:00.000",
          "dateUtc": "2018-09-01T17:56:00.000Z"
        },
        "scheduledGateArrival": {
          "dateLocal": "2018-09-01T23:15:00.000",
          "dateUtc": "2018-09-01T20:15:00.000Z"
        },
        "estimatedGateArrival": {
          "dateLocal": "2018-09-01T23:13:00.000",
          "dateUtc": "2018-09-01T20:13:00.000Z"
        }
      },
      "flightDurations": {
        "scheduledBlockMinutes": 150,
        "taxiOutMinutes": 17
      },
      "airportResources": {
        "departureTerminal": "D",
        "departureGate": "12"
      },
      "flightEquipment": {
        "scheduledEquipment": {
          "iata": "32B",
          "name": "Airbus A321 (sharklets)",
          "turboProp": false,
          "jet": true,
          "widebody": false,
          "regional": false
        },
        "actualEquipment": {
          "iata": "321",
          "name": "Airbus A321",
          "turboProp": false,
          "jet": true,
          "widebody": false,
          "regional": false
        },
        "tailNumber": "VP-BAV"
      }
    },
    {
      "flightId": 971824092,
      "carrier": {
        "fs": "SU",
        "iata": "SU",
        "icao": "AFL",
        "name": "Aeroflot",
        "phoneNumber": "+7 495 223-55-55",
        "active": true
      },
      "flightNumber": "2144",
      "departureAirport": {
        "fs": "SVO",
        "iata": "SVO",
        "icao": "UUEE",
        "name": "Sheremetyevo International Airport",
        "city": "Moscow",
        "cityCode": "MOW",
        "countryCode": "RU",
        "countryName": "Russian Federation",
        "regionName": "Europe",
        "timeZoneRegionName": "Europe/Moscow",
        "localTime": "2018-09-01T21:01:35.309",
        "utcOffsetHours": 3,
        "latitude": 55.966324,
        "longitude": 37.416574,
        "elevationFeet": 630,
        "classification": 1,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/SVO?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/SVO?codeType=fs"
      },
      "arrivalAirport": {
        "fs": "AYT",
        "iata": "AYT",
        "icao": "LTAI",
        "name": "Antalya Airport",
        "city": "Antalya",
        "cityCode": "AYT",
        "countryCode": "TR",
        "countryName": "Turkey",
        "regionName": "Europe",
        "timeZoneRegionName": "Europe/Istanbul",
        "localTime": "2018-09-01T21:01:35.309",
        "utcOffsetHours": 3,
        "latitude": 36.899282,
        "longitude": 30.801349,
        "elevationFeet": 177,
        "classification": 2,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/AYT?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/AYT?codeType=fs"
      },
      "departureDate": {
        "dateLocal": "2018-09-01T20:20:00.000",
        "dateUtc": "2018-09-01T17:20:00.000Z"
      },
      "arrivalDate": {
        "dateLocal": "2018-09-02T00:05:00.000",
        "dateUtc": "2018-09-01T21:05:00.000Z"
      },
      "status": "A",
      "schedule": {
        "flightType": "J",
        "serviceClasses": "RJY",
        "restrictions": ""
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateLocal": "2018-09-01T20:20:00.000",
          "dateUtc": "2018-09-01T17:20:00.000Z"
        },
        "publishedArrival": {
          "dateLocal": "2018-09-02T00:05:00.000",
          "dateUtc": "2018-09-01T21:05:00.000Z"
        },
        "scheduledGateDeparture": {
          "dateLocal": "2018-09-01T20:20:00.000",
          "dateUtc": "2018-09-01T17:20:00.000Z"
        },
        "estimatedGateDeparture": {
          "dateLocal": "2018-09-01T20:13:00.000",
          "dateUtc": "2018-09-01T17:13:00.000Z"
        },
        "actualGateDeparture": {
          "dateLocal": "2018-09-01T20:13:00.000",
          "dateUtc": "2018-09-01T17:13:00.000Z"
        },
        "estimatedRunwayDeparture": {
          "dateLocal": "2018-09-01T20:42:00.000",
          "dateUtc": "2018-09-01T17:42:00.000Z"
        },
        "actualRunwayDeparture": {
          "dateLocal": "2018-09-01T20:42:00.000",
          "dateUtc": "2018-09-01T17:42:00.000Z"
        },
        "scheduledGateArrival": {
          "dateLocal": "2018-09-02T00:05:00.000",
          "dateUtc": "2018-09-01T21:05:00.000Z"
        },
        "estimatedGateArrival": {
          "dateLocal": "2018-09-02T00:06:00.000",
          "dateUtc": "2018-09-01T21:06:00.000Z"
        }
      },
      "delays": {
        "arrivalGateDelayMinutes": 1
      },
      "flightDurations": {
        "scheduledBlockMinutes": 225,
        "taxiOutMinutes": 29
      },
      "airportResources": {
        "departureTerminal": "F",
        "departureGate": "56",
        "arrivalTerminal": "2",
        "baggage": "203"
      },
      "flightEquipment": {
        "scheduledEquipment": {
          "iata": "32A",
          "name": "Airbus A320 (sharklets)",
          "turboProp": false,
          "jet": true,
          "widebody": false,
          "regional": false
        },
        "actualEquipment": {
          "iata": "320",
          "name": "Airbus A320",
          "turboProp": false,
          "jet": true,
          "widebody": false,
          "regional": false
        },
        "tailNumber": "VP-BII"
      }
    },
    {
      "flightId": 971824023,
      "carrier": {
        "fs": "SU",
        "iata": "SU",
        "icao": "AFL",
        "name": "Aeroflot",
        "phoneNumber": "+7 495 223-55-55",
        "active": true
      },
      "flightNumber": "2092",
      "departureAirport": {
        "fs": "SVO",
        "iata": "SVO",
        "icao": "UUEE",
        "name": "Sheremetyevo International Airport",
        "city": "Moscow",
        "cityCode": "MOW",
        "countryCode": "RU",
        "countryName": "Russian Federation",
        "regionName": "Europe",
        "timeZoneRegionName": "Europe/Moscow",
        "localTime": "2018-09-01T21:01:35.309",
        "utcOffsetHours": 3,
        "latitude": 55.966324,
        "longitude": 37.416574,
        "elevationFeet": 630,
        "classification": 1,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/SVO?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/SVO?codeType=fs"
      },
      "arrivalAirport": {
        "fs": "BEG",
        "iata": "BEG",
        "icao": "LYBE",
        "name": "Belgrad Nikola Tesla Airport",
        "city": "Belgrade",
        "cityCode": "BEG",
        "countryCode": "RS",
        "countryName": "Republic of Serbia",
        "regionName": "Europe",
        "timeZoneRegionName": "Europe/Belgrade",
        "localTime": "2018-09-01T20:01:35.309",
        "utcOffsetHours": 2,
        "latitude": 44.819444,
        "longitude": 20.306944,
        "elevationFeet": 335,
        "classification": 3,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/BEG?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/BEG?codeType=fs"
      },
      "departureDate": {
        "dateLocal": "2018-09-01T20:10:00.000",
        "dateUtc": "2018-09-01T17:10:00.000Z"
      },
      "arrivalDate": {
        "dateLocal": "2018-09-01T22:15:00.000",
        "dateUtc": "2018-09-01T20:15:00.000Z"
      },
      "status": "A",
      "schedule": {
        "flightType": "J",
        "serviceClasses": "RJY",
        "restrictions": ""
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateLocal": "2018-09-01T20:10:00.000",
          "dateUtc": "2018-09-01T17:10:00.000Z"
        },
        "publishedArrival": {
          "dateLocal": "2018-09-01T22:15:00.000",
          "dateUtc": "2018-09-01T20:15:00.000Z"
        },
        "scheduledGateDeparture": {
          "dateLocal": "2018-09-01T20:10:00.000",
          "dateUtc": "2018-09-01T17:10:00.000Z"
        },
        "estimatedGateDeparture": {
          "dateLocal": "2018-09-01T20:02:00.000",
          "dateUtc": "2018-09-01T17:02:00.000Z"
        },
        "actualGateDeparture": {
          "dateLocal": "2018-09-01T20:02:00.000",
          "dateUtc": "2018-09-01T17:02:00.000Z"
        },
        "estimatedRunwayDeparture": {
          "dateLocal": "2018-09-01T20:25:00.000",
          "dateUtc": "2018-09-01T17:25:00.000Z"
        },
        "actualRunwayDeparture": {
          "dateLocal": "2018-09-01T20:25:00.000",
          "dateUtc": "2018-09-01T17:25:00.000Z"
        },
        "scheduledGateArrival": {
          "dateLocal": "2018-09-01T22:15:00.000",
          "dateUtc": "2018-09-01T20:15:00.000Z"
        },
        "estimatedGateArrival": {
          "dateLocal": "2018-09-01T22:07:00.000",
          "dateUtc": "2018-09-01T20:07:00.000Z"
        }
      },
      "codeshares": [
        {
          "carrier": {
            "fs": "JU",
            "iata": "JU",
            "icao": "ASL",
            "name": "Air Serbia",
            "active": true
          },
          "flightNumber": "8135",
          "relationship": "L"
        }
      ],
      "flightDurations": {
        "scheduledBlockMinutes": 185,
        "taxiOutMinutes": 23
      },
      "airportResources": {
        "departureTerminal": "F",
        "departureGate": "58",
        "arrivalTerminal": "2"
      },
      "flightEquipment": {
        "scheduledEquipment": {
          "iata": "32A",
          "name": "Airbus A320 (sharklets)",
          "turboProp": false,
          "jet": true,
          "widebody": false,
          "regional": false
        },
        "actualEquipment": {
          "iata": "320",
          "name": "Airbus A320",
          "turboProp": false,
          "jet": true,
          "widebody": false,
          "regional": false
        },
        "tailNumber": "VP-BTI"
      }
    },
    {
      "flightId": 971824185,
      "carrier": {
        "fs": "SU",
        "iata": "SU",
        "icao": "AFL",
        "name": "Aeroflot",
        "phoneNumber": "+7 495 223-55-55",
        "active": true
      },
      "flightNumber": "2428",
      "departureAirport": {
        "fs": "SVO",
        "iata": "SVO",
        "icao": "UUEE",
        "name": "Sheremetyevo International Airport",
        "city": "Moscow",
        "cityCode": "MOW",
        "countryCode": "RU",
        "countryName": "Russian Federation",
        "regionName": "Europe",
        "timeZoneRegionName": "Europe/Moscow",
        "localTime": "2018-09-01T21:01:35.310",
        "utcOffsetHours": 3,
        "latitude": 55.966324,
        "longitude": 37.416574,
        "elevationFeet": 630,
        "classification": 1,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/SVO?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/SVO?codeType=fs"
      },
      "arrivalAirport": {
        "fs": "BLQ",
        "iata": "BLQ",
        "icao": "LIPE",
        "name": "Guglielmo Marconi Airport",
        "city": "Bologna",
        "cityCode": "BLQ",
        "countryCode": "IT",
        "countryName": "Italy",
        "regionName": "Europe",
        "timeZoneRegionName": "Europe/Rome",
        "localTime": "2018-09-01T20:01:35.310",
        "utcOffsetHours": 2,
        "latitude": 44.529268,
        "longitude": 11.293289,
        "elevationFeet": 125,
        "classification": 2,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/BLQ?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/BLQ?codeType=fs"
      },
      "departureDate": {
        "dateLocal": "2018-09-01T20:05:00.000",
        "dateUtc": "2018-09-01T17:05:00.000Z"
      },
      "arrivalDate": {
        "dateLocal": "2018-09-01T22:35:00.000",
        "dateUtc": "2018-09-01T20:35:00.000Z"
      },
      "status": "A",
      "schedule": {
        "flightType": "J",
        "serviceClasses": "RJY",
        "restrictions": ""
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateLocal": "2018-09-01T20:05:00.000",
          "dateUtc": "2018-09-01T17:05:00.000Z"
        },
        "publishedArrival": {
          "dateLocal": "2018-09-01T22:35:00.000",
          "dateUtc": "2018-09-01T20:35:00.000Z"
        },
        "scheduledGateDeparture": {
          "dateLocal": "2018-09-01T20:05:00.000",
          "dateUtc": "2018-09-01T17:05:00.000Z"
        },
        "estimatedGateDeparture": {
          "dateLocal": "2018-09-01T19:51:00.000",
          "dateUtc": "2018-09-01T16:51:00.000Z"
        },
        "actualGateDeparture": {
          "dateLocal": "2018-09-01T19:51:00.000",
          "dateUtc": "2018-09-01T16:51:00.000Z"
        },
        "estimatedRunwayDeparture": {
          "dateLocal": "2018-09-01T20:15:00.000",
          "dateUtc": "2018-09-01T17:15:00.000Z"
        },
        "actualRunwayDeparture": {
          "dateLocal": "2018-09-01T20:15:00.000",
          "dateUtc": "2018-09-01T17:15:00.000Z"
        },
        "scheduledGateArrival": {
          "dateLocal": "2018-09-01T22:35:00.000",
          "dateUtc": "2018-09-01T20:35:00.000Z"
        },
        "estimatedGateArrival": {
          "dateLocal": "2018-09-01T22:21:00.000",
          "dateUtc": "2018-09-01T20:21:00.000Z"
        }
      },
      "codeshares": [
        {
          "carrier": {
            "fs": "AZ",
            "iata": "AZ",
            "icao": "AZA",
            "name": "Alitalia",
            "phoneNumber": "1-800-223-5730",
            "active": true
          },
          "flightNumber": "7215",
          "relationship": "L"
        }
      ],
      "flightDurations": {
        "scheduledBlockMinutes": 210,
        "taxiOutMinutes": 24
      },
      "airportResources": {
        "departureTerminal": "E",
        "departureGate": "34"
      },
      "flightEquipment": {
        "scheduledEquipment": {
          "iata": "320",
          "name": "Airbus A320",
          "turboProp": false,
          "jet": true,
          "widebody": false,
          "regional": false
        },
        "actualEquipment": {
          "iata": "320",
          "name": "Airbus A320",
          "turboProp": false,
          "jet": true,
          "widebody": false,
          "regional": false
        },
        "tailNumber": "VP-BMF"
      }
    },
    {
      "flightId": 971824406,
      "carrier": {
        "fs": "SU",
        "iata": "SU",
        "icao": "AFL",
        "name": "Aeroflot",
        "phoneNumber": "+7 495 223-55-55",
        "active": true
      },
      "flightNumber": "400",
      "departureAirport": {
        "fs": "SVO",
        "iata": "SVO",
        "icao": "UUEE",
        "name": "Sheremetyevo International Airport",
        "city": "Moscow",
        "cityCode": "MOW",
        "countryCode": "RU",
        "countryName": "Russian Federation",
        "regionName": "Europe",
        "timeZoneRegionName": "Europe/Moscow",
        "localTime": "2018-09-01T21:01:35.310",
        "utcOffsetHours": 3,
        "latitude": 55.966324,
        "longitude": 37.416574,
        "elevationFeet": 630,
        "classification": 1,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/SVO?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/SVO?codeType=fs"
      },
      "arrivalAirport": {
        "fs": "CAI",
        "iata": "CAI",
        "icao": "HECA",
        "name": "Cairo International Airport",
        "city": "Cairo",
        "cityCode": "CAI",
        "countryCode": "EG",
        "countryName": "Egypt",
        "regionName": "Middle East",
        "timeZoneRegionName": "Africa/Cairo",
        "localTime": "2018-09-01T20:01:35.310",
        "utcOffsetHours": 2,
        "latitude": 30.120106,
        "longitude": 31.406469,
        "elevationFeet": 382,
        "classification": 2,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/CAI?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/CAI?codeType=fs"
      },
      "departureDate": {
        "dateLocal": "2018-09-01T20:40:00.000",
        "dateUtc": "2018-09-01T17:40:00.000Z"
      },
      "arrivalDate": {
        "dateLocal": "2018-09-02T00:25:00.000",
        "dateUtc": "2018-09-01T22:25:00.000Z"
      },
      "status": "S",
      "schedule": {
        "flightType": "J",
        "serviceClasses": "RJY",
        "restrictions": ""
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateLocal": "2018-09-01T20:40:00.000",
          "dateUtc": "2018-09-01T17:40:00.000Z"
        },
        "publishedArrival": {
          "dateLocal": "2018-09-02T00:25:00.000",
          "dateUtc": "2018-09-01T22:25:00.000Z"
        },
        "scheduledGateDeparture": {
          "dateLocal": "2018-09-01T20:40:00.000",
          "dateUtc": "2018-09-01T17:40:00.000Z"
        },
        "scheduledGateArrival": {
          "dateLocal": "2018-09-02T00:25:00.000",
          "dateUtc": "2018-09-01T22:25:00.000Z"
        }
      },
      "flightDurations": {
        "scheduledBlockMinutes": 285
      },
      "airportResources": {
        "departureTerminal": "F",
        "departureGate": "52",
        "arrivalTerminal": "2"
      },
      "flightEquipment": {
        "scheduledEquipment": {
          "iata": "320",
          "name": "Airbus A320",
          "turboProp": false,
          "jet": true,
          "widebody": false,
          "regional": false
        },
        "actualEquipment": {
          "iata": "320",
          "name": "Airbus A320",
          "turboProp": false,
          "jet": true,
          "widebody": false,
          "regional": false
        }
      }
    },
    {
      "flightId": 971747721,
      "carrier": {
        "fs": "3U",
        "iata": "3U",
        "icao": "CSC",
        "name": "Sichuan Airlines",
        "active": true
      },
      "flightNumber": "610",
      "departureAirport": {
        "fs": "SVO",
        "iata": "SVO",
        "icao": "UUEE",
        "name": "Sheremetyevo International Airport",
        "city": "Moscow",
        "cityCode": "MOW",
        "countryCode": "RU",
        "countryName": "Russian Federation",
        "regionName": "Europe",
        "timeZoneRegionName": "Europe/Moscow",
        "localTime": "2018-09-01T21:01:35.310",
        "utcOffsetHours": 3,
        "latitude": 55.966324,
        "longitude": 37.416574,
        "elevationFeet": 630,
        "classification": 1,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/SVO?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/SVO?codeType=fs"
      },
      "arrivalAirport": {
        "fs": "CTU",
        "iata": "CTU",
        "icao": "ZUUU",
        "name": "Chengdu Shuangliu International Airport",
        "street1": "Airport Expressway Entrance",
        "city": "Chengdu",
        "cityCode": "CTU",
        "countryCode": "CN",
        "countryName": "China",
        "regionName": "Asia",
        "timeZoneRegionName": "Asia/Shanghai",
        "localTime": "2018-09-02T02:01:35.310",
        "utcOffsetHours": 8,
        "latitude": 30.581134,
        "longitude": 103.956799,
        "elevationFeet": 1624,
        "classification": 1,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/CTU?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/CTU?codeType=fs"
      },
      "departureDate": {
        "dateLocal": "2018-09-01T20:20:00.000",
        "dateUtc": "2018-09-01T17:20:00.000Z"
      },
      "arrivalDate": {
        "dateLocal": "2018-09-02T09:05:00.000",
        "dateUtc": "2018-09-02T01:05:00.000Z"
      },
      "status": "A",
      "schedule": {
        "flightType": "J",
        "serviceClasses": "RJY",
        "restrictions": ""
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateLocal": "2018-09-01T20:20:00.000",
          "dateUtc": "2018-09-01T17:20:00.000Z"
        },
        "publishedArrival": {
          "dateLocal": "2018-09-02T09:05:00.000",
          "dateUtc": "2018-09-02T01:05:00.000Z"
        },
        "scheduledGateDeparture": {
          "dateLocal": "2018-09-01T20:20:00.000",
          "dateUtc": "2018-09-01T17:20:00.000Z"
        },
        "estimatedGateDeparture": {
          "dateLocal": "2018-09-01T20:20:00.000",
          "dateUtc": "2018-09-01T17:20:00.000Z"
        },
        "estimatedRunwayDeparture": {
          "dateLocal": "2018-09-01T20:37:00.000",
          "dateUtc": "2018-09-01T17:37:00.000Z"
        },
        "actualRunwayDeparture": {
          "dateLocal": "2018-09-01T20:37:00.000",
          "dateUtc": "2018-09-01T17:37:00.000Z"
        },
        "scheduledGateArrival": {
          "dateLocal": "2018-09-02T09:05:00.000",
          "dateUtc": "2018-09-02T01:05:00.000Z"
        },
        "estimatedGateArrival": {
          "dateLocal": "2018-09-02T08:51:00.000",
          "dateUtc": "2018-09-02T00:51:00.000Z"
        }
      },
      "flightDurations": {
        "scheduledBlockMinutes": 465
      },
      "airportResources": {
        "departureTerminal": "F",
        "arrivalTerminal": "T1"
      },
      "flightEquipment": {
        "scheduledEquipment": {
          "iata": "330",
          "name": "Airbus A330",
          "turboProp": false,
          "jet": true,
          "widebody": true,
          "regional": false
        },
        "actualEquipment": {
          "iata": "333",
          "name": "Airbus A330-300",
          "turboProp": false,
          "jet": true,
          "widebody": true,
          "regional": false
        },
        "tailNumber": "B-5923"
      }
    },
    {
      "flightId": 971823957,
      "carrier": {
        "fs": "SU",
        "iata": "SU",
        "icao": "AFL",
        "name": "Aeroflot",
        "phoneNumber": "+7 495 223-55-55",
        "active": true
      },
      "flightNumber": "1868",
      "departureAirport": {
        "fs": "SVO",
        "iata": "SVO",
        "icao": "UUEE",
        "name": "Sheremetyevo International Airport",
        "city": "Moscow",
        "cityCode": "MOW",
        "countryCode": "RU",
        "countryName": "Russian Federation",
        "regionName": "Europe",
        "timeZoneRegionName": "Europe/Moscow",
        "localTime": "2018-09-01T21:01:35.311",
        "utcOffsetHours": 3,
        "latitude": 55.966324,
        "longitude": 37.416574,
        "elevationFeet": 630,
        "classification": 1,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/SVO?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/SVO?codeType=fs"
      },
      "arrivalAirport": {
        "fs": "EVN",
        "iata": "EVN",
        "icao": "UDYZ",
        "name": "Zvartnots International Airport",
        "city": "Yerevan",
        "cityCode": "EVN",
        "countryCode": "AM",
        "countryName": "Armenia",
        "regionName": "Asia",
        "timeZoneRegionName": "Asia/Yerevan",
        "localTime": "2018-09-01T22:01:35.311",
        "utcOffsetHours": 4,
        "latitude": 40.15272,
        "longitude": 44.39805,
        "elevationFeet": 2838,
        "classification": 3,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/EVN?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/EVN?codeType=fs"
      },
      "departureDate": {
        "dateLocal": "2018-09-01T20:40:00.000",
        "dateUtc": "2018-09-01T17:40:00.000Z"
      },
      "arrivalDate": {
        "dateLocal": "2018-09-02T00:30:00.000",
        "dateUtc": "2018-09-01T20:30:00.000Z"
      },
      "status": "A",
      "schedule": {
        "flightType": "J",
        "serviceClasses": "RFJY",
        "restrictions": ""
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateLocal": "2018-09-01T20:40:00.000",
          "dateUtc": "2018-09-01T17:40:00.000Z"
        },
        "publishedArrival": {
          "dateLocal": "2018-09-02T00:30:00.000",
          "dateUtc": "2018-09-01T20:30:00.000Z"
        },
        "scheduledGateDeparture": {
          "dateLocal": "2018-09-01T20:40:00.000",
          "dateUtc": "2018-09-01T17:40:00.000Z"
        },
        "estimatedGateDeparture": {
          "dateLocal": "2018-09-01T20:35:00.000",
          "dateUtc": "2018-09-01T17:35:00.000Z"
        },
        "actualGateDeparture": {
          "dateLocal": "2018-09-01T20:35:00.000",
          "dateUtc": "2018-09-01T17:35:00.000Z"
        },
        "estimatedRunwayDeparture": {
          "dateLocal": "2018-09-01T20:53:00.000",
          "dateUtc": "2018-09-01T17:53:00.000Z"
        },
        "actualRunwayDeparture": {
          "dateLocal": "2018-09-01T20:53:00.000",
          "dateUtc": "2018-09-01T17:53:00.000Z"
        },
        "scheduledGateArrival": {
          "dateLocal": "2018-09-02T00:30:00.000",
          "dateUtc": "2018-09-01T20:30:00.000Z"
        },
        "estimatedGateArrival": {
          "dateLocal": "2018-09-02T00:26:00.000",
          "dateUtc": "2018-09-01T20:26:00.000Z"
        }
      },
      "codeshares": [
        {
          "carrier": {
            "fs": "AF",
            "iata": "AF",
            "icao": "AFR",
            "name": "Air France",
            "phoneNumber": "1-800-237-2747",
            "active": true
          },
          "flightNumber": "4852",
          "relationship": "L"
        },
        {
          "carrier": {
            "fs": "KL",
            "iata": "KL",
            "icao": "KLM",
            "name": "KLM",
            "phoneNumber": "1-800-447-4747",
            "active": true
          },
          "flightNumber": "2894",
          "relationship": "L"
        }
      ],
      "flightDurations": {
        "scheduledBlockMinutes": 170,
        "taxiOutMinutes": 18
      },
      "airportResources": {
        "departureTerminal": "D",
        "departureGate": "24"
      },
      "flightEquipment": {
        "scheduledEquipment": {
          "iata": "321",
          "name": "Airbus A321",
          "turboProp": false,
          "jet": true,
          "widebody": false,
          "regional": false
        },
        "actualEquipment": {
          "iata": "321",
          "name": "Airbus A321",
          "turboProp": false,
          "jet": true,
          "widebody": false,
          "regional": false
        },
        "tailNumber": "VQ-BOI"
      }
    },
    {
      "flightId": 971823780,
      "carrier": {
        "fs": "SU",
        "iata": "SU",
        "icao": "AFL",
        "name": "Aeroflot",
        "phoneNumber": "+7 495 223-55-55",
        "active": true
      },
      "flightNumber": "1340",
      "departureAirport": {
        "fs": "SVO",
        "iata": "SVO",
        "icao": "UUEE",
        "name": "Sheremetyevo International Airport",
        "city": "Moscow",
        "cityCode": "MOW",
        "countryCode": "RU",
        "countryName": "Russian Federation",
        "regionName": "Europe",
        "timeZoneRegionName": "Europe/Moscow",
        "localTime": "2018-09-01T21:01:35.311",
        "utcOffsetHours": 3,
        "latitude": 55.966324,
        "longitude": 37.416574,
        "elevationFeet": 630,
        "classification": 1,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/SVO?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/SVO?codeType=fs"
      },
      "arrivalAirport": {
        "fs": "GOJ",
        "iata": "GOJ",
        "icao": "UWGG",
        "name": "Nizhny Novgorod International Airport",
        "city": "Nizhniy Novgorod",
        "cityCode": "GOJ",
        "countryCode": "RU",
        "countryName": "Russian Federation",
        "regionName": "Europe",
        "timeZoneRegionName": "Europe/Moscow",
        "localTime": "2018-09-01T21:01:35.311",
        "utcOffsetHours": 3,
        "latitude": 56.218611,
        "longitude": 43.789766,
        "elevationFeet": 256,
        "classification": 4,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/GOJ?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/GOJ?codeType=fs"
      },
      "departureDate": {
        "dateLocal": "2018-09-01T20:15:00.000",
        "dateUtc": "2018-09-01T17:15:00.000Z"
      },
      "arrivalDate": {
        "dateLocal": "2018-09-01T21:35:00.000",
        "dateUtc": "2018-09-01T18:35:00.000Z"
      },
      "status": "A",
      "schedule": {
        "flightType": "J",
        "serviceClasses": "RFJY",
        "restrictions": ""
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateLocal": "2018-09-01T20:15:00.000",
          "dateUtc": "2018-09-01T17:15:00.000Z"
        },
        "publishedArrival": {
          "dateLocal": "2018-09-01T21:35:00.000",
          "dateUtc": "2018-09-01T18:35:00.000Z"
        },
        "scheduledGateDeparture": {
          "dateLocal": "2018-09-01T20:15:00.000",
          "dateUtc": "2018-09-01T17:15:00.000Z"
        },
        "estimatedGateDeparture": {
          "dateLocal": "2018-09-01T20:08:00.000",
          "dateUtc": "2018-09-01T17:08:00.000Z"
        },
        "actualGateDeparture": {
          "dateLocal": "2018-09-01T20:08:00.000",
          "dateUtc": "2018-09-01T17:08:00.000Z"
        },
        "estimatedRunwayDeparture": {
          "dateLocal": "2018-09-01T20:35:00.000",
          "dateUtc": "2018-09-01T17:35:00.000Z"
        },
        "actualRunwayDeparture": {
          "dateLocal": "2018-09-01T20:35:00.000",
          "dateUtc": "2018-09-01T17:35:00.000Z"
        },
        "scheduledGateArrival": {
          "dateLocal": "2018-09-01T21:35:00.000",
          "dateUtc": "2018-09-01T18:35:00.000Z"
        },
        "estimatedGateArrival": {
          "dateLocal": "2018-09-01T21:23:00.000",
          "dateUtc": "2018-09-01T18:23:00.000Z"
        }
      },
      "codeshares": [
        {
          "carrier": {
            "fs": "AF",
            "iata": "AF",
            "icao": "AFR",
            "name": "Air France",
            "phoneNumber": "1-800-237-2747",
            "active": true
          },
          "flightNumber": "4922",
          "relationship": "L"
        }
      ],
      "flightDurations": {
        "scheduledBlockMinutes": 80,
        "taxiOutMinutes": 27
      },
      "airportResources": {
        "departureTerminal": "D",
        "departureGate": "14"
      },
      "flightEquipment": {
        "scheduledEquipment": {
          "iata": "32A",
          "name": "Airbus A320 (sharklets)",
          "turboProp": false,
          "jet": true,
          "widebody": false,
          "regional": false
        },
        "actualEquipment": {
          "iata": "320",
          "name": "Airbus A320",
          "turboProp": false,
          "jet": true,
          "widebody": false,
          "regional": false
        },
        "tailNumber": "VP-BLL"
      }
    },
    {
      "flightId": 971767198,
      "carrier": {
        "fs": "FC",
        "iata": "N7",
        "icao": "FCM",
        "name": "Nordic Regional Airlines",
        "active": true
      },
      "flightNumber": "714",
      "departureAirport": {
        "fs": "SVO",
        "iata": "SVO",
        "icao": "UUEE",
        "name": "Sheremetyevo International Airport",
        "city": "Moscow",
        "cityCode": "MOW",
        "countryCode": "RU",
        "countryName": "Russian Federation",
        "regionName": "Europe",
        "timeZoneRegionName": "Europe/Moscow",
        "localTime": "2018-09-01T21:01:35.311",
        "utcOffsetHours": 3,
        "latitude": 55.966324,
        "longitude": 37.416574,
        "elevationFeet": 630,
        "classification": 1,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/SVO?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/SVO?codeType=fs"
      },
      "arrivalAirport": {
        "fs": "HEL",
        "iata": "HEL",
        "icao": "EFHK",
        "name": "Helsinki-Vantaa Airport",
        "city": "Helsinki",
        "cityCode": "HEL",
        "countryCode": "FI",
        "countryName": "Finland",
        "regionName": "Europe",
        "timeZoneRegionName": "Europe/Helsinki",
        "localTime": "2018-09-01T21:01:35.311",
        "utcOffsetHours": 3,
        "latitude": 60.317953,
        "longitude": 24.966449,
        "elevationFeet": 167,
        "classification": 1,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/HEL?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/HEL?codeType=fs"
      },
      "departureDate": {
        "dateLocal": "2018-09-01T20:30:00.000",
        "dateUtc": "2018-09-01T17:30:00.000Z"
      },
      "arrivalDate": {
        "dateLocal": "2018-09-01T22:15:00.000",
        "dateUtc": "2018-09-01T19:15:00.000Z"
      },
      "status": "A",
      "schedule": {
        "flightType": "J",
        "serviceClasses": "RFJY",
        "restrictions": ""
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateLocal": "2018-09-01T20:30:00.000",
          "dateUtc": "2018-09-01T17:30:00.000Z"
        },
        "publishedArrival": {
          "dateLocal": "2018-09-01T22:15:00.000",
          "dateUtc": "2018-09-01T19:15:00.000Z"
        },
        "scheduledGateDeparture": {
          "dateLocal": "2018-09-01T20:30:00.000",
          "dateUtc": "2018-09-01T17:30:00.000Z"
        },
        "estimatedGateDeparture": {
          "dateLocal": "2018-09-01T20:22:00.000",
          "dateUtc": "2018-09-01T17:22:00.000Z"
        },
        "actualGateDeparture": {
          "dateLocal": "2018-09-01T20:22:00.000",
          "dateUtc": "2018-09-01T17:22:00.000Z"
        },
        "scheduledGateArrival": {
          "dateLocal": "2018-09-01T22:15:00.000",
          "dateUtc": "2018-09-01T19:15:00.000Z"
        },
        "estimatedGateArrival": {
          "dateLocal": "2018-09-01T22:04:00.000",
          "dateUtc": "2018-09-01T19:04:00.000Z"
        }
      },
      "codeshares": [
        {
          "carrier": {
            "fs": "SU",
            "iata": "SU",
            "icao": "AFL",
            "name": "Aeroflot",
            "phoneNumber": "+7 495 223-55-55",
            "active": true
          },
          "flightNumber": "3962",
          "relationship": "L"
        },
        {
          "carrier": {
            "fs": "AY",
            "iata": "AY",
            "icao": "FIN",
            "name": "Finnair",
            "phoneNumber": "+ 358 600 140 140",
            "active": true
          },
          "flightNumber": "714",
          "relationship": "S"
        }
      ],
      "flightDurations": {
        "scheduledBlockMinutes": 105
      },
      "airportResources": {
        "departureTerminal": "D",
        "arrivalTerminal": "2"
      },
      "flightEquipment": {
        "scheduledEquipment": {
          "iata": "E90",
          "name": "Embraer 190",
          "turboProp": false,
          "jet": true,
          "widebody": false,
          "regional": true
        },
        "actualEquipment": {
          "iata": "E90",
          "name": "Embraer 190",
          "turboProp": false,
          "jet": true,
          "widebody": false,
          "regional": true
        },
        "tailNumber": "OH-LKR"
      }
    },
    {
      "flightId": 971824310,
      "carrier": {
        "fs": "SU",
        "iata": "SU",
        "icao": "AFL",
        "name": "Aeroflot",
        "phoneNumber": "+7 495 223-55-55",
        "active": true
      },
      "flightNumber": "250",
      "departureAirport": {
        "fs": "SVO",
        "iata": "SVO",
        "icao": "UUEE",
        "name": "Sheremetyevo International Airport",
        "city": "Moscow",
        "cityCode": "MOW",
        "countryCode": "RU",
        "countryName": "Russian Federation",
        "regionName": "Europe",
        "timeZoneRegionName": "Europe/Moscow",
        "localTime": "2018-09-01T21:01:35.311",
        "utcOffsetHours": 3,
        "latitude": 55.966324,
        "longitude": 37.416574,
        "elevationFeet": 630,
        "classification": 1,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/SVO?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/SVO?codeType=fs"
      },
      "arrivalAirport": {
        "fs": "ICN",
        "iata": "ICN",
        "icao": "RKSI",
        "name": "Incheon International Airport",
        "city": "Seoul",
        "cityCode": "SEL",
        "countryCode": "KR",
        "countryName": "Republic of Korea",
        "regionName": "Asia",
        "timeZoneRegionName": "Asia/Seoul",
        "localTime": "2018-09-02T03:01:35.311",
        "utcOffsetHours": 9,
        "latitude": 37.448526,
        "longitude": 126.451234,
        "elevationFeet": 20,
        "classification": 1,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/ICN?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/ICN?codeType=fs"
      },
      "departureDate": {
        "dateLocal": "2018-09-01T20:55:00.000",
        "dateUtc": "2018-09-01T17:55:00.000Z"
      },
      "arrivalDate": {
        "dateLocal": "2018-09-02T11:15:00.000",
        "dateUtc": "2018-09-02T02:15:00.000Z"
      },
      "status": "S",
      "schedule": {
        "flightType": "J",
        "serviceClasses": "RFJY",
        "restrictions": ""
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateLocal": "2018-09-01T20:55:00.000",
          "dateUtc": "2018-09-01T17:55:00.000Z"
        },
        "publishedArrival": {
          "dateLocal": "2018-09-02T11:15:00.000",
          "dateUtc": "2018-09-02T02:15:00.000Z"
        },
        "scheduledGateDeparture": {
          "dateLocal": "2018-09-01T20:55:00.000",
          "dateUtc": "2018-09-01T17:55:00.000Z"
        },
        "estimatedGateDeparture": {
          "dateLocal": "2018-09-01T20:55:00.000",
          "dateUtc": "2018-09-01T17:55:00.000Z"
        },
        "scheduledGateArrival": {
          "dateLocal": "2018-09-02T11:15:00.000",
          "dateUtc": "2018-09-02T02:15:00.000Z"
        },
        "estimatedGateArrival": {
          "dateLocal": "2018-09-02T11:23:00.000",
          "dateUtc": "2018-09-02T02:23:00.000Z"
        }
      },
      "codeshares": [
        {
          "carrier": {
            "fs": "GA",
            "iata": "GA",
            "icao": "GIA",
            "name": "Garuda Indonesia",
            "phoneNumber": "0807-1-807807",
            "active": true
          },
          "flightNumber": "9411",
          "relationship": "L"
        },
        {
          "carrier": {
            "fs": "KE",
            "iata": "KE",
            "icao": "KAL",
            "name": "Korean Air",
            "phoneNumber": "1-800-438-5000",
            "active": true
          },
          "flightNumber": "5924",
          "relationship": "L"
        }
      ],
      "delays": {
        "arrivalGateDelayMinutes": 8
      },
      "flightDurations": {
        "scheduledBlockMinutes": 500
      },
      "airportResources": {
        "departureTerminal": "D",
        "departureGate": "22",
        "arrivalTerminal": "1",
        "arrivalGate": "121",
        "baggage": "7"
      },
      "flightEquipment": {
        "scheduledEquipment": {
          "iata": "77W",
          "name": "Boeing 777-300ER",
          "turboProp": false,
          "jet": true,
          "widebody": true,
          "regional": false
        },
        "actualEquipment": {
          "iata": "77W",
          "name": "Boeing 777-300ER",
          "turboProp": false,
          "jet": true,
          "widebody": true,
          "regional": false
        },
        "tailNumber": "VP-BHA"
      }
    },
    {
      "flightId": 972071213,
      "carrier": {
        "fs": "N4*",
        "iata": "N4",
        "icao": "NWS",
        "name": "Nordwind Airlines",
        "active": true
      },
      "flightNumber": "2477",
      "departureAirport": {
        "fs": "SVO",
        "iata": "SVO",
        "icao": "UUEE",
        "name": "Sheremetyevo International Airport",
        "city": "Moscow",
        "cityCode": "MOW",
        "countryCode": "RU",
        "countryName": "Russian Federation",
        "regionName": "Europe",
        "timeZoneRegionName": "Europe/Moscow",
        "localTime": "2018-09-01T21:01:35.311",
        "utcOffsetHours": 3,
        "latitude": 55.966324,
        "longitude": 37.416574,
        "elevationFeet": 630,
        "classification": 1,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/SVO?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/SVO?codeType=fs"
      },
      "arrivalAirport": {
        "fs": "KBV",
        "iata": "KBV",
        "icao": "VTSG",
        "name": "Krabi Airport",
        "city": "Krabi",
        "cityCode": "KBV",
        "countryCode": "TH",
        "countryName": "Thailand",
        "regionName": "Asia",
        "timeZoneRegionName": "Asia/Bangkok",
        "localTime": "2018-09-02T01:01:35.311",
        "utcOffsetHours": 7,
        "latitude": 8.097281,
        "longitude": 98.980619,
        "elevationFeet": 83,
        "classification": 4,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/KBV?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/KBV?codeType=fs"
      },
      "departureDate": {
        "dateLocal": "2018-09-01T21:00:00.000",
        "dateUtc": "2018-09-01T18:00:00.000Z"
      },
      "arrivalDate": {
        "dateLocal": "2018-09-02T10:20:00.000",
        "dateUtc": "2018-09-02T03:20:00.000Z"
      },
      "status": "S",
      "operationalTimes": {
        "scheduledGateDeparture": {
          "dateLocal": "2018-09-01T21:00:00.000",
          "dateUtc": "2018-09-01T18:00:00.000Z"
        },
        "scheduledGateArrival": {
          "dateLocal": "2018-09-02T10:20:00.000",
          "dateUtc": "2018-09-02T03:20:00.000Z"
        }
      },
      "flightDurations": {
        "scheduledBlockMinutes": 560
      }
    },
    {
      "flightId": 971823581,
      "carrier": {
        "fs": "SU",
        "iata": "SU",
        "icao": "AFL",
        "name": "Aeroflot",
        "phoneNumber": "+7 495 223-55-55",
        "active": true
      },
      "flightNumber": "1008",
      "departureAirport": {
        "fs": "SVO",
        "iata": "SVO",
        "icao": "UUEE",
        "name": "Sheremetyevo International Airport",
        "city": "Moscow",
        "cityCode": "MOW",
        "countryCode": "RU",
        "countryName": "Russian Federation",
        "regionName": "Europe",
        "timeZoneRegionName": "Europe/Moscow",
        "localTime": "2018-09-01T21:01:35.312",
        "utcOffsetHours": 3,
        "latitude": 55.966324,
        "longitude": 37.416574,
        "elevationFeet": 630,
        "classification": 1,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/SVO?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/SVO?codeType=fs"
      },
      "arrivalAirport": {
        "fs": "KGD",
        "iata": "KGD",
        "icao": "UMKK",
        "name": "Khrabrovo Airport",
        "city": "Kaliningrad",
        "cityCode": "KGD",
        "countryCode": "RU",
        "countryName": "Russian Federation",
        "regionName": "Europe",
        "timeZoneRegionName": "Europe/Kaliningrad",
        "localTime": "2018-09-01T20:01:35.312",
        "utcOffsetHours": 2,
        "latitude": 54.882656,
        "longitude": 20.586646,
        "elevationFeet": 43,
        "classification": 4,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/KGD?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/KGD?codeType=fs"
      },
      "departureDate": {
        "dateLocal": "2018-09-01T20:10:00.000",
        "dateUtc": "2018-09-01T17:10:00.000Z"
      },
      "arrivalDate": {
        "dateLocal": "2018-09-01T21:05:00.000",
        "dateUtc": "2018-09-01T19:05:00.000Z"
      },
      "status": "A",
      "schedule": {
        "flightType": "J",
        "serviceClasses": "RFJY",
        "restrictions": ""
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateLocal": "2018-09-01T20:10:00.000",
          "dateUtc": "2018-09-01T17:10:00.000Z"
        },
        "publishedArrival": {
          "dateLocal": "2018-09-01T21:05:00.000",
          "dateUtc": "2018-09-01T19:05:00.000Z"
        },
        "scheduledGateDeparture": {
          "dateLocal": "2018-09-01T20:10:00.000",
          "dateUtc": "2018-09-01T17:10:00.000Z"
        },
        "estimatedGateDeparture": {
          "dateLocal": "2018-09-01T19:59:00.000",
          "dateUtc": "2018-09-01T16:59:00.000Z"
        },
        "actualGateDeparture": {
          "dateLocal": "2018-09-01T19:59:00.000",
          "dateUtc": "2018-09-01T16:59:00.000Z"
        },
        "estimatedRunwayDeparture": {
          "dateLocal": "2018-09-01T20:23:00.000",
          "dateUtc": "2018-09-01T17:23:00.000Z"
        },
        "actualRunwayDeparture": {
          "dateLocal": "2018-09-01T20:23:00.000",
          "dateUtc": "2018-09-01T17:23:00.000Z"
        },
        "scheduledGateArrival": {
          "dateLocal": "2018-09-01T21:05:00.000",
          "dateUtc": "2018-09-01T19:05:00.000Z"
        },
        "estimatedGateArrival": {
          "dateLocal": "2018-09-01T21:00:00.000",
          "dateUtc": "2018-09-01T19:00:00.000Z"
        },
        "estimatedRunwayArrival": {
          "dateLocal": "2018-09-01T21:00:00.000",
          "dateUtc": "2018-09-01T19:00:00.000Z"
        }
      },
      "codeshares": [
        {
          "carrier": {
            "fs": "AF",
            "iata": "AF",
            "icao": "AFR",
            "name": "Air France",
            "phoneNumber": "1-800-237-2747",
            "active": true
          },
          "flightNumber": "4928",
          "relationship": "L"
        },
        {
          "carrier": {
            "fs": "AZ",
            "iata": "AZ",
            "icao": "AZA",
            "name": "Alitalia",
            "phoneNumber": "1-800-223-5730",
            "active": true
          },
          "flightNumber": "3958",
          "relationship": "L"
        }
      ],
      "flightDurations": {
        "scheduledBlockMinutes": 115,
        "taxiOutMinutes": 24
      },
      "airportResources": {
        "departureTerminal": "D",
        "departureGate": "3",
        "arrivalTerminal": "A"
      },
      "flightEquipment": {
        "scheduledEquipment": {
          "iata": "320",
          "name": "Airbus A320",
          "turboProp": false,
          "jet": true,
          "widebody": false,
          "regional": false
        },
        "actualEquipment": {
          "iata": "320",
          "name": "Airbus A320",
          "turboProp": false,
          "jet": true,
          "widebody": false,
          "regional": false
        },
        "tailNumber": "VP-BWF"
      }
    },
    {
      "flightId": 971823948,
      "carrier": {
        "fs": "SU",
        "iata": "SU",
        "icao": "AFL",
        "name": "Aeroflot",
        "phoneNumber": "+7 495 223-55-55",
        "active": true
      },
      "flightNumber": "1844",
      "departureAirport": {
        "fs": "SVO",
        "iata": "SVO",
        "icao": "UUEE",
        "name": "Sheremetyevo International Airport",
        "city": "Moscow",
        "cityCode": "MOW",
        "countryCode": "RU",
        "countryName": "Russian Federation",
        "regionName": "Europe",
        "timeZoneRegionName": "Europe/Moscow",
        "localTime": "2018-09-01T21:01:35.312",
        "utcOffsetHours": 3,
        "latitude": 55.966324,
        "longitude": 37.416574,
        "elevationFeet": 630,
        "classification": 1,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/SVO?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/SVO?codeType=fs"
      },
      "arrivalAirport": {
        "fs": "KIV",
        "iata": "KIV",
        "icao": "LUKK",
        "name": "Chisinau International Airport",
        "city": "Chisinau",
        "cityCode": "KIV",
        "countryCode": "MD",
        "countryName": "Republic of Moldova",
        "regionName": "Europe",
        "timeZoneRegionName": "Europe/Chisinau",
        "localTime": "2018-09-01T21:01:35.312",
        "utcOffsetHours": 3,
        "latitude": 46.935442,
        "longitude": 28.934967,
        "elevationFeet": 307,
        "classification": 4,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/KIV?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/KIV?codeType=fs"
      },
      "departureDate": {
        "dateLocal": "2018-09-01T20:35:00.000",
        "dateUtc": "2018-09-01T17:35:00.000Z"
      },
      "arrivalDate": {
        "dateLocal": "2018-09-01T23:45:00.000",
        "dateUtc": "2018-09-01T20:45:00.000Z"
      },
      "status": "A",
      "schedule": {
        "flightType": "J",
        "serviceClasses": "RJY",
        "restrictions": ""
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateLocal": "2018-09-01T20:35:00.000",
          "dateUtc": "2018-09-01T17:35:00.000Z"
        },
        "publishedArrival": {
          "dateLocal": "2018-09-01T23:45:00.000",
          "dateUtc": "2018-09-01T20:45:00.000Z"
        },
        "scheduledGateDeparture": {
          "dateLocal": "2018-09-01T20:35:00.000",
          "dateUtc": "2018-09-01T17:35:00.000Z"
        },
        "estimatedGateDeparture": {
          "dateLocal": "2018-09-01T20:28:00.000",
          "dateUtc": "2018-09-01T17:28:00.000Z"
        },
        "actualGateDeparture": {
          "dateLocal": "2018-09-01T20:28:00.000",
          "dateUtc": "2018-09-01T17:28:00.000Z"
        },
        "estimatedRunwayDeparture": {
          "dateLocal": "2018-09-01T20:50:00.000",
          "dateUtc": "2018-09-01T17:50:00.000Z"
        },
        "actualRunwayDeparture": {
          "dateLocal": "2018-09-01T20:50:00.000",
          "dateUtc": "2018-09-01T17:50:00.000Z"
        },
        "scheduledGateArrival": {
          "dateLocal": "2018-09-01T23:45:00.000",
          "dateUtc": "2018-09-01T20:45:00.000Z"
        },
        "estimatedGateArrival": {
          "dateLocal": "2018-09-01T23:36:00.000",
          "dateUtc": "2018-09-01T20:36:00.000Z"
        }
      },
      "flightDurations": {
        "scheduledBlockMinutes": 190,
        "taxiOutMinutes": 22
      },
      "airportResources": {
        "departureTerminal": "D",
        "departureGate": "5"
      },
      "flightEquipment": {
        "scheduledEquipment": {
          "iata": "32A",
          "name": "Airbus A320 (sharklets)",
          "turboProp": false,
          "jet": true,
          "widebody": false,
          "regional": false
        },
        "actualEquipment": {
          "iata": "320",
          "name": "Airbus A320",
          "turboProp": false,
          "jet": true,
          "widebody": false,
          "regional": false
        },
        "tailNumber": "VP-BIL"
      }
    },
    {
      "flightId": 971823866,
      "carrier": {
        "fs": "SU",
        "iata": "SU",
        "icao": "AFL",
        "name": "Aeroflot",
        "phoneNumber": "+7 495 223-55-55",
        "active": true
      },
      "flightNumber": "1480",
      "departureAirport": {
        "fs": "SVO",
        "iata": "SVO",
        "icao": "UUEE",
        "name": "Sheremetyevo International Airport",
        "city": "Moscow",
        "cityCode": "MOW",
        "countryCode": "RU",
        "countryName": "Russian Federation",
        "regionName": "Europe",
        "timeZoneRegionName": "Europe/Moscow",
        "localTime": "2018-09-01T21:01:35.313",
        "utcOffsetHours": 3,
        "latitude": 55.966324,
        "longitude": 37.416574,
        "elevationFeet": 630,
        "classification": 1,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/SVO?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/SVO?codeType=fs"
      },
      "arrivalAirport": {
        "fs": "KJA",
        "iata": "KJA",
        "icao": "UNKL",
        "name": "Krasnoyarsk Airport",
        "city": "Krasnojarsk",
        "cityCode": "KJA",
        "countryCode": "RU",
        "countryName": "Russian Federation",
        "regionName": "Europe",
        "timeZoneRegionName": "Asia/Krasnoyarsk",
        "localTime": "2018-09-02T01:01:35.313",
        "utcOffsetHours": 7,
        "latitude": 56.18113,
        "longitude": 92.482859,
        "elevationFeet": 942,
        "classification": 3,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/KJA?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/KJA?codeType=fs"
      },
      "departureDate": {
        "dateLocal": "2018-09-01T20:25:00.000",
        "dateUtc": "2018-09-01T17:25:00.000Z"
      },
      "arrivalDate": {
        "dateLocal": "2018-09-02T05:05:00.000",
        "dateUtc": "2018-09-01T22:05:00.000Z"
      },
      "status": "A",
      "schedule": {
        "flightType": "J",
        "serviceClasses": "RFJY",
        "restrictions": ""
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateLocal": "2018-09-01T20:25:00.000",
          "dateUtc": "2018-09-01T17:25:00.000Z"
        },
        "publishedArrival": {
          "dateLocal": "2018-09-02T05:05:00.000",
          "dateUtc": "2018-09-01T22:05:00.000Z"
        },
        "scheduledGateDeparture": {
          "dateLocal": "2018-09-01T20:25:00.000",
          "dateUtc": "2018-09-01T17:25:00.000Z"
        },
        "estimatedGateDeparture": {
          "dateLocal": "2018-09-01T20:17:00.000",
          "dateUtc": "2018-09-01T17:17:00.000Z"
        },
        "actualGateDeparture": {
          "dateLocal": "2018-09-01T20:17:00.000",
          "dateUtc": "2018-09-01T17:17:00.000Z"
        },
        "estimatedRunwayDeparture": {
          "dateLocal": "2018-09-01T20:40:00.000",
          "dateUtc": "2018-09-01T17:40:00.000Z"
        },
        "actualRunwayDeparture": {
          "dateLocal": "2018-09-01T20:40:00.000",
          "dateUtc": "2018-09-01T17:40:00.000Z"
        },
        "scheduledGateArrival": {
          "dateLocal": "2018-09-02T05:05:00.000",
          "dateUtc": "2018-09-01T22:05:00.000Z"
        },
        "estimatedGateArrival": {
          "dateLocal": "2018-09-02T05:03:00.000",
          "dateUtc": "2018-09-01T22:03:00.000Z"
        },
        "estimatedRunwayArrival": {
          "dateLocal": "2018-09-02T04:58:00.000",
          "dateUtc": "2018-09-01T21:58:00.000Z"
        }
      },
      "codeshares": [
        {
          "carrier": {
            "fs": "AF",
            "iata": "AF",
            "icao": "AFR",
            "name": "Air France",
            "phoneNumber": "1-800-237-2747",
            "active": true
          },
          "flightNumber": "4896",
          "relationship": "L"
        },
        {
          "carrier": {
            "fs": "AZ",
            "iata": "AZ",
            "icao": "AZA",
            "name": "Alitalia",
            "phoneNumber": "1-800-223-5730",
            "active": true
          },
          "flightNumber": "5668",
          "relationship": "L"
        },
        {
          "carrier": {
            "fs": "KL",
            "iata": "KL",
            "icao": "KLM",
            "name": "KLM",
            "phoneNumber": "1-800-447-4747",
            "active": true
          },
          "flightNumber": "3186",
          "relationship": "L"
        }
      ],
      "flightDurations": {
        "scheduledBlockMinutes": 280,
        "taxiOutMinutes": 23
      },
      "airportResources": {
        "departureTerminal": "D",
        "departureGate": "19",
        "arrivalTerminal": "1"
      },
      "flightEquipment": {
        "scheduledEquipment": {
          "iata": "32B",
          "name": "Airbus A321 (sharklets)",
          "turboProp": false,
          "jet": true,
          "widebody": false,
          "regional": false
        },
        "actualEquipment": {
          "iata": "321",
          "name": "Airbus A321",
          "turboProp": false,
          "jet": true,
          "widebody": false,
          "regional": false
        },
        "tailNumber": "VP-BTK"
      }
    },
    {
      "flightId": 971824077,
      "carrier": {
        "fs": "SU",
        "iata": "SU",
        "icao": "AFL",
        "name": "Aeroflot",
        "phoneNumber": "+7 495 223-55-55",
        "active": true
      },
      "flightNumber": "2070",
      "departureAirport": {
        "fs": "SVO",
        "iata": "SVO",
        "icao": "UUEE",
        "name": "Sheremetyevo International Airport",
        "city": "Moscow",
        "cityCode": "MOW",
        "countryCode": "RU",
        "countryName": "Russian Federation",
        "regionName": "Europe",
        "timeZoneRegionName": "Europe/Moscow",
        "localTime": "2018-09-01T21:01:35.313",
        "utcOffsetHours": 3,
        "latitude": 55.966324,
        "longitude": 37.416574,
        "elevationFeet": 630,
        "classification": 1,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/SVO?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/SVO?codeType=fs"
      },
      "arrivalAirport": {
        "fs": "LCA",
        "iata": "LCA",
        "icao": "LCLK",
        "name": "Larnaca International Airport",
        "city": "Larnaca",
        "cityCode": "LCA",
        "countryCode": "CY",
        "countryName": "Cyprus",
        "regionName": "Europe",
        "timeZoneRegionName": "Asia/Nicosia",
        "localTime": "2018-09-01T21:01:35.313",
        "utcOffsetHours": 3,
        "latitude": 34.870871,
        "longitude": 33.607975,
        "elevationFeet": 8,
        "classification": 3,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/LCA?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/LCA?codeType=fs"
      },
      "departureDate": {
        "dateLocal": "2018-09-01T20:00:00.000",
        "dateUtc": "2018-09-01T17:00:00.000Z"
      },
      "arrivalDate": {
        "dateLocal": "2018-09-01T23:50:00.000",
        "dateUtc": "2018-09-01T20:50:00.000Z"
      },
      "status": "A",
      "schedule": {
        "flightType": "J",
        "serviceClasses": "RJY",
        "restrictions": ""
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateLocal": "2018-09-01T20:00:00.000",
          "dateUtc": "2018-09-01T17:00:00.000Z"
        },
        "publishedArrival": {
          "dateLocal": "2018-09-01T23:50:00.000",
          "dateUtc": "2018-09-01T20:50:00.000Z"
        },
        "scheduledGateDeparture": {
          "dateLocal": "2018-09-01T20:00:00.000",
          "dateUtc": "2018-09-01T17:00:00.000Z"
        },
        "estimatedGateDeparture": {
          "dateLocal": "2018-09-01T19:56:00.000",
          "dateUtc": "2018-09-01T16:56:00.000Z"
        },
        "actualGateDeparture": {
          "dateLocal": "2018-09-01T19:56:00.000",
          "dateUtc": "2018-09-01T16:56:00.000Z"
        },
        "estimatedRunwayDeparture": {
          "dateLocal": "2018-09-01T20:18:00.000",
          "dateUtc": "2018-09-01T17:18:00.000Z"
        },
        "actualRunwayDeparture": {
          "dateLocal": "2018-09-01T20:18:00.000",
          "dateUtc": "2018-09-01T17:18:00.000Z"
        },
        "scheduledGateArrival": {
          "dateLocal": "2018-09-01T23:50:00.000",
          "dateUtc": "2018-09-01T20:50:00.000Z"
        },
        "estimatedGateArrival": {
          "dateLocal": "2018-09-01T23:50:00.000",
          "dateUtc": "2018-09-01T20:50:00.000Z"
        }
      },
      "flightDurations": {
        "scheduledBlockMinutes": 230,
        "taxiOutMinutes": 22
      },
      "airportResources": {
        "departureTerminal": "E",
        "departureGate": "43"
      },
      "flightEquipment": {
        "scheduledEquipment": {
          "iata": "73H",
          "name": "Boeing 737-800 (winglets) Passenger/BBJ2",
          "turboProp": false,
          "jet": true,
          "widebody": false,
          "regional": false
        },
        "actualEquipment": {
          "iata": "738",
          "name": "Boeing 737-800 Passenger",
          "turboProp": false,
          "jet": true,
          "widebody": false,
          "regional": false
        },
        "tailNumber": "VQ-BHC"
      }
    },
    {
      "flightId": 971824311,
      "carrier": {
        "fs": "SU",
        "iata": "SU",
        "icao": "AFL",
        "name": "Aeroflot",
        "phoneNumber": "+7 495 223-55-55",
        "active": true
      },
      "flightNumber": "30",
      "departureAirport": {
        "fs": "SVO",
        "iata": "SVO",
        "icao": "UUEE",
        "name": "Sheremetyevo International Airport",
        "city": "Moscow",
        "cityCode": "MOW",
        "countryCode": "RU",
        "countryName": "Russian Federation",
        "regionName": "Europe",
        "timeZoneRegionName": "Europe/Moscow",
        "localTime": "2018-09-01T21:01:35.313",
        "utcOffsetHours": 3,
        "latitude": 55.966324,
        "longitude": 37.416574,
        "elevationFeet": 630,
        "classification": 1,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/SVO?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/SVO?codeType=fs"
      },
      "arrivalAirport": {
        "fs": "LED",
        "iata": "LED",
        "icao": "ULLI",
        "name": "Pulkovo Airport",
        "city": "Saint Petersburg",
        "cityCode": "LED",
        "countryCode": "RU",
        "countryName": "Russian Federation",
        "regionName": "Europe",
        "timeZoneRegionName": "Europe/Moscow",
        "localTime": "2018-09-01T21:01:35.313",
        "utcOffsetHours": 3,
        "latitude": 59.799847,
        "longitude": 30.270505,
        "elevationFeet": 76,
        "classification": 2,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/LED?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/LED?codeType=fs"
      },
      "departureDate": {
        "dateLocal": "2018-09-01T20:30:00.000",
        "dateUtc": "2018-09-01T17:30:00.000Z"
      },
      "arrivalDate": {
        "dateLocal": "2018-09-01T21:55:00.000",
        "dateUtc": "2018-09-01T18:55:00.000Z"
      },
      "status": "A",
      "schedule": {
        "flightType": "J",
        "serviceClasses": "RFJY",
        "restrictions": ""
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateLocal": "2018-09-01T20:30:00.000",
          "dateUtc": "2018-09-01T17:30:00.000Z"
        },
        "publishedArrival": {
          "dateLocal": "2018-09-01T21:55:00.000",
          "dateUtc": "2018-09-01T18:55:00.000Z"
        },
        "scheduledGateDeparture": {
          "dateLocal": "2018-09-01T20:30:00.000",
          "dateUtc": "2018-09-01T17:30:00.000Z"
        },
        "estimatedGateDeparture": {
          "dateLocal": "2018-09-01T20:25:00.000",
          "dateUtc": "2018-09-01T17:25:00.000Z"
        },
        "actualGateDeparture": {
          "dateLocal": "2018-09-01T20:25:00.000",
          "dateUtc": "2018-09-01T17:25:00.000Z"
        },
        "estimatedRunwayDeparture": {
          "dateLocal": "2018-09-01T20:47:00.000",
          "dateUtc": "2018-09-01T17:47:00.000Z"
        },
        "actualRunwayDeparture": {
          "dateLocal": "2018-09-01T20:47:00.000",
          "dateUtc": "2018-09-01T17:47:00.000Z"
        },
        "scheduledGateArrival": {
          "dateLocal": "2018-09-01T21:55:00.000",
          "dateUtc": "2018-09-01T18:55:00.000Z"
        },
        "estimatedGateArrival": {
          "dateLocal": "2018-09-01T22:01:00.000",
          "dateUtc": "2018-09-01T19:01:00.000Z"
        }
      },
      "codeshares": [
        {
          "carrier": {
            "fs": "AZ",
            "iata": "AZ",
            "icao": "AZA",
            "name": "Alitalia",
            "phoneNumber": "1-800-223-5730",
            "active": true
          },
          "flightNumber": "3038",
          "relationship": "L"
        },
        {
          "carrier": {
            "fs": "MU",
            "iata": "MU",
            "icao": "CES",
            "name": "China Eastern Airlines",
            "phoneNumber": "+86 21 95108",
            "active": true
          },
          "flightNumber": "8171",
          "relationship": "L"
        }
      ],
      "delays": {
        "arrivalGateDelayMinutes": 6
      },
      "flightDurations": {
        "scheduledBlockMinutes": 85,
        "taxiOutMinutes": 22
      },
      "airportResources": {
        "departureTerminal": "D",
        "departureGate": "13",
        "arrivalTerminal": "1"
      },
      "flightEquipment": {
        "scheduledEquipment": {
          "iata": "32A",
          "name": "Airbus A320 (sharklets)",
          "turboProp": false,
          "jet": true,
          "widebody": false,
          "regional": false
        },
        "actualEquipment": {
          "iata": "320",
          "name": "Airbus A320",
          "turboProp": false,
          "jet": true,
          "widebody": false,
          "regional": false
        },
        "tailNumber": "VP-BTC"
      }
    },
    {
      "flightId": 971824225,
      "carrier": {
        "fs": "SU",
        "iata": "SU",
        "icao": "AFL",
        "name": "Aeroflot",
        "phoneNumber": "+7 495 223-55-55",
        "active": true
      },
      "flightNumber": "32",
      "departureAirport": {
        "fs": "SVO",
        "iata": "SVO",
        "icao": "UUEE",
        "name": "Sheremetyevo International Airport",
        "city": "Moscow",
        "cityCode": "MOW",
        "countryCode": "RU",
        "countryName": "Russian Federation",
        "regionName": "Europe",
        "timeZoneRegionName": "Europe/Moscow",
        "localTime": "2018-09-01T21:01:35.314",
        "utcOffsetHours": 3,
        "latitude": 55.966324,
        "longitude": 37.416574,
        "elevationFeet": 630,
        "classification": 1,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/SVO?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/SVO?codeType=fs"
      },
      "arrivalAirport": {
        "fs": "LED",
        "iata": "LED",
        "icao": "ULLI",
        "name": "Pulkovo Airport",
        "city": "Saint Petersburg",
        "cityCode": "LED",
        "countryCode": "RU",
        "countryName": "Russian Federation",
        "regionName": "Europe",
        "timeZoneRegionName": "Europe/Moscow",
        "localTime": "2018-09-01T21:01:35.314",
        "utcOffsetHours": 3,
        "latitude": 59.799847,
        "longitude": 30.270505,
        "elevationFeet": 76,
        "classification": 2,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/LED?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/LED?codeType=fs"
      },
      "departureDate": {
        "dateLocal": "2018-09-01T21:00:00.000",
        "dateUtc": "2018-09-01T18:00:00.000Z"
      },
      "arrivalDate": {
        "dateLocal": "2018-09-01T22:25:00.000",
        "dateUtc": "2018-09-01T19:25:00.000Z"
      },
      "status": "S",
      "schedule": {
        "flightType": "J",
        "serviceClasses": "RFJY",
        "restrictions": ""
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateLocal": "2018-09-01T21:00:00.000",
          "dateUtc": "2018-09-01T18:00:00.000Z"
        },
        "publishedArrival": {
          "dateLocal": "2018-09-01T22:25:00.000",
          "dateUtc": "2018-09-01T19:25:00.000Z"
        },
        "scheduledGateDeparture": {
          "dateLocal": "2018-09-01T21:00:00.000",
          "dateUtc": "2018-09-01T18:00:00.000Z"
        },
        "estimatedGateDeparture": {
          "dateLocal": "2018-09-01T21:00:00.000",
          "dateUtc": "2018-09-01T18:00:00.000Z"
        },
        "scheduledGateArrival": {
          "dateLocal": "2018-09-01T22:25:00.000",
          "dateUtc": "2018-09-01T19:25:00.000Z"
        },
        "estimatedGateArrival": {
          "dateLocal": "2018-09-01T22:34:00.000",
          "dateUtc": "2018-09-01T19:34:00.000Z"
        }
      },
      "delays": {
        "arrivalGateDelayMinutes": 9
      },
      "flightDurations": {
        "scheduledBlockMinutes": 85
      },
      "airportResources": {
        "departureTerminal": "D",
        "departureGate": "3",
        "arrivalTerminal": "1"
      },
      "flightEquipment": {
        "scheduledEquipment": {
          "iata": "320",
          "name": "Airbus A320",
          "turboProp": false,
          "jet": true,
          "widebody": false,
          "regional": false
        },
        "actualEquipment": {
          "iata": "320",
          "name": "Airbus A320",
          "turboProp": false,
          "jet": true,
          "widebody": false,
          "regional": false
        }
      }
    },
    {
      "flightId": 971823746,
      "carrier": {
        "fs": "SU",
        "iata": "SU",
        "icao": "AFL",
        "name": "Aeroflot",
        "phoneNumber": "+7 495 223-55-55",
        "active": true
      },
      "flightNumber": "1314",
      "departureAirport": {
        "fs": "SVO",
        "iata": "SVO",
        "icao": "UUEE",
        "name": "Sheremetyevo International Airport",
        "city": "Moscow",
        "cityCode": "MOW",
        "countryCode": "RU",
        "countryName": "Russian Federation",
        "regionName": "Europe",
        "timeZoneRegionName": "Europe/Moscow",
        "localTime": "2018-09-01T21:01:35.314",
        "utcOffsetHours": 3,
        "latitude": 55.966324,
        "longitude": 37.416574,
        "elevationFeet": 630,
        "classification": 1,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/SVO?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/SVO?codeType=fs"
      },
      "arrivalAirport": {
        "fs": "MRV",
        "iata": "MRV",
        "icao": "URMM",
        "name": "Mineralnye Vody Airport",
        "city": "Mineralnye Vody",
        "cityCode": "MRV",
        "countryCode": "RU",
        "countryName": "Russian Federation",
        "regionName": "Europe",
        "timeZoneRegionName": "Europe/Moscow",
        "localTime": "2018-09-01T21:01:35.314",
        "utcOffsetHours": 3,
        "latitude": 44.218354,
        "longitude": 43.088178,
        "elevationFeet": 1080,
        "classification": 3,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/MRV?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/MRV?codeType=fs"
      },
      "departureDate": {
        "dateLocal": "2018-09-01T20:55:00.000",
        "dateUtc": "2018-09-01T17:55:00.000Z"
      },
      "arrivalDate": {
        "dateLocal": "2018-09-01T23:20:00.000",
        "dateUtc": "2018-09-01T20:20:00.000Z"
      },
      "status": "S",
      "schedule": {
        "flightType": "J",
        "serviceClasses": "RFJY",
        "restrictions": ""
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateLocal": "2018-09-01T20:55:00.000",
          "dateUtc": "2018-09-01T17:55:00.000Z"
        },
        "publishedArrival": {
          "dateLocal": "2018-09-01T23:20:00.000",
          "dateUtc": "2018-09-01T20:20:00.000Z"
        },
        "scheduledGateDeparture": {
          "dateLocal": "2018-09-01T20:55:00.000",
          "dateUtc": "2018-09-01T17:55:00.000Z"
        },
        "estimatedGateDeparture": {
          "dateLocal": "2018-09-01T20:55:00.000",
          "dateUtc": "2018-09-01T17:55:00.000Z"
        },
        "scheduledGateArrival": {
          "dateLocal": "2018-09-01T23:20:00.000",
          "dateUtc": "2018-09-01T20:20:00.000Z"
        },
        "estimatedGateArrival": {
          "dateLocal": "2018-09-01T23:14:00.000",
          "dateUtc": "2018-09-01T20:14:00.000Z"
        }
      },
      "codeshares": [
        {
          "carrier": {
            "fs": "AF",
            "iata": "AF",
            "icao": "AFR",
            "name": "Air France",
            "phoneNumber": "1-800-237-2747",
            "active": true
          },
          "flightNumber": "4610",
          "relationship": "L"
        },
        {
          "carrier": {
            "fs": "KL",
            "iata": "KL",
            "icao": "KLM",
            "name": "KLM",
            "phoneNumber": "1-800-447-4747",
            "active": true
          },
          "flightNumber": "2912",
          "relationship": "L"
        }
      ],
      "flightDurations": {
        "scheduledBlockMinutes": 145
      },
      "airportResources": {
        "departureTerminal": "B",
        "departureGate": "115",
        "arrivalTerminal": "А"
      },
      "flightEquipment": {
        "scheduledEquipment": {
          "iata": "73H",
          "name": "Boeing 737-800 (winglets) Passenger/BBJ2",
          "turboProp": false,
          "jet": true,
          "widebody": false,
          "regional": false
        },
        "actualEquipment": {
          "iata": "73G",
          "name": "Boeing 737-700 Passenger",
          "turboProp": false,
          "jet": true,
          "widebody": false,
          "regional": false
        }
      }
    },
    {
      "flightId": 971824029,
      "carrier": {
        "fs": "SU",
        "iata": "SU",
        "icao": "AFL",
        "name": "Aeroflot",
        "phoneNumber": "+7 495 223-55-55",
        "active": true
      },
      "flightNumber": "2038",
      "departureAirport": {
        "fs": "SVO",
        "iata": "SVO",
        "icao": "UUEE",
        "name": "Sheremetyevo International Airport",
        "city": "Moscow",
        "cityCode": "MOW",
        "countryCode": "RU",
        "countryName": "Russian Federation",
        "regionName": "Europe",
        "timeZoneRegionName": "Europe/Moscow",
        "localTime": "2018-09-01T21:01:35.314",
        "utcOffsetHours": 3,
        "latitude": 55.966324,
        "longitude": 37.416574,
        "elevationFeet": 630,
        "classification": 1,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/SVO?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/SVO?codeType=fs"
      },
      "arrivalAirport": {
        "fs": "OTP",
        "iata": "OTP",
        "icao": "LROP",
        "name": "Bucharest Henri Coanda International Airport",
        "city": "Bucharest",
        "cityCode": "BUH",
        "countryCode": "RO",
        "countryName": "Romania",
        "regionName": "Europe",
        "timeZoneRegionName": "Europe/Bucharest",
        "localTime": "2018-09-01T21:01:35.314",
        "utcOffsetHours": 3,
        "latitude": 44.571155,
        "longitude": 26.077063,
        "elevationFeet": 314,
        "classification": 2,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/OTP?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/OTP?codeType=fs"
      },
      "departureDate": {
        "dateLocal": "2018-09-01T20:35:00.000",
        "dateUtc": "2018-09-01T17:35:00.000Z"
      },
      "arrivalDate": {
        "dateLocal": "2018-09-01T23:45:00.000",
        "dateUtc": "2018-09-01T20:45:00.000Z"
      },
      "status": "A",
      "schedule": {
        "flightType": "J",
        "serviceClasses": "RJY",
        "restrictions": ""
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateLocal": "2018-09-01T20:35:00.000",
          "dateUtc": "2018-09-01T17:35:00.000Z"
        },
        "publishedArrival": {
          "dateLocal": "2018-09-01T23:45:00.000",
          "dateUtc": "2018-09-01T20:45:00.000Z"
        },
        "scheduledGateDeparture": {
          "dateLocal": "2018-09-01T20:35:00.000",
          "dateUtc": "2018-09-01T17:35:00.000Z"
        },
        "estimatedGateDeparture": {
          "dateLocal": "2018-09-01T20:26:00.000",
          "dateUtc": "2018-09-01T17:26:00.000Z"
        },
        "actualGateDeparture": {
          "dateLocal": "2018-09-01T20:26:00.000",
          "dateUtc": "2018-09-01T17:26:00.000Z"
        },
        "estimatedRunwayDeparture": {
          "dateLocal": "2018-09-01T20:44:00.000",
          "dateUtc": "2018-09-01T17:44:00.000Z"
        },
        "actualRunwayDeparture": {
          "dateLocal": "2018-09-01T20:44:00.000",
          "dateUtc": "2018-09-01T17:44:00.000Z"
        },
        "scheduledGateArrival": {
          "dateLocal": "2018-09-01T23:45:00.000",
          "dateUtc": "2018-09-01T20:45:00.000Z"
        },
        "estimatedGateArrival": {
          "dateLocal": "2018-09-01T23:43:00.000",
          "dateUtc": "2018-09-01T20:43:00.000Z"
        }
      },
      "codeshares": [
        {
          "carrier": {
            "fs": "RO",
            "iata": "RO",
            "icao": "ROT",
            "name": "TAROM",
            "active": true
          },
          "flightNumber": "9204",
          "relationship": "L"
        }
      ],
      "flightDurations": {
        "scheduledBlockMinutes": 190,
        "taxiOutMinutes": 18
      },
      "airportResources": {
        "departureTerminal": "E",
        "departureGate": "38"
      },
      "flightEquipment": {
        "scheduledEquipment": {
          "iata": "SU9",
          "name": "Sukhoi Superjet 100-95",
          "turboProp": false,
          "jet": true,
          "widebody": false,
          "regional": false
        },
        "actualEquipment": {
          "iata": "SU9",
          "name": "Sukhoi Superjet 100-95",
          "turboProp": false,
          "jet": true,
          "widebody": false,
          "regional": false
        },
        "tailNumber": "RA-89105"
      }
    }
  ]
}
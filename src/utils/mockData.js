export default {
  "request": {
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
        "localTime": "2018-09-01T19:49:14.447",
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
    "url": "https://api.flightstats.com/flex/flightstatus/rest/v2/json/airport/status/SVO/arr/2018/9/1/20"
  },
  "appendix": {},
  "flightStatuses": [
    {
      "flightId": 971824269,
      "carrier": {
        "fs": "SU",
        "iata": "SU",
        "icao": "AFL",
        "name": "Aeroflot",
        "phoneNumber": "+7 495 223-55-55",
        "active": true
      },
      "flightNumber": "2603",
      "departureAirport": {
        "fs": "MAD",
        "iata": "MAD",
        "icao": "LEMD",
        "name": "Adolfo Suarez Madrid-Barajas Airport",
        "city": "Madrid",
        "cityCode": "MAD",
        "stateCode": "SP",
        "countryCode": "ES",
        "countryName": "Spain and Canary Islands",
        "regionName": "Europe",
        "timeZoneRegionName": "Europe/Madrid",
        "localTime": "2018-09-01T18:49:14.496",
        "utcOffsetHours": 2,
        "latitude": 40.49027,
        "longitude": -3.564479,
        "elevationFeet": 1953,
        "classification": 1,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/MAD?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/MAD?codeType=fs"
      },
      "arrivalAirport": {
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
        "localTime": "2018-09-01T19:49:14.496",
        "utcOffsetHours": 3,
        "latitude": 55.966324,
        "longitude": 37.416574,
        "elevationFeet": 630,
        "classification": 1,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/SVO?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/SVO?codeType=fs"
      },
      "departureDate": {
        "dateLocal": "2018-09-01T14:15:00.000",
        "dateUtc": "2018-09-01T12:15:00.000Z"
      },
      "arrivalDate": {
        "dateLocal": "2018-09-01T20:00:00.000",
        "dateUtc": "2018-09-01T17:00:00.000Z"
      },
      "status": "A",
      "schedule": {
        "flightType": "J",
        "serviceClasses": "RJY",
        "restrictions": ""
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateLocal": "2018-09-01T14:15:00.000",
          "dateUtc": "2018-09-01T12:15:00.000Z"
        },
        "publishedArrival": {
          "dateLocal": "2018-09-01T20:00:00.000",
          "dateUtc": "2018-09-01T17:00:00.000Z"
        },
        "scheduledGateDeparture": {
          "dateLocal": "2018-09-01T14:15:00.000",
          "dateUtc": "2018-09-01T12:15:00.000Z"
        },
        "estimatedGateDeparture": {
          "dateLocal": "2018-09-01T14:07:00.000",
          "dateUtc": "2018-09-01T12:07:00.000Z"
        },
        "actualGateDeparture": {
          "dateLocal": "2018-09-01T14:07:00.000",
          "dateUtc": "2018-09-01T12:07:00.000Z"
        },
        "estimatedRunwayDeparture": {
          "dateLocal": "2018-09-01T14:35:00.000",
          "dateUtc": "2018-09-01T12:35:00.000Z"
        },
        "actualRunwayDeparture": {
          "dateLocal": "2018-09-01T14:35:00.000",
          "dateUtc": "2018-09-01T12:35:00.000Z"
        },
        "scheduledGateArrival": {
          "dateLocal": "2018-09-01T20:00:00.000",
          "dateUtc": "2018-09-01T17:00:00.000Z"
        },
        "estimatedGateArrival": {
          "dateLocal": "2018-09-01T20:13:00.000",
          "dateUtc": "2018-09-01T17:13:00.000Z"
        }
      },
      "codeshares": [
        {
          "carrier": {
            "fs": "AR",
            "iata": "AR",
            "icao": "ARG",
            "name": "Aerolineas Argentinas",
            "phoneNumber": "1-800-333-0276",
            "active": true
          },
          "flightNumber": "7384",
          "relationship": "L"
        },
        {
          "carrier": {
            "fs": "UX",
            "iata": "UX",
            "icao": "AEA",
            "name": "Air Europa",
            "phoneNumber": "1.800.238.7672",
            "active": true
          },
          "flightNumber": "3295",
          "relationship": "L"
        }
      ],
      "delays": {
        "arrivalGateDelayMinutes": 13
      },
      "flightDurations": {
        "scheduledBlockMinutes": 285,
        "taxiOutMinutes": 28
      },
      "airportResources": {
        "departureTerminal": "1",
        "arrivalTerminal": "D",
        "arrivalGate": "27",
        "baggage": "6"
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
        "tailNumber": "VP-BIF"
      }
    },
    {
      "flightId": 971824194,
      "carrier": {
        "fs": "SU",
        "iata": "SU",
        "icao": "AFL",
        "name": "Aeroflot",
        "phoneNumber": "+7 495 223-55-55",
        "active": true
      },
      "flightNumber": "2407",
      "departureAirport": {
        "fs": "FCO",
        "iata": "FCO",
        "icao": "LIRF",
        "name": "Leonardo da Vinci-Fiumicino Airport",
        "city": "Rome",
        "cityCode": "ROM",
        "countryCode": "IT",
        "countryName": "Italy",
        "regionName": "Europe",
        "timeZoneRegionName": "Europe/Rome",
        "localTime": "2018-09-01T18:49:14.496",
        "utcOffsetHours": 2,
        "latitude": 41.794594,
        "longitude": 12.250346,
        "elevationFeet": 14,
        "classification": 1,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/FCO?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/FCO?codeType=fs"
      },
      "arrivalAirport": {
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
        "localTime": "2018-09-01T19:49:14.496",
        "utcOffsetHours": 3,
        "latitude": 55.966324,
        "longitude": 37.416574,
        "elevationFeet": 630,
        "classification": 1,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/SVO?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/SVO?codeType=fs"
      },
      "departureDate": {
        "dateLocal": "2018-09-01T15:30:00.000",
        "dateUtc": "2018-09-01T13:30:00.000Z"
      },
      "arrivalDate": {
        "dateLocal": "2018-09-01T20:15:00.000",
        "dateUtc": "2018-09-01T17:15:00.000Z"
      },
      "status": "A",
      "schedule": {
        "flightType": "J",
        "serviceClasses": "RJY",
        "restrictions": ""
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateLocal": "2018-09-01T15:30:00.000",
          "dateUtc": "2018-09-01T13:30:00.000Z"
        },
        "publishedArrival": {
          "dateLocal": "2018-09-01T20:15:00.000",
          "dateUtc": "2018-09-01T17:15:00.000Z"
        },
        "scheduledGateDeparture": {
          "dateLocal": "2018-09-01T15:30:00.000",
          "dateUtc": "2018-09-01T13:30:00.000Z"
        },
        "estimatedGateDeparture": {
          "dateLocal": "2018-09-01T15:45:00.000",
          "dateUtc": "2018-09-01T13:45:00.000Z"
        },
        "actualGateDeparture": {
          "dateLocal": "2018-09-01T15:45:00.000",
          "dateUtc": "2018-09-01T13:45:00.000Z"
        },
        "estimatedRunwayDeparture": {
          "dateLocal": "2018-09-01T16:19:00.000",
          "dateUtc": "2018-09-01T14:19:00.000Z"
        },
        "actualRunwayDeparture": {
          "dateLocal": "2018-09-01T16:19:00.000",
          "dateUtc": "2018-09-01T14:19:00.000Z"
        },
        "scheduledGateArrival": {
          "dateLocal": "2018-09-01T20:15:00.000",
          "dateUtc": "2018-09-01T17:15:00.000Z"
        },
        "estimatedGateArrival": {
          "dateLocal": "2018-09-01T20:52:00.000",
          "dateUtc": "2018-09-01T17:52:00.000Z"
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
          "flightNumber": "7018",
          "relationship": "L"
        }
      ],
      "delays": {
        "departureGateDelayMinutes": 15,
        "arrivalGateDelayMinutes": 37
      },
      "flightDurations": {
        "scheduledBlockMinutes": 225,
        "taxiOutMinutes": 34
      },
      "airportResources": {
        "departureTerminal": "3",
        "departureGate": "E21",
        "arrivalTerminal": "D",
        "arrivalGate": "28",
        "baggage": "8"
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
        "tailNumber": "VP-BCF"
      }
    },
    {
      "flightId": 971824349,
      "carrier": {
        "fs": "SU",
        "iata": "SU",
        "icao": "AFL",
        "name": "Aeroflot",
        "phoneNumber": "+7 495 223-55-55",
        "active": true
      },
      "flightNumber": "521",
      "departureAirport": {
        "fs": "DXB",
        "iata": "DXB",
        "icao": "OMDB",
        "name": "Dubai Airport",
        "city": "Dubai",
        "cityCode": "DXB",
        "countryCode": "AE",
        "countryName": "United Arab Emirates",
        "regionName": "Middle East",
        "timeZoneRegionName": "Asia/Dubai",
        "localTime": "2018-09-01T20:49:14.497",
        "utcOffsetHours": 4,
        "latitude": 25.248664,
        "longitude": 55.352916,
        "elevationFeet": 34,
        "classification": 1,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/DXB?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/DXB?codeType=fs"
      },
      "arrivalAirport": {
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
        "localTime": "2018-09-01T19:49:14.497",
        "utcOffsetHours": 3,
        "latitude": 55.966324,
        "longitude": 37.416574,
        "elevationFeet": 630,
        "classification": 1,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/SVO?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/SVO?codeType=fs"
      },
      "departureDate": {
        "dateLocal": "2018-09-01T15:50:00.000",
        "dateUtc": "2018-09-01T11:50:00.000Z"
      },
      "arrivalDate": {
        "dateLocal": "2018-09-01T20:30:00.000",
        "dateUtc": "2018-09-01T17:30:00.000Z"
      },
      "status": "A",
      "schedule": {
        "flightType": "J",
        "serviceClasses": "RJY",
        "restrictions": ""
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateLocal": "2018-09-01T15:50:00.000",
          "dateUtc": "2018-09-01T11:50:00.000Z"
        },
        "publishedArrival": {
          "dateLocal": "2018-09-01T20:30:00.000",
          "dateUtc": "2018-09-01T17:30:00.000Z"
        },
        "scheduledGateDeparture": {
          "dateLocal": "2018-09-01T15:50:00.000",
          "dateUtc": "2018-09-01T11:50:00.000Z"
        },
        "estimatedGateDeparture": {
          "dateLocal": "2018-09-01T15:47:00.000",
          "dateUtc": "2018-09-01T11:47:00.000Z"
        },
        "actualGateDeparture": {
          "dateLocal": "2018-09-01T15:47:00.000",
          "dateUtc": "2018-09-01T11:47:00.000Z"
        },
        "estimatedRunwayDeparture": {
          "dateLocal": "2018-09-01T16:16:00.000",
          "dateUtc": "2018-09-01T12:16:00.000Z"
        },
        "actualRunwayDeparture": {
          "dateLocal": "2018-09-01T16:16:00.000",
          "dateUtc": "2018-09-01T12:16:00.000Z"
        },
        "scheduledGateArrival": {
          "dateLocal": "2018-09-01T20:30:00.000",
          "dateUtc": "2018-09-01T17:30:00.000Z"
        },
        "estimatedGateArrival": {
          "dateLocal": "2018-09-01T20:25:00.000",
          "dateUtc": "2018-09-01T17:25:00.000Z"
        }
      },
      "codeshares": [
        {
          "carrier": {
            "fs": "KQ",
            "iata": "KQ",
            "icao": "KQA",
            "name": "Kenya Airways",
            "phoneNumber": "866-536-9224",
            "active": true
          },
          "flightNumber": "3504",
          "relationship": "L"
        }
      ],
      "flightDurations": {
        "scheduledBlockMinutes": 340,
        "taxiOutMinutes": 29
      },
      "airportResources": {
        "departureTerminal": "1",
        "arrivalTerminal": "E",
        "arrivalGate": "35"
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
        "tailNumber": "VP-BZA"
      }
    },
    {
      "flightId": 971824201,
      "carrier": {
        "fs": "SU",
        "iata": "SU",
        "icao": "AFL",
        "name": "Aeroflot",
        "phoneNumber": "+7 495 223-55-55",
        "active": true
      },
      "flightNumber": "2463",
      "departureAirport": {
        "fs": "CDG",
        "iata": "CDG",
        "icao": "LFPG",
        "name": "Charles de Gaulle Airport",
        "street1": "95711, Roissy Charles de Gaulle",
        "city": "Paris",
        "cityCode": "PAR",
        "countryCode": "FR",
        "countryName": "France",
        "regionName": "Europe",
        "timeZoneRegionName": "Europe/Paris",
        "localTime": "2018-09-01T18:49:14.497",
        "utcOffsetHours": 2,
        "latitude": 49.003196,
        "longitude": 2.567023,
        "elevationFeet": 387,
        "classification": 1,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/CDG?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/CDG?codeType=fs"
      },
      "arrivalAirport": {
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
        "localTime": "2018-09-01T19:49:14.497",
        "utcOffsetHours": 3,
        "latitude": 55.966324,
        "longitude": 37.416574,
        "elevationFeet": 630,
        "classification": 1,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/SVO?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/SVO?codeType=fs"
      },
      "departureDate": {
        "dateLocal": "2018-09-01T15:50:00.000",
        "dateUtc": "2018-09-01T13:50:00.000Z"
      },
      "arrivalDate": {
        "dateLocal": "2018-09-01T20:30:00.000",
        "dateUtc": "2018-09-01T17:30:00.000Z"
      },
      "status": "A",
      "schedule": {
        "flightType": "J",
        "serviceClasses": "RJY",
        "restrictions": ""
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateLocal": "2018-09-01T15:50:00.000",
          "dateUtc": "2018-09-01T13:50:00.000Z"
        },
        "publishedArrival": {
          "dateLocal": "2018-09-01T20:30:00.000",
          "dateUtc": "2018-09-01T17:30:00.000Z"
        },
        "scheduledGateDeparture": {
          "dateLocal": "2018-09-01T15:50:00.000",
          "dateUtc": "2018-09-01T13:50:00.000Z"
        },
        "estimatedGateDeparture": {
          "dateLocal": "2018-09-01T15:35:00.000",
          "dateUtc": "2018-09-01T13:35:00.000Z"
        },
        "actualGateDeparture": {
          "dateLocal": "2018-09-01T15:35:00.000",
          "dateUtc": "2018-09-01T13:35:00.000Z"
        },
        "estimatedRunwayDeparture": {
          "dateLocal": "2018-09-01T16:23:00.000",
          "dateUtc": "2018-09-01T14:23:00.000Z"
        },
        "actualRunwayDeparture": {
          "dateLocal": "2018-09-01T16:23:00.000",
          "dateUtc": "2018-09-01T14:23:00.000Z"
        },
        "scheduledGateArrival": {
          "dateLocal": "2018-09-01T20:30:00.000",
          "dateUtc": "2018-09-01T17:30:00.000Z"
        },
        "estimatedGateArrival": {
          "dateLocal": "2018-09-01T20:37:00.000",
          "dateUtc": "2018-09-01T17:37:00.000Z"
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
          "flightNumber": "4850",
          "relationship": "L"
        }
      ],
      "delays": {
        "arrivalGateDelayMinutes": 7
      },
      "flightDurations": {
        "scheduledBlockMinutes": 220,
        "taxiOutMinutes": 48
      },
      "airportResources": {
        "departureTerminal": "2C",
        "departureGate": "C82",
        "arrivalTerminal": "D",
        "arrivalGate": "26",
        "baggage": "7"
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
          "iata": "32B",
          "name": "Airbus A321 (sharklets)",
          "turboProp": false,
          "jet": true,
          "widebody": false,
          "regional": false
        },
        "tailNumber": "VQ-BTU"
      }
    },
    {
      "flightId": 971824071,
      "carrier": {
        "fs": "SU",
        "iata": "SU",
        "icao": "AFL",
        "name": "Aeroflot",
        "phoneNumber": "+7 495 223-55-55",
        "active": true
      },
      "flightNumber": "2127",
      "departureAirport": {
        "fs": "HER",
        "iata": "HER",
        "icao": "LGIR",
        "name": "Heraklion Airport",
        "city": "Heraklion",
        "cityCode": "HER",
        "countryCode": "GR",
        "countryName": "Greece",
        "regionName": "Europe",
        "timeZoneRegionName": "Europe/Athens",
        "localTime": "2018-09-01T19:49:14.497",
        "utcOffsetHours": 3,
        "latitude": 35.33663,
        "longitude": 25.174193,
        "elevationFeet": 115,
        "classification": 4,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/HER?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/HER?codeType=fs"
      },
      "arrivalAirport": {
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
        "localTime": "2018-09-01T19:49:14.497",
        "utcOffsetHours": 3,
        "latitude": 55.966324,
        "longitude": 37.416574,
        "elevationFeet": 630,
        "classification": 1,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/SVO?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/SVO?codeType=fs"
      },
      "departureDate": {
        "dateLocal": "2018-09-01T16:20:00.000",
        "dateUtc": "2018-09-01T13:20:00.000Z"
      },
      "arrivalDate": {
        "dateLocal": "2018-09-01T20:20:00.000",
        "dateUtc": "2018-09-01T17:20:00.000Z"
      },
      "status": "A",
      "schedule": {
        "flightType": "J",
        "serviceClasses": "RJY",
        "restrictions": ""
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateLocal": "2018-09-01T16:20:00.000",
          "dateUtc": "2018-09-01T13:20:00.000Z"
        },
        "publishedArrival": {
          "dateLocal": "2018-09-01T20:20:00.000",
          "dateUtc": "2018-09-01T17:20:00.000Z"
        },
        "scheduledGateDeparture": {
          "dateLocal": "2018-09-01T16:20:00.000",
          "dateUtc": "2018-09-01T13:20:00.000Z"
        },
        "estimatedGateDeparture": {
          "dateLocal": "2018-09-01T16:11:00.000",
          "dateUtc": "2018-09-01T13:11:00.000Z"
        },
        "actualGateDeparture": {
          "dateLocal": "2018-09-01T16:11:00.000",
          "dateUtc": "2018-09-01T13:11:00.000Z"
        },
        "estimatedRunwayDeparture": {
          "dateLocal": "2018-09-01T16:31:00.000",
          "dateUtc": "2018-09-01T13:31:00.000Z"
        },
        "actualRunwayDeparture": {
          "dateLocal": "2018-09-01T16:31:00.000",
          "dateUtc": "2018-09-01T13:31:00.000Z"
        },
        "scheduledGateArrival": {
          "dateLocal": "2018-09-01T20:20:00.000",
          "dateUtc": "2018-09-01T17:20:00.000Z"
        },
        "estimatedGateArrival": {
          "dateLocal": "2018-09-01T20:23:00.000",
          "dateUtc": "2018-09-01T17:23:00.000Z"
        }
      },
      "delays": {
        "arrivalGateDelayMinutes": 3
      },
      "flightDurations": {
        "scheduledBlockMinutes": 240,
        "taxiOutMinutes": 20
      },
      "airportResources": {
        "arrivalTerminal": "E",
        "arrivalGate": "34"
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
        "tailNumber": "VP-BEA"
      }
    },
    {
      "flightId": 971810561,
      "carrier": {
        "fs": "N4*",
        "iata": "N4",
        "icao": "NWS",
        "name": "Nordwind Airlines",
        "active": true
      },
      "flightNumber": "802",
      "departureAirport": {
        "fs": "DUS",
        "iata": "DUS",
        "icao": "EDDL",
        "name": "Dusseldorf International Airport",
        "city": "Dusseldorf",
        "cityCode": "DUS",
        "countryCode": "DE",
        "countryName": "Germany",
        "regionName": "Europe",
        "timeZoneRegionName": "Europe/Berlin",
        "localTime": "2018-09-01T18:49:14.498",
        "utcOffsetHours": 2,
        "latitude": 51.278327,
        "longitude": 6.76558,
        "elevationFeet": 147,
        "classification": 1,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/DUS?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/DUS?codeType=fs"
      },
      "arrivalAirport": {
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
        "localTime": "2018-09-01T19:49:14.498",
        "utcOffsetHours": 3,
        "latitude": 55.966324,
        "longitude": 37.416574,
        "elevationFeet": 630,
        "classification": 1,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/SVO?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/SVO?codeType=fs"
      },
      "departureDate": {
        "dateLocal": "2018-09-01T16:25:00.000",
        "dateUtc": "2018-09-01T14:25:00.000Z"
      },
      "arrivalDate": {
        "dateLocal": "2018-09-01T20:40:00.000",
        "dateUtc": "2018-09-01T17:40:00.000Z"
      },
      "status": "A",
      "schedule": {
        "flightType": "J",
        "serviceClasses": "Y",
        "restrictions": ""
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateLocal": "2018-09-01T16:25:00.000",
          "dateUtc": "2018-09-01T14:25:00.000Z"
        },
        "publishedArrival": {
          "dateLocal": "2018-09-01T20:40:00.000",
          "dateUtc": "2018-09-01T17:40:00.000Z"
        },
        "scheduledGateDeparture": {
          "dateLocal": "2018-09-01T16:25:00.000",
          "dateUtc": "2018-09-01T14:25:00.000Z"
        },
        "estimatedGateDeparture": {
          "dateLocal": "2018-09-01T16:55:00.000",
          "dateUtc": "2018-09-01T14:55:00.000Z"
        },
        "actualGateDeparture": {
          "dateLocal": "2018-09-01T16:55:00.000",
          "dateUtc": "2018-09-01T14:55:00.000Z"
        },
        "estimatedRunwayDeparture": {
          "dateLocal": "2018-09-01T17:08:00.000",
          "dateUtc": "2018-09-01T15:08:00.000Z"
        },
        "actualRunwayDeparture": {
          "dateLocal": "2018-09-01T17:08:00.000",
          "dateUtc": "2018-09-01T15:08:00.000Z"
        },
        "scheduledGateArrival": {
          "dateLocal": "2018-09-01T20:40:00.000",
          "dateUtc": "2018-09-01T17:40:00.000Z"
        },
        "estimatedGateArrival": {
          "dateLocal": "2018-09-01T20:55:00.000",
          "dateUtc": "2018-09-01T17:55:00.000Z"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 30,
        "arrivalGateDelayMinutes": 15
      },
      "flightDurations": {
        "scheduledBlockMinutes": 195,
        "taxiOutMinutes": 13
      },
      "airportResources": {
        "departureGate": "C46",
        "arrivalTerminal": "F"
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
        "tailNumber": "VP-BSZ"
      }
    },
    {
      "flightId": 971824164,
      "carrier": {
        "fs": "SU",
        "iata": "SU",
        "icao": "AFL",
        "name": "Aeroflot",
        "phoneNumber": "+7 495 223-55-55",
        "active": true
      },
      "flightNumber": "2345",
      "departureAirport": {
        "fs": "DRS",
        "iata": "DRS",
        "icao": "EDDC",
        "name": "Dresden International Airport",
        "city": "Dresden",
        "cityCode": "DRS",
        "countryCode": "DE",
        "countryName": "Germany",
        "regionName": "Europe",
        "timeZoneRegionName": "Europe/Berlin",
        "localTime": "2018-09-01T18:49:14.498",
        "utcOffsetHours": 2,
        "latitude": 51.124333,
        "longitude": 13.766082,
        "elevationFeet": 755,
        "classification": 3,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/DRS?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/DRS?codeType=fs"
      },
      "arrivalAirport": {
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
        "localTime": "2018-09-01T19:49:14.498",
        "utcOffsetHours": 3,
        "latitude": 55.966324,
        "longitude": 37.416574,
        "elevationFeet": 630,
        "classification": 1,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/SVO?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/SVO?codeType=fs"
      },
      "departureDate": {
        "dateLocal": "2018-09-01T16:30:00.000",
        "dateUtc": "2018-09-01T14:30:00.000Z"
      },
      "arrivalDate": {
        "dateLocal": "2018-09-01T20:00:00.000",
        "dateUtc": "2018-09-01T17:00:00.000Z"
      },
      "status": "A",
      "schedule": {
        "flightType": "J",
        "serviceClasses": "RJY",
        "restrictions": ""
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateLocal": "2018-09-01T16:30:00.000",
          "dateUtc": "2018-09-01T14:30:00.000Z"
        },
        "publishedArrival": {
          "dateLocal": "2018-09-01T20:00:00.000",
          "dateUtc": "2018-09-01T17:00:00.000Z"
        },
        "scheduledGateDeparture": {
          "dateLocal": "2018-09-01T16:30:00.000",
          "dateUtc": "2018-09-01T14:30:00.000Z"
        },
        "estimatedGateDeparture": {
          "dateLocal": "2018-09-01T16:29:00.000",
          "dateUtc": "2018-09-01T14:29:00.000Z"
        },
        "actualGateDeparture": {
          "dateLocal": "2018-09-01T16:29:00.000",
          "dateUtc": "2018-09-01T14:29:00.000Z"
        },
        "estimatedRunwayDeparture": {
          "dateLocal": "2018-09-01T16:40:00.000",
          "dateUtc": "2018-09-01T14:40:00.000Z"
        },
        "actualRunwayDeparture": {
          "dateLocal": "2018-09-01T16:40:00.000",
          "dateUtc": "2018-09-01T14:40:00.000Z"
        },
        "scheduledGateArrival": {
          "dateLocal": "2018-09-01T20:00:00.000",
          "dateUtc": "2018-09-01T17:00:00.000Z"
        },
        "estimatedGateArrival": {
          "dateLocal": "2018-09-01T20:10:00.000",
          "dateUtc": "2018-09-01T17:10:00.000Z"
        },
        "estimatedRunwayArrival": {
          "dateLocal": "2018-09-01T19:46:00.000",
          "dateUtc": "2018-09-01T16:46:00.000Z"
        }
      },
      "delays": {
        "arrivalGateDelayMinutes": 10
      },
      "flightDurations": {
        "scheduledBlockMinutes": 150,
        "taxiOutMinutes": 11
      },
      "airportResources": {
        "departureGate": "B02",
        "arrivalTerminal": "D",
        "arrivalGate": "29",
        "baggage": "9"
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
        "tailNumber": "RA-89113"
      }
    },
    {
      "flightId": 971824192,
      "carrier": {
        "fs": "SU",
        "iata": "SU",
        "icao": "AFL",
        "name": "Aeroflot",
        "phoneNumber": "+7 495 223-55-55",
        "active": true
      },
      "flightNumber": "2467",
      "departureAirport": {
        "fs": "BUD",
        "iata": "BUD",
        "icao": "LHBP",
        "name": "Budapest Ferenc Liszt International Airport",
        "city": "Budapest",
        "cityCode": "BUD",
        "countryCode": "HU",
        "countryName": "Hungary",
        "regionName": "Europe",
        "timeZoneRegionName": "Europe/Budapest",
        "localTime": "2018-09-01T18:49:14.498",
        "utcOffsetHours": 2,
        "latitude": 47.433037,
        "longitude": 19.261621,
        "elevationFeet": 495,
        "classification": 2,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/BUD?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/BUD?codeType=fs"
      },
      "arrivalAirport": {
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
        "localTime": "2018-09-01T19:49:14.498",
        "utcOffsetHours": 3,
        "latitude": 55.966324,
        "longitude": 37.416574,
        "elevationFeet": 630,
        "classification": 1,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/SVO?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/SVO?codeType=fs"
      },
      "departureDate": {
        "dateLocal": "2018-09-01T16:35:00.000",
        "dateUtc": "2018-09-01T14:35:00.000Z"
      },
      "arrivalDate": {
        "dateLocal": "2018-09-01T20:05:00.000",
        "dateUtc": "2018-09-01T17:05:00.000Z"
      },
      "status": "A",
      "schedule": {
        "flightType": "J",
        "serviceClasses": "RJY",
        "restrictions": ""
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateLocal": "2018-09-01T16:35:00.000",
          "dateUtc": "2018-09-01T14:35:00.000Z"
        },
        "publishedArrival": {
          "dateLocal": "2018-09-01T20:05:00.000",
          "dateUtc": "2018-09-01T17:05:00.000Z"
        },
        "scheduledGateDeparture": {
          "dateLocal": "2018-09-01T16:35:00.000",
          "dateUtc": "2018-09-01T14:35:00.000Z"
        },
        "estimatedGateDeparture": {
          "dateLocal": "2018-09-01T16:22:00.000",
          "dateUtc": "2018-09-01T14:22:00.000Z"
        },
        "actualGateDeparture": {
          "dateLocal": "2018-09-01T16:22:00.000",
          "dateUtc": "2018-09-01T14:22:00.000Z"
        },
        "estimatedRunwayDeparture": {
          "dateLocal": "2018-09-01T16:45:00.000",
          "dateUtc": "2018-09-01T14:45:00.000Z"
        },
        "actualRunwayDeparture": {
          "dateLocal": "2018-09-01T16:45:00.000",
          "dateUtc": "2018-09-01T14:45:00.000Z"
        },
        "scheduledGateArrival": {
          "dateLocal": "2018-09-01T20:05:00.000",
          "dateUtc": "2018-09-01T17:05:00.000Z"
        },
        "estimatedGateArrival": {
          "dateLocal": "2018-09-01T20:14:00.000",
          "dateUtc": "2018-09-01T17:14:00.000Z"
        },
        "estimatedRunwayArrival": {
          "dateLocal": "2018-09-01T19:50:00.000",
          "dateUtc": "2018-09-01T16:50:00.000Z"
        }
      },
      "delays": {
        "arrivalGateDelayMinutes": 9
      },
      "flightDurations": {
        "scheduledBlockMinutes": 150,
        "taxiOutMinutes": 23
      },
      "airportResources": {
        "departureTerminal": "2A",
        "arrivalTerminal": "F"
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
        "tailNumber": "RA-89108"
      }
    },
    {
      "flightId": 972071174,
      "carrier": {
        "fs": "N4*",
        "iata": "N4",
        "icao": "NWS",
        "name": "Nordwind Airlines",
        "active": true
      },
      "flightNumber": "7560",
      "departureAirport": {
        "fs": "RMI",
        "iata": "RMI",
        "icao": "LIPR",
        "name": "Miramare Airport",
        "city": "Rimini",
        "cityCode": "RMI",
        "countryCode": "IT",
        "countryName": "Italy",
        "regionName": "Europe",
        "timeZoneRegionName": "Europe/Rome",
        "localTime": "2018-09-01T18:49:14.499",
        "utcOffsetHours": 2,
        "latitude": 44.022952,
        "longitude": 12.619594,
        "elevationFeet": 42,
        "classification": 4,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/RMI?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/RMI?codeType=fs"
      },
      "arrivalAirport": {
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
        "localTime": "2018-09-01T19:49:14.499",
        "utcOffsetHours": 3,
        "latitude": 55.966324,
        "longitude": 37.416574,
        "elevationFeet": 630,
        "classification": 1,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/SVO?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/SVO?codeType=fs"
      },
      "departureDate": {
        "dateLocal": "2018-09-01T16:35:00.000",
        "dateUtc": "2018-09-01T14:35:00.000Z"
      },
      "arrivalDate": {
        "dateLocal": "2018-09-01T20:50:00.000",
        "dateUtc": "2018-09-01T17:50:00.000Z"
      },
      "status": "A",
      "operationalTimes": {
        "scheduledGateDeparture": {
          "dateLocal": "2018-09-01T16:35:00.000",
          "dateUtc": "2018-09-01T14:35:00.000Z"
        },
        "estimatedGateDeparture": {
          "dateLocal": "2018-09-01T18:20:00.000",
          "dateUtc": "2018-09-01T16:20:00.000Z"
        },
        "estimatedRunwayDeparture": {
          "dateLocal": "2018-09-01T18:21:00.000",
          "dateUtc": "2018-09-01T16:21:00.000Z"
        },
        "actualRunwayDeparture": {
          "dateLocal": "2018-09-01T18:21:00.000",
          "dateUtc": "2018-09-01T16:21:00.000Z"
        },
        "scheduledGateArrival": {
          "dateLocal": "2018-09-01T20:50:00.000",
          "dateUtc": "2018-09-01T17:50:00.000Z"
        },
        "estimatedGateArrival": {
          "dateLocal": "2018-09-01T22:21:00.000",
          "dateUtc": "2018-09-01T19:21:00.000Z"
        }
      },
      "delays": {
        "departureGateDelayMinutes": 105,
        "arrivalGateDelayMinutes": 91
      },
      "flightDurations": {
        "scheduledBlockMinutes": 195
      },
      "flightEquipment": {
        "actualEquipment": {
          "iata": "772",
          "name": "Boeing 777-200 / 200ER",
          "turboProp": false,
          "jet": true,
          "widebody": true,
          "regional": false
        },
        "tailNumber": "VQ-BUD"
      }
    },
    {
      "flightId": 971799352,
      "carrier": {
        "fs": "JU",
        "iata": "JU",
        "icao": "ASL",
        "name": "Air Serbia",
        "active": true
      },
      "flightNumber": "654",
      "departureAirport": {
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
        "localTime": "2018-09-01T18:49:14.499",
        "utcOffsetHours": 2,
        "latitude": 44.819444,
        "longitude": 20.306944,
        "elevationFeet": 335,
        "classification": 3,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/BEG?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/BEG?codeType=fs"
      },
      "arrivalAirport": {
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
        "localTime": "2018-09-01T19:49:14.499",
        "utcOffsetHours": 3,
        "latitude": 55.966324,
        "longitude": 37.416574,
        "elevationFeet": 630,
        "classification": 1,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/SVO?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/SVO?codeType=fs"
      },
      "departureDate": {
        "dateLocal": "2018-09-01T17:05:00.000",
        "dateUtc": "2018-09-01T15:05:00.000Z"
      },
      "arrivalDate": {
        "dateLocal": "2018-09-01T20:45:00.000",
        "dateUtc": "2018-09-01T17:45:00.000Z"
      },
      "status": "A",
      "schedule": {
        "flightType": "J",
        "serviceClasses": "RFJY",
        "restrictions": ""
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateLocal": "2018-09-01T17:05:00.000",
          "dateUtc": "2018-09-01T15:05:00.000Z"
        },
        "publishedArrival": {
          "dateLocal": "2018-09-01T20:45:00.000",
          "dateUtc": "2018-09-01T17:45:00.000Z"
        },
        "scheduledGateDeparture": {
          "dateLocal": "2018-09-01T17:05:00.000",
          "dateUtc": "2018-09-01T15:05:00.000Z"
        },
        "estimatedGateDeparture": {
          "dateLocal": "2018-09-01T17:05:00.000",
          "dateUtc": "2018-09-01T15:05:00.000Z"
        },
        "estimatedRunwayDeparture": {
          "dateLocal": "2018-09-01T17:18:00.000",
          "dateUtc": "2018-09-01T15:18:00.000Z"
        },
        "actualRunwayDeparture": {
          "dateLocal": "2018-09-01T17:18:00.000",
          "dateUtc": "2018-09-01T15:18:00.000Z"
        },
        "scheduledGateArrival": {
          "dateLocal": "2018-09-01T20:45:00.000",
          "dateUtc": "2018-09-01T17:45:00.000Z"
        }
      },
      "codeshares": [
        {
          "carrier": {
            "fs": "EY",
            "iata": "EY",
            "icao": "ETD",
            "name": "Etihad Airways",
            "active": true
          },
          "flightNumber": "6042",
          "relationship": "L"
        },
        {
          "carrier": {
            "fs": "SU",
            "iata": "SU",
            "icao": "AFL",
            "name": "Aeroflot",
            "phoneNumber": "+7 495 223-55-55",
            "active": true
          },
          "flightNumber": "3743",
          "relationship": "L"
        }
      ],
      "flightDurations": {
        "scheduledBlockMinutes": 160
      },
      "airportResources": {
        "departureTerminal": "2",
        "departureGate": "C1",
        "arrivalTerminal": "E"
      },
      "flightEquipment": {
        "scheduledEquipment": {
          "iata": "32S",
          "name": "Airbus A318 / A319 / A320 / A321",
          "turboProp": false,
          "jet": true,
          "widebody": false,
          "regional": false
        },
        "actualEquipment": {
          "iata": "319",
          "name": "Airbus A319",
          "turboProp": false,
          "jet": true,
          "widebody": false,
          "regional": false
        },
        "tailNumber": "YU-APA"
      }
    },
    {
      "flightId": 971823547,
      "carrier": {
        "fs": "SU",
        "iata": "SU",
        "icao": "AFL",
        "name": "Aeroflot",
        "phoneNumber": "+7 495 223-55-55",
        "active": true
      },
      "flightNumber": "1125",
      "departureAirport": {
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
        "localTime": "2018-09-01T19:49:14.500",
        "utcOffsetHours": 3,
        "latitude": 43.44884,
        "longitude": 39.941106,
        "elevationFeet": 89,
        "classification": 3,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/AER?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/AER?codeType=fs"
      },
      "arrivalAirport": {
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
        "localTime": "2018-09-01T19:49:14.500",
        "utcOffsetHours": 3,
        "latitude": 55.966324,
        "longitude": 37.416574,
        "elevationFeet": 630,
        "classification": 1,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/SVO?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/SVO?codeType=fs"
      },
      "departureDate": {
        "dateLocal": "2018-09-01T17:45:00.000",
        "dateUtc": "2018-09-01T14:45:00.000Z"
      },
      "arrivalDate": {
        "dateLocal": "2018-09-01T20:10:00.000",
        "dateUtc": "2018-09-01T17:10:00.000Z"
      },
      "status": "A",
      "schedule": {
        "flightType": "J",
        "serviceClasses": "RFJY",
        "restrictions": ""
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateLocal": "2018-09-01T17:45:00.000",
          "dateUtc": "2018-09-01T14:45:00.000Z"
        },
        "publishedArrival": {
          "dateLocal": "2018-09-01T20:10:00.000",
          "dateUtc": "2018-09-01T17:10:00.000Z"
        },
        "scheduledGateDeparture": {
          "dateLocal": "2018-09-01T17:45:00.000",
          "dateUtc": "2018-09-01T14:45:00.000Z"
        },
        "estimatedGateDeparture": {
          "dateLocal": "2018-09-01T17:41:00.000",
          "dateUtc": "2018-09-01T14:41:00.000Z"
        },
        "actualGateDeparture": {
          "dateLocal": "2018-09-01T17:41:00.000",
          "dateUtc": "2018-09-01T14:41:00.000Z"
        },
        "estimatedRunwayDeparture": {
          "dateLocal": "2018-09-01T17:56:00.000",
          "dateUtc": "2018-09-01T14:56:00.000Z"
        },
        "actualRunwayDeparture": {
          "dateLocal": "2018-09-01T17:56:00.000",
          "dateUtc": "2018-09-01T14:56:00.000Z"
        },
        "scheduledGateArrival": {
          "dateLocal": "2018-09-01T20:10:00.000",
          "dateUtc": "2018-09-01T17:10:00.000Z"
        },
        "estimatedGateArrival": {
          "dateLocal": "2018-09-01T20:06:00.000",
          "dateUtc": "2018-09-01T17:06:00.000Z"
        },
        "estimatedRunwayArrival": {
          "dateLocal": "2018-09-01T19:53:00.000",
          "dateUtc": "2018-09-01T16:53:00.000Z"
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
          "flightNumber": "7045",
          "relationship": "L"
        }
      ],
      "flightDurations": {
        "scheduledBlockMinutes": 145,
        "taxiOutMinutes": 15
      },
      "airportResources": {
        "arrivalTerminal": "D",
        "baggage": "4"
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
        "tailNumber": "VQ-BSG"
      }
    },
    {
      "flightId": 971823525,
      "carrier": {
        "fs": "SU",
        "iata": "SU",
        "icao": "AFL",
        "name": "Aeroflot",
        "phoneNumber": "+7 495 223-55-55",
        "active": true
      },
      "flightNumber": "1105",
      "departureAirport": {
        "fs": "KRR",
        "iata": "KRR",
        "icao": "URKK",
        "name": "Krasnodar International Airport",
        "city": "Krasnodar",
        "cityCode": "KRR",
        "countryCode": "RU",
        "countryName": "Russian Federation",
        "regionName": "Europe",
        "timeZoneRegionName": "Europe/Moscow",
        "localTime": "2018-09-01T19:49:14.500",
        "utcOffsetHours": 3,
        "latitude": 45.034138,
        "longitude": 39.139002,
        "elevationFeet": 118,
        "classification": 3,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/KRR?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/KRR?codeType=fs"
      },
      "arrivalAirport": {
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
        "localTime": "2018-09-01T19:49:14.500",
        "utcOffsetHours": 3,
        "latitude": 55.966324,
        "longitude": 37.416574,
        "elevationFeet": 630,
        "classification": 1,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/SVO?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/SVO?codeType=fs"
      },
      "departureDate": {
        "dateLocal": "2018-09-01T18:05:00.000",
        "dateUtc": "2018-09-01T15:05:00.000Z"
      },
      "arrivalDate": {
        "dateLocal": "2018-09-01T20:25:00.000",
        "dateUtc": "2018-09-01T17:25:00.000Z"
      },
      "status": "A",
      "schedule": {
        "flightType": "J",
        "serviceClasses": "RFJY",
        "restrictions": ""
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateLocal": "2018-09-01T18:05:00.000",
          "dateUtc": "2018-09-01T15:05:00.000Z"
        },
        "publishedArrival": {
          "dateLocal": "2018-09-01T20:25:00.000",
          "dateUtc": "2018-09-01T17:25:00.000Z"
        },
        "scheduledGateDeparture": {
          "dateLocal": "2018-09-01T18:05:00.000",
          "dateUtc": "2018-09-01T15:05:00.000Z"
        },
        "estimatedGateDeparture": {
          "dateLocal": "2018-09-01T17:55:00.000",
          "dateUtc": "2018-09-01T14:55:00.000Z"
        },
        "actualGateDeparture": {
          "dateLocal": "2018-09-01T17:55:00.000",
          "dateUtc": "2018-09-01T14:55:00.000Z"
        },
        "estimatedRunwayDeparture": {
          "dateLocal": "2018-09-01T18:08:00.000",
          "dateUtc": "2018-09-01T15:08:00.000Z"
        },
        "actualRunwayDeparture": {
          "dateLocal": "2018-09-01T18:08:00.000",
          "dateUtc": "2018-09-01T15:08:00.000Z"
        },
        "scheduledGateArrival": {
          "dateLocal": "2018-09-01T20:25:00.000",
          "dateUtc": "2018-09-01T17:25:00.000Z"
        },
        "estimatedGateArrival": {
          "dateLocal": "2018-09-01T20:11:00.000",
          "dateUtc": "2018-09-01T17:11:00.000Z"
        },
        "estimatedRunwayArrival": {
          "dateLocal": "2018-09-01T19:47:00.000",
          "dateUtc": "2018-09-01T16:47:00.000Z"
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
          "flightNumber": "7047",
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
          "flightNumber": "3063",
          "relationship": "L"
        }
      ],
      "flightDurations": {
        "scheduledBlockMinutes": 140,
        "taxiOutMinutes": 13
      },
      "airportResources": {
        "arrivalTerminal": "D",
        "arrivalGate": "14",
        "baggage": "1"
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
        "tailNumber": "VP-BIJ"
      }
    },
    {
      "flightId": 971823583,
      "carrier": {
        "fs": "SU",
        "iata": "SU",
        "icao": "AFL",
        "name": "Aeroflot",
        "phoneNumber": "+7 495 223-55-55",
        "active": true
      },
      "flightNumber": "1143",
      "departureAirport": {
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
        "localTime": "2018-09-01T19:49:14.500",
        "utcOffsetHours": 3,
        "latitude": 45.001659,
        "longitude": 37.346599,
        "elevationFeet": 141,
        "classification": 4,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/AAQ?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/AAQ?codeType=fs"
      },
      "arrivalAirport": {
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
        "localTime": "2018-09-01T19:49:14.500",
        "utcOffsetHours": 3,
        "latitude": 55.966324,
        "longitude": 37.416574,
        "elevationFeet": 630,
        "classification": 1,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/SVO?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/SVO?codeType=fs"
      },
      "departureDate": {
        "dateLocal": "2018-09-01T18:20:00.000",
        "dateUtc": "2018-09-01T15:20:00.000Z"
      },
      "arrivalDate": {
        "dateLocal": "2018-09-01T20:35:00.000",
        "dateUtc": "2018-09-01T17:35:00.000Z"
      },
      "status": "A",
      "schedule": {
        "flightType": "J",
        "serviceClasses": "RFJY",
        "restrictions": ""
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateLocal": "2018-09-01T18:20:00.000",
          "dateUtc": "2018-09-01T15:20:00.000Z"
        },
        "publishedArrival": {
          "dateLocal": "2018-09-01T20:35:00.000",
          "dateUtc": "2018-09-01T17:35:00.000Z"
        },
        "scheduledGateDeparture": {
          "dateLocal": "2018-09-01T18:20:00.000",
          "dateUtc": "2018-09-01T15:20:00.000Z"
        },
        "estimatedGateDeparture": {
          "dateLocal": "2018-09-01T18:14:00.000",
          "dateUtc": "2018-09-01T15:14:00.000Z"
        },
        "actualGateDeparture": {
          "dateLocal": "2018-09-01T18:14:00.000",
          "dateUtc": "2018-09-01T15:14:00.000Z"
        },
        "estimatedRunwayDeparture": {
          "dateLocal": "2018-09-01T18:30:00.000",
          "dateUtc": "2018-09-01T15:30:00.000Z"
        },
        "actualRunwayDeparture": {
          "dateLocal": "2018-09-01T18:30:00.000",
          "dateUtc": "2018-09-01T15:30:00.000Z"
        },
        "scheduledGateArrival": {
          "dateLocal": "2018-09-01T20:35:00.000",
          "dateUtc": "2018-09-01T17:35:00.000Z"
        },
        "estimatedGateArrival": {
          "dateLocal": "2018-09-01T20:32:00.000",
          "dateUtc": "2018-09-01T17:32:00.000Z"
        },
        "estimatedRunwayArrival": {
          "dateLocal": "2018-09-01T20:27:00.000",
          "dateUtc": "2018-09-01T17:27:00.000Z"
        }
      },
      "flightDurations": {
        "scheduledBlockMinutes": 135,
        "taxiOutMinutes": 16
      },
      "airportResources": {
        "arrivalTerminal": "D",
        "arrivalGate": "15",
        "baggage": "3"
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
        "tailNumber": "VP-BTJ"
      }
    },
    {
      "flightId": 971823546,
      "carrier": {
        "fs": "SU",
        "iata": "SU",
        "icao": "AFL",
        "name": "Aeroflot",
        "phoneNumber": "+7 495 223-55-55",
        "active": true
      },
      "flightNumber": "1155",
      "departureAirport": {
        "fs": "ROV",
        "iata": "ROV",
        "icao": "URRR",
        "name": "Platov International Airport",
        "city": "Rostov",
        "cityCode": "ROV",
        "countryCode": "RU",
        "countryName": "Russian Federation",
        "regionName": "Europe",
        "timeZoneRegionName": "Europe/Moscow",
        "localTime": "2018-09-01T19:49:14.501",
        "utcOffsetHours": 3,
        "latitude": 47.497087,
        "longitude": 39.916471,
        "elevationFeet": 243,
        "classification": 3,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/ROV?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/ROV?codeType=fs"
      },
      "arrivalAirport": {
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
        "localTime": "2018-09-01T19:49:14.501",
        "utcOffsetHours": 3,
        "latitude": 55.966324,
        "longitude": 37.416574,
        "elevationFeet": 630,
        "classification": 1,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/SVO?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/SVO?codeType=fs"
      },
      "departureDate": {
        "dateLocal": "2018-09-01T18:25:00.000",
        "dateUtc": "2018-09-01T15:25:00.000Z"
      },
      "arrivalDate": {
        "dateLocal": "2018-09-01T20:20:00.000",
        "dateUtc": "2018-09-01T17:20:00.000Z"
      },
      "status": "A",
      "schedule": {
        "flightType": "J",
        "serviceClasses": "RFJY",
        "restrictions": ""
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateLocal": "2018-09-01T18:25:00.000",
          "dateUtc": "2018-09-01T15:25:00.000Z"
        },
        "publishedArrival": {
          "dateLocal": "2018-09-01T20:20:00.000",
          "dateUtc": "2018-09-01T17:20:00.000Z"
        },
        "scheduledGateDeparture": {
          "dateLocal": "2018-09-01T18:25:00.000",
          "dateUtc": "2018-09-01T15:25:00.000Z"
        },
        "estimatedGateDeparture": {
          "dateLocal": "2018-09-01T18:10:00.000",
          "dateUtc": "2018-09-01T15:10:00.000Z"
        },
        "actualGateDeparture": {
          "dateLocal": "2018-09-01T18:10:00.000",
          "dateUtc": "2018-09-01T15:10:00.000Z"
        },
        "estimatedRunwayDeparture": {
          "dateLocal": "2018-09-01T18:27:00.000",
          "dateUtc": "2018-09-01T15:27:00.000Z"
        },
        "actualRunwayDeparture": {
          "dateLocal": "2018-09-01T18:27:00.000",
          "dateUtc": "2018-09-01T15:27:00.000Z"
        },
        "scheduledGateArrival": {
          "dateLocal": "2018-09-01T20:20:00.000",
          "dateUtc": "2018-09-01T17:20:00.000Z"
        },
        "estimatedGateArrival": {
          "dateLocal": "2018-09-01T20:13:00.000",
          "dateUtc": "2018-09-01T17:13:00.000Z"
        },
        "estimatedRunwayArrival": {
          "dateLocal": "2018-09-01T19:50:00.000",
          "dateUtc": "2018-09-01T16:50:00.000Z"
        }
      },
      "flightDurations": {
        "scheduledBlockMinutes": 115,
        "taxiOutMinutes": 17
      },
      "airportResources": {
        "arrivalTerminal": "D",
        "baggage": "2"
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
        "tailNumber": "VQ-BSH"
      }
    },
    {
      "flightId": 971824059,
      "carrier": {
        "fs": "SU",
        "iata": "SU",
        "icao": "AFL",
        "name": "Aeroflot",
        "phoneNumber": "+7 495 223-55-55",
        "active": true
      },
      "flightNumber": "2149",
      "departureAirport": {
        "fs": "TLL",
        "iata": "TLL",
        "icao": "EETN",
        "name": "Tallinn Airport",
        "city": "Tallinn",
        "cityCode": "TLL",
        "countryCode": "EE",
        "countryName": "Estonia",
        "regionName": "Europe",
        "timeZoneRegionName": "Europe/Tallinn",
        "localTime": "2018-09-01T19:49:14.501",
        "utcOffsetHours": 3,
        "latitude": 59.416622,
        "longitude": 24.798703,
        "elevationFeet": 132,
        "classification": 3,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/TLL?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/TLL?codeType=fs"
      },
      "arrivalAirport": {
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
        "localTime": "2018-09-01T19:49:14.501",
        "utcOffsetHours": 3,
        "latitude": 55.966324,
        "longitude": 37.416574,
        "elevationFeet": 630,
        "classification": 1,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/SVO?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/SVO?codeType=fs"
      },
      "departureDate": {
        "dateLocal": "2018-09-01T18:30:00.000",
        "dateUtc": "2018-09-01T15:30:00.000Z"
      },
      "arrivalDate": {
        "dateLocal": "2018-09-01T20:05:00.000",
        "dateUtc": "2018-09-01T17:05:00.000Z"
      },
      "status": "A",
      "schedule": {
        "flightType": "J",
        "serviceClasses": "RJY",
        "restrictions": ""
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateLocal": "2018-09-01T18:30:00.000",
          "dateUtc": "2018-09-01T15:30:00.000Z"
        },
        "publishedArrival": {
          "dateLocal": "2018-09-01T20:05:00.000",
          "dateUtc": "2018-09-01T17:05:00.000Z"
        },
        "scheduledGateDeparture": {
          "dateLocal": "2018-09-01T18:30:00.000",
          "dateUtc": "2018-09-01T15:30:00.000Z"
        },
        "estimatedGateDeparture": {
          "dateLocal": "2018-09-01T18:16:00.000",
          "dateUtc": "2018-09-01T15:16:00.000Z"
        },
        "actualGateDeparture": {
          "dateLocal": "2018-09-01T18:16:00.000",
          "dateUtc": "2018-09-01T15:16:00.000Z"
        },
        "estimatedRunwayDeparture": {
          "dateLocal": "2018-09-01T18:28:00.000",
          "dateUtc": "2018-09-01T15:28:00.000Z"
        },
        "actualRunwayDeparture": {
          "dateLocal": "2018-09-01T18:28:00.000",
          "dateUtc": "2018-09-01T15:28:00.000Z"
        },
        "scheduledGateArrival": {
          "dateLocal": "2018-09-01T20:05:00.000",
          "dateUtc": "2018-09-01T17:05:00.000Z"
        },
        "estimatedGateArrival": {
          "dateLocal": "2018-09-01T19:52:00.000",
          "dateUtc": "2018-09-01T16:52:00.000Z"
        },
        "estimatedRunwayArrival": {
          "dateLocal": "2018-09-01T19:44:00.000",
          "dateUtc": "2018-09-01T16:44:00.000Z"
        }
      },
      "flightDurations": {
        "scheduledBlockMinutes": 95,
        "taxiOutMinutes": 12
      },
      "airportResources": {
        "arrivalTerminal": "E",
        "arrivalGate": "41",
        "baggage": "2"
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
        "tailNumber": "RA-89104"
      }
    },
    {
      "flightId": 971824412,
      "carrier": {
        "fs": "SU",
        "iata": "SU",
        "icao": "AFL",
        "name": "Aeroflot",
        "phoneNumber": "+7 495 223-55-55",
        "active": true
      },
      "flightNumber": "39",
      "departureAirport": {
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
        "localTime": "2018-09-01T19:49:14.502",
        "utcOffsetHours": 3,
        "latitude": 59.799847,
        "longitude": 30.270505,
        "elevationFeet": 76,
        "classification": 2,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/LED?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/LED?codeType=fs"
      },
      "arrivalAirport": {
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
        "localTime": "2018-09-01T19:49:14.502",
        "utcOffsetHours": 3,
        "latitude": 55.966324,
        "longitude": 37.416574,
        "elevationFeet": 630,
        "classification": 1,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/SVO?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/SVO?codeType=fs"
      },
      "departureDate": {
        "dateLocal": "2018-09-01T18:40:00.000",
        "dateUtc": "2018-09-01T15:40:00.000Z"
      },
      "arrivalDate": {
        "dateLocal": "2018-09-01T20:00:00.000",
        "dateUtc": "2018-09-01T17:00:00.000Z"
      },
      "status": "A",
      "schedule": {
        "flightType": "J",
        "serviceClasses": "RFJY",
        "restrictions": ""
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateLocal": "2018-09-01T18:40:00.000",
          "dateUtc": "2018-09-01T15:40:00.000Z"
        },
        "publishedArrival": {
          "dateLocal": "2018-09-01T20:00:00.000",
          "dateUtc": "2018-09-01T17:00:00.000Z"
        },
        "scheduledGateDeparture": {
          "dateLocal": "2018-09-01T18:40:00.000",
          "dateUtc": "2018-09-01T15:40:00.000Z"
        },
        "estimatedGateDeparture": {
          "dateLocal": "2018-09-01T18:24:00.000",
          "dateUtc": "2018-09-01T15:24:00.000Z"
        },
        "actualGateDeparture": {
          "dateLocal": "2018-09-01T18:24:00.000",
          "dateUtc": "2018-09-01T15:24:00.000Z"
        },
        "estimatedRunwayDeparture": {
          "dateLocal": "2018-09-01T18:44:00.000",
          "dateUtc": "2018-09-01T15:44:00.000Z"
        },
        "actualRunwayDeparture": {
          "dateLocal": "2018-09-01T18:44:00.000",
          "dateUtc": "2018-09-01T15:44:00.000Z"
        },
        "scheduledGateArrival": {
          "dateLocal": "2018-09-01T20:00:00.000",
          "dateUtc": "2018-09-01T17:00:00.000Z"
        },
        "estimatedGateArrival": {
          "dateLocal": "2018-09-01T19:44:00.000",
          "dateUtc": "2018-09-01T16:44:00.000Z"
        },
        "estimatedRunwayArrival": {
          "dateLocal": "2018-09-01T19:43:00.000",
          "dateUtc": "2018-09-01T16:43:00.000Z"
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
          "flightNumber": "8153",
          "relationship": "L"
        }
      ],
      "flightDurations": {
        "scheduledBlockMinutes": 80,
        "taxiOutMinutes": 20
      },
      "airportResources": {
        "departureTerminal": "1",
        "departureGate": "D06",
        "arrivalTerminal": "D",
        "baggage": "1"
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
        "tailNumber": "VQ-BAY"
      }
    },
    {
      "flightId": 971823752,
      "carrier": {
        "fs": "SU",
        "iata": "SU",
        "icao": "AFL",
        "name": "Aeroflot",
        "phoneNumber": "+7 495 223-55-55",
        "active": true
      },
      "flightNumber": "1325",
      "departureAirport": {
        "fs": "MMK",
        "iata": "MMK",
        "icao": "ULMM",
        "name": "Murmansk Airport",
        "city": "Murmansk",
        "cityCode": "MMK",
        "countryCode": "RU",
        "countryName": "Russian Federation",
        "regionName": "Europe",
        "timeZoneRegionName": "Europe/Moscow",
        "localTime": "2018-09-01T19:49:14.502",
        "utcOffsetHours": 3,
        "latitude": 68.785092,
        "longitude": 32.759155,
        "elevationFeet": 266,
        "classification": 4,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/MMK?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/MMK?codeType=fs"
      },
      "arrivalAirport": {
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
        "localTime": "2018-09-01T19:49:14.502",
        "utcOffsetHours": 3,
        "latitude": 55.966324,
        "longitude": 37.416574,
        "elevationFeet": 630,
        "classification": 1,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/SVO?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/SVO?codeType=fs"
      },
      "departureDate": {
        "dateLocal": "2018-09-01T18:40:00.000",
        "dateUtc": "2018-09-01T15:40:00.000Z"
      },
      "arrivalDate": {
        "dateLocal": "2018-09-01T20:55:00.000",
        "dateUtc": "2018-09-01T17:55:00.000Z"
      },
      "status": "A",
      "schedule": {
        "flightType": "J",
        "serviceClasses": "RFJY",
        "restrictions": ""
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateLocal": "2018-09-01T18:40:00.000",
          "dateUtc": "2018-09-01T15:40:00.000Z"
        },
        "publishedArrival": {
          "dateLocal": "2018-09-01T20:55:00.000",
          "dateUtc": "2018-09-01T17:55:00.000Z"
        },
        "scheduledGateDeparture": {
          "dateLocal": "2018-09-01T18:40:00.000",
          "dateUtc": "2018-09-01T15:40:00.000Z"
        },
        "estimatedGateDeparture": {
          "dateLocal": "2018-09-01T18:29:00.000",
          "dateUtc": "2018-09-01T15:29:00.000Z"
        },
        "actualGateDeparture": {
          "dateLocal": "2018-09-01T18:29:00.000",
          "dateUtc": "2018-09-01T15:29:00.000Z"
        },
        "estimatedRunwayDeparture": {
          "dateLocal": "2018-09-01T18:38:00.000",
          "dateUtc": "2018-09-01T15:38:00.000Z"
        },
        "actualRunwayDeparture": {
          "dateLocal": "2018-09-01T18:38:00.000",
          "dateUtc": "2018-09-01T15:38:00.000Z"
        },
        "scheduledGateArrival": {
          "dateLocal": "2018-09-01T20:55:00.000",
          "dateUtc": "2018-09-01T17:55:00.000Z"
        },
        "estimatedGateArrival": {
          "dateLocal": "2018-09-01T20:46:00.000",
          "dateUtc": "2018-09-01T17:46:00.000Z"
        }
      },
      "flightDurations": {
        "scheduledBlockMinutes": 135,
        "taxiOutMinutes": 9
      },
      "airportResources": {
        "departureTerminal": "1",
        "arrivalTerminal": "D",
        "arrivalGate": "11",
        "baggage": "1"
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
        "tailNumber": "VP-BLP"
      }
    },
    {
      "flightId": 971824112,
      "carrier": {
        "fs": "SU",
        "iata": "SU",
        "icao": "AFL",
        "name": "Aeroflot",
        "phoneNumber": "+7 495 223-55-55",
        "active": true
      },
      "flightNumber": "2165",
      "departureAirport": {
        "fs": "VNO",
        "iata": "VNO",
        "icao": "EYVI",
        "name": "Vilnius International Airport",
        "city": "Vilnius",
        "cityCode": "VNO",
        "countryCode": "LT",
        "countryName": "Lithuania",
        "regionName": "Europe",
        "timeZoneRegionName": "Europe/Vilnius",
        "localTime": "2018-09-01T19:49:14.502",
        "utcOffsetHours": 3,
        "latitude": 54.643079,
        "longitude": 25.279605,
        "elevationFeet": 646,
        "classification": 3,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/VNO?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/VNO?codeType=fs"
      },
      "arrivalAirport": {
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
        "localTime": "2018-09-01T19:49:14.502",
        "utcOffsetHours": 3,
        "latitude": 55.966324,
        "longitude": 37.416574,
        "elevationFeet": 630,
        "classification": 1,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/SVO?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/SVO?codeType=fs"
      },
      "departureDate": {
        "dateLocal": "2018-09-01T18:45:00.000",
        "dateUtc": "2018-09-01T15:45:00.000Z"
      },
      "arrivalDate": {
        "dateLocal": "2018-09-01T20:15:00.000",
        "dateUtc": "2018-09-01T17:15:00.000Z"
      },
      "status": "A",
      "schedule": {
        "flightType": "J",
        "serviceClasses": "RJY",
        "restrictions": ""
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateLocal": "2018-09-01T18:45:00.000",
          "dateUtc": "2018-09-01T15:45:00.000Z"
        },
        "publishedArrival": {
          "dateLocal": "2018-09-01T20:15:00.000",
          "dateUtc": "2018-09-01T17:15:00.000Z"
        },
        "scheduledGateDeparture": {
          "dateLocal": "2018-09-01T18:45:00.000",
          "dateUtc": "2018-09-01T15:45:00.000Z"
        },
        "estimatedRunwayDeparture": {
          "dateLocal": "2018-09-01T18:39:00.000",
          "dateUtc": "2018-09-01T15:39:00.000Z"
        },
        "actualRunwayDeparture": {
          "dateLocal": "2018-09-01T18:39:00.000",
          "dateUtc": "2018-09-01T15:39:00.000Z"
        },
        "scheduledGateArrival": {
          "dateLocal": "2018-09-01T20:15:00.000",
          "dateUtc": "2018-09-01T17:15:00.000Z"
        },
        "estimatedGateArrival": {
          "dateLocal": "2018-09-01T20:26:00.000",
          "dateUtc": "2018-09-01T17:26:00.000Z"
        },
        "estimatedRunwayArrival": {
          "dateLocal": "2018-09-01T19:45:00.000",
          "dateUtc": "2018-09-01T16:45:00.000Z"
        }
      },
      "delays": {
        "arrivalGateDelayMinutes": 11
      },
      "flightDurations": {
        "scheduledBlockMinutes": 90
      },
      "airportResources": {
        "departureGate": "8",
        "arrivalTerminal": "E",
        "baggage": "2"
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
        "tailNumber": "RA-89043"
      }
    },
    {
      "flightId": 971823706,
      "carrier": {
        "fs": "SU",
        "iata": "SU",
        "icao": "AFL",
        "name": "Aeroflot",
        "phoneNumber": "+7 495 223-55-55",
        "active": true
      },
      "flightNumber": "1193",
      "departureAirport": {
        "fs": "KZN",
        "iata": "KZN",
        "icao": "UWKD",
        "name": "Kazan International Airport",
        "city": "Kazan",
        "cityCode": "KZN",
        "countryCode": "RU",
        "countryName": "Russian Federation",
        "regionName": "Europe",
        "timeZoneRegionName": "Europe/Moscow",
        "localTime": "2018-09-01T19:49:14.502",
        "utcOffsetHours": 3,
        "latitude": 55.608439,
        "longitude": 49.29824,
        "elevationFeet": 407,
        "classification": 3,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/KZN?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/KZN?codeType=fs"
      },
      "arrivalAirport": {
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
        "localTime": "2018-09-01T19:49:14.502",
        "utcOffsetHours": 3,
        "latitude": 55.966324,
        "longitude": 37.416574,
        "elevationFeet": 630,
        "classification": 1,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/SVO?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/SVO?codeType=fs"
      },
      "departureDate": {
        "dateLocal": "2018-09-01T18:45:00.000",
        "dateUtc": "2018-09-01T15:45:00.000Z"
      },
      "arrivalDate": {
        "dateLocal": "2018-09-01T20:25:00.000",
        "dateUtc": "2018-09-01T17:25:00.000Z"
      },
      "status": "A",
      "schedule": {
        "flightType": "J",
        "serviceClasses": "RFJY",
        "restrictions": ""
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateLocal": "2018-09-01T18:45:00.000",
          "dateUtc": "2018-09-01T15:45:00.000Z"
        },
        "publishedArrival": {
          "dateLocal": "2018-09-01T20:25:00.000",
          "dateUtc": "2018-09-01T17:25:00.000Z"
        },
        "scheduledGateDeparture": {
          "dateLocal": "2018-09-01T18:45:00.000",
          "dateUtc": "2018-09-01T15:45:00.000Z"
        },
        "estimatedGateDeparture": {
          "dateLocal": "2018-09-01T18:35:00.000",
          "dateUtc": "2018-09-01T15:35:00.000Z"
        },
        "actualGateDeparture": {
          "dateLocal": "2018-09-01T18:35:00.000",
          "dateUtc": "2018-09-01T15:35:00.000Z"
        },
        "estimatedRunwayDeparture": {
          "dateLocal": "2018-09-01T18:53:00.000",
          "dateUtc": "2018-09-01T15:53:00.000Z"
        },
        "actualRunwayDeparture": {
          "dateLocal": "2018-09-01T18:53:00.000",
          "dateUtc": "2018-09-01T15:53:00.000Z"
        },
        "scheduledGateArrival": {
          "dateLocal": "2018-09-01T20:25:00.000",
          "dateUtc": "2018-09-01T17:25:00.000Z"
        },
        "estimatedGateArrival": {
          "dateLocal": "2018-09-01T20:24:00.000",
          "dateUtc": "2018-09-01T17:24:00.000Z"
        },
        "estimatedRunwayArrival": {
          "dateLocal": "2018-09-01T20:16:00.000",
          "dateUtc": "2018-09-01T17:16:00.000Z"
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
          "flightNumber": "8813",
          "relationship": "L"
        }
      ],
      "flightDurations": {
        "scheduledBlockMinutes": 100,
        "taxiOutMinutes": 18
      },
      "airportResources": {
        "departureTerminal": "1A",
        "arrivalTerminal": "2",
        "arrivalGate": "117",
        "baggage": "3"
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
        "tailNumber": "RA-89107"
      }
    },
    {
      "flightId": 971775368,
      "carrier": {
        "fs": "CZ",
        "iata": "CZ",
        "icao": "CSN",
        "name": "China Southern Airlines",
        "phoneNumber": "+86 20 95539",
        "active": true
      },
      "flightNumber": "6001",
      "departureAirport": {
        "fs": "URC",
        "iata": "URC",
        "icao": "ZWWW",
        "name": "Urumqi Diwopu International Airport",
        "street1": "Airport Expressway Entrance & Wuchang Hwy",
        "city": "Urumqi",
        "cityCode": "URC",
        "countryCode": "CN",
        "countryName": "China",
        "regionName": "Asia",
        "timeZoneRegionName": "Asia/Shanghai",
        "localTime": "2018-09-02T00:49:14.503",
        "utcOffsetHours": 8,
        "latitude": 43.90126,
        "longitude": 87.475148,
        "elevationFeet": 2126,
        "classification": 2,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/URC?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/URC?codeType=fs"
      },
      "arrivalAirport": {
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
        "localTime": "2018-09-01T19:49:14.503",
        "utcOffsetHours": 3,
        "latitude": 55.966324,
        "longitude": 37.416574,
        "elevationFeet": 630,
        "classification": 1,
        "active": true,
        "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/SVO?codeType=fs",
        "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/SVO?codeType=fs"
      },
      "departureDate": {
        "dateLocal": "2018-09-01T18:55:00.000",
        "dateUtc": "2018-09-01T10:55:00.000Z"
      },
      "arrivalDate": {
        "dateLocal": "2018-09-01T20:10:00.000",
        "dateUtc": "2018-09-01T17:10:00.000Z"
      },
      "status": "L",
      "schedule": {
        "flightType": "J",
        "serviceClasses": "RFJY",
        "restrictions": "",
        "uplines": [
          {
            "departureAirport": {
              "fs": "LHW",
              "iata": "LHW",
              "icao": "ZLLL",
              "name": "Lanzhou Zhongchuan International Airport",
              "city": "Lanzhou",
              "cityCode": "LHW",
              "countryCode": "CN",
              "countryName": "China",
              "regionName": "Asia",
              "timeZoneRegionName": "Asia/Shanghai",
              "localTime": "2018-09-02T00:49:14.503",
              "utcOffsetHours": 8,
              "latitude": 36.509497,
              "longitude": 103.61756,
              "elevationFeet": 6393,
              "classification": 3,
              "active": true,
              "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/LHW?codeType=fs",
              "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/LHW?codeType=fs"
            },
            "flightId": 971775361
          }
        ]
      },
      "operationalTimes": {
        "publishedDeparture": {
          "dateLocal": "2018-09-01T18:55:00.000",
          "dateUtc": "2018-09-01T10:55:00.000Z"
        },
        "publishedArrival": {
          "dateLocal": "2018-09-01T20:10:00.000",
          "dateUtc": "2018-09-01T17:10:00.000Z"
        },
        "scheduledGateDeparture": {
          "dateLocal": "2018-09-01T18:55:00.000",
          "dateUtc": "2018-09-01T10:55:00.000Z"
        },
        "estimatedGateDeparture": {
          "dateLocal": "2018-09-01T18:31:00.000",
          "dateUtc": "2018-09-01T10:31:00.000Z"
        },
        "actualGateDeparture": {
          "dateLocal": "2018-09-01T18:31:00.000",
          "dateUtc": "2018-09-01T10:31:00.000Z"
        },
        "estimatedRunwayDeparture": {
          "dateLocal": "2018-09-01T18:56:00.000",
          "dateUtc": "2018-09-01T10:56:00.000Z"
        },
        "actualRunwayDeparture": {
          "dateLocal": "2018-09-01T18:56:00.000",
          "dateUtc": "2018-09-01T10:56:00.000Z"
        },
        "scheduledGateArrival": {
          "dateLocal": "2018-09-01T20:10:00.000",
          "dateUtc": "2018-09-01T17:10:00.000Z"
        },
        "estimatedGateArrival": {
          "dateLocal": "2018-09-01T19:19:00.000",
          "dateUtc": "2018-09-01T16:19:00.000Z"
        },
        "estimatedRunwayArrival": {
          "dateLocal": "2018-09-01T19:14:00.000",
          "dateUtc": "2018-09-01T16:14:00.000Z"
        },
        "actualRunwayArrival": {
          "dateLocal": "2018-09-01T19:14:00.000",
          "dateUtc": "2018-09-01T16:14:00.000Z"
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
          "flightNumber": "3981",
          "relationship": "L"
        }
      ],
      "flightDurations": {
        "scheduledBlockMinutes": 375,
        "airMinutes": 318,
        "taxiOutMinutes": 25
      },
      "airportResources": {
        "departureTerminal": "3",
        "arrivalTerminal": "D"
      },
      "flightEquipment": {
        "scheduledEquipment": {
          "iata": "738",
          "name": "Boeing 737-800 Passenger",
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
        "tailNumber": "B-7971"
      }
    }
  ]
}

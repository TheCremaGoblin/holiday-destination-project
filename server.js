const { response } = require('express')
const express = require('express')
const app = express()
const PORT = 8000

const holidayDestinations = {  
    'holiday one': {
        "HolidayReference": 1,
        "HotelName": "Uptown",
        "City": "Bali",
        "Continent": "Asia",
        "Country": "Indonesia",
        "Category": "active",
        "StarRating": 3,
        "TempRating": "mild",
        "Location": "mountain",
        "PricePerPerNight": 120
    },
    'holiday two': {
      "HolidayReference": 2,
      "HotelName": "Relaxamax",
      "City": "New Orleans",
      "Continent": "North America",
      "Country": "USA",
      "Category": "lazy",
      "StarRating": 4,
      "TempRating": "mild",
      "Location": "city",
      "PricePerPerNight": 28
    },
    'holiday three': {
        "HolidayReference": 3,
        "HotelName": "WindyBeach",
        "City": "Ventry",
        "Continent": "Europe",
        "Country": "Ireland",
        "Category": "active",
        "StarRating": 3,
        "TempRating": "mild",
        "Location": "sea",
        "PricePerPerNight": 42
      },
      'holiday four': {
        "HolidayReference": 4,
        "HotelName": "Twighlight",
        "City": "Marrakech",
        "Continent": "Africa",
        "Country": "Morocco",
        "Category": "lazy",
        "StarRating": 5,
        "TempRating": "cold",
        "Location": "mountain",
        "PricePerPerNight": 50
      },
      'holiday five': {
        "HolidayReference": 5,
        "HotelName": "TooHot",
        "City": "Sydney",
        "Continent": "Australia",
        "Country": "Australia",
        "Category": "lazy",
        "StarRating": 5,
        "TempRating": "hot",
        "Location": "sea",
        "PricePerPerNight": 67
      },
      'holiday six':{
        "HolidayReference": 6,
        "HotelName": "Castaway",
        "City": "",
        "Continent": "Africa",
        "Country": "The Maldives",
        "Category": "lazy",
        "StarRating": 3,
        "TempRating": "mild",
        "Location": "sea",
        "PricePerPerNight": 120
      },
      'holiday seven':{
        "HolidayReference": 7,
        "HotelName": "Eiffel Park",
        "City": "Paris",
        "Continent": "Europe",
        "Country": "France",
        "Category": "active",
        "StarRating": 4,
        "TempRating": "mild",
        "Location": "city",
        "PricePerPerNight": 45
      },
      'holiday eight':{
        "HolidayReference": 8,
        "HotelName": "The Cape",
        "City": "Cape Town",
        "Continent": "Africa",
        "Country": "South Africa",
        "Category": "active",
        "StarRating": 4,
        "TempRating": "mild",
        "Location": "sea",
        "PricePerPerNight": 78
      },
      'holiday nine':{
        "HolidayReference": 9,
        "HotelName": "Desert Dreams",
        "City": "Dubai",
        "Continent": "Asia",
        "Country": "U.A.E",
        "Category": "active",
        "StarRating": 4,
        "TempRating": "hot",
        "Location": "mountain",
        "PricePerPerNight": 67
      },
      'holiday ten':{
        "HolidayReference": 10,
        "HotelName": "SeaViews",
        "City": "Bora Bora",
        "Continent": "Australia",
        "Country": "French Polynesia",
        "Category": "active",
        "StarRating": 3,
        "TempRating": "mild",
        "Location": "sea",
        "PricePerPerNight": 54
      },
      'holiday eleven':{
        "HolidayReference": 11,
        "HotelName": "AppleCity",
        "City": "New York",
        "Continent": "North America",
        "Country": "USA",
        "Category": "active",
        "StarRating": 3,
        "TempRating": "mild",
        "Location": "city",
        "PricePerPerNight": 27
      },
      'holiday twelve':{
        "HolidayReference": 12,
        "HotelName": "IslandHopper",
        "City": "Dubrovnik",
        "Continent": "Europe",
        "Country": "Croatia",
        "Category": "active",
        "StarRating": 5,
        "TempRating": "mild",
        "Location": "sea",
        "PricePerPerNight": 78
      },
      'holiday thirteen':{
        "HolidayReference": 13,
        "HotelName": "CastleTown",
        "City": "Edinburgh",
        "Continent": "Europe",
        "Country": "Scotland",
        "Category": "lazy",
        "StarRating": 3,
        "TempRating": "mild",
        "Location": "city",
        "PricePerPerNight": 53
      },
      'holiday fourteen':{
        "HolidayReference": 14,
        "HotelName": "WineValley",
        "City": "Rome",
        "Continent": "Europe",
        "Country": "Italy",
        "Category": "lazy",
        "StarRating": 5,
        "TempRating": "mild",
        "Location": "city",
        "PricePerPerNight": 25
      },
      'holiday fifteen':{
        "HolidayReference": 15,
        "HotelName": "WearyTraveller",
        "City": "Paro Valley",
        "Continent": "Asia",
        "Country": "Bhutan",
        "Category": "active",
        "StarRating": 5,
        "TempRating": "mild",
        "Location": "mountain",
        "PricePerPerNight": 54
      },
      'holiday sixteen':{
        "HolidayReference": 16,
        "HotelName": "HotTimes",
        "City": "Jaipur",
        "Continent": "Asia",
        "Country": "India",
        "Category": "lazy",
        "StarRating": 4,
        "TempRating": "hot",
        "Location": "sea",
        "PricePerPerNight": 67
      },
      'holiday seventeen':{
        "HolidayReference": 17,
        "HotelName": "ForestRetreat",
        "City": "Waikato",
        "Continent": "Australia",
        "Country": "New Zealand",
        "Category": "active",
        "StarRating": 4,
        "TempRating": "mild",
        "Location": "mountain",
        "PricePerPerNight": 89
      },
      'holiday eighteen':{
        "HolidayReference": 18,
        "HotelName": "Casablanca",
        "City": "Havana",
        "Continent": "North America",
        "Country": "Cuba",
        "Category": "lazy",
        "StarRating": 5,
        "TempRating": "mild",
        "Location": "city",
        "PricePerPerNight": 29
      },
      'holiday nineteen':{
        "HolidayReference": 19,
        "HotelName": "TechCity",
        "City": "Tokyo",
        "Continent": "Asia",
        "Country": "Japan",
        "Category": "active",
        "StarRating": 3,
        "TempRating": "mild",
        "Location": "city",
        "PricePerPerNight": 71
      },
      'holiday twenty':{
        "HolidayReference": 20,
        "HotelName": "IceHotel",
        "City": "Base Marambio",
        "Continent": "Antarctica",
        "Country": "Antartica",
        "Category": "active",
        "StarRating": 5,
        "TempRating": "cold",
        "Location": "mountain",
        "PricePerPerNight": 270
      },
      'holiday twenty one':{
        "HolidayReference": 21,
        "HotelName": "NorthStar",
        "City": "",
        "Continent": "Arctic",
        "Country": "Greenland",
        "Category": "active",
        "StarRating": 5,
        "TempRating": "cold",
        "Location": "mountain",
        "PricePerPerNight": 250
      }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:holiday', (request, response)=>{
    const holidayNames = request.params.holiday.toLowerCase()
    if(holidayDestinations[holidayNames]){
        response.json(holidayDestinations[holidayNames])
    } else {
        response.json(holidayDestinations['holidayTwentyOne'])
    }
})

app.listen(PORT, ()=>{
    console.log(`The server is running on ${PORT}! You better go catch it!`)
})
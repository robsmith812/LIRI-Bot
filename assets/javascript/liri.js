require("dotenv").config();

var request = require('request');

var spotify = require('node-spotify-api');

var botFile = require('./bot');

// Concert-This (WORKING)
// node liri.js concert-this <artists/band name>
if (process.argv[2] === "concert-this") {
    var artistName = process.argv.slice(3).join(' ');

    request('https://rest.bandsintown.com/artists/' + artistName + '/events?app_id=codingbootcamp=upcoming',
        function (error, response, art) {
            var shows = JSON.parse(art)
            console.dir(shows[0].venue.name);
            console.dir(shows[0].venue.city);
            console.dir(shows[0].venue.country);
            console.dir(shows[0].datetime);
        });
};

// Spotify-This-Song (NOT WORKING)
// node liri.js spotify-this-song <song name>
if (process.argv[2] === "spotify-this-song") {
    var song = process.argv.slice(3).join(' ');
    var spotify = new Spotify(keys.spotify);
    spotify.search({ type: 'artist', query: song, limit: 3 }, function (err, data) {
        if (err) {
            return console.log('Error occured: ' + err);
        }
        console.log(data);
    });
};

// Movie-This (WORKING)
// node liri.js movie-this <movie name>
if (process.argv[2] === "movie-this") {
    var movie = process.argv.slice(3).join(' ');

    request('https://www.omdbapi.com/?t=' + movie + '&y=&plot=short&apikey=trilogy',
        function (error, reponse, picture) {
            var movieInfo = JSON.parse(picture)
            console.dir(movieInfo.Title);
            console.dir(movieInfo.Year);
            console.dir(movieInfo.imdbRating);
            console.dir(movieInfo.Ratings);
            console.dir(movieInfo.Country);
            console.dir(movieInfo.Language);
            console.dir(movieInfo.Plot);
            console.dir(movieInfo.Actors);
            if (process.argv.length = 3) {
                return movie = 'Mr. Nobody'
            }
        })
};

// Do-What-It-Says (NOT WORKING)
// var fs = require('fs');

// var contents = fs.readFileSync('/random.txt');
# Stats-App

This is a web page that is going to keep track of the statistics for my fantasy baseball team. While the Yahoo! fantasy page already does that, I'm using it to try and reinforce my knowledge of HTML, CSS, Javascript, EJS, Express and MongoDB.


Information to keep track of
{
    name: String,
    image: String,
    stats: {
        hitters: {
            HitsAB: String,
            R: String,
            HR: String,
            RBI: String,
            SB: String,
            OPS: String
        },
        pitchers: {
            IP: String,
            SV: String,
            K: String,
            ERA: String,
            WHIP: String,
            QS: String
        }
    }
}

Potential ideas:
    -Make the index page a grid of pictures of the players on my team. Click the picture to go to their stats page 
    -Have a separate page for the table of stats of the entire team
    -Have separate pages for hitters and pitchers
    - Figure out how to automatically populate the stats tables from a CSV or other spreadsheet format
    - Figure out how to automatically update the stats tables every day
    - Will need to eventually style everything, but that can wait until near the end
    -Import info into correct MongoDB database and connect it to web app
    - Was able to get every player loaded into the database and linked to the website. Having trouble properly formatting the tables on the hitters and pitchers pages.
    -Also would like to sort the player images alphabetically and/or by position.
    -Also need to add player positions to the database
    -Try creating two different schemas and mongoose models
    -Also try using an if statement checking for pitchers or hitters in the ejs files

    

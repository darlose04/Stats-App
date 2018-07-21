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
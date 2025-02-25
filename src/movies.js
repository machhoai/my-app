const movies = [
  {
    title: "Dune: Part One",
    genre: ["Sci-Fi", "Adventure"],
    director: "Denis Villeneuve",
    releaseYear: 2021,
    duration: 155,
    cast: ["Timothée Chalamet", "Zendaya", "Oscar Isaac"],
    boxOffice: "$402 million",
    image: "dune.jpg",
  },
  {
    title: "Oppenheimer",
    genre: ["Biography", "Drama"],
    director: "Christopher Nolan",
    releaseYear: 2023,
    duration: 180,
    cast: ["Cillian Murphy", "Emily Blunt", "Robert Downey Jr."],
    boxOffice: "$964 million",
    image:
      "oppenheimer.jpg",
  },
  {
    title: "Spider-Man: No Way Home",
    genre: ["Action", "Adventure"],
    director: "Jon Watts",
    releaseYear: 2021,
    duration: 148,
    cast: ["Tom Holland", "Zendaya", "Benedict Cumberbatch"],
    boxOffice: "$1.921 billion",
    image:
      "no_way_home.jpg",
  },
  {
    title: "Top Gun: Maverick",
    genre: ["Action", "Drama"],
    director: "Joseph Kosinski",
    releaseYear: 2022,
    duration: 130,
    cast: ["Tom Cruise", "Miles Teller", "Jennifer Connelly"],
    boxOffice: "$1.495 billion",
    image:
      "top_gun.jpg",
  },
  {
    title: "Avengers: Endgame",
    genre: ["Action", "Sci-Fi"],
    director: "Anthony Russo, Joe Russo",
    releaseYear: 2019,
    duration: 181,
    cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
    boxOffice: "$2.798 billion",
    image:
      "avengers_endgame.jpg",
  },
  {
    title: "Avengers: Infinity War",
    genre: ["Action", "Sci-Fi"],
    director: "Anthony Russo, Joe Russo",
    releaseYear: 2018,
    duration: 149,
    cast: ["Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"],
    boxOffice: "$2.048 billion",
    image:
      "avengers_infinity_war.jpg",
  },
  {
    title: "John Wick: Chapter 4",
    genre: ["Action", "Thriller"],
    director: "Chad Stahelski",
    releaseYear: 2023,
    duration: 169,
    cast: ["Keanu Reeves", "Donnie Yen", "Bill Skarsgård"],
    boxOffice: "$432 million",
    image: "john_wick_4.jpg",
  },
  {
    title: "The Batman",
    genre: ["Action", "Crime"],
    director: "Matt Reeves",
    releaseYear: 2022,
    duration: 176,
    cast: ["Robert Pattinson", "Zoë Kravitz", "Paul Dano"],
    boxOffice: "$772.2 million",
    image:
      "batman.jpg",
  },
  {
    title: "Doctor Strange in the Multiverse of Madness",
    genre: ["Action", "Adventure"],
    director: "Sam Raimi",
    releaseYear: 2022,
    duration: 126,
    cast: ["Benedict Cumberbatch", "Elizabeth Olsen", "Chiwetel Ejiofor"],
    boxOffice: "$955.8 million",
    image:
      "doctor_strange.jpg",
  },
  {
    title: "Everything Everywhere All at Once",
    genre: ["Sci-Fi", "Comedy"],
    director: "Daniel Kwan, Daniel Scheinert",
    releaseYear: 2022,
    duration: 140,
    cast: ["Michelle Yeoh", "Stephanie Hsu", "Ke Huy Quan"],
    boxOffice: "$141.2 million",
    image:
      "everything_everywhere.jpg",
  },
  {
    title: "Dune: Part Two",
    genre: ["Sci-Fi", "Adventure"],
    director: "Denis Villeneuve",
    releaseYear: 2024,
    duration: 166,
    cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"],
    boxOffice: "TBA",
    image:
      "dune_2.jpg",
  },
  {
    title: "Black Panther",
    genre: ["Action", "Adventure"],
    director: "Ryan Coogler",
    releaseYear: 2018,
    duration: 134,
    cast: ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o"],
    boxOffice: "$1.344 billion",
    image:
      "black_panther.jpg",
  },
  {
    title: "Joker",
    genre: ["Crime", "Drama"],
    director: "Todd Phillips",
    releaseYear: 2019,
    duration: 122,
    cast: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"],
    boxOffice: "$1.074 billion",
    image:
      "joker.jpg",
  },
  {
    title: "Mission: Impossible – Fallout",
    genre: ["Action", "Adventure"],
    director: "Christopher McQuarrie",
    releaseYear: 2018,
    duration: 147,
    cast: ["Tom Cruise", "Henry Cavill", "Rebecca Ferguson"],
    boxOffice: "$791.7 million",
    image:
      "mission_impossible.jpg",
  },
  {
    title: "The Suicide Squad",
    genre: ["Action", "Comedy"],
    director: "James Gunn",
    releaseYear: 2021,
    duration: 132,
    cast: ["Margot Robbie", "Idris Elba", "John Cena"],
    boxOffice: "$167.4 million",
    image:
      "the_suicide_squad.jpg",
  },
  {
    title: "The Lion King",
    genre: ["Animation", "Adventure"],
    director: ["Jon Favreau"],
    releaseYear: 2019,
    duration: 118,
    cast: ["Donald Glover", "Beyoncé", "Seth Rogen"],
    boxOffice: "$1.663 billion",
    image: "thelionking.jpg"
  },
  {
      title: "Titanic",
      genre: ["Romance", "History"],
      director: ["James Cameron"],
      releaseYear: 1997,
      duration: 195,
      cast: ["Leonardo DiCaprio", "Kate Winslet"],
      boxOffice: "$2.195 billion",
      image: "titanic.jpg"
    },
    {
      title: "The Dark Knight",
      genre: ["Action", "Crime", "Drama"],
      director: ["Christopher Nolan"],
      releaseYear: 2008,
      duration: 152,
      cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
      boxOffice: "$1.005 billion",
      image: "thedarkknight.jpg"
    },
    {
      title: "Inception",
      genre: ["Science Fiction", "Action"],
      director: ["Christopher Nolan"],
      releaseYear: 2010,
      duration: 148,
      cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
      boxOffice: "$836 million",
      image: "inception.jpg"
    },
    {
      title: "Avatar",
      genre: ["Science Fiction", "Adventure"],
      director: ["James Cameron"],
      releaseYear: 2009,
      duration: 162,
      cast: ["Sam Worthington", "Zoe Saldana"],
      boxOffice: "$2.847 billion",
      image: "avatar.jpg"
    },
    {
      title: "Star Wars: The Force Awakens",
      genre: ["Science Fiction", "Action"],
      director: ["J.J. Abrams"],
      releaseYear: 2015,
      duration: 138,
      cast: ["Daisy Ridley", "John Boyega", "Harrison Ford"],
      boxOffice: "$2.068 billion",
      image: "starwarstheforceawakens.jpg"
    },
    {
      title: "Jurassic World",
      genre: ["Adventure", "Action", "Science Fiction"],
      director: ["Colin Trevorrow"],
      releaseYear: 2015,
      duration: 124,
      cast: ["Chris Pratt", "Bryce Dallas Howard"],
      boxOffice: "$1.671 billion",
      image: "jurassicworld.jpg"
    },
    {
      title: "Frozen II",
      genre: ["Animation", "Adventure", "Musical"],
      director: ["Chris Buck", "Jennifer Lee"],
      releaseYear: 2019,
      duration: 103,
      cast: ["Idina Menzel", "Kristen Bell", "Josh Gad"],
      boxOffice: "$1.450 billion",
      image: "frozen2.jpg"
    },
    {
      title: "Interstellar",
      genre: ["Sci-Fi", "Adventure"],
      director: "Christopher Nolan",
      releaseYear: 2014,
      duration: 169,
      cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
      boxOffice: "$773 million",
      image: "interstellar.jpg",
    },
    {
      title: "The Matrix",
      genre: ["Sci-Fi", "Action"],
      director: "Lana Wachowski, Lilly Wachowski",
      releaseYear: 1999,
      duration: 136,
      cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
      boxOffice: "$467 million",
      image: "matrix.jpg",
    },
    {
      title: "Mad Max: Fury Road",
      genre: ["Action", "Adventure"],
      director: "George Miller",
      releaseYear: 2015,
      duration: 120,
      cast: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
      boxOffice: "$375 million",
      image: "mad_max.jpg",
    },
    {
      title: "The Revenant",
      genre: ["Drama", "Adventure"],
      director: "Alejandro G. Iñárritu",
      releaseYear: 2015,
      duration: 156,
      cast: ["Leonardo DiCaprio", "Tom Hardy", "Domhnall Gleeson"],
      boxOffice: "$533 million",
      image: "revenant.jpg",
    },
    {
      title: "Parasite",
      genre: ["Thriller", "Drama"],
      director: "Bong Joon-ho",
      releaseYear: 2019,
      duration: 132,
      cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"],
      boxOffice: "$263 million",
      image: "parasite.jpg",
    },
    {
      title: "Whiplash",
      genre: ["Drama", "Music"],
      director: "Damien Chazelle",
      releaseYear: 2014,
      duration: 106,
      cast: ["Miles Teller", "J.K. Simmons", "Paul Reiser"],
      boxOffice: "$49 million",
      image: "whiplash.jpg",
    },
    {
      title: "La La Land",
      genre: ["Musical", "Romance"],
      director: "Damien Chazelle",
      releaseYear: 2016,
      duration: 128,
      cast: ["Ryan Gosling", "Emma Stone", "John Legend"],
      boxOffice: "$472 million",
      image: "la_la_land.jpg",
    },
    {
      title: "Gladiator",
      genre: ["Action", "Drama"],
      director: "Ridley Scott",
      releaseYear: 2000,
      duration: 155,
      cast: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
      boxOffice: "$460 million",
      image: "gladiator.jpg",
    },
    {
      title: "The Wolf of Wall Street",
      genre: ["Biography", "Comedy"],
      director: "Martin Scorsese",
      releaseYear: 2013,
      duration: 180,
      cast: ["Leonardo DiCaprio", "Jonah Hill", "Margot Robbie"],
      boxOffice: "$406 million",
      image: "wolf_wallstreet.jpg",
    },
    {
      title: "Shutter Island",
      genre: ["Thriller", "Mystery"],
      director: "Martin Scorsese",
      releaseYear: 2010,
      duration: 138,
      cast: ["Leonardo DiCaprio", "Mark Ruffalo", "Ben Kingsley"],
      boxOffice: "$294 million",
      image: "shutter_island.jpg",
    },
    {
      title: "The Grand Budapest Hotel",
      genre: ["Comedy", "Drama"],
      director: "Wes Anderson",
      releaseYear: 2014,
      duration: 99,
      cast: ["Ralph Fiennes", "F. Murray Abraham", "Adrien Brody"],
      boxOffice: "$173 million",
      image: "grand_budapest.jpg",
    },
    {
      title: "Ford v Ferrari",
      genre: ["Biography", "Drama"],
      director: "James Mangold",
      releaseYear: 2019,
      duration: 152,
      cast: ["Matt Damon", "Christian Bale", "Jon Bernthal"],
      boxOffice: "$225 million",
      image: "ford_ferrari.jpg",
    },
    {
      title: "A Quiet Place",
      genre: ["Horror", "Thriller"],
      director: "John Krasinski",
      releaseYear: 2018,
      duration: 90,
      cast: ["Emily Blunt", "John Krasinski", "Millicent Simmonds"],
      boxOffice: "$341 million",
      image: "a_quiet_place.jpg",
    },
    {
      title: "Tenet",
      genre: ["Sci-Fi", "Action"],
      director: "Christopher Nolan",
      releaseYear: 2020,
      duration: 150,
      cast: ["John David Washington", "Robert Pattinson", "Elizabeth Debicki"],
      boxOffice: "$365 million",
      image: "tenet.jpg",
    },
    {
      title: "The Irishman",
      genre: ["Crime", "Drama"],
      director: "Martin Scorsese",
      releaseYear: 2019,
      duration: 209,
      cast: ["Robert De Niro", "Al Pacino", "Joe Pesci"],
      boxOffice: "N/A",
      image: "irishman.jpg",
    },
    {
      title: "1917",
      genre: ["War", "Drama"],
      director: "Sam Mendes",
      releaseYear: 2019,
      duration: 119,
      cast: ["George MacKay", "Dean-Charles Chapman", "Mark Strong"],
      boxOffice: "$384 million",
      image: "1917.jpg",
    },
    {
      title: "Knives Out",
      genre: ["Mystery", "Comedy"],
      director: "Rian Johnson",
      releaseYear: 2019,
      duration: 130,
      cast: ["Daniel Craig", "Chris Evans", "Ana de Armas"],
      boxOffice: "$311 million",
      image: "knives_out.jpg",
    },
    {
      title: "The Social Network",
      genre: ["Biography", "Drama"],
      director: "David Fincher",
      releaseYear: 2010,
      duration: 120,
      cast: ["Jesse Eisenberg", "Andrew Garfield", "Justin Timberlake"],
      boxOffice: "$224 million",
      image: "social_network.jpg",
    },
    {
      title: "The Green Mile",
      genre: ["Drama", "Fantasy"],
      director: "Frank Darabont",
      releaseYear: 1999,
      duration: 189,
      cast: ["Tom Hanks", "Michael Clarke Duncan", "David Morse"],
      boxOffice: "$286 million",
      image: "green_mile.jpg",
    },
    {
      title: "The Truman Show",
      genre: ["Drama", "Sci-Fi"],
      director: "Peter Weir",
      releaseYear: 1998,
      duration: 103,
      cast: ["Jim Carrey", "Ed Harris", "Laura Linney"],
      boxOffice: "$264 million",
      image: "truman_show.jpg",
    },
];

export default movies;
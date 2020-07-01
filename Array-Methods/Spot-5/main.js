let movies = [
  { title: "Dareangel", studio: "Marvel", year: 2023 },
  { title: "Batterfly", studio: "Fox", year: 2021 },
  { title: "League of Ordinary People", studio: "Blizzard", year: 2025 },
  { title: "Thor: Ragnarok", studio: "Marvel", year: 2017 },
]


if(movies.some(movie => movie.studio === "Marvel")) console.log("Let's go watch some movies")
else console.log("Let's stay home")

if(movies.every(movie => movie.year > 2020)) console.log("Futuristic stuff")
else console.log("Yawn")



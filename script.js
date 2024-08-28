// Få det aktuelle timetal (0-23) ved hjælp af new Date().getHours()
const currentHour = new Date().getHours();

// Brug if...else if...else til at bestemme hvilken besked der skal udskrives
if (currentHour >= 5 && currentHour < 10) {
  console.log("Godmorgen");
} else if (currentHour >= 10 && currentHour < 18) {
  console.log("Goddag");
} else if (currentHour >= 18 && currentHour < 24) {
  console.log("Godaften");
} else {
  console.log("Godnat");
}

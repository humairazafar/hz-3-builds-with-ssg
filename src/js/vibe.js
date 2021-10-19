//create some good vibe options
const vibes = [
    "...and you are awesome!",
    "...have a wonderful day!",
    "...and you've got this!",
    "...so is this puppy!🐶"
];
//create a random vibe
var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

//diswplay a good vibe
document.querySelector(".vibe").append(vibe);


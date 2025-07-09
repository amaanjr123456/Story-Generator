const storyBox = document.getElementById("story-box");
const nameInput = document.getElementById("nameInput");

const persons = [
  "Shaji Mon", "Raju Ettan", "Kochumol", "Lalu", "Jameela Teacher",
  "Kunju Bava", "Meenakshi Chechi", "Monichan", "Beena Aunty"
];

const places = [
  "Vadakara Beach", "Munnar Tea Estate", "Thrissur Pooram Ground",
  "Palakkad Railway Track", "Alappuzha Backwaters", "Kottayam Bus Stand",
  "Kovalam Beach", "Idukki Dam", "Kozhikode Sweet Shop"
];

const items = [
  "Coconut Rocket Helmet", "Speed Lungi Xpress", "Jet Thattukada Trolley",
  "Banana Leaf Hoverboard", "Solar-Powered Umbrella", "Air-Conditioned Mundu",
  "Selfie Stick Helicopter", "Rubber Chappal Drone", "Jet-Powered Payasam Flask"
];

function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateStory() {
  const userName = nameInput.value.trim();
  const person = userName !== "" ? userName : randomFrom(persons);
  const place = randomFrom(places);
  const item = randomFrom(items);

  const story = `
Oru divasam, ${person} enthayalum fastest aavanam ennu theerumanichu.

"Ente peru Speed ${person} alle!" ennu paranju avan kayyil vechu puthiya ${item}.

Pakshe oru prashnam undayirunnu – instruction onnum vayichilla!

${item} on cheytha samayam, ${person} munottu pokan vendi irunnu…
pakshe avan pinnekk pokki, banana thallu vechulla cartil ottichu!

Moonu yoga cheyyunna mashanmar thirichu valanju, chappal edukki otti.

Ippo aarum "${item}" ennu paranjal, ${place}-ile ella mashmarum coconut treeinte pinnilekku odi nilkkum.

${person}? Avan enthayalum tea kadaile benchinu mukalil irikkum, newspaper vayikkunna pole face...
`;

  storyBox.innerHTML = `<p>${story}</p>`;
}

function goBack() {
  if (document.referrer) {
    window.history.back();
  } else {
    window.location.reload();
  }
}

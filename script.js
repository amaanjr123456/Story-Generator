const storyBox = document.getElementById("story-box");

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
  const person = randomFrom(persons);
  const place = randomFrom(places);
  const item = randomFrom(items);

  const story = `
Oru divasam, ${person} oru puthiya mission eduthu.

"Enikku ithu vendi aanu janmichathu!" ennu vilichu, avar ${item} kayyil eduthu.

Pakshe instructions vayichilla 😅

Instead of flying forward, ${person} pinnekk ottichu, crash cheythu oru ${place} il!

Moonu mashanmar yoga cheyyunna samayam avide irunnu. Avarkku chappal edukkan time kittiyilla.

Ippo aarum "${item}" ennu paranjal, mashmarum odikkariyum. ${person} tea kadailekku maranju poyi!`;

  storyBox.innerHTML = `<p>${story}</p>`;
}

function goBack() {
  if (document.referrer) {
    window.history.back();
  } else {
    window.location.reload();
  }
}

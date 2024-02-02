// Code your selectRandomEntry function here:
function selectRandomEntry(arr) {
  return Math.floor(Math.random() * arr.length);
}

function selectCandidates(candidateIDS) {
  let selectedCandidates = [];
  while (selectedCandidates.length < 3) {
    let id = selectRandomEntry(candidateIDS);
    if (!selectedCandidates.includes(id)) {
      selectedCandidates.push(candidateIDS[id])
    }
  }
  return selectedCandidates
}


// Code your buildCrewArray function here:
function buildCrewArray(selectedCandidates, animals) {
  let crew = [];
  for (let i = 0; i< selectedCandidates.length; i++) {
    for (let j = 0; j < animals.length; j++) {
      if (selectedCandidates[i] === animals[j]["astronautID"]) {
        crew.push(animals[j])
      }
    }
  }
  return crew;
}

let idNumbers = [291, 414, 503, 599, 796, 890];

// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements:

let selectedCandidates = selectCandidates(idNumbers);
selectedCandidates = buildCrewArray(selectedCandidates,animals);

console.log(`${selectedCandidates[0].name}, ${selectedCandidates[1].name}, and ${selectedCandidates[2].name} are going to space!`)
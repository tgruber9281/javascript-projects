// Code your crewMass function here:
function crewMass(crew) {
  let crewMassKG = 0;
  for (const cand of crew) {
    crewMassKG += cand['mass'];
  }
  return Math.round(crewMassKG*10)/10;
}

// Code your fuelRequired function here:

let rocketMass = 75000;
function fuelRequired(rocketMass, crewMass, crew) {
  let totalMass = rocketMass + crewMass(crew);
  let fuelRequiredKG = totalMass * 9.5;
  for (const cand of crew) {
    if (cand.species === 'dog' || cand.species === 'cat') {
      fuelRequiredKG += 200;
    } else {
      fuelRequiredKG += 100;
    }
  }
  return Math.ceil(fuelRequiredKG);
}

// The pre-selected crew is in the array at the end of this file.
// Feel free to add, remove, or switch crew members as you see fit.

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

let crew = [candidateB,candidateD,candidateF];
let fuelRequiredKG = fuelRequired(rocketMass, crewMass, crew);
console.log(fuelRequiredKG)
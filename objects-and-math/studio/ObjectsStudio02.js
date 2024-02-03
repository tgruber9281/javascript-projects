// Code your orbitCircumference function here:
function orbitCircumference(radius) {
  return Math.round(radius*2*Math.PI);
}
// console.log(orbitCircumference(4560))
// Code your missionDuration function here:
function missionDuration(orbits,radius=2000,speed=28000) {
  let distance = orbitCircumference(radius)*orbits;
  
  return Math.round(distance/speed*100)/100;
}
// console.log(missionDuration(1548))
// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(arr) {
  return Math.floor(Math.random() * arr.length);
}

// Code your oxygenExpended function here:
function oxygenExpended(crewMember, radius, speed) {
  let hours = missionDuration(3,radius, speed);
  let oxygenUsed = Math.round(crewMember.o2Used(hours)*1000)/1000;
  // `${crewMember.name} will perform the spacewalk, which will last ${hours} hours and require ${oxygenUsed}kg of oxygen.`);
  return oxygenUsed;
}

function selectLeastOxygen(crew) {
  let crewMember = {};
  let oxygenUsed = [];
  for (const cand of crew) {
    oxygenUsed.push([cand.astronautID,oxygenExpended(cand)])
  }
  let minOxygen = oxygenUsed[0];
  for (let i = 0; i < oxygenUsed.length; i++) {
    if (oxygenUsed[i][1] < minOxygen[1]) {
      minOxygen = oxygenUsed[i];
    }
  }
  return oxygenUsed.indexOf(minOxygen);
}

// Candidate data & crew array.
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
 
 let crew = [candidateA,candidateC,candidateD];
 oxygenExpended(crew[selectRandomEntry(crew)], 5000, 80);
 oxygenExpended(crew[selectLeastOxygen(crew)], 5000, 80);
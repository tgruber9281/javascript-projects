//TODO: Add Your Code Below
window.addEventListener("load", () => {
  fetch(
    "https://handlers.education.launchcode.org/static/astronauts.json"
  ).then((res) => {
    res.json().then((jsonRes) => {
      let counter = 0;
      jsonRes.sort(dynamicSort("hoursInSpace"));
      for (const i of jsonRes) {
        counter++;
        const div = document.getElementById("container");
        let activeClass = "";
        if (i.active) {
          activeClass = "green";
        }
        div.innerHTML += `
                <div id="${i.id}" class="astronaut">
                    <div class="bio">
                        <h3>${i.firstName} ${i.lastName}</h3>
                        <ul>
                        <li>Hours in space: ${i.hoursInSpace}</li>
                        <li class="${activeClass}">Active: ${i.active}</li>
                        <li>Skills: ${JSON.stringify(i.skills)}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${i.picture}">
                </div>
                        `;
      }
      let counterDiv = document.getElementById("counter");
      counterDiv.innerHTML += counter;
    });
  });
});

function dynamicSort(property) {
  let sortOrder = 1;
  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function (b, a) {
    /* next line works with strings and numbers,
     * and you may want to customize it to your needs
     */
    let result =
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result * sortOrder;
  };
}

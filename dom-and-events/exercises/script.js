function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");
    const windowBrowserVariable = document.getElementsByTagName('body');
    console.log(windowBrowserVariable);

    // Put your code for the exercises here.
    button.addEventListener('click', ()=>{paragraph.innerHTML = "Houston, we have liftoff!"});

    missionAbort.addEventListener('mouseover', ()=>{missionAbort.style.backgroundColor = 'red'});
    
    missionAbort.addEventListener('mouseleave', ()=>{missionAbort.style.backgroundColor = ''});
    
    missionAbort.addEventListener('click', ()=>{
        let abortConfirm = window.confirm("Are you sure you want to abort the mission?");
        if (abortConfirm === true) {
            paragraph.innerHTML = "Mission aborted! Space shuttle returning home";
        }
    });
    // windowBrowserVariable[0].onmouseleave = ()=>{
    //     window.confirm("Are you sure you want to leave?");
    // };
}

window.addEventListener("load", init);

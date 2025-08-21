
function updateAllTableRows() {
    //console.log("Update Tables")
    try{
        const rows = document.querySelectorAll("#game-table tbody tr");

        rows.forEach((row, index) => {
            let progressCell = row.cells[2]; // Progress column

            //console.log("go through the rows " + progressCell.id)
            addProgressBar(progressCell.id, row, progressCell)

        });
    }catch{
        console.log("couldn't update progress bar")
    }
}

function addProgressBar(key, myRow, cell){

    // Get streak value from localStorage (default to 0)
    let streak = localStorage.getItem(key + "Streak") || 0;
    streak = Number(streak); // ensure it's a number

    // Set a goal or max value for the progress (e.g., 100)
    let maxStreak = 100;

    // Create a container div for the progress bar
    let progressContainer = document.createElement("div");
    progressContainer.style.width = "100px";
    progressContainer.style.backgroundColor = "#eee";
    progressContainer.style.borderRadius = "5px";
    progressContainer.style.height = "16px";
    progressContainer.style.overflow = "hidden";
    progressContainer.style.marginTop = "4px";

    // Create the progress bar itself
    let progressBar = document.createElement("div");
    progressBar.style.width = `${Math.min((streak / maxStreak) * 100, 100)}%`;
    progressBar.style.height = "100%";

    // Choose progress bar color based on streak
    let barColor;
    switch (true) {
        case (streak < 10):
            barColor = "#ff0000";
            break;
        case (streak < 25):
            barColor = "#ff8000";
            break;
        case (streak < 50):
            barColor = "#ffcc00";
            break;
        case (streak < 100):
            barColor = "#77dd77";
            break;
        default:
            barColor = "#77dd77";
            break;
    }

    progressBar.style.backgroundColor = barColor; // pastel green
    progressBar.style.transition = "width 0.3s ease";

    if(streak >= 100){
        let cellText = document.createTextNode("👑") 
        cell.appendChild(cellText)
    }

    // Assemble the bar
    progressContainer.appendChild(progressBar);
    cell.appendChild(progressContainer);
    

}

updateAllTableRows()


const checkboxCount = document.getElementById("checkbox-count");
const taskAssignedCount = document.getElementById("task-assigned-count");
const todayDate = document.getElementById("today-date");
const clearHistoryButton = document.getElementById("clear-history-button");
const mainRightBottomContainer = document.getElementById("main-right-bottom-container");
const taskCompletedButton = document.querySelectorAll(".task-completed-button");
const themeChangeButton = document.getElementById("theme-change-button")

let currentDate = new Date().toLocaleDateString("en-US", { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' });
todayDate.innerText = currentDate;
let taskAssignedCountValue = 6;    
let checkboxCountValue = 23;

for(let i = 0 ; i < taskCompletedButton.length ; i++){
    taskCompletedButton[i].addEventListener("click",function(event){
        alert("Board updated Successfully")
        event.target.classList.add("disabled-button");
        event.target.setAttribute("disabled",true);
        
        taskAssignedCountValue = taskAssignedCountValue-1;
        taskAssignedCount.innerText = taskAssignedCountValue;
        
        checkboxCountValue = checkboxCountValue+1;
        checkboxCount.innerText = checkboxCountValue;

        let taskCompletedItemName = event.target.parentNode.parentNode.childNodes[3].innerText
        let currentTime = new Date().toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });

        let div = document.createElement("div");
        div.innerHTML=`
        <p>You have Complete The Task ${taskCompletedItemName} at ${currentTime}</p>
        `;
        div.classList.add("history-box")
        mainRightBottomContainer.appendChild(div);
        
        if(checkboxCountValue > 28){
            alert("congrates!!! You have completed all the current task")
        }
    })
}

clearHistoryButton.addEventListener("click",function(){
    mainRightBottomContainer.innerHTML = ""
})

let colorList = ["rgb(140, 237, 166)","rgb(146, 140, 237)","rgb(237, 180, 140)","rgb(205, 140, 237)","rgb(241, 98, 98)"]
let colorIndex = 0;

themeChangeButton.addEventListener("click",function(){
    if(colorIndex < colorList.length){
        document.body.style.backgroundColor = `${colorList[colorIndex]}`;
        colorIndex++;
    }else{
        colorIndex = 0;
        document.body.style.backgroundColor = "rgb(140, 216, 237)";
    }
});
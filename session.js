let timer_area = document.getElementById('timers')
let clear_btn = document.getElementById('clear-btn')
let del_btn = document.getElementById('delete-btn')

let isDeleteMode = false;
let selectedTimer = [];

function deleteSelectedTimer(){
    let currentTimers = getData();

    let updatedTimers = currentTimers.filter((elem,index)=>{
        return !selectedTimer.includes(index)
    })

    localStorage.setItem('timers',JSON.stringify(updatedTimers))
}

del_btn.addEventListener("click",()=>{
    if(isDeleteMode){
        if(selectedTimer.length > 0){
            deleteSelectedTimer();
        }
        del_btn.textContent = "Delete"
    }else {
        del_btn.textContent = "Confirm Delete"; // Change button text
    }

    isDeleteMode = !isDeleteMode;
    console.log(isDeleteMode)
    selectedTimer =  [];
    renderUI()
})


function getData(){
    return JSON.parse(localStorage.getItem('timers')) || []
}

function renderUI(){
    
    const getTimersData = getData()
    timer_area.innerHTML = ''
    
    if(getTimersData && Array.isArray(getTimersData) && getTimersData.length > 0){
        
    getTimersData.forEach((element,index) => {
        
        let main = document.createElement('ul')
        let titles = document.createElement('li')
        let timers = document.createElement('li')
        
        main.classList.add('main')
        titles.classList.add('titles-input')
        timers.classList.add('time-input')

        titles.textContent = element.title
        timers.textContent = element.timer
        
        if(isDeleteMode){
            let checkbox = document.createElement('input')
            checkbox.type = 'checkbox'
            checkbox.className = 'delete-timers'
            // main.appendChild(checkbox)

            checkbox.dataset.index = index

            if(selectedTimer.includes(index)){
                checkbox.checked = true
            }

            checkbox.addEventListener("change",(e)=>{
                const itemIndex = parseInt(e.target.dataset.index)

                if(e.target.checked){
                    selectedTimer.push(itemIndex)
                }else{
                    selectedTimer = selectedTimer.filter(i => i !== itemIndex)
                }
                console.log("Currently selected indexes for deletion:", selectedTimer);

            })
            main.prepend(checkbox)
        }

        main.appendChild(titles)
        main.appendChild(timers)
        timer_area.append(main)
    });

}else{
    timer_area.innerHTML = '<p>No active sessions found.</p>';
    clear_btn.disabled = true
    del_btn.disabled = true
}
}

// clear sessions


function clearSessions(){
    localStorage.removeItem('timers')
}

clear_btn.addEventListener("click",()=>{
    clearSessions()
    renderUI()
})

renderUI()
let form = document.querySelector('form') 
let action = document.getElementById('btn')

let tempDB = JSON.parse(localStorage.getItem('timers')) || [];

function formatTime(time) {
    return `${time}:00 Minutes`;
}

function FormSubmit(){
    let title = document.getElementById('input-title')
    let time = document.getElementById('input-time')

    // validation
    if(!title.value || !time.value) return

    if(title.value.length > 12) return

    if(tempDB.length > 2) return

    let result = formatTime(time.value)

    tempDB.push({title:title.value,timer:result})

    localStorage.setItem('timers',JSON.stringify(tempDB))

    title.value = ''
    time.value = ''
}

form.addEventListener('submit',(dets)=>{
    dets.preventDefault()
    FormSubmit()
})


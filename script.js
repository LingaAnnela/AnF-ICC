
function addTask() {

    let taskName = document.getElementById('task-name-id');
    let date = document.getElementById('task-name-date');
    let assingedTo = document.getElementById('task-name-assigned');

    if (taskName.value == "" || !taskName.value) {
        alert('Please enter valid task name!');
        return;
    } else if (date.value == "" || !date.value) {
        alert('Please enter valid date!');
        return;
    } else if (assingedTo.value == "" || !assingedTo.value) {
        alert('Please enter valid assingedTo!');
        return;
    }

    var newTask = {
        name: taskName.value,
        date: formatDate(date.value),
        assigned: assingedTo.value
    }
    var localStorageData = JSON.parse(localStorage.getItem('data'))
    var existingTask = (localStorageData == null) ? [] : localStorageData;
    
    existingTask.unshift(newTask);
    displayTask(existingTask);
    document.getElementById('task-name-id').value = "";
    document.getElementById('task-name-date').value = "";
    document.getElementById('task-name-date').type = 'text';
    document.getElementById('task-name-assigned').value = "";
    document.getElementById('save-button').disabled = true;
}

function formatDate(date){
    var d = new Date(date);
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1;
    var curr_year = d.getFullYear();
    var formattedDate = curr_month + "/" + curr_date + "/" + curr_year;
    console.log(formattedDate);
    return formattedDate;
}

function validateSave() {
    let taskName = document.getElementById('task-name-id');
    let date = document.getElementById('task-name-date');
    let assingedTo = document.getElementById('task-name-assigned');

    if (taskName.value != "" && date.value != "" && assingedTo.value != "") {
        document.getElementById('save-button').disabled = false;
    }
}



function displayTask(newTasks) {
    var existingTask = (newTasks == undefined) ? JSON.parse(localStorage.getItem('data')) : newTasks;

    var tbody = document.getElementById('task-tbl-body');
    document.getElementById('task-tbl-body').innerHTML = "";
    if(existingTask != null && existingTask){
        existingTask.forEach((val, index) => {
    
            var tr = tbody.insertRow();
    
            for (var i = 0; i < 3; i++) {
                var td = tr.insertCell(i);
                if (i == 0) {
                    td.appendChild(document.createTextNode(val.name));
                } else if (i == 1) {
                    td.appendChild(document.createTextNode(val.date));
                } else {
                    td.appendChild(document.createTextNode(val.assigned));
                }
            }
    
        });
        localStorage.setItem('data', JSON.stringify(existingTask));

    }

}

var data = [
    { "name": "Test Task #1", "date": "12/01/2012", "assigned": "John Doe" },
    { "name": "Test Task #2", "date": "12/02/2012", "assigned": "John Doe" },
    { "name": "Test Task #3", "date": "12/03/2012", "assigned": "John Doe" },
    { "name": "Test Task #4", "date": "12/04/2012", "assigned": "John Doe" },
    { "name": "Test Task #5", "date": "12/05/2012", "assigned": "John Doe" },
    { "name": "Test Task #6", "date": "12/06/2012", "assigned": "John Doe" },
    { "name": "Test Task #7", "date": "12/07/2012", "assigned": "Linga Annela" }
];

function initialize() {

    if (!localStorage.getItem('data') && data) {
        localStorage.setItem('data', JSON.stringify(data));
    } 
    displayTask();


}
document.addEventListener("DOMContentLoaded", initialize);
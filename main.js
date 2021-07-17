var submitBtn = document.getElementById('submitButton');
var workList = document.getElementById('works');
var filter = document.getElementById('filter');
var workBox = document.getElementById('workName');
var clearBtn = document.getElementById('clearButton');
var totList = document.getElementsByTagName('li');
var n = totList.length;

submitBtn.addEventListener('click',addWork);
workList.addEventListener('click',delWork);
workList.addEventListener('click',done);
filter.addEventListener('keyup',filterWorks);
clearBtn.addEventListener('click',clearAll);

function addWork(){
    var workName = workBox.value;
    var li = document.createElement('li');
    li.className = "list-group-item border-dark listItem";
    var liText = document.createTextNode(workName);
    if(workName.trim() === ""){
        alert('Please enter valid Work');
    }
    else{
        li.appendChild(liText);
        workList.appendChild(li);  

        var delBtn = document.createElement('button');
        delBtn.className = "btn btn-danger float-end btn-sm delete";
        var btnText = document.createTextNode('X');
        delBtn.appendChild(btnText);
        li.appendChild(delBtn);
        workBox.value = '';
        workName.value = '';
        }
}

function delWork(e){
    if(e.target.classList.contains('delete')){
        var li = e.target.parentElement;
        workList.removeChild(li);
    }
}

function done(e){
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }
}

function filterWorks(e){
    //alert('search');
    var text = e.target.value.toLowerCase();
    arrayList = Array.from(totList);

    arrayList.forEach(function(work){
        var workName = work.firstChild.textContent;
        var converted = workName.toLowerCase();
        if(converted.indexOf(text) === -1){
            work.style.display = 'none';
        }else {
            work.style.display = 'block';
        }
    })
}

function clearAll(){
    //alert(''+n);
    if(confirm('Are you sure to delete all?')){
        while(n>0){
            var firstElement = workList.firstElementChild;
            workList.removeChild(firstElement);
        }
    }
}
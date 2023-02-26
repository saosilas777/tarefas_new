var $btn = document.getElementById('btn');
var $addTask = document.querySelector('#addTask');
var $ul = document.querySelector('ul');



$btn.addEventListener('click', newTask
);
$addTask.addEventListener('keyup', function(e){
    if(e.keyCode === 13){
        newTask();
    }
});

function newTask(){
    if($addTask.value != ""){
        var task = '<li>' +  $addTask.value + '</li>';
        $ul.innerHTML +=  task;
        $addTask.value = "";
        $addTask.focus();
    }
    else{
        $addTask.value = "";
        $addTask.focus();
    }
    
}





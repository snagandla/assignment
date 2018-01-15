function addrow(){

    $("#main").append("<tr><td>" +  $("#addTitle").val() + "</td><td>" + $("#addDescription").val() + "</td><td>" + $("#addPerson").val() + "</td><td>" + $("#addHours").val() + "</td><td>" + $("#addStartDate").val() + "</td><td>" + $("#addEndDate").val() + "</td><td><input type='radio' name='myRadio'></td></tr>");
    var addtext= ({ Title:$("#addTitle").val(),Description : $("#addDescription").val(), Assignee:$("#addPerson").val(),EstimatedHours: $("#addHours").val(),StartDate:$("#addStartDate").val(),EndDate:$("#addEndDate").val()});                
    glbTaskList.push(addtext);

}

function validateAdd(){
    var title= $("#addTitle").val();
    var descript=  $("#addDescription").val();
    var person=  $("#addPerson").val();
    var hours=   $("#addHours").val();
if(!isNaN(title)||(title==null)){
    alert("title cannot be numeric");
    return false;
}else if(!isNaN(descript)||(title==null)){
    alert("description can't be numeric");
    return false;
}else if(!isNaN(person)||(title==null)){
    alert("person name can't be numeric");
    return false;
}else if(isNaN(hours)||(title==null)){
    alert("hours must be numeric");
    return false;
}else return true;

}

function addClear(){
    $("#addTitle").val("");
    $("#addDescription").val("");
    $("#addPerson").val("");
    $("#addHours").val("");
    $("#addStartDate").val("");
    $("#addEndDate").val(""); 
    }   
    
    
    
function addAndClear(){
    if(validateAdd()==true){
         addrow();
        }
   
    addClear();  
    $("#addform").toggle(); 
    }


function addclose(){
    addClear();
$("#addform").toggle(); 
}


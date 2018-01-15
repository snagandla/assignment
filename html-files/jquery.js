$(function(){
$("#main").append("<tr><th> Title</th><th>Description </th><th>Assignee </th><th> Estimated Hours </th><th>Start Date  </th><th> End Date  </th><th> Select </th></tr>");

    
var text='[{"Title":"My First Task",  "Description":"My First Task","Assignee":"John","EstimatedHours":"10","StartDate":"2017-12-01","EndDate":"2017-12-31"},{"Title":"My Second Task",  "Description":"My Second Task","Assignee":"John1","EstimatedHours":"10","StartDate":"2017-12-01","EndDate":"2017-12-31"},{"Title":"My Third Task",  "Description":"My Third Task","Assignee":"John 3","EstimatedHours":"10","StartDate":"2017-12-01","EndDate":"2017-12-31"}]';
     
data =JSON.parse(text);

for(var k=0;k<data.length;k++){
glbTaskList.push(data[k]);
  $("#main").append("<tr><td>" + data[k].Title + "</td><td>" +data[k].Description + "</td><td>" + data[k].Assignee + "</td><td>" + data[k].EstimatedHours + "</td><td>" + data[k].StartDate + "</td><td>" + data[k].EndDate + "</td><td><input type='radio' name='myRadio'></td></tr>");

}
}); 

$(document).ready(function(){
   
    $("#add").click(function(){
       $("#addform").toggle(); 
    }) 
});

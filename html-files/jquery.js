/*$(function(){
$("#main").append("<tr><th> Title</th><th>Description </th><th>Assignee </th><th> Estimated Hours </th><th>Start Date  </th><th> End Date  </th><th> Select </th></tr>");
}); */

$(document).ready(function(){
    $("#add").click(function(){
       $("#addform").toggle(); 
    })
});
$(document).ready(function(){
    $("#edit").click(function(){
       $("#editform").toggle(); 
    })
});

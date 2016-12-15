$(document).ready(function () {

    //List Titles
    var appendUrl = 'http://jsonplaceholder.typicode.com/posts?userId=1';


    

    $.get(appendUrl, function(response){
        var one = $('#append');
        var appendCount = 1;
        
    
        
        for(var i = 0; i < response.length; i++){
            one = '<li>Index: ' + appendCount + 'Title: ' + response[i].title + "</li>";
            appendCount++;
            $("#append").append(one);
        }
        
    });
    
    //
    var prependUrl = 'http://jsonplaceholder.typicode.com/photos?albumId=1';
    
    $.get(prependUrl, function(response){
        var two = $("#prepend");
        var prependCount = 1;
        
        for(var i = 0; i <response.length; i++){
            two = "<li>Index: " + prependCount + "Title: " + response[i].title + "</li>";
            prependCount++;
            $("#prepend").prepend(two);
        }
    });
    
    
    
    
});
var button=document.getElementById('counter');

button.onclick = function () {
    
    //Create Request Object
    var request = new XMLHttpRequest();
    
    //Capture the response and store it is a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            
            //Take SOme action
            if(request.status === 200){
             var counter = request.responseText;
             var span = document.getElementById('count');
             span.innerHTML =counter.toString();
            }
        }
        //not done yet
    }
    //make the request
    request.open('GET','http://prakash0544.imad.hasura-app.io/counter', true);
    request.send(null);
};



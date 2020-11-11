document.getElementById('button').addEventListener('click',my_func);
document.getElementById('ht').addEventListener('click',new_func);
document.getElementById('github').addEventListener('click',git_func);


function my_func(){
    var xhr= new XMLHttpRequest();
    xhr.open('GET','ajax.txt',true);

    console.log("yy");
    // xhr.onload = function(){
    //     if(this.status==200){
    //         console.log(this.responseText)
    //     }
    // };

    xhr.onreadystatechange = function(){
        console.log(this.readyState);
        // if(this.readyState==2 && this.status==200){
        //     console.log('inside');
        //     console.log(this.readyState);
        // }
    }

    xhr.send();
}


function new_func(){
    var xhr=new XMLHttpRequest();
    xhr.open('GET','new.html',true);
    xhr.onload = function(){
        document.getElementById('nn').innerHTML = this.responseText;
        console.log('Work done');
    }

    xhr.send();
}

function git_func(){
    var xhr=new XMLHttpRequest();
    xhr.open('GET','https://api.github.com/users',true);

    xhr.onload = function(){
        if(this.status == 200){
            var users = JSON.parse(this.responseText);
            console.log(users.id);
            console.log(users);
            var ade='';
            for(i in users){
                ade += 
                '<div class="user">'+
                '<img src="'+users[i].avatar_url+'" widht="70" height="70">'+
                '<ul>'+
                '<li> '+users[i].id+' </li>' +
                '<li> '+users[i].login+' </li>'+
                '</ul>'+
                '</div>'
            }
        } 
        document.getElementById('nn').innerHTML=ade;
    }
    xhr.send();
}
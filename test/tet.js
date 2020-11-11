function newfun(a,...args){
    id=a;
    console.log(id);
    for(var i =0;i<args.length;i++){
        console.log(args[i]);
    }
}

newfun(1,2,3,4,5,6,7);

var arr={
    id:1,
    name:'sree',
    age:23
}

var new_arr={
    ...arr,
    height:'5,11'
}

console.log(new_arr);
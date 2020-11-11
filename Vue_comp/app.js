// first exec

// Vue.component('click-counter',{
//     template:'#proto-xtemp',
//     data(){
//         return {
//             count:0
//         }
//     }
// })


// new Vue({
//     el:'#new-vue',
//     data:{
//         name:'prototype',
//         // count:0,
//     }
// });
let PlanComponent={
    template:'#planid',

    props:['name'],
};
let PlanPickerComp={
    template:'#plan-template',
    components:{
        plan:PlanComponent,
    },
    data(){
        return{
            names:['The Single','The Curious','The Addict']
        }
    }
};




var new1=new Vue({
    el:'#app',
    components:{
        'plan-picker':PlanPickerComp,
    }
    
})
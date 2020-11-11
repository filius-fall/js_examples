app = new Vue({
    el:'#root',
    data:{
        name:"123"
    },
    methods:{
        addDouble: function(){
            this.name += this.name;
            console.log(this.name);
            this.name=""
        }
    }
})
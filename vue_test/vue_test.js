var vue1=new Vue({
    el:'#vue-app',
    data:{
       health:100,
       ended:false,
    },

    methods:{
        punch:function(){
            this.health -=10;
            console.log(this.health);

            if(this.health <=0){
                this.ended=true;
            }
        },

        restart:function(){
            this.health=100;
            this.ended=false;
        }
        
        },
});

var vew2=new Vue({
    el: '#app', 
    data() {
      return {
        count: 0
      }
    },
    watch: {
      count() {
        console.log('value changed')
      }
    }
  })


  Vue.Component('newComp',{
      data(){
          return{
              plans:['read','write']
          }
      }
  }),


  let childComp={
      props:{
          name:{
              type:string,
              required:true,
          }
      }
  }

new Vue({
    el:"#app",
    components:{
        'child-comp':childComp
    }
})

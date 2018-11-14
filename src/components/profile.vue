<template>
<div>
  <template>
       <div class="spark">
 <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="img2">
        

         <img slot="image" src="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"  class="img3" alt="..."/>
    <div class="author">
      <a href="#">
      

        <h4 class="title">Mike Andrew<br />
          <small>michael24</small>
        </h4>
      </a>
    </div>
    <p class="description text-left"> "Lamborghini Mercy <br>
      Your chick she so thirsty <br>
      I'm in that two seat Lambo"
    </p>
    <div slot="footer" class="text-center">
      <button  @click="purchaseorder">purchase order</button>
     
    </div>
        </div>
        </div>
      </div>
    </div>
 </div>
  </template>
  <template>
       <div class="spark">
 <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="img2">
        

         <img slot="image" src="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"  class="img3" alt="..."/>
    <div class="author">
      <a href="#">
      

        <h4 class="title">Mike Andrew<br />
          <small>michael24</small>
        </h4>
      </a>
    </div>
    <p class="description text-left"> "Lamborghini Mercy <br>
      Your chick she so thirsty <br>
      I'm in that two seat Lambo"
    </p>
    <div slot="footer" class="text-center">
      <button  @click="purchaseorder">purchase order</button>
     
    </div>
         
        </div>
      </div>
    </div>
 </div>
       </div>
  </template>
</div>
</template>
<script>
   export default {
    data() {
        return {
            item: {
            date: 'dsq',
            password: '',
            confirmPassword: ''
            }         
        }
    },
    methods:{
      purchaseorder(){
var app=this;
app.$router.push('/admin/form');
      }
    }
   }
</script>
<style>
.cont{
 float:right;
}.conter{
  width:57%;
  
}
.cont2{
 
 
  width:33%;
  height:33px;
}

.img2{
    vertical-align: middle;
    border-style: none;
   
  
    padding: 10px;
    
    background-color: white;
}
.img3{
  padding-top:12px;
}

.spark{
  float:left;
}
</style>

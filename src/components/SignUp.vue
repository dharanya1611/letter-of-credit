<template>    
  <form class="wizard" @submit.prevent="onSubmit()">  
    <h3 class="title">Register</h3>

    <div :class="{error: errors.has('email')}">
    <input type="text" placeholder="Enter Email" name="email" id="email" v-validate="'required|email'" v-model="user.email" required></div>
    <div class="error" v-if="errors.has('email')">&emsp; {{errors.first('email')}}</div>

    <div :class="{error: errors.has('password')}">
    <input type="password" placeholder="Enter Password" name="password" id="password" v-validate="'required|min:6|max:35'" v-model="user.password" required></div>
    <div class="error" v-if="errors.has('password')">{{errors.first('password')}}</div>

    <div :class="{error: errors.has('confirmPassword')}">
    <input type="password" placeholder="Repeat Password" name="confirmPassword" id="confirmPassword" v-validate="'required'" v-model="user.confirmPassword" required></div>
    <div class="error" v-if="errors.has('confirmPassword')">{{errors.first('confirmPassword')}}</div>

    <button type="submit" class="registerbtn">Register</button>
  
    <div class="tool">
    <p>Already have an account? <a href="#/login">Sign in</a>.</p>
    </div> 
  </form>
</template>

<script>
  import signupService from './signupService.js';
  export default {
    data() {
        return {
            user: {
            email: '',
            password: '',
            confirmPassword: ''
            }         
        }
    },
    methods: {
        onSubmit() {
        console.log("here")
        this.$validator.validateAll()
        .then( res =>{
          console.log("res",res)
          if(res) {
            console.log('true res')
             var app = this;           
              signupService.signUp(this.user)
              .then(res=> {                 
                 console.log(res) 
                if(res.status === 200) {
                    console.log("Status checked")
                    var app=this;
                    app.$router.push('/admin/overview')
                    const authUser = {}
                      authUser.data = res.data;
                      authUser.token = res.token;
                      window.localStorage.setItem('User', JSON.stringify(authUser));
                      console.log(res)
                } 
                else{
                    console.log("error")
                }              
            })
            .catch(function (err){ 
              console.log("err")
            })
          }
          else {
            console.log('false res')
          }
        },
        err => {
          console.log("err")
        })
      }       
    }
  }
</script>

<style>

    .wizard {
        width: 50%;
        padding-left: 2%;
        padding-top: 2%;
        padding-right: 2%;
        background-color: white;
        margin-left: auto;
        margin-right: auto;
        margin-top: 6%;
        border-radius: 2%;
    }

    h3.title {
        text-align: center;
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
        background-color: black;
    }

    * {
        box-sizing: border-box;
    }
    
    input[type=text], input[type=password] {
        width: 100%;
        padding: 15px;
        margin: 5px 0 22px 0;
        display: inline-block;
        border: none;
        background: #f1f1f1;
    }

    input[type=text]:focus, input[type=password]:focus {
        background-color: #ddd;
        outline: none;
    }

    hr {
        border: 1px solid #f1f1f1;
        margin-bottom: 25px;
    }

    .registerbtn {
        background-color: #4CAF50;
        color: white;
        padding: 16px 20px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        width: 100%;
        opacity: 0.9;
    }

    .registerbtn:hover {
        opacity: 1;
    }

    a {
        color: dodgerblue;
    }

    .signin {
        background-color: #f1f1f1;
        text-align: center;
    }

    .error {
        color: red;
        padding-left: 5%;
    }

    .tool {
        width: 50%;
        height: 30%;
        padding-top: 2%;
    }

</style>
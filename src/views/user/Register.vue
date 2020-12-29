<template>
<div>
   <Header/>
        <!-- Start Login Register Area -->
        <div class="htc__login__register bg__white ptb--130" style="background: rgba(0, 0, 0, 0) url(images/bg/5.jpg) no-repeat scroll center center / cover ;">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 ml-auto mr-auto">
                        <ul class="login__register__menu nav justify-contend-center" role="tablist">
                            <li role="presentation" class="login active"><router-link to="/login"> 登入 </router-link></li>
                            <li role="presentation" class="register"><router-link  class="active" to="/register"> 註冊 </router-link></li>
                        </ul>
                    </div>
                </div>
                <!-- Start Login Register Content -->
                <div class="row tab-content">
                    <div class="col-md-6  ml-auto mr-auto">
                        <div class="htc__login__register__wrap">
                            <!-- Start Single Content -->
                            <div id="register" role="tabpanel" class="single__tabs__panel tab-pane active">
                                <form class="login" method="post">
                                    <input v-model="email" type="email" placeholder="Email*">
                                    <input v-model="name" type="text" placeholder="使用者名稱*">
                                    <input v-model="password" type="password" placeholder="密碼*">
                                    <input v-model="repassword" type="password" placeholder="確認密碼*">
                                </form>
                               
                                <div class="htc__login__btn">
                                    <a  href="javascript:;"  @click="register()">立即註冊</a>
                                </div>
                    
                            </div>
                            <!-- End Single Content -->
                        </div>
                    </div>
                </div>
                <!-- End Login Register Content -->
            </div>
            
        </div>
        <!-- End Login Register Area -->
        
        <Footer/>
</div>
 

        
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { register } from "@/api/user";
export default {
  name: "Login",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      email: null,
      password: null,
      repassword: null,
      name: null,
    };
  },
  methods: {
    register() {
      const vm = this;

      if(vm.password != vm.repassword){
        alert("確認密碼錯誤")
        vm.repassword=""
      }else{
          let data = {
        email: vm.email,
        password: vm.password,
        name: vm.name,
      };
      register(data)
      .then(function (res) {
        console.log(res);
        alert("註冊成功!")
        vm.$router.push({ name: 'Login' })
      })
      .catch((error)=>{
        if(error.response.data && error.response.data.message){
          alert(error.response.data.message)
        }
        // console.log(error.response.data.message);
      });
      }
    
    },
  },
};
</script>

<style>
</style>
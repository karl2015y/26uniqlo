<template>
<div>
  <Header/>
        <!-- Start Login Register Area -->
        <div class="htc__login__register bg__white ptb--130" style="background: rgba(0, 0, 0, 0) url(images/bg/5.jpg) no-repeat scroll center center / cover ;">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 ml-auto mr-auto">
                        <ul class="login__register__menu nav justify-contend-center" role="tablist">
                            <li role="presentation" class="login active"><router-link  class="active" to="/login"> 登入 </router-link></li>
                            <li role="presentation" class="register"><router-link to="/register"> 註冊 </router-link></li>
                        </ul>
                    </div>
                </div>
                <!-- Start Login Register Content -->
                <div class="row tab-content">
                    <div class="col-md-6  ml-auto mr-auto">
                        <div class="htc__login__register__wrap">
                            <!-- Start Single Content -->
                            <div id="login" role="tabpanel" class="single__tabs__panel tab-pane active">
                                <form class="login" method="post">
                                    <input v-model="user.email" type="text" placeholder="使用者名稱*">
                                    <input v-model="user.password" type="password" placeholder="密碼*">
                                </form>
                                <!-- <div class="tabs__checkbox">
                                    <input type="checkbox">
                                    <span> Remember me</span>
                                    <span class="forget"><a href="#">Forget Pasword?</a></span>
                                </div> -->
                                <div class="htc__login__btn mt--30">
                                    <a href="javascript:;"  @click="signin()">登入</a>
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
export default {
  name: "Login",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect;
      },
    },
  },
  methods: {
    //登入功能
    signin() {
      const vm = this;
      let data = {
        email: vm.user.email,
        password: vm.user.password,
      };
      vm.$store
        .dispatch("setUserData", data)
        .then((res) => {
          console.log(res);
          if (res.data.user) {
            vm.$router.push("/");
          }
        })
       .catch((error)=>{
        if(error.response.data && error.response.data.message){
          alert(error.response.data.message)
        }
        // console.log(error.response.data.message);
      });
    },
  },
};
</script>

<style>
</style>
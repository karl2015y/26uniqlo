<template>
  <div class="wrapper home-7 wrapper__sidebar home-v5 wrapper__sidebar--left">
    <div class="mobile-content lg-device-hide">
      <div class="container-fluid">
        <div class="row">
          <!-- Start MAinmenu Ares -->
          <div class="col-5">
            <div class="logo">
              <a href="/">
                <img src="images/logo/uniqlo.png" alt="logo" />
              </a>
            </div>
          </div>
          <!-- End MAinmenu Ares -->
          <div class="col-7 text-right">
            <ul class="menu-extra text-right">
              <li>
                <a href="login-register.html"><span class="ti-user"></span></a>
              </li>
              <li class="cart__menu"><span class="ti-shopping-cart"></span></li>
              <li class="toggle__menu"><span class="ti-menu"></span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 電腦版MENU -->
    <Siderbar />
    <!-- 手機版MENU -->

    <SiderbarM>
    <template v-if="$route.name=='Daigou'">
      <h2 class="pl-4 pt-4 h2 bg-white">代購表單</h2>
      <Orders/>
    </template>
    <template v-else>
     <h2 class="pl-4 pt-4 h2 bg-white">
      <router-link class="btn-link" to="/daigou">代購表單</router-link> / {{$route.params.dgid}}</h2>
      <Items/>
    </template>
      

      
      
      <!-- Start Footer Area -->
      <Footer />
      <!-- End Footer Area -->
    </SiderbarM>

  </div>
</template>

<script>

import Orders from "@/components/Daigou/Orders.vue";
import Items from "@/components/Daigou/Items.vue";
import Footer from "@/components/Footer.vue";
import Siderbar from "@/components/Siderbar.vue";
import SiderbarM from "@/components/SiderbarM.vue";

export default {
  name: "Daigou",
  components: {
    // Header,
    Orders,
    Items,
    Footer,
    Siderbar,
    SiderbarM,
  },
  data() {
    return {
    };
  },
  watch: {
    $route() {

    },
  },
  created() {

  },
  methods: {

  },
};
</script>

<style lang="scss">
</style>

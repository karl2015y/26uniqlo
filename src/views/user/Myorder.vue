<template>
  <div class="wrapper home-7 wrapper__sidebar home-v5 wrapper__sidebar--left">
    <Loading :active.sync="isLoading"></Loading>
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
      <UserOrders/>

      <!-- Start Footer Area -->
      <Footer />
      <!-- End Footer Area -->
    </SiderbarM>

  </div>
</template>

<script>

import Footer from "@/components/Footer.vue";
import Siderbar from "@/components/Siderbar.vue";
import SiderbarM from "@/components/SiderbarM.vue";
import UserOrders from "@/components/UserOrders.vue";

export default {
  name: "Myorder",
  components: {
    // Header,
    Footer,
    Siderbar,
    SiderbarM,
    UserOrders

  },
  data() {
    return {
      isLoading: false,

    };
  },

  created() {
    const vm = this;
    vm.getMyOrder();
  },
  methods: {
    getMyOrder() {
      // const vm = this;
      // vm.isLoading = true;
      
      //   getMyOrders().then(function (res) {
      //     console.log(res);

      //     vm.isLoading = false;
      //   });
     
    },


  },
};
</script>

<style lang="scss">
</style>

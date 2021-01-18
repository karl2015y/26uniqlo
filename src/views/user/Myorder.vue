<template>
  <div class="wrapper home-7 wrapper__sidebar home-v5 wrapper__sidebar--left">
    <Loading :active.sync="isLoading"></Loading>
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

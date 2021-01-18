<template>
  <div class="wrapper home-7 wrapper__sidebar home-v5 wrapper__sidebar--left">
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

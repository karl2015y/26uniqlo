<template>
  <div class="wrapper--content bg__cat--5">
    <slot />
  </div>
</template>

<script>
import { getBrandbyType } from "@/api/brand";

export default {
  data() {
    return {
      isLoading: false,
      Brands_1: [],
      Brands_2: [],
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  methods: {
    logout() {
      localStorage.clear();
      location.reload();
    },
    getBrand() {
      const vm = this;
      vm.isLoading = true;
      getBrandbyType("運動品牌").then((response) => {
        console.log(response.data);
        vm.Brands_1 = vm.Brands_1.concat(response.data);
        vm.isLoading = false;
      });
      getBrandbyType("網拍").then((response) => {
        console.log(response.data);
        vm.Brands_2 = vm.Brands_2.concat(response.data);
        vm.isLoading = false;
      });
    },
  },
  created() {
    this.getBrand();
  },
};
</script>

<style>
</style>
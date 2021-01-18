<template>
  <div class="wrapper home-7 wrapper__sidebar home-v5 wrapper__sidebar--left">
    <Loading :active.sync="isLoading"></Loading>
    <!-- 電腦版MENU -->
    <Siderbar />
    <!-- 手機版MENU -->

    <SiderbarM>
   
          <h3 class="pl-4 pt-4 h2">{{ $route.query.brand }}</h3>


      <p class="mx-4" v-if="brand" v-html="brand.description"></p>
      <div
        v-if="
          product_list != null &&
          product_list.data &&
          product_list.data.length == 0
        "
        style="min-height: calc(100vh - 27.6rem)"
        class="pl-4 py-3 h3 text-muted"
      >
        暫時沒有商品上架，過一陣子再來吧~
      </div>
      <div
        v-else
        style="min-height: calc(100vh - 27.6rem)"
        class="row product__list mx-2"
      >
        <!-- Start Single Product -->
        <div
          v-for="(item, index) in product_list.data"
          :key="index"
          class="col-md-4 single__pro col-lg-3 cat--1 col-sm-12"
        >
          <div class="product foo">
            <div class="product__inner">
              <div class="pro__thumb">
                <a :href="`#/pd/${item.ppid}`">
                  <img :src="item.pimg" alt="product images" />
                </a>
              </div>

              <template v-if="item.count != 0">
                <div class="product__hover__info">
                  <ul class="product__action">
                    <li>
                      <a
                        title="Add TO Cart"
                        @click="addtoCarts(item)"
                        href="javascript:;"
                        ><span class="ti-shopping-cart"></span
                      ></a>
                    </li>
                  </ul>
                </div>
              </template>
            </div>
            <div class="product__details">
              <h2 v-if="item.count == 0">
                <a :href="`#/pd/${item.ppid}`">{{ item.name }}（無庫存）</a>
              </h2>
              <h2 v-else>
                <a :href="`#/pd/${item.ppid}`">{{ item.name }}</a>
              </h2>
              <ul class="product__price">
                <template v-if="item.origin_price != item.price">
                  <li class="old__price">${{ item.price }}</li>
                  <li class="new__price">${{ item.origin_price }}</li>
                </template>
                <template v-else>
                  <li class="text-dark">${{ item.price }}</li>
                </template>
              </ul>
            </div>
          </div>
        </div>
        <!-- End Single Product -->
        
      </div>
      <Pagination
        class="d-flex justify-content-center"
        style="margin-top: -35px"
        :compo-pages="pagination"
        @emitPages="getProduct"
      ></Pagination>
      <!-- Start Footer Area -->
      <Footer />
      <!-- End Footer Area -->
    </SiderbarM>
  </div>
</template>

<script>
import { getProductbyBrand_pages } from "@/api/product";
import { addCarts } from "@/api/cart";
import Pagination from "@/components/Pagination";

import Footer from "@/components/Footer.vue";
import Siderbar from "@/components/Siderbar.vue";
import SiderbarM from "@/components/SiderbarM.vue";

export default {
  name: "Shop",
  components: {
    // Header,
    Footer,
    Siderbar,
    SiderbarM,
    Pagination
  },
  data() {
    return {
      isLoading: false,
      brand: null,
      product_list: {
        data: [],
      },
      pagination: {},
    };
  },
  watch: {
    $route() {
      const vm = this;
      vm.getProduct();
    },
  },
  created() {
    const vm = this;
    vm.getProduct();
  },
  methods: {
    getProduct(currentPage = 1) {
      const vm = this;
      vm.isLoading = true;
      if (vm.$route.query.brand) {
        getProductbyBrand_pages(vm.$route.query.brand, currentPage).then(function (res) {
          console.log(res);
          vm.pagination = res.data.data
          vm.brand = res.data.brand
          vm.product_list = res.data.data;
          vm.isLoading = false;
        });
      } else {
        vm.isLoading = false;
        vm.$router.push({ name: "Home" });
      }
    },

    addtoCarts(item) {
      addCarts(item)
        .then(function (res) {
          if (res && res.data && res.data.result) {
            alert("已加入購物車");
          }
          console.log(res);
        })
        .catch((error) => {
          if (error.response.data && error.response.data.message) {
            alert(error.response.data.message);
          }
          // console.log(error.response.data.message);
        });
    },
  },
};
</script>

<style lang="scss">
</style>

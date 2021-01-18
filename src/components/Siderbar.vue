<template>
  <div class="sidebar--content">
    <div class="sidebar--top">
      <!-- Start Site Logo  -->
      <div class="sidebar--logo">
        <a href="/">
          <img src="images/logo/uniqlo-large.png" alt="logo" />
        </a>  
      </div>
      <!-- End Site Logo  -->
      <!-- Start Sidebar Navigation  -->
      <!-- Start Sidebar Navigation  -->
      <div class="sidebar--nav">
        <Loading :active.sync="isLoading"></Loading>
        <nav class="mainmenu__nav onepage--menu menu__style--7">
          <ul class="main__menu">
            <li><a href="/#/">HOME 首頁</a></li>

            <!-- BRAND 運動品牌 -->
            <li class="drop" :class="{'current':Brands_1.find(function(item){return item.name == $route.query.brand;})!=undefined}">
              <a href="javascript:;">BRAND 運動品牌</a>
              <ul class="dropdown">
                <li v-for="(item, key) in Brands_1" :key="key">
                  <a :href="`/#/shop/?brand=${item.name}`">{{ item.name }}</a>
                </li>
              </ul>
            </li>
            <!-- BRAND 網拍 -->
            <li class="drop" :class="{'current':Brands_2.find(function(item){return item.name == $route.query.brand;})!=undefined}">
              <a href="javascript:;">BRAND 網拍</a>
              <ul class="dropdown">
                <li v-for="(item, key) in Brands_2" :key="key">
                <a :href="`/#/shop/?brand=${item.name}`">{{ item.name }}</a>
                </li>
              </ul>
            </li>
            <li :class="{'current':$route.name=='Daigou'||$route.name=='DaigouItems'}"><router-link to="/daigou">客制化代購服務（計價方式）</router-link></li>
            <li><a href="shop.html"></a></li>
            <li :class="{'current':$route.path=='/blog/1'}"></li>
            <li :class="{'current': (($route.name=='Vip'))}"><router-link to="/vip"> 會員專區（VIP説明）</router-link></li>
            <li :class="{'current': (($route.name=='Blog'||$route.name=='BlogDetail'))}"><a href="/#/blog">Blog</a></li>
            <li :class="{'current':$route.name=='Cart'}"><a href="/#/cart">購物車</a></li>
            <li :class="{'current':$route.name=='Myorder'}"><a href="/#/myorder">歷史訂單</a></li>
          </ul>
        </nav>
      </div>
      <!-- End Sidebar Navigation  -->
      <!-- End Sidebar Navigation  -->
      <!-- Start Tools  -->
      <div class="sidebar--tools">
        <!-- <ul class="menu-extra">
          <li class="search search__open"><span class="ti-search"></span></li>
          <li class="user__menu"><span class="ti-user"></span></li>
          <li class="cart__menu">
            <router-link to="/cart">
              <span class="ti-shopping-cart"></span
            ></router-link>
          </li>
        </ul> -->
        <ul>
          <li>
            <div v-if="user !== null">
              <span class="text-success">歡迎回來! {{ user.name }}</span>
              <router-link
                v-if="user.roles === 'admin'"
                class="p-2 text-dark"
                to="/admin/products"
              >
                管理台
              </router-link>
              <a href="javascript:;" class="p-2 text-danger" @click.prevent="logout"
                >登出</a
              >
            </div>
            <div v-else>
              <router-link class="p-2 text-dark" to="/login">
                登入 </router-link
              >/
              <router-link class="p-2 text-dark" to="/register">
                註冊
              </router-link>
            </div>
          </li>
        </ul>
      </div>
      <!-- End Tools  -->
    </div>
    <!-- Start Sidebar Footer -->
    <div class="sidebar--footer">
      <!-- Start Social Network -->
      <div class="sidebar--social__network">
        <div class="sidebar__ft__widget">
          <h2 class="ft__title">Follow Us</h2>
          <ul class="social__icon">
            <li>
              <a href="https://twitter.com/devitemsllc" target="_blank"
                ><i class="zmdi zmdi-twitter"></i
              ></a>
            </li>
            <li>
              <a href="https://www.instagram.com/devitems/" target="_blank"
                ><i class="zmdi zmdi-instagram"></i
              ></a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/devitems/?ref=bookmarks"
                target="_blank"
                ><i class="zmdi zmdi-facebook"></i
              ></a>
            </li>
            <li>
              <a href="https://plus.google.com/" target="_blank"
                ><i class="zmdi zmdi-google-plus"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
      <!-- End Social Network -->
    </div>
    <!-- End Sidebar Footer -->
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
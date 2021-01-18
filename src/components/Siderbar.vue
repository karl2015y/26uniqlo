<template>
  <div>
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
                <a href="#/myorder"><span class="ti-user"></span></a>
              </li>
              <li>
                <a href="#/cart"><span class="ti-shopping-cart"></span></a>
              </li>
              <li class="toggle__menu"><span class="ti-menu"></span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 手機MENU -->
    <div class="body__overlay"></div>
    <!-- Start Offset Wrapper -->
    <div class="offset__wrapper">
      <!-- Start Search Popap -->
      <div class="search__area">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="search__inner">
                <form action="#" method="get">
                  <input placeholder="Search here... " type="text" />
                  <button type="submit"></button>
                </form>
                <div class="search__close__btn">
                  <span class="search__close__btn_icon"
                    ><i class="zmdi zmdi-close"></i
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Search Popap -->
      <!-- Start Offset MEnu -->
      <div class="offsetmenu home-five">
        <div class="offsetmenu__inner sidebar__menu--inner">
          <div class="offsetmenu__close__btn">
            <a href="javascript:;"><i class="zmdi zmdi-close"></i></a>
          </div>
          <div class="off__contact">
            <div class="logo">
              <a href="index.html">
                <img src="images/logo/uniqlo.png" alt="logo" />
              </a>
            </div>
          </div>
          <nav>
               <ul>
            <li>
              <div class="text-center" v-if="user !== null">
                <span class="text-success">歡迎回來! {{ user.name }}</span>
                <router-link
                  v-if="user.roles === 'admin'"
                  class="p-2 text-dark"
                  to="/admin/products"
                >
                  管理台
                </router-link>
                <a
                  href="javascript:;"
                  class="p-2 text-danger"
                  @click.prevent="logout"
                  >登出</a
                >
              </div>
              <div v-else class="text-center">
                <router-link class="p-2 text-dark" to="/login">
                  登入 </router-link
                >/
                <router-link class="p-2 text-dark" to="/register">
                  註冊
                </router-link>
              </div>
            </li>
          </ul>
            <ul class="sidebar__menu">
              <li :class="{ active: $route.name == 'Home' }">
                <a href="#/">HOME 首頁</a>
              </li>
              <!-- BRAND 運動品牌 -->
              <li
                :class="{
                  active:
                    Brands_1.find(function (item) {
                      return item.name == $route.query.brand;
                    }) != undefined ,
                }"
              >
                <a @click="Brands_2_show=false;Brands_1_show = !Brands_1_show;" href="javascript:;"
                  >BRAND 運動品牌</a
                >
                <ul v-if="Brands_1_show">
                  <li v-for="(item, key) in Brands_1" :key="key">
                    <a
                      :class="{
                        'text-muted': item.name != $route.query.brand ,
                      }"
                      :href="`#/shop/?brand=${item.name}`"
                      >{{ item.name }}</a
                    >
                  </li>
                </ul>
              </li>

              <!-- BRAND 網拍 -->
              <li
                :class="{
                  active:
                    Brands_2.find(function (item) {
                      return item.name == $route.query.brand;
                    }) != undefined ,
                }"
              >
                <a @click="Brands_1_show=false;Brands_2_show = !Brands_2_show" href="javascript:;"
                  >BRAND 網拍</a
                >
                <ul v-if="Brands_2_show">
                  <li v-for="(item, key) in Brands_2" :key="key">
                    <a
                      :class="{
                        'text-muteded': item.name != $route.query.brand,
                      }"
                      :href="`#/shop/?brand=${item.name}`"
                      >{{ item.name }}</a
                    >
                  </li>
                </ul>
              </li>

              <li
                :class="{
                  active:
                    $route.name == 'Daigou' || $route.name == 'DaigouItems',
                }"
              >
                <router-link to="/daigou"
                  >客制化代購服務（計價方式）</router-link
                >
              </li>
              <li :class="{ active: $route.name == 'Vip' }">
                <router-link to="/vip"> 會員專區（VIP説明）</router-link>
              </li>
              <li
                :class="{
                  active: $route.name == 'Blog' || $route.name == 'BlogDetail',
                }"
              >
                <a href="#/blog">Blog</a>
              </li>
              
            </ul>

          </nav>
          <div class="offset__sosial__share">
            <h4 class="offset__title">追蹤我們</h4>
            <ul class="off__soaial__link">
                   <li>
                  <a href="https://line.me/R/ti/p/%40apd4560p" target="_blank"
                    >
                    <i  class="zmdi"><img style="width: 25px; height: 25px;margin-top: -3px;" src="images/icons/line.png" alt=""></i>
                    
                    </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/26.iseoul/" target="_blank"
                    ><i class="text-secondary zmdi zmdi-instagram"></i
                  ></a>
                </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- End Offset MEnu -->
    </div>
    <!-- End Offset Wrapper -->
    <!-- 手機MENU -->
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
              <li :class="{ current: $route.name == 'Home' }">
                <a href="#/">HOME 首頁</a>
              </li>

              <!-- BRAND 運動品牌 -->
              <li
                class="drop"
                :class="{
                  current:
                    Brands_1.find(function (item) {
                      return item.name == $route.query.brand;
                    }) != undefined,
                }"
              >
                <a href="javascript:;">BRAND 運動品牌</a>
                <ul class="dropdown">
                  <li v-for="(item, key) in Brands_1" :key="key">
                    <a :href="`#/shop/?brand=${item.name}`">{{ item.name }}</a>
                  </li>
                </ul>
              </li>
              <!-- BRAND 網拍 -->
              <li
                class="drop"
                :class="{
                  current:
                    Brands_2.find(function (item) {
                      return item.name == $route.query.brand;
                    }) != undefined,
                }"
              >
                <a href="javascript:;">BRAND 網拍</a>
                <ul class="dropdown">
                  <li v-for="(item, key) in Brands_2" :key="key">
                    <a :href="`#/shop/?brand=${item.name}`">{{ item.name }}</a>
                  </li>
                </ul>
              </li>
              <li
                :class="{
                  current:
                    $route.name == 'Daigou' || $route.name == 'DaigouItems',
                }"
              >
                <router-link to="/daigou"
                  >客制化代購服務（計價方式）</router-link
                >
              </li>
              <li :class="{ current: $route.name == 'Vip' }">
                <router-link to="/vip"> 會員專區（VIP説明）</router-link>
              </li>
              <li
                :class="{
                  current: $route.name == 'Blog' || $route.name == 'BlogDetail',
                }"
              >
                <a href="#/blog">Blog</a>
              </li>
              <li :class="{ current: $route.name == 'Cart' }">
                <a href="#/cart">購物車</a>
              </li>
              <li :class="{ current: $route.name == 'Myorder' }">
                <a href="#/myorder">歷史訂單</a>
              </li>
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
                <a
                  href="javascript:;"
                  class="p-2 text-danger"
                  @click.prevent="logout"
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
                  <a href="https://line.me/R/ti/p/%40apd4560p" target="_blank"
                    >
                    <i  class="zmdi"><img style="width: 20px; height: 20px;margin-top: -3px;" src="images/icons/line.png" alt=""></i>
                    
                    </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/26.iseoul/" target="_blank"
                    ><i class="zmdi zmdi-instagram"></i
                  ></a>
                </li>
            </ul>
          </div>
        </div>
        <!-- End Social Network -->
      </div>
      <!-- End Sidebar Footer -->
    </div>
  </div>
</template>

<script>
import { getBrandbyType } from "@/api/brand";

export default {
  data() {
    return {
      isLoading: false,
      Brands_1_show: false,
      Brands_2_show: false,
      Brands_1: [],
      Brands_2: [],
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  watch: {
    $route() {
      const $ = window.$;
      $(".offsetmenu__close__btn").click();
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
    ToogleMenuController() {
      const $ = window.$;
      $(".toggle__menu").on("click", function () {
        $(".offsetmenu").addClass("offsetmenu__on");
        $(".body__overlay").addClass("is-visible");
      });

      $(".offsetmenu__close__btn").on("click", function () {
        $(".offsetmenu").removeClass("offsetmenu__on");
        $(".body__overlay").removeClass("is-visible");
      });
    },
  },
  created() {
    this.getBrand();
  },
  mounted() {
    this.ToogleMenuController();
  },
};
</script>

<style>
</style>
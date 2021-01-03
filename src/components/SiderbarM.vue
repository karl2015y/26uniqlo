<template>
  <div class="wrapper--content bg__cat--5">
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
            <a href="#"><i class="zmdi zmdi-close"></i></a>
          </div>
          <div class="off__contact">
            <div class="logo">
              <a href="index.html">
                <img src="images/logo/uniqlo.png" alt="logo" />
              </a>
            </div>
          </div>
          <nav>
            <ul class="sidebar__menu">
              <li><a href="index.html">home 01</a></li>
              <li><a href="index-2.html">home 02</a></li>
              <li><a href="index-3.html">home 03</a></li>
              <li><a href="index-4.html">home 04</a></li>
              <li class="active"><a href="index-5.html">home 05</a></li>
              <li><a href="index-6.html">home 06</a></li>
              <li><a href="index-7.html">home 07</a></li>
              <li><a href="about.html">about us</a></li>
              <li><a href="blog.html">Blog Page</a></li>
              <li><a href="contact.html">Contact Us</a></li>
            </ul>
          </nav>
          <div class="offset__sosial__share">
            <h4 class="offset__title">Follow Us On Social</h4>
            <ul class="off__soaial__link">
              <li>
                <a
                  class="bg--twitter"
                  href="https://twitter.com/devitemsllc"
                  target="_blank"
                  title="Twitter"
                  ><i class="zmdi zmdi-twitter"></i
                ></a>
              </li>

              <li>
                <a
                  class="bg--instagram"
                  href="https://www.instagram.com/devitems/"
                  target="_blank"
                  title="Instagram"
                  ><i class="zmdi zmdi-instagram"></i
                ></a>
              </li>

              <li>
                <a
                  class="bg--facebook"
                  href="https://www.facebook.com/devitems/?ref=bookmarks"
                  target="_blank"
                  title="Facebook"
                  ><i class="zmdi zmdi-facebook"></i
                ></a>
              </li>

              <li>
                <a
                  class="bg--googleplus"
                  href="https://plus.google.com/"
                  target="_blank"
                  title="Google Plus"
                  ><i class="zmdi zmdi-google-plus"></i
                ></a>
              </li>

              <li>
                <a class="bg--google" href="#" target="_blank" title="Google"
                  ><i class="zmdi zmdi-google"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- End Offset MEnu -->
    </div>
    <!-- End Offset Wrapper -->
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
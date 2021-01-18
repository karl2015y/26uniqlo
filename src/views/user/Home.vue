<template>
  <div class="wrapper home-7 wrapper__sidebar home-v5 wrapper__sidebar--left">
    <Loading :active.sync="isLoading"></Loading>

    <!-- 電腦版MENU -->
    <Siderbar />
    <!-- 手機版MENU -->

    <SiderbarM>
      <!-- Start Slider Area -->
      <div
        v-if="homeBanners.length > 0"
        id="home"
        class="slider__container slider--7"
      >
        <div class="slider__activation__wrap owl-carousel owl-theme">
          <!-- Start Single Slide -->
          <template v-for="item in homeBanners">
            <div :key="item.id" class="slide slider__full--screen">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-9 col-lg-10 col-sm-12 col-xs-12">
                    <div class="slider__inner">
                      <div class="slider__inner">
                        <h4>{{ item.name }}</h4>
                        <h1 style="white-space: pre-line">
                          {{ item.description }}
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slider__fornt__images">
                <div class="slider__fornt__inner">
                  <img
                    :src="item.bimg"
                    alt="slider images"
                  />
                </div>
              </div>
            </div>
          </template>

          <!-- End Single Slide -->
        </div>
      </div>
      <!-- Start Slider Area -->
      <!-- Start Our Product Area -->
      <section
        v-if="brands.length > 0"
        id="shop"
        class="htc__product__area pb--120 pt--40"
      >
        <div class="container-fluid">
          <div
            class="htc__product__container product__filter--7 product__with__filter pb--20"
          >
            <div class="row mt--70">
              <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                <div class="filter__menu__container">
                  <div class="product__menu">
                    <button
                      @click="clickBrandHandler"
                      data-filter="*"
                      class="is-checked"
                    >
                      全部
                    </button>
                    <button @click="clickBrandHandler" data-filter=".cat--1">
                      BRAND 運動品牌
                    </button>
                    <button @click="clickBrandHandler" data-filter=".cat--2">
                      BRAND 網拍
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- End Product MEnu -->
            <div class="row product__style--7 product__list clearfix">
              <!-- Start Single Product -->
              <template v-for="item in brands">
                <div
                  :key="item.id"
                  :class="{
                    'cat--1': item.type == '運動品牌',
                    'cat--2': item.type == '網拍',
                  }"
                  class="col-md-4 single__pro col-lg-3 col-sm-6 col-xs-12"
                >
                  <div class="product">
                    <div class="product__inner">
                      <div class="pro__thumb">
                        <a :href="`#/shop/?brand=${item.name}`">
                          <img :src="item.pic" alt="product images" />
                        </a>
                      </div>
                    </div>
                    <div class="product__details">
                      <h2>
                        <a :href="`#/shop/?brand=${item.name}`">{{
                          item.name
                        }}</a>
                      </h2>
                    </div>
                  </div>
                </div>
              </template>

              <!-- End Single Product -->
            </div>
          </div>
        </div>
      </section>
      <!-- End Our Product Area -->
      <!-- Start BLog Area -->
      <section v-if="blogs.length > 0" id="blog" class="htc__blog__area pb--60">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div
                class="section__title section__title--2 section__title--7 text-center"
              >
                <h2 class="title__line">最新消息</h2>
                <!--   <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                  do eiusmod tempor incididunt ut labo.
                </p> -->
              </div>
            </div>
          </div>
          <div class="blog__wrap blog--2 clearfix mt--40">
            <div class="row">
              <!-- Start Single Blog -->
              <template v-for="item in blogs">
                <div
                  :key="item.id"
                  class="col-md-6 col-lg-4 col-sm-12 col-xs-12"
                >
                  <div class="blog foo">
                    <div class="blog__inner">
                      <div class="blog__thumb">
                        <a :href="`#/blog/${item.id}`">
                          <img :src="item.bimg" alt="blog images" />
                        </a>
                        <div class="blog__post__time">
                          <div class="post__time--inner">
                            <span class="date">{{ item.up_at }}</span>
                          </div>
                        </div>
                      </div>
                      <div class="blog__hover__info">
                        <div class="blog__hover__action">
                          <p class="blog__des">
                            <a :href="`#/blog/${item.id}`">{{ item.name }}</a>
                          </p>
                          <div class="blog__btn">
                            <a class="read__more__btn" :href="`#/blog/${item.id}`"
                              >查看更多</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </template>

              <!-- End Single Blog -->
            </div>
          </div>
        </div>
      </section>
      <!-- End BLog Area -->

      <!-- Start Footer Area -->
      <Footer />
      <!-- End Footer Area -->
    </SiderbarM>
  </div>
</template>

<script>
// import { getProduct_pages, getProductbyBrand_pages } from "@/api/product";
import { getHomeBanners, getBrands, getBlogs } from "@/api/home";
import Footer from "@/components/Footer.vue";
import Siderbar from "@/components/Siderbar.vue";
import SiderbarM from "@/components/SiderbarM.vue";

export default {
  name: "Home",
  components: {
    // Header,
    Footer,
    Siderbar,
    SiderbarM,
  },
  data() {
    return {
      isLoading: false,
      homeBanners: [],
      brands: [],
      blogs: [],
    };
  },
  watch: {
    $route() {
      //   const vm = this;
      // console.log(vm.$route.query.brand);
    },
  },
  created() {
    // const vm = this;
  },
  mounted() {
    const vm = this;
    vm.getBannerList();
    vm.getBrandsList();
    vm.getBlogsList();
  },
  methods: {
    BannerController() {
      window.$(".slider__activation__wrap").owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        autoplay: false,
        navText: [
          '<i class="zmdi zmdi-chevron-left"></i>',
          '<i class="zmdi zmdi-chevron-right"></i>',
        ],
        autoplayTimeout: 10000,
        items: 1,
        dots: false,
        lazyLoad: true,
        responsive: {
          0: {
            items: 1,
          },
          1920: {
            items: 1,
          },
        },
      });
    },
    getBannerList() {
      const vm = this;
      vm.isLoading = true;
      getHomeBanners().then(function (res) {
        vm.homeBanners = res.data.blog_list.data;
        setTimeout(() => {
          vm.BannerController();
          vm.isLoading = false;
        }, 100);
        // console.log("getHomeBanners",);
      });
    },

    clickBrandHandler(e) {
      window.$(e.target).siblings(".is-checked").removeClass("is-checked");
      window.$(e.target).addClass("is-checked");
    },
    getBrandsList() {
      const vm = this;
      vm.isLoading = true;
      getBrands().then(function (res) {
        vm.brands = res.data;
        vm.isLoading = false;
        setTimeout(() => {
          vm.BrandController();
        }, 100);
      });
    },
    BrandController() {
      // filter items on button click
      window.$(".product__menu").on("click", "button", function () {
        var filterValue = window.$(this).attr("data-filter");
        $grid.isotope({ filter: filterValue });
      });
      // init Isotope
      var $grid = window.$(".product__list").isotope({
        itemSelector: ".single__pro",
        percentPosition: true,
        transitionDuration: "0.7s",
        layoutMode: "fitRows",
        masonry: {
          // use outer width of grid-sizer for columnWidth
          columnWidth: 1,
        },
      });
    },

    getBlogsList() {
      const vm = this;
      vm.isLoading = true;
      getBlogs().then(function (res) {
        vm.blogs = res.data.blog_list.data;
        vm.isLoading = false;
      });
    },
  },
};
</script>

<style lang="scss">
</style>

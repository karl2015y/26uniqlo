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
                  <!-- Start Slider Area -->
            <div id="home" class="slider__container slider--7">
                <div class="slider__activation__wrap owl-carousel owl-theme">
                    <!-- Start Single Slide -->
                    <div class="slide slider__full--screen">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-9 col-lg-10 col-sm-12 col-xs-12">
                                    <div class="slider__inner">
                                        <div class="slider__inner">
                                        <h4>1Welcome To Uniqlo Store </h4>
                                        <h1>New Men Collection<br>In 2018 </h1>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="slider__fornt__images">
                            <div class="slider__fornt__inner">
                                <img src="images/slider/fornt-img/man-style.png" alt="slider images">
                            </div>
                        </div>
                    </div>
                    <!-- End Single Slide -->
                                        <!-- Start Single Slide -->
                    <div class="slide slider__full--screen">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-9 col-lg-10 col-sm-12 col-xs-12">
                                    <div class="slider__inner">
                                        <div class="slider__inner">
                                        <h4>2Welcome To Uniqlo Store </h4>
                                        <h1>New Men Collection<br>In 2018 </h1>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="slider__fornt__images">
                            <div class="slider__fornt__inner">
                                <img src="images/slider/fornt-img/man-style.png" alt="slider images">
                            </div>
                        </div>
                    </div>
                    <!-- End Single Slide -->
                                        <!-- Start Single Slide -->
                    <div class="slide slider__full--screen">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-9 col-lg-10 col-sm-12 col-xs-12">
                                    <div class="slider__inner">
                                        <div class="slider__inner">
                                        <h4>3Welcome To Uniqlo Store </h4>
                                        <h1>New Men Collection<br>In 2018 </h1>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="slider__fornt__images">
                            <div class="slider__fornt__inner">
                                <img src="images/slider/fornt-img/man-style.png" alt="slider images">
                            </div>
                        </div>
                    </div>
                    <!-- End Single Slide -->
                </div>
            </div>
            <!-- Start Slider Area -->
            <!-- Start Our Product Area -->
            <section id="shop" class="htc__product__area pb--120 pt--40">
                <div class="container-fluid">
                    <div class="htc__product__container product__filter--7 product__with__filter  pb--20">
                        <div class="row mt--70">
                            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                <div class="filter__menu__container">
                                    <div class="product__menu">
                                        <button data-filter="*"  class="is-checked">All</button>
                                        <button data-filter=".cat--1">Furnitures</button>
                                        <button data-filter=".cat--2">Bags</button>
                                        <button data-filter=".cat--3">Decoration</button>
                                        <button data-filter=".cat--4">Accessories</button>
                                    </div>
                                    <div class="filter__box">
                                        <a class="filter__menu" href="#">filter</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Start Filter Menu -->
                        <div class="filter__wrap">
                            <div class="filter__cart">
                                <div class="filter__cart__inner">
                                    <div class="filter__menu__close__btn">
                                        <a href="#"><i class="zmdi zmdi-close"></i></a>
                                    </div>
                                    <div class="filter__content">
                                        <!-- Start Single Content -->
                                        <div class="fiter__content__inner">
                                            <div class="single__filter">
                                                <h2>Sort By</h2>
                                                <ul class="filter__list">
                                                    <li><a href="#default">Default</a></li>
                                                    <li><a href="#accessories">Accessories</a></li>
                                                    <li><a href="#bags">Bags</a></li>
                                                    <li><a href="#chair">Chair</a></li>
                                                    <li><a href="#decoration">Decoration</a></li>
                                                    <li><a href="#fashion">Fashion</a></li>
                                                </ul>
                                            </div>
                                            <div class="single__filter">
                                                <h2>Size</h2>
                                                <ul class="filter__list">
                                                    <li><a href="#xxl">XXL</a></li>
                                                    <li><a href="#xl">XL</a></li>
                                                    <li><a href="#x">X</a></li>
                                                    <li><a href="#l">L</a></li>
                                                    <li><a href="#m">M</a></li>
                                                    <li><a href="#s">S</a></li>
                                                </ul>
                                            </div>
                                            <div class="single__filter">
                                                <h2>Tags</h2>
                                                <ul class="filter__list">
                                                    <li><a href="#">All</a></li>
                                                    <li><a href="#">Accessories</a></li>
                                                    <li><a href="#">Bags</a></li>
                                                    <li><a href="#">Chair</a></li>
                                                    <li><a href="#">Decoration</a></li>
                                                    <li><a href="#">Fashion</a></li>
                                                </ul>
                                            </div>
                                            <div class="single__filter">
                                                <h2>Price</h2>
                                                <ul class="filter__list">
                                                    <li><a href="#">$0.00 - $50.00</a></li>
                                                    <li><a href="#">$50.00 - $100.00</a></li>
                                                    <li><a href="#">$100.00 - $150.00</a></li>
                                                    <li><a href="#">$150.00 - $200.00</a></li>
                                                    <li><a href="#">$300.00 - $500.00</a></li>
                                                    <li><a href="#">$500.00 - $700.00</a></li>
                                                </ul>
                                            </div>
                                            <div class="single__filter">
                                                <h2>Color</h2>
                                                <ul class="filter__list sidebar__list">
                                                    <li class="black"><a href="#"><i class="zmdi zmdi-circle"></i>Black</a></li>
                                                    <li class="blue"><a href="#"><i class="zmdi zmdi-circle"></i>Blue</a></li>
                                                    <li class="brown"><a href="#"><i class="zmdi zmdi-circle"></i>Brown</a></li>
                                                    <li class="red"><a href="#"><i class="zmdi zmdi-circle"></i>Red</a></li>
                                                    <li class="orange"><a href="#"><i class="zmdi zmdi-circle"></i>Orange</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <!-- End Single Content -->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- End Filter Menu -->
                        <!-- End Product MEnu -->
                        <div class="row product__style--7 product__list clearfix">
                            <!-- Start Single Product -->
                            <div class="col-md-4 single__pro col-lg-3 cat--1 cat--3 col-sm-6 col-xs-12">
                                <div class="product">
                                    <div class="product__inner">
                                        <div class="pro__thumb">
                                            <a href="#">
                                                <img src="images/product-3/1.png" alt="product images">
                                            </a>
                                        </div>
                                        <div class="popular__product__hover__info">
                                            <ul class="product__action">
                                                <li><a title="Add To Wishlist" href="wishlist.html"><span class="ti-heart"></span></a></li>
                                                <li><a data-toggle="modal" data-target="#productModal" title="Quick View" class="quick-view modal-view detail-link" href="#"><span class="ti-plus"></span></a></li>
                                                <li><a title="Add To Cart" href="cart.html"><span class="ti-shopping-cart"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product__details">
                                        <h2><a href="product-details.html">Simple Black Clock</a></h2>
                                        <span class="popular__pro__prize">$16.00</span>
                                    </div>
                                </div>
                            </div>
                            <!-- End Single Product -->
                            <!-- Start Single Product -->
                            <div class="col-md-4 single__pro col-lg-3 cat--1 col-sm-6 col-xs-12">
                                <div class="product">
                                    <div class="product__inner">
                                        <div class="pro__thumb">
                                            <a href="#">
                                                <img src="images/product-3/2.png" alt="product images">
                                            </a>
                                        </div>
                                        <div class="popular__product__hover__info">
                                            <ul class="product__action">
                                                <li><a title="Add To Wishlist" href="wishlist.html"><span class="ti-heart"></span></a></li>
                                                <li><a data-toggle="modal" data-target="#productModal" title="Quick View" class="quick-view modal-view detail-link" href="#"><span class="ti-plus"></span></a></li>
                                                <li><a title="Add To Cart" href="cart.html"><span class="ti-shopping-cart"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product__details">
                                        <h2><a href="product-details.html">Simple Black Clock</a></h2>
                                        <span class="popular__pro__prize">$16.00</span>
                                    </div>
                                </div>
                            </div>
                            <!-- End Single Product -->
                            <!-- Start Single Product -->
                            <div class="col-md-4 single__pro col-lg-3 cat--2 col-sm-6 col-xs-12">
                                <div class="product">
                                    <div class="product__inner">
                                        <div class="pro__thumb">
                                            <a href="#">
                                                <img src="images/product-3/3.png" alt="product images">
                                            </a>
                                        </div>
                                        <div class="popular__product__hover__info">
                                            <ul class="product__action">
                                                <li><a title="Add To Wishlist" href="wishlist.html"><span class="ti-heart"></span></a></li>
                                                <li><a data-toggle="modal" data-target="#productModal" title="Quick View" class="quick-view modal-view detail-link" href="#"><span class="ti-plus"></span></a></li>
                                                <li><a title="Add To Cart" href="cart.html"><span class="ti-shopping-cart"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product__details">
                                        <h2><a href="product-details.html">Simple Black Clock</a></h2>
                                        <span class="popular__pro__prize">$16.00</span>
                                    </div>
                                </div>
                            </div>
                            <!-- End Single Product -->
                            <!-- Start Single Product -->
                            <div class="col-md-4 single__pro col-lg-3 cat--2 col-sm-6 cat--4 col-xs-12">
                                <div class="product">
                                    <div class="product__inner">
                                        <div class="pro__thumb">
                                            <a href="#">
                                                <img src="images/product-3/4.png" alt="product images">
                                            </a>
                                        </div>
                                        <div class="popular__product__hover__info">
                                            <ul class="product__action">
                                                <li><a title="Add To Wishlist" href="wishlist.html"><span class="ti-heart"></span></a></li>
                                                <li><a data-toggle="modal" data-target="#productModal" title="Quick View" class="quick-view modal-view detail-link" href="#"><span class="ti-plus"></span></a></li>
                                                <li><a title="Add To Cart" href="cart.html"><span class="ti-shopping-cart"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product__details">
                                        <h2><a href="product-details.html">Simple Black Clock</a></h2>
                                        <span class="popular__pro__prize">$16.00</span>
                                    </div>
                                </div>
                            </div>
                            <!-- End Single Product -->
                            <!-- Start Single Product -->
                            <div class="col-md-4 single__pro col-lg-3 cat--2  cat--3 col-sm-6 col-xs-12">
                                <div class="product">
                                    <div class="product__inner">
                                        <div class="pro__thumb">
                                            <a href="#">
                                                <img src="images/product-3/5.png" alt="product images">
                                            </a>
                                        </div>
                                        <div class="popular__product__hover__info">
                                            <ul class="product__action">
                                                <li><a title="Add To Wishlist" href="wishlist.html"><span class="ti-heart"></span></a></li>
                                                <li><a data-toggle="modal" data-target="#productModal" title="Quick View" class="quick-view modal-view detail-link" href="#"><span class="ti-plus"></span></a></li>
                                                <li><a title="Add To Cart" href="cart.html"><span class="ti-shopping-cart"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product__details">
                                        <h2><a href="product-details.html">Simple Black Clock</a></h2>
                                        <span class="popular__pro__prize">$16.00</span>
                                    </div>
                                </div>
                            </div>
                            <!-- End Single Product -->
                            <!-- Start Single Product -->
                            <div class="col-md-4 single__pro col-lg-3 cat--1 col-sm-6 col-xs-12">
                                <div class="product">
                                    <div class="product__inner">
                                        <div class="pro__thumb">
                                            <a href="#">
                                                <img src="images/product-3/6.png" alt="product images">
                                            </a>
                                        </div>
                                        <div class="popular__product__hover__info">
                                            <ul class="product__action">
                                                <li><a title="Add To Wishlist" href="wishlist.html"><span class="ti-heart"></span></a></li>
                                                <li><a data-toggle="modal" data-target="#productModal" title="Quick View" class="quick-view modal-view detail-link" href="#"><span class="ti-plus"></span></a></li>
                                                <li><a title="Add To Cart" href="cart.html"><span class="ti-shopping-cart"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product__details">
                                        <h2><a href="product-details.html">Simple Black Clock</a></h2>
                                        <span class="popular__pro__prize">$16.00</span>
                                    </div>
                                </div>
                            </div>
                            <!-- End Single Product -->
                            <!-- Start Single Product -->
                            <div class="single__pro col-lg-3 col-sm-6 cat--1 cat--4 hidden-md col-xs-12">
                                <div class="product">
                                    <div class="product__inner">
                                        <div class="pro__thumb">
                                            <a href="#">
                                                <img src="images/product-3/7.png" alt="product images">
                                            </a>
                                        </div>
                                        <div class="popular__product__hover__info">
                                            <ul class="product__action">
                                                <li><a title="Add To Wishlist" href="wishlist.html"><span class="ti-heart"></span></a></li>
                                                <li><a data-toggle="modal" data-target="#productModal" title="Quick View" class="quick-view modal-view detail-link" href="#"><span class="ti-plus"></span></a></li>
                                                <li><a title="Add To Cart" href="cart.html"><span class="ti-shopping-cart"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product__details">
                                        <h2><a href="product-details.html">Simple Black Clock</a></h2>
                                        <span class="popular__pro__prize">$16.00</span>
                                    </div>
                                </div>
                            </div>
                            <!-- End Single Product -->
                            <!-- Start Single Product -->
                            <div class="single__pro col-lg-3 col-sm-6 hidden-md col-xs-12 cat--4 cat--3">
                                <div class="product">
                                    <div class="product__inner">
                                        <div class="pro__thumb">
                                            <a href="#">
                                                <img src="images/product-3/1.png" alt="product images">
                                            </a>
                                        </div>
                                        <div class="popular__product__hover__info">
                                            <ul class="product__action">
                                                <li><a title="Add To Wishlist" href="wishlist.html"><span class="ti-heart"></span></a></li>
                                                <li><a data-toggle="modal" data-target="#productModal" title="Quick View" class="quick-view modal-view detail-link" href="#"><span class="ti-plus"></span></a></li>
                                                <li><a title="Add To Cart" href="cart.html"><span class="ti-shopping-cart"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product__details">
                                        <h2><a href="product-details.html">Simple Black Clock</a></h2>
                                        <span class="popular__pro__prize">$16.00</span>
                                    </div>
                                </div>
                            </div>
                            <!-- End Single Product -->
                        </div>
 
                    </div>
                </div>
            </section>
            <!-- End Our Product Area -->
            <!-- Start BLog Area -->
            <section id="blog" class="htc__blog__area pb--60">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="section__title section__title--2 section__title--7 text-center">
                                <h2 class="title__line">Latest News</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labo.</p>
                            </div>
                        </div>
                    </div>
                    <div class="blog__wrap blog--2 clearfix mt--40">
                        <div class="row">
                            <!-- Start Single Blog -->
                            <div class="col-md-6 col-lg-4 col-sm-12 col-xs-12">
                                <div class="blog foo">
                                <div class="blog__inner">
                                    <div class="blog__thumb">
                                        <a href="blog-details.html">
                                            <img src="images/blog/blog-img/4.jpg" alt="blog images">
                                        </a>
                                        <div class="blog__post__time">
                                            <div class="post__time--inner">
                                                <span class="date">14</span>
                                                <span class="month">sep</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="blog__hover__info">
                                        <div class="blog__hover__action">
                                            <ul class="bl__meta">
                                                <li>By :<a href="#">Admin</a></li>
                                                <li>Product</li>
                                            </ul>
                                            <p class="blog__des"><a href="blog-details.html">Lorem ipsum dolor sit amet consectetu adipisicing elit sed do eius.</a></p>
                                            <div class="blog__btn">
                                                <a class="read__more__btn" href="blog-details.html">read more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <!-- End Single Blog -->
                            <!-- Start Single Blog -->
                            <div class="col-md-6 col-lg-4 col-sm-12 col-xs-12">
                                <div class="blog foo">
                                <div class="blog__inner">
                                    <div class="blog__thumb">
                                        <a href="blog-details.html">
                                            <img src="images/blog/blog-img/5.jpg" alt="blog images">
                                        </a>
                                        <div class="blog__post__time">
                                            <div class="post__time--inner">
                                                <span class="date">14</span>
                                                <span class="month">sep</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="blog__hover__info">
                                        <div class="blog__hover__action">
                                            <ul class="bl__meta">
                                                <li>By :<a href="#">Admin</a></li>
                                                <li>Product</li>
                                            </ul>
                                            <p class="blog__des"><a href="blog-details.html">Lorem ipsum dolor sit amet consectetu adipisicing elit sed do eius.</a></p>
                                            <div class="blog__btn">
                                                <a class="read__more__btn" href="blog-details.html">read more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <!-- End Single Blog -->
                            <!-- Start Single Blog -->
                            <div class="hidden-md col-lg-4 col-sm-12 col-xs-12">
                                <div class="blog foo">
                                <div class="blog__inner">
                                    <div class="blog__thumb">
                                        <a href="blog-details.html">
                                            <img src="images/blog/blog-img/6.jpg" alt="blog images">
                                        </a>
                                        <div class="blog__post__time">
                                            <div class="post__time--inner">
                                                <span class="date">14</span>
                                                <span class="month">sep</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="blog__hover__info">
                                        <div class="blog__hover__action">
                                            <ul class="bl__meta">
                                                <li>By :<a href="#">Admin</a></li>
                                                <li>Product</li>
                                            </ul>
                                            <p class="blog__des"><a href="blog-details.html">Lorem ipsum dolor sit amet consectetu adipisicing elit sed do eius.</a></p>
                                            <div class="blog__btn">
                                                <a class="read__more__btn" href="blog-details.html">read more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
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
import { getProduct_pages, getProductbyBrand_pages } from "@/api/product";
import { addCarts } from "@/api/cart";
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
      isLoading:false,
      product_list: null,
    };
  },
  watch: {
    $route() {
      const vm = this;
// console.log(vm.$route.query.brand);
      getProductbyBrand_pages(vm.$route.query.brand).then(function (res) {
        console.log(res);
        vm.product_list = res.data.data;
      });
    },
  },
  created() {
    const vm = this;
    getProduct_pages().then(function (res) {
      console.log(res);
      vm.product_list = res.data.product_list;
    });


  },
  mounted(){
    window.$('.slider__activation__wrap').owlCarousel({
      loop: true,
      margin:0,
      nav:true,
      autoplay: false,
      navText: [ '<i class="zmdi zmdi-chevron-left"></i>', '<i class="zmdi zmdi-chevron-right"></i>' ],
      autoplayTimeout: 10000,
      items:1,
      dots: false,
      lazyLoad: true,
      responsive:{
        0:{
          items:1
        },
        1920:{
          items:1
        }
      }
    });
  },
  methods: {
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

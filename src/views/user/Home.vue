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
      <div class="row product__list mx-2" v-if="product_list">
        <!-- Start Single Product -->
        <div
          v-for="(item, index) in product_list.data"
          :key="index"
          class="col-md-4 single__pro col-lg-3 cat--1 col-sm-12"
        >
          <div class="product foo">
            <div class="product__inner">
              <div class="pro__thumb">
                <a href="javascript:;">
                  <img :src="item.pimg" alt="product images" />
                </a>
              </div>
              <div class="product__hover__info">
                <ul class="product__action">
                  <li>
                    <a
                      data-toggle="modal"
                      data-target="#productModal"
                      title="Quick View"
                      class="quick-view modal-view detail-link"
                      href="javascript:;"
                      ><span class="ti-eye"></span
                    ></a>
                  </li>
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
            </div>
            <div class="product__details">
              <h2>
                <a href="product-details.html">{{ item.name }}</a>
              </h2>
              <ul class="product__price">
                <li class="old__price">$16.00</li>
                <li class="new__price">$10.00</li>
              </ul>
            </div>
          </div>
        </div>
        <!-- End Single Product -->
      </div>

      <!-- Start Footer Area -->
      <Footer />
      <!-- End Footer Area -->
    </SiderbarM>

    <!-- QUICKVIEW PRODUCT -->
    <div id="quickview-wrapper">
      <!-- Modal -->
      <div class="modal fade" id="productModal" tabindex="-1" role="dialog">
        <div class="modal-dialog modal__container" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="modal-product">
                <!-- Start product images -->
                <div class="product-images">
                  <div class="main-image images">
                    <img alt="big images" src="images/product/big-img/1.jpg" />
                  </div>
                </div>
                <!-- end product images -->
                <div class="product-info">
                  <h1>Simple Fabric Bags</h1>
                  <div class="rating__and__review">
                    <ul class="rating">
                      <li><span class="ti-star"></span></li>
                      <li><span class="ti-star"></span></li>
                      <li><span class="ti-star"></span></li>
                      <li><span class="ti-star"></span></li>
                      <li><span class="ti-star"></span></li>
                    </ul>
                    <div class="review">
                      <a href="javascript:;">4 customer reviews</a>
                    </div>
                  </div>
                  <div class="price-box-3">
                    <div class="s-price-box">
                      <span class="new-price">$17.20</span>
                      <span class="old-price">$45.00</span>
                    </div>
                  </div>
                  <div class="quick-desc">
                    Designed for simplicity and made from high quality
                    materials. Its sleek geometry and material combinations
                    creates a modern look.
                  </div>
                  <div class="select__color">
                    <h2>Select color</h2>
                    <ul class="color__list">
                      <li class="red"><a title="Red" href="javascript:;">Red</a></li>
                      <li class="gold"><a title="Gold" href="javascript:;">Gold</a></li>
                      <li class="orange">
                        <a title="Orange" href="javascript:;">Orange</a>
                      </li>
                      <li class="orange">
                        <a title="Orange" href="javascript:;">Orange</a>
                      </li>
                    </ul>
                  </div>
                  <div class="select__size">
                    <h2>Select size</h2>
                    <ul class="color__list">
                      <li class="l__size"><a title="L" href="javascript:;">L</a></li>
                      <li class="m__size"><a title="M" href="javascript:;">M</a></li>
                      <li class="s__size"><a title="S" href="javascript:;">S</a></li>
                      <li class="xl__size"><a title="XL" href="javascript:;">XL</a></li>
                      <li class="xxl__size"><a title="XXL" href="javascript:;">XXL</a></li>
                    </ul>
                  </div>
                  <div class="social-sharing">
                    <div class="widget widget_socialsharing_widget">
                      <h3 class="widget-title-modal">Share this product</h3>
                      <ul class="social-icons">
                        <li>
                          <a
                            target="_blank"
                            title="rss"
                            href="javascript:;"
                            class="rss social-icon"
                            ><i class="zmdi zmdi-rss"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            title="Linkedin"
                            href="javascript:;"
                            class="linkedin social-icon"
                            ><i class="zmdi zmdi-linkedin"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            title="Pinterest"
                            href="javascript:;"
                            class="pinterest social-icon"
                            ><i class="zmdi zmdi-pinterest"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            title="Tumblr"
                            href="javascript:;"
                            class="tumblr social-icon"
                            ><i class="zmdi zmdi-tumblr"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            title="Pinterest"
                            href="javascript:;"
                            class="pinterest social-icon"
                            ><i class="zmdi zmdi-pinterest"></i
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="addtocart-btn">
                    <a href="javascript:;">Add to cart</a>
                  </div>
                </div>
                <!-- .product-info -->
              </div>
              <!-- .modal-product -->
            </div>
            <!-- .modal-body -->
          </div>
          <!-- .modal-content -->
        </div>
        <!-- .modal-dialog -->
      </div>
      <!-- END Modal -->
    </div>
    <!-- END QUICKVIEW PRODUCT -->
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

<template>
  <div class="wrapper home-7 wrapper__sidebar home-v5 wrapper__sidebar--left">
    <div class="mobile-content lg-device-hide">
      <div class="container-fluid">
        <div class="row">
          <!-- Start MAinmenu Ares -->
          <div class="col-5">
            <div class="logo">
              <a href="index.html">
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
    <div class="sidebar--content">
      <div class="sidebar--top">
        <!-- Start Site Logo  -->
        <div class="sidebar--logo">
          <a href="index-7.html">
            <img src="images/logo/uniqlo-large.png" alt="logo" />
          </a>
        </div>
        <!-- End Site Logo  -->
        <!-- Start Sidebar Navigation  -->
        <div class="sidebar--nav">
          <nav class="mainmenu__nav onepage--menu menu__style--7">
            <ul class="main__menu">
              <li class="current drop">
                <a href="index.html">Home</a>
                <ul class="dropdown">
                  <li><a href="index.html">Home 1</a></li>
                  <li><a href="index-2.html">Home 2</a></li>
                  <li><a href="index-3.html">Home 3</a></li>
                  <li><a href="index-4.html">Home 4</a></li>
                  <li><a href="index-5.html">Home 5</a></li>
                  <li><a href="index-6.html">Home 6</a></li>
                  <li><a href="index-7.html">Home 7</a></li>
                  <li><a href="index-8.html">Home 8</a></li>
                  <li><a href="index-9.html">Home 9</a></li>
                  <li><a href="index-10.html">Home 10</a></li>
                </ul>
              </li>
              <li><a href="about.html">about us</a></li>
              <li><a href="shop.html">shop</a></li>
              <li class="drop">
                <a href="#pages">Pages</a>
                <ul class="dropdown">
                  <li><a href="shop.html">shop</a></li>
                  <li><a href="shop-sidebar.html">shop sidebar</a></li>
                  <li><a href="product-details.html">product details</a></li>
                  <li><a href="cart.html">cart</a></li>
                  <li><a href="checkout.html">checkout</a></li>
                  <li><a href="wishlist.html">wishlist</a></li>
                  <li><a href="team.html">team</a></li>
                  <li><a href="blog.html">blog</a></li>
                  <li><a href="blog-details.html">blog details</a></li>
                </ul>
              </li>
              <li><a href="blog.html">Blog</a></li>
              <li><a href="contact.html">Contact us</a></li>
            </ul>
          </nav>
        </div>
        <!-- End Sidebar Navigation  -->
        <!-- Start Tools  -->
        <div class="sidebar--tools">
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
                <a href="#" class="p-2 text-danger" @click.prevent="logout"
                  >登出</a
                >
              </div>
              <div v-else>
                <router-link class="p-2 text-dark" to="/login">
                  Login </router-link
                >/
                <router-link class="p-2 text-dark" to="/register">
                  Register
                </router-link>
              </div>
            </li>
          </ul>
          <ul class="menu-extra">
            <li class="search search__open"><span class="ti-search"></span></li>
            <li class="user__menu"><span class="ti-user"></span></li>
            <li class="cart__menu">
                <router-link to="/cart"> <span class="ti-shopping-cart"></span></router-link>
                
                </li>
          </ul>
        </div>
        <!-- End Tools  -->
        <div class="newsletter__form">
          <div class="input__box">
            <div id="mc_embed_signup">
              <form
                action="http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                class="validate"
                target="_blank"
                novalidate
              >
                <div id="mc_embed_signup_scroll" class="htc__news__inner">
                  <div class="news__input">
                    <input
                      type="email"
                      value=""
                      name="EMAIL"
                      class="email"
                      id="mce-EMAIL"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                  <div
                    style="position: absolute; left: -5000px"
                    aria-hidden="true"
                  >
                    <input
                      type="text"
                      name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef"
                      tabindex="-1"
                      value=""
                    />
                  </div>
                  <div class="clearfix subscribe__btn">
                    <input
                      type="submit"
                      value="Send"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      class="bst__btn btn--white__color"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
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
    <div class="container wrapper--content bg__cat--5">
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
        <!-- Start Cart Panel -->
        <div class="shopping__cart">
          <div class="shopping__cart__inner">
            <div class="offsetmenu__close__btn">
              <a href="#"><i class="zmdi zmdi-close"></i></a>
            </div>
            <div class="shp__cart__wrap">
              <div class="shp__single__product">
                <div class="shp__pro__thumb">
                  <a href="#">
                    <img
                      src="images/product/sm-img/1.jpg"
                      alt="product images"
                    />
                  </a>
                </div>
                <div class="shp__pro__details">
                  <h2>
                    <a href="product-details.html">BO&Play Wireless Speaker</a>
                  </h2>
                  <span class="quantity">QTY: 1</span>
                  <span class="shp__price">$105.00</span>
                </div>
                <div class="remove__btn">
                  <a href="#" title="Remove this item"
                    ><i class="zmdi zmdi-close"></i
                  ></a>
                </div>
              </div>
              <div class="shp__single__product">
                <div class="shp__pro__thumb">
                  <a href="#">
                    <img
                      src="images/product/sm-img/2.jpg"
                      alt="product images"
                    />
                  </a>
                </div>
                <div class="shp__pro__details">
                  <h2><a href="product-details.html">Brone Candle</a></h2>
                  <span class="quantity">QTY: 1</span>
                  <span class="shp__price">$25.00</span>
                </div>
                <div class="remove__btn">
                  <a href="#" title="Remove this item"
                    ><i class="zmdi zmdi-close"></i
                  ></a>
                </div>
              </div>
            </div>
            <ul class="shoping__total">
              <li class="subtotal">Subtotal:</li>
              <li class="total__price">$130.00</li>
            </ul>
            <ul class="shopping__btn">
              <li><a href="#">View Cart</a></li>
              <li class="shp__checkout"><a href="#">Checkout</a></li>
            </ul>
          </div>
        </div>
        <!-- End Cart Panel -->
        <!-- Start User Login & register -->
        <div class="user__meta">
          <div class="user__meta__inner">
            <div class="offsetmenu__close__btn">
              <a href="#"><i class="zmdi zmdi-close"></i></a>
            </div>
            <div class="htc__login__register bg__white">
              <ul class="login__register__menu" role="tablist">
                <li role="presentation" class="login active">
                  <a href="#login" role="tab" data-toggle="tab">Login</a>
                </li>
                <li role="presentation" class="register">
                  <a href="#register" role="tab" data-toggle="tab">Register</a>
                </li>
              </ul>
              <!-- Start Login Register Content -->
              <div class="htc__login__register__wrap">
                <!-- Start Single Content -->
                <div
                  id="login"
                  role="tabpanel"
                  class="single__tabs__panel tab-pane fade in active"
                >
                  <form class="login" method="post">
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                  </form>
                  <div class="tabs__checkbox">
                    <input type="checkbox" id="remember" />
                    <label for="remember">Remember me</label>
                  </div>
                  <div class="htc__login__btn">
                    <a href="#">Login</a>
                  </div>
                  <div class="htc__social__connect">
                    <h2>Or Login With</h2>
                    <ul class="htc__soaial__list">
                      <li>
                        <a
                          class="bg--twitter"
                          href="https://twitter.com/devitemsllc"
                          target="_blank"
                          ><i class="zmdi zmdi-twitter"></i
                        ></a>
                      </li>
                      <li>
                        <a
                          class="bg--instagram"
                          href="https://www.instagram.com/devitems/"
                          target="_blank"
                          ><i class="zmdi zmdi-instagram"></i
                        ></a>
                      </li>
                      <li>
                        <a
                          class="bg--facebook"
                          href="https://www.facebook.com/devitems/?ref=bookmarks"
                          target="_blank"
                          ><i class="zmdi zmdi-facebook"></i
                        ></a>
                      </li>
                      <li>
                        <a
                          class="bg--googleplus"
                          href="https://plus.google.com/"
                          target="_blank"
                          ><i class="zmdi zmdi-google-plus"></i
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- End Single Content -->
                <!-- Start Single Content -->
                <div
                  id="register"
                  role="tabpanel"
                  class="single__tabs__panel tab-pane fade"
                >
                  <form class="login" method="post">
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                  </form>
                  <div class="tabs__checkbox">
                    <input type="checkbox" id="register-remember" />
                    <label for="register-remember">Remember me</label>
                  </div>
                  <div class="htc__login__btn">
                    <a href="#">register</a>
                  </div>
                  <div class="htc__social__connect">
                    <h2>Or Login With</h2>
                    <ul class="htc__soaial__list">
                      <li>
                        <a
                          class="bg--twitter"
                          href="https://twitter.com/devitemsllc"
                          target="_blank"
                          ><i class="zmdi zmdi-twitter"></i
                        ></a>
                      </li>
                      <li>
                        <a
                          class="bg--instagram"
                          href="https://www.instagram.com/devitems/"
                          target="_blank"
                          ><i class="zmdi zmdi-instagram"></i
                        ></a>
                      </li>
                      <li>
                        <a
                          class="bg--facebook"
                          href="https://www.facebook.com/devitems/?ref=bookmarks"
                          target="_blank"
                          ><i class="zmdi zmdi-facebook"></i
                        ></a>
                      </li>
                      <li>
                        <a
                          class="bg--googleplus"
                          href="https://plus.google.com/"
                          target="_blank"
                          ><i class="zmdi zmdi-google-plus"></i
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- End Single Content -->
              </div>
              <!-- End Login Register Content -->
            </div>
          </div>
        </div>
        <!-- End User Login & register -->
      </div>
      <!-- End Offset Wrapper -->

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
                <a href="#">
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
                      href="#"
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
    </div>

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
                      <a href="#">4 customer reviews</a>
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
                      <li class="red"><a title="Red" href="#">Red</a></li>
                      <li class="gold"><a title="Gold" href="#">Gold</a></li>
                      <li class="orange">
                        <a title="Orange" href="#">Orange</a>
                      </li>
                      <li class="orange">
                        <a title="Orange" href="#">Orange</a>
                      </li>
                    </ul>
                  </div>
                  <div class="select__size">
                    <h2>Select size</h2>
                    <ul class="color__list">
                      <li class="l__size"><a title="L" href="#">L</a></li>
                      <li class="m__size"><a title="M" href="#">M</a></li>
                      <li class="s__size"><a title="S" href="#">S</a></li>
                      <li class="xl__size"><a title="XL" href="#">XL</a></li>
                      <li class="xxl__size"><a title="XXL" href="#">XXL</a></li>
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
                            href="#"
                            class="rss social-icon"
                            ><i class="zmdi zmdi-rss"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            title="Linkedin"
                            href="#"
                            class="linkedin social-icon"
                            ><i class="zmdi zmdi-linkedin"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            title="Pinterest"
                            href="#"
                            class="pinterest social-icon"
                            ><i class="zmdi zmdi-pinterest"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            title="Tumblr"
                            href="#"
                            class="tumblr social-icon"
                            ><i class="zmdi zmdi-tumblr"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            title="Pinterest"
                            href="#"
                            class="pinterest social-icon"
                            ><i class="zmdi zmdi-pinterest"></i
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="addtocart-btn">
                    <a href="#">Add to cart</a>
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
import { getProduct_pages } from "@/api/product";
import { addCarts } from "@/api/cart";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    // Header,
    Footer,
  },
  data() {
    return {
      product_list: null,
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
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
    logout() {
      localStorage.clear();
      location.reload();
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

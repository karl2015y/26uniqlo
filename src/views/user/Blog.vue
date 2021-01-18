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
      <!--內文開始-->
      <!-- Start BLog Area -->
      <div class="htc__blog__area bg__white ptb--120">
        <div class="container">
          <div class="row blog__wrap blog--page clearfix">
            <!-- Start Single Blog -->
            <template v-if="blogs.length == 0">
              <div
                style="min-height: calc(100vh - 37.6rem)"
                class="pl-4 py-3 h3 text-muted"
              >
                暫時沒有文章上架，過一陣子再來吧~
              </div>
            </template>
             <template v-else>
               <div
              v-for="blog in blogs"
              :key="blog.id"
              class="col-md-6 col-lg-4 col-sm-12"
            >
              <div class="blog foo">
                <div class="blog__inner">
                  <div class="blog__thumb">
                    <a :href="`/#/blog/${blog.id}`">
                      <img :src="blog.bimg" alt="blog images" />
                    </a>
                    <div class="blog__post__time">
                      <div class="post__time--inner">
                        <span class="date">{{ blog.up_at }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="blog__hover__info">
                    <div class="blog__hover__action">
                      <p class="blog__des">
                        <a :href="`/#/blog/${blog.id}`">{{ blog.name }}</a>
                      </p>
                      <div class="blog__btn">
                        <a class="read__more__btn" :href="`/#/blog/${blog.id}`"
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
      <!-- End BLog Area -->
      <!--內文結束-->
      <Pagination
        class="d-flex justify-content-center"
        style="margin-top: -35px"
        :compo-pages="pagination"
        @emitPages="getBlog"
      ></Pagination>

      <!-- Start Footer Area -->
      <Footer />
      <!-- End Footer Area -->
    </SiderbarM>
  </div>
</template>

<script>
import { getBlog_pages } from "@/api/blog";
// import { addCarts } from "@/api/cart";
import Pagination from "@/components/Pagination";

import Footer from "@/components/Footer.vue";
import Siderbar from "@/components/Siderbar.vue";
import SiderbarM from "@/components/SiderbarM.vue";

export default {
  name: "ProductDetail",
  components: {
    // Header,
    Footer,
    Siderbar,
    SiderbarM,
    Pagination,
  },
  data() {
    return {
      isLoading: false,
      blogs: [],
      pagination: {},
    };
  },
  watch: {},
  created() {
    const vm = this;
    vm.getBlog();
  },
  methods: {
    getBlog(currentPage = 1) {
      const vm = this;
      vm.isLoading = true;
      getBlog_pages("Blog",currentPage).then(function (res) {
        vm.pagination = res.data.blog_list;
        // console.log("blog_list",res);
        vm.blogs = res.data.blog_list.data;
        vm.isLoading = false;
      });
    },

  },
};
</script>

<style lang="scss">
</style>

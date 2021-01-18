<template>
  <div class="wrapper home-7 wrapper__sidebar home-v5 wrapper__sidebar--left">
    <Loading :active.sync="isLoading"></Loading>
    <!-- 電腦版MENU -->
    <Siderbar />
    <!-- 手機版MENU -->

    <SiderbarM>
      <!--內文開始-->
      <!-- Start Our Blog Area -->
      <section class="blog-details-wrap ptb--120 bg__white">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-lg-12">
              <div class="blog-details-left-sidebar">
                <div class="blog-details-top">
                  <!--Start Blog Thumb -->
                  <div class="blog-details-thumb-wrap">
                    <div class="blog-details-thumb">
                      <img
                        :src="blog.bimg"
                        alt="blog images"
                      />
                    </div>
                    <div class="upcoming-date">
                      {{blog.up_at}}
                    </div>
                  </div>
                  <!--End Blog Thumb -->
                  <h2>{{blog.name}}</h2>
                  <!-- Start Blog Pra -->
                  <div class="blog-details-pra">
                    <div v-html="blog.description"></div>

        
                  </div>
                  <!-- End Blog Pra -->
  
        
             
                </div>
              </div>
            </div>
     
          </div>
        </div>
      </section>
      <!-- End Our Blog Area -->
      <!--內文結束-->

      <!-- Start Footer Area -->
      <Footer />
      <!-- End Footer Area -->
    </SiderbarM>
  </div>
</template>

<script>
import { getBlog_pages } from "@/api/blog";
// import { addCarts } from "@/api/cart";
import Footer from "@/components/Footer.vue";
import Siderbar from "@/components/Siderbar.vue";
import SiderbarM from "@/components/SiderbarM.vue";

export default {
  name: "Vip",
  components: {
    // Header,
    Footer,
    Siderbar,
    SiderbarM,
  },
  data() {
    return {
      isLoading: false,
      blog: {},
    };
  },
  watch: {},
  created() {
    const vm = this;
    vm.getBlog();
  },
  methods: {
    getBlog() {
      const vm = this;
      vm.isLoading = true;

          getBlog_pages("Vip",1).then(function (res) {
        vm.blog = res.data.blog_list.data[0];
        vm.isLoading = false;
      });
    },

  },
};
</script>

<style lang="scss">
table{
  width: 100%;
}
</style>

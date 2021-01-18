<template>
  <div class="wrapper home-7 wrapper__sidebar home-v5 wrapper__sidebar--left">
    <Loading :active.sync="isLoading"></Loading>
    <!-- 電腦版MENU -->
    <Siderbar />
    <!-- 手機版MENU -->

    <SiderbarM>
      <!--內文開始-->
      <div
        style="min-height: calc(100vh - 366px)"
        class="bg-white mx-0 pt-3 pt-md-5 px-5 py-3"
      >
        <div class="row">
          <div class="col-md-12 col-lg-6 col-sm-12">
            <div class="product__details__container">
              <div>
                <div class="portfolio-full-image tab-content">
                  <div role="tabpanel" class="tab-pane active" id="img-tab-1">
                    <img :src="plist.pimg" alt="full-image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12 col-lg-6 col-sm-12 smt-30 xmt-30">
            <div class="htc__product__details__inner">
              <div class="pro__detl__title">
                <h2>{{ plist.name }}</h2>
              </div>
              <div class="pro__details">
                <p>{{ plist.description }}</p>
              </div>
              <ul class="pro__dtl__prize">
                <template v-if="plist.origin_price != plist.price">
                  <li class="old__prize">${{ plist.price }}</li>
                  <li>${{ plist.origin_price }}</li>
                </template>
                <template v-else>
                  <li class="text-dark">${{ plist.price }}</li>
                </template>
              </ul>

              <div class="product-action-wrap">
                <div class="prodict-statas d-flex">
                  <span>數量</span>
                  <div class="small px-2">(庫存:{{ plist.count }})</div>
                  <span>:</span>
                </div>
                <div class="product-quantity">
                  <div class="product-quantity">
                    <div class="cart-plus-minus">
                      <div
                        @click="num--"
                        style="font-size: 2rem; cursor: pointer"
                      >
                        -
                      </div>
                      <input
                        :style="num < 10 ? 'width: 4rem;' : 'width: 5rem;'"
                        class="cart-plus-minus-box"
                        type="text"
                        name="qtybutton"
                        :value="num"
                      />
                      <div
                        @click="num++"
                        style="font-size: 1.1rem; cursor: pointer"
                      >
                        +
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <ul class="pro__dtl__btn">
                <template v-if="plist.count == 0">
                  <li class="buy__now__btn">
                    <a href="javascript:;">暫無庫存</a>
                  </li>
                </template>
                <template v-else>
                  <li @click="addtoCarts()" class="buy__now__btn">
                    <a href="javascript:;">加入購物車</a>
                  </li>
                </template>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <h3 class="mt-3 h3 font-weight-bold">詳細資料</h3>
          <p v-html="plist.content"></p>
        </div>
      </div>
      <!--內文結束-->

      <!-- Start Footer Area -->
      <Footer />
      <!-- End Footer Area -->
    </SiderbarM>
  </div>
</template>

<script>
import { getProduct } from "@/api/product";
import { addCarts } from "@/api/cart";
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
  },
  data() {
    return {
      isLoading: false,
      num: 1,
      plist: {},
    };
  },
  watch: {
    num(num) {
      if (this.plist.count == 0 && num != 1) {
        alert("已無庫存");
        this.num = 1;
      } else {
        if (num < 1) {
          alert("數量不能小於1");
          this.num = 1;
        } else if (num > this.plist.count && this.plist.count != 0) {
          alert("數量不能大於庫存數：" + this.plist.count);
          this.num--;
        }
      }
    },
  },
  created() {
    const vm = this;
    vm.getProduct();
  },
  methods: {
    getProduct() {
      const vm = this;
      vm.isLoading = true;
      getProduct(vm.$route.params.product_id)
        .then(function (res) {
          vm.plist = res.data.product_list;
          vm.isLoading = false;
        })
        .catch(() => {
          alert("商品不存在");
          vm.isLoading = false;
          vm.$router.push({ name: "Home" });
        });
    },

    addtoCarts() {
      const vm = this;
      addCarts(vm.plist, vm.num)
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

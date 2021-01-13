<template>
  <div class="wrapper home-7 wrapper__sidebar home-v5 wrapper__sidebar--left">
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
      <h3 class="px-4 pt-4 h2 pb-3">購物車</h3>
      <div class="mx-auto mt-3 px-0 px-md-4">
        <div class="row">
          <aside class="col-lg-9">
            <div
              v-if="
                cart.cart_normallist.length == 0 &&
                cart.cart_daigoulist.length == 0
              "
              class="card p-4"
            >
              購物車暫無訂單，再去逛逛吧~
            </div>
            <div v-if="cart.cart_normallist.length > 0" class="card">
              <div class="table-responsive">
                <table class="table table-borderless table-shopping-cart">
                  <thead class="text-muted">
                    <tr class="small text-uppercase">
                      <th scope="col" width="200">產品名稱</th>
                      <th scope="col" width="120">數量</th>
                      <th scope="col" width="120">價錢</th>
                      <th scope="col" class="text-center" width="120">操作</th>
                    </tr>
                  </thead>
                  <tbody v-if="cart !== null">
                    <template v-for="(item, index) in cart.cart_normallist">
                      <tr :key="index">
                        <td>
                          <figure class="align-items-center">
                            <div class="aside">
                              <img :src="item.pimg" class="img-sm" />
                            </div>
                            <figcaption class="info">
                              <a
                                href="javascript:;"
                                class="title text-dark"
                                data-abc="true"
                                >{{ item.name }}</a
                              >
                            </figcaption>
                          </figure>
                        </td>
                        <td>
                          <select
                            class="form-control"
                            v-model="item.count"
                            @change="updateCart(item)"
                          >
                            <option
                              v-for="index in item.remaining_number"
                              :key="index"
                            >
                              {{ index }}
                            </option>
                          </select>
                        </td>
                        <td>
                          <div class="price-wrap">
                            <var class="mt-2 price">${{ item.price }}</var>
                          </div>
                        </td>
                        <td class="text-center">
                          <button
                            class="btn btn-light"
                            @click="deleteCart(item)"
                          >
                            刪除
                          </button>
                        </td>
                      </tr>
                    </template>
                  </tbody>
                </table>
              </div>
            </div>
            <div v-if="cart.cart_daigoulist.length > 0" class="card">
              <div class="table-responsive">
                <table class="table table-borderless table-shopping-cart">
                  <thead class="text-muted">
                    <tr class="small text-uppercase">
                      <th scope="col" width="200">代購單號</th>
                      <th scope="col">訂單備註</th>
                      <th scope="col" width="120">價錢</th>
                      <th scope="col" class="text-center" width="120">操作</th>
                    </tr>
                  </thead>
                  <tbody v-if="cart !== null">
                    <template v-for="(item, index) in cart.cart_daigoulist">
                      <tr :key="index">
                        <td>
                          <ul>
                            <li>{{ item.ppid }}</li>
                            <li>
                              <router-link
                                class="btn-link"
                                :to="{
                                  name: 'DaigouItems',
                                  params: { dgid: item.ppid },
                                }"
                              >
                                詳細資料
                              </router-link>
                            </li>
                          </ul>
                        </td>
                        <td>
                          <p style="white-space: pre-line">
                            {{ item.content }}
                          </p>
                        </td>
                        <td>
                          <div class="price-wrap">
                            <var class="price">${{ item.price }}</var>
                          </div>
                        </td>
                        <td class="text-center">
                          <button
                            class="btn btn-light"
                            @click="deleteCart(item)"
                          >
                            刪除
                          </button>
                        </td>
                      </tr>
                    </template>
                  </tbody>
                </table>
              </div>
            </div>
            <form class="needs-validation mx-2" novalidate="">
              <div class="row mt-5">
                <div class="col-md-12 mb-6">
                  <label for="firstName">姓名</label>
                  <input
                    type="text"
                    class="form-control"
                    id="firstName"
                    placeholder=""
                    value=""
                    required=""
                    v-model="name"
                  />
                </div>
              </div>

              <div class="mb-3">
                <label for="email"
                  >Email</label
                >
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="請輸入信箱"
                  v-model="email"
                />
              </div>

              <div class="mb-3">
                <label for="phone">電話</label>
                <input
                  type="text"
                  class="form-control"
                  id="phone"
                  placeholder="請輸入電話"
                  required=""
                  v-model="phone"
                />
              </div>

              <div class="mb-3">
                <label for="address">地址</label>
                <input
                  type="text"
                  class="form-control"
                  id="address"
                  placeholder="請輸入地址 ex:高雄市楠梓區xx路xx號"
                  required=""
                  v-model="address"
                />
              </div>
            </form>
          </aside>
          <aside class="col-lg-3">
            <div class="card">
              <div class="card-body">
                <div class="dlist-align">
                  <div>總金額:</div>
                  <div class="text-right ml-3">
                    ${{ cart !== null ? cart.total_price : 0 }}
                  </div>
                </div>
                <!-- <div class="dlist-align">
                <div>Discount:</div>
                <div class="text-right text-danger ml-3">
                  -${{ cart !== null ? cart.discount : 0 }}
                </div>
              </div>
              <div class="dlist-align">
                <div>Total:</div>
                <div class="text-right text-dark b ml-3">
                  <strong>${{ cart !== null ? cart.total : 0 }} </strong>
                </div>
              </div> -->
                <hr />
                <button
                  href="javascript:;"
                  class="btn btn-out btn-primary btn-square btn-main"
                  data-abc="true"
                  @click="createOrder()"
                >
                  下訂單
                </button>
                <router-link
                  class="btn btn-out btn-success btn-square btn-main mt-2"
                  to="/shop"
                >
                  繼續購物
                </router-link>
                <span class="text-primary">{{ status }}</span>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <!-- Start Footer Area -->
      <Footer />
      <!-- End Footer Area -->
    </SiderbarM>
    <div ref="ecpay"></div>
  </div>
</template>

<script>
import Siderbar from "@/components/Siderbar.vue";
import SiderbarM from "@/components/SiderbarM.vue";
import Footer from "@/components/Footer.vue";
import { getCarts, deleteCarts, updateCarts } from "@/api/cart";
import { createOrders } from "@/api/order";

export default {
  components: {
    Siderbar,
    SiderbarM,
    Footer,
  },
  data() {
    return {
      cart: {
        cart_normallist: [],
        cart_daigoulist: [],
      },
      status: null,
      name: null,
      address: null,
      phone: null,
      email: null,
    };
  },
  created() {
    const vm = this;
    vm.getCart();
  },
  methods: {
    getCart() {
      const vm = this;
      getCarts().then(function (res) {
        vm.cart = res.data;
        vm.email = vm.cart.user_email
        vm.name = vm.cart.user_name
        vm.cart.cart_normallist = vm.cart.cart_list.filter(function (item) {
          return item.category != "Daigou";
        });
        vm.cart.cart_daigoulist = vm.cart.cart_list.filter(function (item) {
          return item.category == "Daigou";
        });
      });
    },
    deleteCart(item) {
      const vm = this;
      deleteCarts(item).then(function () {
        vm.getCart();
      });
    },
    updateCart(item) {
      const vm = this;
      updateCarts(item).then(function () {
        vm.getCart();
        alert("更新成功");
      });
    },
    createOrder() {
      const vm = this;
      let data = {
        name: vm.name,
        email: vm.email,
        address: vm.address,
        phone: vm.phone,
      };
      createOrders(data)
        .then(function (res) {
          if (res.data && res.data.needCheck) {
            vm.getCart();
            alert("訂單因包含代購商品，已將此訂單送審");
            vm.$router.push({ name: "Myorder" });
          } else {
            vm.$router.push({ name: "Myorder" });
          }
        })
        .catch(() => {
          alert("訂單資料錯誤!");
        });
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");

body {
  background-color: #eeeeee;
  font-family: "Open Sans", serif;
  font-size: 14px;
}

.container-fluid {
  margin-top: 70px;
}

.card-body {
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1.4rem;
}

.img-sm {
  width: 80px;
  height: 80px;
}

.itemside .info {
  padding-left: 15px;
  padding-right: 7px;
}

.table-shopping-cart .price-wrap {
  line-height: 1.2;
}

.table-shopping-cart .price {
  font-weight: bold;
  margin-right: 5px;
  display: block;
}

.text-muted {
  color: #969696 !important;
}

a {
  text-decoration: none !important;
}

.card {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0px;
}

.itemside {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
}

.dlist-align {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

[class*="dlist-"] {
  margin-bottom: 5px;
}

.price {
  font-weight: 600;
  color: #212529;
}

.btn.btn-out {
  outline: 1px solid #fff;
  outline-offset: -5px;
}

.btn-main {
  border-radius: 2px;
  text-transform: capitalize;
  font-size: 15px;
  padding: 10px 19px;
  cursor: pointer;
  color: #fff;
  width: 100%;
}

.btn-light {
  color: #ffffff;
  background-color: #f44336;
  border-color: #f8f9fa;
  font-size: 12px;
}

.btn-light:hover {
  color: #ffffff;
  background-color: #f44336;
  border-color: #f44336;
}

.btn-apply {
  font-size: 11px;
}
</style>
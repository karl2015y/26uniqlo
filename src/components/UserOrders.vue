<template>
  <div class="mx-md-4" style="min-height: calc(100vh - 24rem)">
    <Loading :active.sync="isLoading"></Loading>
    <h3 class="pl-4 pl-md-0 pt-4 h2 pb-3">歷史訂單</h3>

    <table class="table table-responsive">
      <thead>
        <tr class="bg-white">
          <th class="text-nowrap">訂單編號</th>
          <th class="text-nowrap">付款狀態</th>
          <th class="text-nowrap">購買時間</th>
          <th class="text-nowrap">聯絡方式</th>
          <th class="text-nowrap w-100">購買款項</th>
          <th class="text-nowrap">應付金額</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="bg-white"
          v-for="(item, key) in sortOrder"
          :key="key"
          :class="{ 'text-secondary': !item.status === 'true' }"
        >

          <td class="text-right text-nowrap">{{ item.ooid }}</td>

          <td>
            <div v-if="item.status === 0">
              <ul>
                <li>
                  <button
                    class="btn btn-primary btn-sm"
                    @click="openModal(item)"
                  >
                    點擊付款
                  </button>
                </li>
                <li class="text-center">
                  <span class="small text-muted">尚未付款</span>
                </li>
              </ul>
            </div>

            <strong v-else-if="item.status === 1" class="text-success">
              已付款
            </strong>

            <strong v-else-if="item.status === 2" class="text-muted">
              審核中...
            </strong>
          </td>
          <td class="text-right text-nowrap">{{ item.cr_at }}</td>
          <td>
            <ul class="list-unstyled">
              <li class="text-nowrap">收件人：<span v-text="item.name" v-if="item.name"></span></li>
              <li class="text-nowrap">電話：<span v-text="item.phone" v-if="item.phone"></span></li>
              <li class="text-nowrap">地址：<span v-text="item.address" v-if="item.address"></span></li>
              <li class="text-nowrap">Email：<span v-text="item.email" v-if="item.email"></span></li>
            </ul>
           
            </td>
          <td>
            <ul class="list-unstyled">
              <li v-for="(product, i) in item.products" :key="i">
                {{ product.name }} 數量：{{ product.count }}
              </li>
            </ul>
          </td>
          <td class="text-nowrap text-right">NTD {{ item.total }}</td>
        </tr>
      </tbody>
    </table>

    <Pagination
      class="d-flex justify-content-center"
      :compo-pages="pagination"
      @emitPages="getOrders"
    ></Pagination>
    <div ref="ecpay"></div>
    <!-- Bootstrap edit Modal -->
    <div
      class="modal fade"
      id="orderModel"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>模擬付款</span>
            </h5>
            <!-- 關閉按鈕 -->
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
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label for="ooid">訂單編號</label>
                  <input
                    type="text"
                    class="form-control"
                    id="ooid"
                    v-model="ooid"
                    placeholder="請輸入標題"
                    readonly
                  />
                </div>
                <hr />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click.prevent="payOrders()"
            >
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import $ from "jquery";

import Pagination from "./Pagination";
import { getMyOrders, payOrder } from "@/api/order";

export default {
  data() {
    return {
      orders: {},
      pagination: {},
      isLoading: false,
      ooid: null,
    };
  },
  components: {
    Pagination,
  },
  methods: {
    getOrders(currentPage = 1) {
      const vm = this;
      vm.isLoading = true;
      getMyOrders(currentPage).then((response) => {
        vm.orders = response.data.data.data;
        vm.isLoading = false;
        vm.pagination = response.data.data;
      });
    },
    // 打開編輯視窗
    openModal(item) {
      const vm = this;
      window.$("#orderModel").modal("show");
      console.log(item);
      vm.ooid = item.ooid;
    },
    payOrders() {
      const vm = this;
      let data = {
        ooid: vm.ooid,
      };
      vm.isLoading = true;

      payOrder(data).then(function (res) {
        vm.isLoading = false;
        vm.$refs.ecpay.innerHTML = res.data;
        document.getElementById("__ecpayForm").style.visibility = "hidden";
        document.getElementById("__ecpayForm").submit();
        vm.getOrders();
      });
    },
  },
  computed: {
    // 已付款的訂單往上排列
    sortOrder() {
      const vm = this;
      let newOrder = [];
      if (vm.orders.length) {
        newOrder = vm.orders.sort((a, b) => {
          const aIsPaid = a.status === 1 ? 1 : 0;
          const bIsPaid = b.status === 1 ? 1 : 0;
          return bIsPaid - aIsPaid;
        });
      }
      return newOrder;
    },
  },
  created() {
    this.getOrders();
    // console.log(process.env.APIPATH);
  },
};
</script>
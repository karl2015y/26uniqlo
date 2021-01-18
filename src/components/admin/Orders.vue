<template>
  <div>
    <Loading :active.sync="isLoading"></Loading>
    <table class="table mt-4">
      <thead>
        <tr>
          <th class="text-nowrap">訂單編號</th>
          <th>購買時間</th>
          <th class="text-nowrap">聯絡方式</th>
          <th>購買款項</th>
          <th>應付金額</th>
          <th>ago</th>
          <th>是否付款</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, key) in sortOrder"
          :key="key"
          :class="{ 'text-secondary': !item.status === 'true' }"
        >
          <td class="text-nowrap">{{ item.ooid }}</td>

          <td>{{ item.cr_at }}</td>
         
                   <td>
            <ul class="list-unstyled">
              <li class="text-nowrap">
                收件人：<span v-text="item.name" v-if="item.name"></span>
              </li>
              <li class="text-nowrap">
                電話：<span v-text="item.phone" v-if="item.phone"></span>
              </li>
              <li class="text-nowrap">
                地址：<span v-text="item.address" v-if="item.address"></span>
              </li>
              <li class="text-nowrap">
                Email：<span v-text="item.email" v-if="item.email"></span>
              </li>
            </ul>
          </td>
          <td>
            <ul class="list-unstyled">
              <li v-for="(product, i) in item.products" :key="i">
                <template v-if="product.ppid.indexOf('DG') > -1">
                  <span @click="openModal(product)" class="btn-link">
                    查看代購單-{{ product.ppid }}
                  </span>
                    <span class="small">費用： {{ product.price }}</span>
                </template>
                <template v-else>
                  {{ product.name }} / 數量：{{ product.count }} / 單價：{{ product.price }}
                </template>
              </li>
            </ul>
          </td>
          <td class="text-right">{{ item.total }}</td>
          <td class="text-right">{{ item.cr_at }}</td>
          <td>
            <strong v-if="item.status === 1" class="text-success"
              >已付款</strong
            >
            <span v-else-if="item.status === 2" class="text-muted">審核中</span>
            <span v-else class="text-muted">尚未付款</span>
          </td>
          <td>
            <button
              v-if="item.products.find((item) => item.ppid.indexOf('DG') > -1) && item.status === 2"
              @click="passOrder(item.ooid)"
              class="btn btn-primary btn-sm"
            >
              代購通過
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <Pagination :compo-pages="pagination" @emitPages="getOrders"></Pagination>
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
            <h5 class="modal-title text-white" id="exampleModalLabel">
              <span>查看訂單</span>
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
            <Items style="padding: 0 !important" v-if="showdg" />
          </div>
          <div class="modal-footer">
            <button
            v-if="isChecking"
              type="button"
              class="btn btn-primary"
              @click.prevent="updateOrder()"
            >
              更新訂單
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import $ from "jquery";
import Items from "@/components/Daigou/Items.vue";
import Pagination from "../Pagination";
import { getOrder, payOrder,updateOrderTotal, passOrder } from "@/api/order";
export default {
  data() {
    return {
      orders: {},
      pagination: {},
      isLoading: false,
      ooid: null,
      showdg: false,
      focusOoid:null,
      isChecking:false,
    };
  },
  components: {
    Items,
    Pagination,
  },
  methods: {
    getOrders(currentPage = 1) {
      const vm = this;
      vm.isLoading = true;
      getOrder(currentPage).then((response) => {
        vm.orders = response.data.data.data;
        vm.isLoading = false;
        vm.pagination = response.data.data;
      });
    },
    // 打開編輯視窗
    openModal(item) {
      const vm = this;
      vm.showdg = false;
      setTimeout(() => {
        vm.showdg = true;
      }, 500);
      window.$("#orderModel").modal("show");
      console.log(item);
      vm.$route.params.dgid = item.ppid;
      vm.focusOoid=item.ooid;
      vm.isChecking=item.status===2;
    },


    passOrder(ooid) {
      const vm = this;
        vm.isLoading = true;

      passOrder(ooid).then(() => {
        vm.isLoading = false;
        this.getOrders();
        alert("訂單審核已通過");
      });
    },


    updateOrder() {
      const vm = this;
      vm.showdg = false;
      setTimeout(() => {
        vm.showdg = true;
      }, 500);
      updateOrderTotal(vm.focusOoid).then(() => {
        vm.isLoading = false;
        this.getOrders();
        alert("已更新訂單");
      });
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
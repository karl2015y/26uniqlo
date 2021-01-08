<template>
  <div
    style="min-height: calc(100vh - 416px)"
    class="px-0 px-md-5 bg-white pb-5"
  >
    <loading :active.sync="isLoading"></loading>

    <div class="text-right mx-3 mx-md-0">
      <button
        class="btn btn-outline-primary mt-4"
        @click.prevent="openModal(true)"
      >
        建立代購品項
      </button>
    </div>
    <table class="table mt-4 mb-5 table-responsive-md" style="font-size: 1rem">
      <thead>
        <tr>
          <th class="text-nowrap">代購連結</th>
          <th class="text-nowrap text-center">代購類別</th>
          <th class="text-nowrap text-center">數量</th>
          <th class="text-nowrap text-center">韓幣總價錢(₩)</th>
          <th class="text-nowrap text-center">台幣總價錢(NTD)</th>
          <th class="text-nowrap text-center">更新時間</th>
          <th class="text-nowrap text-center">建立時間</th>
          <th class="text-center" width="120">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in daigouitems" :key="item.id">
          <td class="text-nowrap">
            <a target="_blank" class="btn-link" :href="item.dgurl">點此瀏覽</a>
          </td>
          <td class="text-nowrap text-center">
            <span v-if="item.dgtype.indexOf('name') > 0">{{
              JSON.parse(item.dgtype)["name"]
            }}</span>
            <span v-else>{{ item.dgtype }}</span>
          </td>
          <td class="text-nowrap text-center">
            {{ item.count }}
          </td>
          <td class="text-nowrap text-center">₩ {{ item.price }}</td>
          <td class="text-nowrap text-center">NTD {{ item.total }}</td>

          <td class="text-nowrap text-center">{{ item.up_at }}</td>
          <td class="text-nowrap text-center">{{ item.cr_at }}</td>

          <td class="text-center text-nowrap">
            <button
              class="btn btn-sm btn-outline-info mr-1"
              @click="openModal(false, item)"
            >
              查看
            </button>
            <button
              class="btn btn-sm btn-outline-danger"
              @click="openDelModal(item)"
            >
              刪除
            </button>
          </td>
        </tr>
      </tbody>
    </table>
<div v-if="amountPrice==0" class="text-center">
暫無資料，點擊右上角「建立代購品項」來新增代購商品吧
</div>
    <hr class="mt-3">
    <div v-if="amountPrice>0" class="text-right mx-3 mx-md-0">
    <div ><h3 class="h3">總金額:{{amountPrice}}</h3></div>
    <button
        class="btn btn-outline-primary mt-4"
        @click.prevent="openModal(true)"
      >
        將代購單加入購物車
      </button>
    </div>
    <!-- Bootstrap edit Modal -->
    <div
      class="modal fade"
      id="daigouitemModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="text-white modal-title" id="exampleModalLabel">
              <span v-if="isNew">新增代購品項</span>
              <span v-else>更新代購品項</span>
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
                  <label for="dgurl">代購連結</label>
                  <input
                    type="text"
                    class="form-control"
                    id="dgurl"
                    v-model="focusDaigouitems.dgurl"
                    placeholder="請輸入代購連結"
                  />
                </div>

                <div class="form-group">
                  <label for="title">代購商品類別</label>
                  <select
                    class="form-control"
                    v-model="focusDaigouitems.dgtypeId"
                  >
                    <template v-for="item in daigouparams">
                      <option
                        v-if="item.id != 1 || item.name != '韓幣'"
                        :key="item.id"
                        :value="item.id"
                      >
                        {{ item.name }} -> NTD {{ item.price }} 元
                      </option>
                    </template>
                  </select>
                </div>

                <div class="form-group">
                  <label for="count">代購商品數量</label>
                  <input
                    type="number"
                    class="form-control"
                    id="count"
                    v-model.number="focusDaigouitems.count"
                    placeholder="請輸入代購商品數量"
                  />
                </div>

                <div class="form-group">
                  <label for="price">代購商品總韓元價格</label>
                  <input
                    type="number"
                    class="form-control"
                    id="price"
                    v-model.number="focusDaigouitems.price"
                    placeholder="請輸入代購商品價格"
                  />
                </div>

                <div class="form-group">
                  <label for="note">備註</label>
                  <textarea
                    rows="6"
                    type="text"
                    class="form-control"
                    id="note"
                    v-model="focusDaigouitems.note"
                    placeholder="請輸入備註"
                  ></textarea>
                </div>
                <div
                  v-if="daigouparams.length > 0 && totalPrice"
                  class="form-group"
                >
                  <label for="note">計算公式：</label>
                  {{ focusDaigouitems.count }} 件商品 * 代購類別運費 NTD
                  {{ dgtypePrice }} 元 + 總商品韓元價格 ₩
                  {{ focusDaigouitems.price }} / 韓元匯率
                  {{ daigouparams[0].price }}
                </div>
                <div v-if="totalPrice" class="form-group">
                  <label for="note">估算金額：</label>
                  NTD <span>{{ totalPrice }}</span> 元
                </div>

                <div v-if="!isNew" class="form-group">
                  <label for="note">實際金額：</label>
                  NTD <span>{{ focusDaigouitems.total }}</span> 元
                </div>
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
              @click.prevent="updateDaigouitem()"
            >
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- delete Modal -->
    <div
      class="modal fade"
      id="deleteModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="font-size: 1.6rem"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">警告</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">真的要刪除嗎？</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              不刪除
            </button>
            <button
              type="button"
              class="btn btn-danger"
              @click="deleteDaigouitem()"
            >
              刪除
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getDaigouparams,
  getDaigouItems,
  setDaigouitem,
  deleteDaigouitem,
  updateDaigouitem,
} from "@/api/daigou";

// import ProductModal from "../modal/ProductModal";
// import Pagination from "../Pagination";
// import $ from "jquery";
// import axios from "axios";
export default {
  data() {
    return {
      dgid: this.$route.params.dgid,
      daigouitems: [],
      daigouparams: [],
      focusDaigouitems: {
        dgurl: "",
        dgtypeId: 2,
        count: 1,
        price: 0,
        note: "",
      },
      isNew: false, //判斷新增視窗還是修改視窗
      isLoading: false,
    };
  },
  components: {
    // ProductModal
    // Pagination,
  },
  computed: {
    dgtypePrice() {
      let vm = this;
      if (vm.focusDaigouitems.dgtypeId) {
        const res = vm.daigouparams.find(function (item) {
          return item.id == vm.focusDaigouitems.dgtypeId; // 取得大於五歲的
        });
        if (res && res["price"]) {
          return res["price"];
        } else {
          return 0;
        }
      } else {
        return 0;
      }
    },
    totalPrice() {
      //某代購商品的價錢
      let vm = this;
      if (
        vm.focusDaigouitems.count &&
        vm.dgtypePrice &&
        vm.focusDaigouitems.price &&
        vm.daigouparams.length > 0 &&
        vm.daigouparams[0].price
      ) {
        const price =
          vm.focusDaigouitems.count * vm.dgtypePrice +
          vm.focusDaigouitems.price / vm.daigouparams[0].price;
        return Math.round(price);
      } else {
        return 0;
      }
    },
    amountPrice() {
      //全部代購商品德的價錢
      let vm = this;
      let ans=0;
      if (vm.daigouitems && vm.daigouitems.length > 0) {
       vm.daigouitems.forEach(item=>{
         ans+=item.total;
       })
       return ans;
      } else {
        return 0;
      }
    },
  },
  created() {
    this.getAllDaigouitems();
    this.getDaigouparams();
  },
  methods: {
    getDaigouparams() {
      let vm = this;
      vm.isLoading = true;
      getDaigouparams().then((res) => {
        console.log(res);
        vm.daigouparams = res.data;
        vm.isLoading = false;
      });
    },
    getAllDaigouitems() {
      let vm = this;
      vm.isLoading = true;
      getDaigouItems(vm.dgid).then((res) => {
        console.log(res);
        vm.daigouitems = res.data.list;
        vm.isLoading = false;
      });
    },
    // 打開編輯視窗
    openModal(isNew, item) {
      console.log(isNew, item);
      if (isNew) {
        this.focusDaigouitems = {
          dgurl: "",
          dgtypeId: 2,
          count: 1,
          price: 0,
          note: "",
        };
        this.isNew = true;
      } else {
        this.focusDaigouitems = {};
        this.focusDaigouitems = Object.assign({}, item);
        this.focusDaigouitems.dgtypeId = JSON.parse(
          this.focusDaigouitems.dgtype
        ).id;
        this.isNew = false;
      }
      window.$("#daigouitemModal").modal("show");
    },
    //打開刪除視窗
    openDelModal(item) {
      this.focusDaigouitems = Object.assign({}, item);
      window.$("#deleteModal").modal("show");
    },
    //更新代購訂單
    updateDaigouitem() {
      let vm = this;
      if (!vm.isNew) {
        console.log("update");
        updateDaigouitem(vm.focusDaigouitems).then((response) => {
          if (response.data.success) {
            window.$("#daigouitemModal").modal("hide");
            vm.getAllDaigouitems();
            alert("更新成功");
          } else {
            vm.getAllDaigouitems();
            alert("更新失敗，" + response.data.error_Message[0]);
          }
        });
      } else {
        //新代購訂單
        setDaigouitem(vm.dgid, vm.focusDaigouitems).then((response) => {
          if (response.data.success) {
            window.$("#daigouitemModal").modal("hide");
            vm.getAllDaigouitems();
            alert("新增成功");
          } else {
            vm.getAllDaigouitems();
            alert("新增失敗，" + response.data.error_Message[0]);
          }
        });
      }
    },

    //刪除代購訂單
    deleteDaigouitem() {
      const vm = this;
      deleteDaigouitem(vm.focusDaigouitems.id).then((response) => {
        if (response.data.success) {
          window.$("#deleteModal").modal("hide");
          vm.getAllDaigouitems();
          alert("刪除成功");
          // this.$bus.$emit("message:push", response.data.message, "success");
        } else {
          window.$("#deleteModal").modal("hide");
          vm.getAllDaigouitems();
          alert("刪除失敗");
        }
      });
    },
  },
};
</script>

<style>
</style>
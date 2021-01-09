<template>
  <div class="px-0 px-md-5 bg-white pb-5">
    <loading :active.sync="isLoading"></loading>
    <div class="text-right">
      <button
        class="btn btn-outline-primary mt-4"
        @click.prevent="openModal(true)"
      >
        建立新代購單
      </button>
    </div>
    <table class="table mt-4" style="font-size: 1rem">
      <thead>
        <tr>
          <th class="text-nowrap">代購單號</th>
          <th class="text-nowrap text-center">建立時間</th>
          <th class="text-nowrap text-center">狀態</th>
          <th class="text-center" width="120">刪除</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in daigouorders" :key="item.id">
          <td class="text-nowrap">
           <router-link class="btn-link" :to="{ name: 'DaigouItems', params: { dgid: item.dgid }}">
                {{ item.dgid }} 
            </router-link>
          
          </td>
          <td class="text-nowrap text-center">{{item.cr_at}}</td>
          <td class="text-center">
            <span v-if="item.status === 1" class="badge badge-warning text-white"
              >已加入購物車</span
            >
            <span v-else class="badge badge-light">尚未完成</span>
          </td>
          <td  class="text-center">
            <button v-if="item.status === 0" class="btn btn-outline-danger" @click="openDelModal(item)">
              刪除
            </button>
            <button v-else class="btn btn-outline-danger" disabled>
              刪除
            </button>
          </td>
        </tr>
      </tbody>
    </table>
        <!-- Bootstrap edit Modal -->
    <div
      class="modal fade"
      id="daigouorderModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="text-white modal-title" id="exampleModalLabel">
              <span>新增代購單</span>
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
              是否建立代購單
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
              @click.prevent="updateDaigouorder()"
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
          <div class="modal-body h5">
            真的要刪除訂單：{{ focusDaigouorders.dgid }}嗎？
          </div>
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
              @click="deleteDaigouorder(focusDaigouorders.dgid)"
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
  getAllDaigouorders,
  deleteDaigouorder,
  newDaigouorder,
} from "@/api/daigou";

// import ProductModal from "../modal/ProductModal";
// import Pagination from "../Pagination";
// import $ from "jquery";
// import axios from "axios";
export default {
  data() {
    return {
      daigouorders: [],
      focusDaigouorders: {},
      isNew: false, //判斷新增視窗還是修改視窗
      isLoading: false,
    };
  },
  components: {
    // ProductModal
    // Pagination,
  },
  created() {
    this.getAllDaigouorders();
  },
  methods: {
    
    getAllDaigouorders() {
      let vm = this;

      vm.isLoading = true;
      getAllDaigouorders().then((res) => {
        console.log(res);
        vm.daigouorders = res.data;
        vm.isLoading = false;
      });
    },
    // 打開編輯視窗
    openModal(isNew, item) {
      console.log(isNew, item);
      if (isNew) {
        this.tempProduct = {};
        this.isNew = true;
      } else {
        this.tempProduct = Object.assign({}, item);
        this.isNew = false;
      }
      window.$("#daigouorderModal").modal("show");
    },
    //打開刪除視窗
    openDelModal(item) {
      this.focusDaigouorders = Object.assign({}, item);
      window.$("#deleteModal").modal("show");
    },
    //更新代購訂單
    updateDaigouorder() {
      let vm = this;
      if (!vm.isNew) {
        console.log("update");
      } else {
        //新代購訂單
        newDaigouorder().then((response) => {
          window.$("#daigouorderModal").modal("hide");
          if (response.data.success) {
            vm.getAllDaigouorders();
          } else {
            vm.getAllDaigouorders();
            console.log("新增失敗");
          }
        });
      }
    },

    //刪除代購訂單
    deleteDaigouorder(dgid) {
      const vm = this;
      deleteDaigouorder(dgid).then((response) => {
        if (response.data.success) {
          window.$("#deleteModal").modal("hide");
          vm.getAllDaigouorders();
          console.log("刪除成功");
          // this.$bus.$emit("message:push", response.data.message, "success");
        } else {
          window.$("#deleteModal").modal("hide");
          vm.getAllDaigouorders();
          console.log("刪除失敗");
        }
      });
    },

  },
};
</script>

<style>
</style>
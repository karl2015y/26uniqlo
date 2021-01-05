<template>
  <div>
    <Loading :active.sync="isLoading"></Loading>
    <div class="text-right">
      <button
        class="btn btn-outline-primary mt-4"
        @click.prevent="openModal(true)"
      >
        建立新的代購參數
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th class="text-nowrap">名稱</th>
          <th class="text-nowrap">單位</th>
          <th class="text-nowrap">價錢/單位</th>
          <th class="text-nowrap">編輯</th>
          <th class="text-nowrap">刪除</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, key) in daigouparameters"
          :key="key"
          :class="{ 'text-secondary': !item.status === 'true' }"
        >
          <!-- <th class="text-nowrap">名稱</th> -->
          <td>
            <span>{{ item.name }}</span>
          </td>
          <!-- <th class="text-nowrap">單位</th> -->
          <td>
            <span>{{ item.unit }}</span>
          </td>
          <!-- <th class="text-nowrap">價錢/單位</th> -->
          <td>
            <span>{{ item.price }}</span>
          </td>

          <td>
            <button
              class="btn btn-primary btn-sm"
              @click="openModal(false, item)"
            >
              編輯
            </button>
          </td>
          <td>
            <button class="btn btn-danger btn-sm" @click="openDelModal(item)">
              刪除
            </button>
          </td>
        </tr>
      </tbody>
    </table>


       <!-- Bootstrap edit Modal -->
    <div
      class="modal fade"
      id="daigouparameterModel"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title text-white" id="exampleModalLabel">
              <span v-if="isNew">新增參數</span>
              <span v-else>編輯參數</span>
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
      
              <div class="col-sm-12">
                <div class="form-group">
                  <label for="title">參數名稱</label>
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    v-model="focusDaigouparameter.name"
                    placeholder="請輸入參數名稱"
                  />
                </div>
                       <div class="form-group">
                  <label for="title">參數單位</label>
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    v-model="focusDaigouparameter.unit"
                    placeholder="請輸入參數單位"
                  />
                </div>
                       <div class="form-group">
                  <label for="title">參數價錢</label>
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    v-model="focusDaigouparameter.price"
                    placeholder="請輸入參數價錢"
                  />
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
              @click.prevent="updateDaigouparameter"
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
          <div class="modal-body">
            真的要刪除：{{ focusDaigouparameter.name }}嗎？
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
              @click="deleteDaigouparameter()"
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
  getDaigouparameter,
  newDaigouparameter,
  updateDaigouparameter,
  deleteDaigouparameter,
} from "@/api/daigouparameter";

export default {
  data() {
    return {
      isNew: true,
      daigouparameters: {},
      isLoading: false,
      focusDaigouparameter: {},
    };
  },

  methods: {
    getDaigouparameters() {
      const vm = this;
      vm.isLoading = true;
      getDaigouparameter().then((response) => {
        vm.daigouparameters = response.data;
        vm.isLoading = false;
      });
    },
    // 打開編輯視窗
    openModal(isNew, item) {
      const vm = this;
      console.log(isNew, item);
      if (isNew) {
        vm.focusDaigouparameter = {};
        vm.isNew = true;
      } else {
        vm.focusDaigouparameter = Object.assign({}, item);
        vm.isNew = false;
      }
      window.$("#daigouparameterModel").modal("show");
    },

    //更新產品
    updateDaigouparameter() {
      let vm = this;
      console.log(vm.isNew);
      if (!vm.isNew) {
        // 如果不是建立,則切換成更新
        updateDaigouparameter(vm.focusDaigouparameter).then((response) => {
          window.$("#daigouparameterModel").modal("hide");
          if (response.data.success) {
            vm.getDaigouparameters();
            alert("更新成功");
          } else {
            vm.getDaigouparameters();
            alert("更新失敗");
          }
        });
      } else {
        console.log("here 新產品");
        //新產品
        newDaigouparameter(vm.focusDaigouparameter).then((response) => {
          window.$("#daigouparameterModel").modal("hide");
          if (response.data.success) {
            vm.getDaigouparameters();
            alert("新增成功");
          } else {
            vm.getDaigouparameters();
            alert("新增失敗");
          }
        });
      }
    },

    //打開刪除視窗
    openDelModal(item) {
      this.focusDaigouparameter = Object.assign({}, item);
      window.$("#deleteModal").modal("show");
    },
    //刪除產品
    deleteDaigouparameter() {
      const vm = this;
      deleteDaigouparameter(vm.focusDaigouparameter).then((response) => {
        if (response.data.success) {
          window.$("#deleteModal").modal("hide");
          vm.getDaigouparameters();
          alert("刪除成功");
          // this.$bus.$emit("message:push", response.data.message, "success");
        } else {
          window.$("#deleteModal").modal("hide");
          vm.getDaigouparameters();
          alert("刪除失敗");
        }
      });
    },
  },

  created() {
    this.getDaigouparameters();
    // console.log(process.env.APIPATH);
  },
};
</script>
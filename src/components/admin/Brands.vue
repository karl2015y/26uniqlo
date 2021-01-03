<template>
  <div>
    <Loading :active.sync="isLoading"></Loading>
    <div class="text-right">
      <button
        class="btn btn-outline-primary mt-4"
        @click.prevent="openModal(true)"
      >
        建立新的品牌
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th class="text-nowrap">品牌分類</th>
          <th class="text-nowrap">品牌名稱</th>
          <th class="text-nowrap">品牌圖片</th>
          <th class="text-nowrap">品牌說明</th>
          <th class="text-nowrap">編輯</th>
          <th class="text-nowrap">刪除</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, key) in brands"
          :key="key"
          :class="{ 'text-secondary': !item.status === 'true' }"
        >
         <td>
            <ul>
              <li>{{ item.type }}</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>{{ item.name }}</li>
              <li v-if="item.status==0" class="text-danger">(未啟用)</li>
            </ul>
          </td>
       
          <td style="width:260px;"><img  :src="item.pic" v-if="item.pic" :alt="`品牌圖片${item.name}`" ></td>
      
          <td >
            <p style="white-space: pre-line;">
              {{ item.description }}
            </p>
          </td>
          <td>
            <button class="btn btn-primary btn-sm" @click="openModal(false, item)">
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

    <!-- <Pagination :compo-pages="pagination" @emitPages="getBrands"></Pagination> -->
    <!-- Bootstrap edit Modal -->
    <div
      class="modal fade"
      id="brandModel"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span v-if="isNew">新增產品</span>
              <span v-else>編輯產品</span>
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
              <div class="col-sm-4">
                <!-- <div class="form-group">
                  <label for="image">輸入圖片網址</label>
                  <input
                    type="text"
                    class="form-control"
                    id="image"
                    v-model="tempProduct.image"
                    placeholder="請輸入圖片連結"
                  />
                </div> -->
                <div class="form-group" v-if="!isNew">
                  <label for="customFile">
                    上傳圖片
                    <i
                      class="fas fa-spinner fa-spin"
                      v-if="status.fileUploading"
                    ></i>
                  </label>
                  <input
                    type="file"
                    id="customFile"
                    class="form-control"
                    ref="files"
                    @change="uploadFile()"
                  />
                </div>
                <img  v-if="!isNew && !isLoading" class="img-fluid" :src="focusBrand.pic" alt />
              </div>
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title">品牌名稱</label>
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    v-model="focusBrand.name"
                    placeholder="請輸入品牌名稱"
                  />
                </div>
    

                <div class="form-group">
                  <label for="description">品牌描述</label>
                  <textarea
                    rows="20"
                    type="text"
                    class="form-control"
                    id="description"
                    v-model="focusBrand.description"
                    placeholder="請輸入品牌描述"
                  ></textarea>
                </div>

                 <div class="form-group">
                  <div class="form-check">
                    <!-- 由1和0控制狀態, 當1時為true-value, 0則相反 -->
                    <input
                      id="statuscheckbox"
                      class="form-check-input"
                      type="checkbox"
                      v-model="focusBrand.status"
                      :true-value="1"
                      :false-value="0"
                    />
                    <label for="statuscheckbox" class="form-check-label">是否啟用</label>
                  </div>
                </div>
<hr>
                   <div class="form-group">
                  <div class="form-check">
                    <input v-model="focusBrand.type" class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="運動品牌" checked>
                    <label class="form-check-label" for="exampleRadios1">
                      運動品牌
                    </label>
                  </div>
                  <div class="form-check">
                    <input v-model="focusBrand.type" class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="網拍">
                    <label class="form-check-label" for="exampleRadios2">
                      網拍
                    </label>
                  </div>
           
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
              @click.prevent="updateBrand"
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
            真的要刪除：{{ focusBrand.name }}嗎？
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
              @click="deleteBrand()"
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
// import $ from "jquery";
import { getBrand, newBrand, updateBrand, deleteBrand, uploadIMG } from "@/api/brand";

export default {
  data() {
    return {
      isNew:true,
      brands: {},
      isLoading: false,
      focusBrand:{},
      status: {
        fileUploading: false,
      },
    };
  },

  methods: {
    getBrands() {
      const vm = this;
      vm.isLoading = true;
      getBrand().then((response) => {
        vm.brands = response.data;
        vm.isLoading = false;
      });
    },
    // 打開編輯視窗
    openModal(isNew, item) {
      const vm =this;
      console.log(isNew, item);
      if (isNew) {
        vm.focusBrand = {};
        vm.isNew = true;
      } else {
        vm.focusBrand = Object.assign({}, item);
        vm.isNew = false;
      }
      window.$("#brandModel").modal("show");
     
    },

    //更新產品
    updateBrand() {
      let vm = this;
      console.log(vm.isNew);
      if (!vm.isNew) {
        // 如果不是建立,則切換成更新
        updateBrand(vm.focusBrand).then((response) => {
          window.$("#brandModel").modal("hide");
          if (response.data.success) {
            vm.getBrands();
            alert("更新成功");

          } else {
            vm.getBrands();
            alert("更新失敗");
          }
        });
      } else {
        console.log("here 新產品");
        //新產品
        newBrand(vm.focusBrand).then((response) => {
          window.$("#brandModel").modal("hide");
          if (response.data.success) {
            vm.getBrands();
            alert("新增成功");
          } else {
            vm.getBrands();
             alert("新增失敗");
          }
        });
      }
    },
        //更新產品(目前有cors問題)
    uploadFile() {
      const uploadedFile = this.$refs.files.files[0];
      const vm = this;
      const formData = new FormData();
      formData.append("picfile", uploadedFile);
      vm.isLoading = true;
      uploadIMG(vm.focusBrand.id, formData).then((response) => {
         console.log(response);
          vm.isLoading = false;
          if (response.data.success) {
            console.log(response.data);
            vm.$set(vm.focusBrand, "pic", response.data.data.pic);
          }
      });

    },

    //打開刪除視窗
    openDelModal(item) {
      this.focusBrand = Object.assign({}, item);
      window.$("#deleteModal").modal("show");
    },
    //刪除產品
    deleteBrand() {
      const vm = this;
      deleteBrand(vm.focusBrand).then((response) => {
        if (response.data.success) {
          window.$("#deleteModal").modal("hide");
          vm.getBrands();
          alert("刪除成功");
          // this.$bus.$emit("message:push", response.data.message, "success");
        } else {
          window.$("#deleteModal").modal("hide");
          vm.getBrands();
          alert("刪除失敗");
        }
      });
    },

  },

  created() {
    this.getBrands();
    // console.log(process.env.APIPATH);
  },
};
</script>
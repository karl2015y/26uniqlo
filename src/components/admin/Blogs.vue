<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="text-right">
      <button
        class="btn btn-outline-primary mt-4"
        @click.prevent="openModal(true)"
      >
        建立新的文章
      </button>
    </div>
    <table class="table mt-4" style="font-size: 1rem">
      <thead>
        <tr>
          <th width="100">文章名稱</th>
          <th width="120">圖片</th>
          <th>文章內容</th>
          <th width="100">編輯</th>
          <th width="120">刪除</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in blogs" :key="item.id">
          <td>
            <ul>
              <li>{{ item.name }}</li>
              <li v-if="item.status == 0" class="text-danger">(未啟用)</li>
            </ul>
          </td>
          <td style="width: 260px">
            <img :src="item.bimg" v-if="item.bimg" :alt="`圖片${item.name}`" />
          </td>
          <td>
            <p style="white-space: pre-line">
              {{ item.description }}
            </p>
          </td>

          <td>
            <button
              class="btn btn-outline-primary"
              @click="openModal(false, item)"
            >
              編輯
            </button>
          </td>
          <td>
            <button class="btn btn-outline-danger" @click="openDelModal(item)">
              刪除
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination :compo-pages="pagination" @turn="getBlog"></Pagination>
    <!-- Bootstrap edit Modal -->
    <div
      class="modal fade"
      id="blogModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>新增文章</span>
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
                    v-model="tempBlog.image"
                    placeholder="請輸入圖片連結"
                  />
                </div> -->
                <div class="form-group" v-if="!isNew">
                  <label for="customFile">
                    上傳圖片
                    <i class="fas fa-spinner fa-spin"></i>
                  </label>
                  <input
                    type="file"
                    id="customFile"
                    class="form-control"
                    ref="files"
                    @change="uploadFile(tempBlog)"
                  />
                </div>
                <img class="img-fluid" :src="tempBlog.bimg" alt />
              </div>
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title">標題</label>
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    v-model="tempBlog.name"
                    placeholder="請輸入標題"
                  />
                </div>

                <hr />

                <div class="form-group">
                  <label for="description">文章描述</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="description"
                    v-model="tempBlog.description"
                    placeholder="請輸入文章描述"
                  ></textarea>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <!-- 由1和0控制狀態, 當1時為true-value, 0則相反 -->
                    <input
                      class="form-check-input"
                      type="checkbox"
                      v-model="tempBlog.status"
                      :true-value="1"
                      :false-value="0"
                    />
                    <label class="form-check-label">是否啟用</label>
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
              @click.prevent="updateBlog"
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
          <div class="modal-body">真的要刪除文章：{{ tempBlog.name }}嗎？</div>
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
              @click="deleteBlog()"
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
  getAllBlog,
  updateBlog,
  updateBlogImg,
  newBlog,
  deleteBlog,
} from "@/api/blog";

import Pagination from "../Pagination";
export default {
  data() {
    return {
      blogs: [],
      tempBlog: {},
      isNew: false, //判斷新增視窗還是修改視窗
      isLoading: false,
      pagination: {},
    };
  },
  components: {
    // ProductModal
    Pagination,
  },
  created() {
    this.getBlog();
  },
  methods: {
    getBlog(page = 1) {
      let vm = this;
      vm.isLoading = true;

      getAllBlog(page).then((response) => {
        vm.blogs = response.data.blog_list.data;
        vm.pagination = response.data.blog_list;
        vm.isLoading = false;
      });
    },
    // 打開編輯視窗
    openModal(isNew, item) {
      console.log(isNew, item);
      if (isNew) {
        this.tempBlog = {};
        this.isNew = true;
      } else {
        this.tempBlog = Object.assign({}, item);
        this.isNew = false;
      }
      window.$("#blogModal").modal("show");
    },
    //打開刪除視窗
    openDelModal(item) {
      this.tempBlog = Object.assign({}, item);
      window.$("#deleteModal").modal("show");
    },
    //更新文章
    updateBlog() {
      let vm = this;
      console.log(vm.isNew);
      if (!vm.isNew) {
        // 如果不是新文章,則切換成更新文章
        updateBlog(vm.tempBlog).then((response) => {
          window.$("#blogModal").modal("hide");
          if (response.data.success) {
            vm.getBlog();
          } else {
            vm.getBlog();
            console.log("更新失敗");
          }
        });
      } else {
        console.log("here 新文章");
        // 新文章
        newBlog(vm.tempBlog).then((response) => {
          window.$("#blogModal").modal("hide");
          if (response.data.success) {
            vm.getBlog();
          } else {
            vm.getBlog();
            console.log("新增失敗");
          }
        });
      }
    },
    //更新文章(目前有cors問題)
    uploadFile(tempBlog) {
      const uploadedFile = this.$refs.files.files[0];
      const vm = this;
      const formData = new FormData();
      formData.append("picfile", uploadedFile);
      vm.isLoading = true;
      updateBlogImg(tempBlog.id, formData).then((response) => {
        console.log(response);
        vm.isLoading = false;
        if (response.data.success) {
          console.log("uploadFile",response.data);
          vm.$set(vm.tempBlog, "bimg", response.data.data.bimg);
        }
      });
    },
    //刪除文章
    deleteBlog() {
      const vm = this;
      deleteBlog(vm.tempBlog.id).then((response) => {
        if (response.data.success) {
          window.$("#deleteModal").modal("hide");
          vm.getBlog();
          // this.$bus.$emit("message:push", response.data.message, "success");
        } else {
          window.$("#deleteModal").modal("hide");
          vm.getBlog();
          console.log("刪除失敗");
        }
      });
    },
  },
};
</script>

<style>
</style>
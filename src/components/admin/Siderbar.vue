<template>
  <div class="container-fluid">
    <div class="row">
      <nav class="col-md-2 d-none d-md-block bg-light sidebar">
        <div class="sidebar-sticky">
          <h6
            class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted a"
          >
            <span class>管理員</span>
            <span>
              <i class="fas fa-plus-square" data-name="管理員" style="cursor:pointer;"></i>
            </span>
          </h6>
          <ul class="nav flex-column a-nav">
            <li class="nav-item">
              <router-link to="/admin/products" class="nav-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-users"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                產品列表
                <span class="sr-only">(current)</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin/orders" class="nav-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-file"
                >
                  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                  <polyline points="13 2 13 9 20 9" />
                </svg>
                訂單列表
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin/brands" class="nav-link  d-flex">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512.013 512.013" height="24" width="24" style="enable-background:new 0 0 512.013 512.013; " xml:space="preserve">
                  <path d="M287.757,225.794l-31.808,8.352l-88.256,23.104c-31.168,7.712-58.432,17.984-84.704,8.992    c-35.712-15.424-35.072-55.552-8.448-98.24C27.469,206.85-57.235,331.074,57.325,343.618c14.592,1.92,40.576-3.2,68.8-15.072    l129.824-53.28l256.064-104.704L287.757,225.794z"/>
                </svg>
                品牌列表
              </router-link>
            </li>
          </ul>

        </div>
      </nav>
    </div>
  </div>
</template>

<script>
// import $ from "jquery";
export default {
  name:"asda",
  mounted() {
    let vm = this;
    window.$(".a i").click(vm.menuHandler);
  },
  methods: {
    menuHandler(type) {
      if (type.target.dataset.name === "管理員") {
        window.$(".a-nav")
          .stop()
          .slideToggle();
      } else {
        window.$(".b-nav")
          .stop()
          .slideToggle();
      }
    }
  }
};
</script>
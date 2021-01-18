<template>
  <header id="header" class="htc-header header--3 bg__white">
    <!-- Start Mainmenu Area -->
    <div id="sticky-header-with-topbar" class="mainmenu__area sticky__header">
      <div class="container">
        <div class="row">
          <div class="col-md-2 col-lg-2 col-6">
            <div class="logo">
              <a href="index.html">
                <img src="images/logo/uniqlo.png" alt="logo" />
              </a>
            </div>
          </div>
          <!-- Start MAinmenu Ares -->
          <div class="col-md-8 col-lg-8 d-none d-md-block">
            
        
          </div>
          <!-- End MAinmenu Ares -->
          <div class="col-md-2 col-lg-2 col-6">
            <ul class="d-flex h4">
            
          
            </ul>
          </div>
        </div>
        <div class="mobile-menu-area"></div>
      </div>
    </div>
    <!-- End Mainmenu Area -->
  </header>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.clear();
      location.reload();
    },
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
};
</script>

<style>
</style>
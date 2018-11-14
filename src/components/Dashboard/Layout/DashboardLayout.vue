<template>
  <div class="wrapper">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/admin/overview">
        <i class="nc-icon nc-chart-pie-35"></i>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/admin/user">
        <i class="nc-icon nc-circle-09"></i>
        <p>User Profile</p>
      </sidebar-link>

     
      <sidebar-link to="/admin/table-list">
        <i class="nc-icon nc-notes"></i>
        <p>Table list</p>
      </sidebar-link>
    
      <sidebar-link to="/admin/typography">
        <i class="nc-icon nc-paper-2"></i>
        <p>Typography</p>
      </sidebar-link>
       
      <sidebar-link to="/admin/icons">
        <i class="nc-icon nc-atom"></i>
        <p>Icons</p>
      </sidebar-link>
      <sidebar-link to="/admin/maps">
        <i class="nc-icon nc-pin-3"></i>
        <p>Maps</p>
      </sidebar-link>
      <sidebar-link to="/admin/notifications">
        <i class="nc-icon nc-bell-55"></i>
        <p>Notifications</p>
      </sidebar-link>

      <sidebar-link to="/admin/fill">
      <i class="nc-icon nc-notes"></i>
        <p>create purchase order</p>
      </sidebar-link>
        <!-- <sidebar-link to="profile">
        <i class="nc-icon nc-circle-09"></i>
        <p> purchase order</p>
      </sidebar-link> -->
         <sidebar-link to="/admin/details">
        <i class="nc-icon nc-notes"></i>
        <p>buyer applies loc</p>
      
      </sidebar-link>
       <sidebar-link to="/admin/form">
        <i class="nc-icon nc-notes"></i>
        <p>buyer's bank accept</p>
      
      </sidebar-link>
          <sidebar-link to="/admin/ship">
      <i class="nc-icon nc-notes"></i>
        <p>bill of lading and ship</p>
      </sidebar-link>

        <sidebar-link to="/admin/lading">
      <i class="nc-icon nc-notes"></i>
        <p>bill of lading</p>
      </sidebar-link>
      <!-- <sidebar-link to="/admin/typography">
        <i class="nc-icon nc-paper-2"></i>
        <p> buyer bnk acpt appli</p>
      </sidebar-link>
       <sidebar-link to="/admin/typography">
        <i class="nc-icon nc-paper-2"></i>
        <p>  bill of lading and ships </p>
      </sidebar-link>
       <sidebar-link to="/admin/typography">
        <i class="nc-icon nc-paper-2"></i>
        <p> seller’s bank  </p>
      </sidebar-link>
       <sidebar-link to="/admin/typography">
        <i class="nc-icon nc-paper-2"></i>
        <p>  buyer’s bank  </p>
      </sidebar-link>
       <sidebar-link to="/admin/typography">
        <i class="nc-icon nc-paper-2"></i>
        <p>   buyer pay their bank</p>
      </sidebar-link> -->
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  import MobileMenu from './MobileMenu.vue'
  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent,
      MobileMenu
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      }
    }
  }

</script>
<style>
.sidebar .sidebar-wrapper, body > .navbar-collapse .sidebar-wrapper {
    position: relative;
    max-height: calc(100vh - 75px);
    min-height: 100%;
    overflow: auto;
    width: 400px;
    z-index: 4;
    padding-bottom: 100px;
}

</style>

<template>
<div>
    <!-- Page Header -->
    <header class="masthead" style="background-image: url('img/home-bg.jpg')">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <h1>Clean Blog</h1>
              <span class="subheading">A Blog Theme by Start Bootstrap</span>
            </div>
          </div>
        </div>
      </div>
    </header>    
    <!-- Main Content -->
    <div class="container">
      
        <side-bar></side-bar>
        <stak-list></stak-list>
      
    </div>
</div>
</template>
<script>
import SideBar from '../navbar/SideBar'
import StakList from './StakList'

export default {
  components: {
    StakList,
    SideBar
  },
  data: () => ({
    drawer: null
  }),
  props: {
    source: String
  }
}
</script>

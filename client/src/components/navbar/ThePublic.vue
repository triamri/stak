<template>
  <div>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand" href="index.html">Stak Over</a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i class="fa fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Home Public' }">Home</router-link>
            </li>
            <li class="nav-item" v-if="isLogin">
              <router-link class="nav-link" :to="{ name: 'About' }">About</router-link>
            </li>
            <li class="nav-item" v-if="isLogin === false">
              <router-link class="nav-link" :to="{ name: 'Login' }">Login</router-link>
            </li>
            <li class="nav-item" v-if="isLogin === false">
              <router-link class="nav-link" :to="{ name: 'Register' }">Sign Up</router-link>
            </li>
            <li class="nav-item" v-if="isLogin">
              <a class="nav-link" @click="LogoutSistem">Log Out</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState([
      'isLogin'
    ])
  },
  methods: {
    ...mapActions([
      'cekLogin',
      'LogoutSistem'
    ])
  },
  created () {
    this.cekLogin()
  }
}
</script>


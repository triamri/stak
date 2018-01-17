<template>
  <div>    
    <!-- Main Content -->
    <!-- Page Header -->
    <header class="masthead" style="background-image: url('img/home-bg.jpg')">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
          </div>
        </div>
      </div>
    </header>    
    <!-- Main Content -->
    <div class="container">
      <div class="post-preview">
        <p class="post-meta">
          Register Data
        </p>
          <input type="text" class="form-control" v-model="formData.name" placeholder="Your Name">
          <br />
          <input type="text" class="form-control" v-model="formData.email" placeholder="Your Email">
          <br />
          <input type="password" class="form-control" v-model="formData.password" placeholder="Your Password">
          <br />
          <button type="button" class="btn btn-primary" @click="submitRegister(formData)">Login</button>
      </div>
      <hr>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      formData: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'submitRegister'
    ])
  }
}
</script>

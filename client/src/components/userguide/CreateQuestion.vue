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
          Post Question
        </p>
          <input type="text" class="form-control" v-model="formData.question" placeholder="New Question">
          <br />
          <textarea class="form-control" v-model="formData.desc" placeholder="Desc"></textarea>
          <br />
          <button type="button" class="btn btn-primary" @click="submitQuestion(formData)">Submit</button>
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
        question: '',
        desc: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'submitQuestion'
    ])
  }
}
</script>

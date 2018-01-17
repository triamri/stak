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
          Edit Question
        </p>
          <input type="text" class="form-control" v-model="stak.question" placeholder="New Question">
          <br />
          <textarea class="form-control" v-model="stak.desc" placeholder="Desc"></textarea>
          <br />
          <button type="button" class="btn btn-primary" @click="editQuestion(stak)">Submit</button>
      </div>
      <hr>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState([
      'stak'
    ])
  },
  methods: {
    ...mapActions([
      'getDetailStak',
      'submitEditQuestion'
    ]),
    editQuestion (question) {
      let payload = {
        id: question._id,
        question: question.question,
        desc: question.desc
      }
      this.submitEditQuestion(payload)
    }
  },
  created () {
    this.getDetailStak(this.$route.params.id)
  }
}
</script>

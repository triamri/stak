<template>
  <div>    
    <!-- Main Content -->
    <div class="container">
      <div class="btn-answer">
        <img src="https://cdn.sencha.com/img/20120920-forum-icon.png" class="img-question">
      </div>
      <div class="post-preview">
          <h3 class="post-subtitle">
            {{ answer.answer }}
          </h3>
        <p class="post-meta">Posted by
          <a href="#">{{ answer.userID.name }}</a>
          on September 24, 2017 <br />
        </p>
          <div class="btn-edit">
            <i class="fa fa-pencil-square-o cursor" aria-hidden="true" @click="direkEdit(answer._id)"></i> 
            <i class="fa fa-trash cursor" aria-hidden="true" style="margin-left:10px;" @click="removeQuestion(answer)"></i>
          </div>
      </div>
      <hr>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  props: ['answer'],
  computed: {
    ...mapState([
      'stak'
    ])
  },
  methods: {
    ...mapActions([
      'getDetailStak',
      'removeQuestion'
    ]),
    direkEdit (id) {
      this.$router.push({
        name: 'Edit Question',
        params: {
          id: id
        }
      })
    }
  }
}
</script>
<style>
.btn-answer {
  width:50px; 
  float:right; 
  position: relative; 
  margin-top: 15px;
}
.img-question {
  width: 90%;
}
.cursor {
  cursor: pointer;
}
</style>

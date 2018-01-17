<template>
  <div>    
    <!-- Main Content -->
    <div class="container">
      <div class="post-preview">
        <p class="post-meta">
          Post Answer
        </p>
          <textarea class="form-control" v-model="answer" @keyup.enter="sendAnswer"></textarea>
      </div>
      <hr>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  props: ['IdQuestion'],
  data () {
    return {
      answer: ''
    }
  },
  methods: {
    ...mapActions([
      'submitAnswer'
    ]),
    sendAnswer () {
      let payload = {
        idQuestion: this.IdQuestion,
        answer: this.answer
      }
      this.answer = ''
      this.submitAnswer(payload)
    }
  }
}
</script>

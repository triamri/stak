<template>
  <div>
    <div class="post-preview">
          <router-link :to="{ name: 'Question', params: { id: stak._id } }">
            <h2 class="post-title">
              {{ questionCut }}
            </h2>
            <h3 class="post-subtitle">
              {{ descCut }}
            </h3>
          </router-link>
          <p class="post-meta">Posted by
            <a href="#">{{ stak.userID.name }}</a>
            on September 24, 2017</p>
          <div class="btn-edit">
            <i class="fa fa-pencil-square-o cursor" aria-hidden="true" @click="direkEdit()"></i> 
            <i class="fa fa-trash cursor" aria-hidden="true" style="margin-left:10px;" @click="removeList(stak)"></i>
          </div>
        </div>
        <hr>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  props: ['stak'],
  computed: {
    descCut () {
      return this.stak.desc.slice(0, 50)
    },
    questionCut () {
      return this.stak.question.slice(0, 50)
    },
    direkEdit () {
      this.$router.push({
        name: 'Edit Question',
        params: {
          id: this.stak._id
        }
      })
    }
  },
  methods: {
    ...mapActions([
      'removeList'
    ])
  }
}
</script>
<style>
.cursor {
  cursor: pointer;
}
</style>

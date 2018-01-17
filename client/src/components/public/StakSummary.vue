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
        </div>
        <hr>
  </div>
</template>
<script>
export default {
  props: ['stak'],
  computed: {
    descCut () {
      return this.stak.desc.slice(0, 50)
    },
    questionCut () {
      return this.stak.question.slice(0, 50)
    }
  }
}
</script>

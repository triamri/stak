<template>
  <div class="col-lg-3" style="float:left;">
    <div class="list-group">
      <router-link :to="{ name: 'About' }" class="list-group-item">Questions</router-link>
      <router-link :to="{ name: 'Answers' }" class="list-group-item">Answers</router-link>
    </div>
  </div>
</template>
<script>
export default {
}
</script>

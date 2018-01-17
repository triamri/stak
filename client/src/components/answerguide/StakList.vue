<template>
  <div>
    <button type="button" class="btn btn-primary" @click="direkCreate">Add Question</button>
    <div class="col-lg-9 col-md-6" style="float:left;">
      <div class="col-lg-12 col-md-12">
        <stak-summary v-for="stak in getStak" :key="stak._id" :stak="stak"></stak-summary>
      </div>
    </div>
  </div>
</template>
<script>
import StakSummary from './StakSummary'
import { mapActions, mapState } from 'vuex'
export default {
  components: {
    StakSummary
  },
  computed: {
    ...mapState([
      'stakList'
    ]),
    getStak () {
      return this.stakList.filter(function (obj) {
        for (let index = 0; index < obj.answers.length; index++) {
          if (obj.answers[index].userID === '5a5ad75ec732a9211cb404f4') {
            return obj.answers[index].userID
          }
        }
      })
    }
  },
  methods: {
    ...mapActions([
      'getListAllUser'
    ]),
    direkCreate () {
      this.$router.push({
        name: 'Create'
      })
    }
  },
  created () {
    this.getListAllUser()
  }
}
</script>

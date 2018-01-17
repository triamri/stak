<template>
  <div>
    <button type="button" class="btn btn-primary" @click="direkCreate">Add Question</button>
    <div class="col-lg-9 col-md-6" style="float:left;">
      <div class="col-lg-12 col-md-12">
        <stak-summary v-for="stak in stakList" :key="stak._id" :stak="stak"></stak-summary>
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
    ])
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

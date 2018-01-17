<template>
  <div>
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
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
      'getListAll'
    ])
  },
  created () {
    this.getListAll()
  }
}
</script>

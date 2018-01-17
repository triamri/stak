<template>
  <div>
    <!-- Page Header -->
    <header class="masthead" style="background-image: url('img/home-bg.jpg')">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <h1>Clean Blog</h1>
              <span class="subheading">A Blog Theme by Start Bootstrap</span>
            </div>
          </div>
        </div>
      </div>
    </header>    
    <!-- Main Content -->
    <div class="container">
      <div class="btn-like">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Question_Circle.svg/2000px-Question_Circle.svg.png" class="img-question">
      </div>
      <div class="post-preview">
        
          <h2 class="post-title">
            {{ stak.question }}
          </h2>
          <h5 class="post-subtitle">
            {{ stak.desc }}
          </h5>
        
        <p class="post-meta">Posted by
          <a href="#">{{ stak.userID.name }}</a>
          on September 24, 2017 <br />
          <div class="btn-edit">
            <i class="fa fa-pencil-square-o" aria-hidden="true"></i> 
            <i class="fa fa-trash" aria-hidden="true" style="margin-left:10px;"></i>
          </div>
        </p>
      </div>
      <hr>
      <header class="masthead" style="margin-bottom:-10px;">
        <h3 class="post-subtitle">
          Answers
        </h3>
      </header>
      <answer-list v-for="answer in stak.answers" :key="answer._id" :answer="answer"></answer-list>
      <answer-post :IdQuestion="stak._id"></answer-post>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import AnswerList from './AnswerList'
import AnswerPost from './AnswerPost'

export default {
  components: {
    AnswerList,
    AnswerPost
  },
  computed: {
    ...mapState([
      'stak'
    ])
  },
  methods: {
    ...mapActions([
      'getDetailStak'
    ])
  },
  created () {
    this.getDetailStak(this.$route.params.id)
  }
}
</script>
<style>
.btn-like {
  width:50px; 
  float:right; 
  position: relative; 
  margin-top: 10px;
}
.img-question {
  width: 90%;
}
.btn-edit {
  margin-top:-40px;
  margin-right:10px;
  float:right;
  position:relative;
}
</style>

<template>
  <div class="error">
    <span class="aaa">404</span> <br /><br /><br /><br /><br /><br />
    <span class="bbb">点击<a @click="goHome" class="backhome">这里</a>回到首页 </span>
  </div>
</template>

<script>
  export default {
    name: 'NotFound',
    data() {
      return {

      };
    },
    methods: {
      goHome(){
        this.$router.push('/login');
      }
    }
  };
</script>

<style lang="scss">
  .error {
    text-align: center;
    margin-top: 25px;
    // height: 600px;
    width: 100%;
    height: 100%;
    position: absolute;
    background: url(../assets/404.png) center no-repeat;
    background-size: cover;
    background-attachment:fixed;
    .aaa {
      font-size: 250px;
      color: white;
      font-family: "方正舒体";
    }
    .bbb {
      font-size: 80px;
      color: white;
      font-family: "方正舒体";
      .backhome{
        text-decoration: underline;
        color: red;
      }
    }
  }
</style>

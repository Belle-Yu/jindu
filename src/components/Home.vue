<template>
  <div class="hello">
    <div>home</div>
    <el-button>hello</el-button>
    <el-button type="primary">hello</el-button>
    <el-button type="info">hello</el-button>
    <el-button type="danger">hello</el-button>
    <el-button type="success">hello</el-button>
    <el-tag>hahaha</el-tag>
    <i class="fa fa-users"></i>
    <i class="fa fa-user"></i>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.hello {
  background: yellow;
  .el-button {
    color: red;
  }
}
</style>

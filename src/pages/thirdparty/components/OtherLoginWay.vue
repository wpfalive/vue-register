<template>
  <div>
    <div class="other-title">其他登陆方式</div>
    <div class="other-content">
      <span class="iconfont wx-icon">&#xe608;</span>
      <span class="iconfont ali-icon">&#xe64e;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'otherLoginWay',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
  .other-title {
    color: #ccc;
  }
  .other-content {
    padding: .2rem 0;
    word-spacing: .2rem;
  }
  .other-content span {
    font-size: .8rem;
  }
</style>

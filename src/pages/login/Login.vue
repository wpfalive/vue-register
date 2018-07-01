<template>
  <div>
    <div class="login-header">
      <div class="iconfont back-icon">&#xe600;</div>
    </div>
    <login-header></login-header>
  </div>
</template>

<script>
import loginHeader from './components/Header'
export default {
  name: 'Login',
  components: {
    loginHeader
  },
  mounted () {
    // var obj = document.querySelector('.item')
    // var range = window.getSelection() // 创建range
    // range.selectAllChildren(obj) // range 选择obj下所有子内容
    // range.collapseToEnd() // 光标移至最后
    // console.log(obj)
  }
}
</script>

<style scoped>
  .login-header {
    line-height: 1rem;
  }
  .login-header .back-icon {
    font-size: .4rem;
    text-indent: .5rem;
  }
</style>

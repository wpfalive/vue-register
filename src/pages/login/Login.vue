<template>
  <div>
    <div class="login-header">
      <div class="iconfont back-icon">&#xe600;</div>
    </div>
    <login-header class="login-way"></login-header>
  </div>
</template>

<script>
import loginHeader from './components/Header'
export default {
  name: 'Login',
  components: {
    loginHeader
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
  .login-way {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    /* margin-left: auto;
    margin-right: auto; */
  }
</style>

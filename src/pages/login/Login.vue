<template>
  <div>
    <!-- <router-link to="/">
      <div class="login-header">
        <div class="iconfont back-icon">&#xe600;</div>
      </div>
    </router-link> -->
    <login-header class="login-way"></login-header>
    {{this.$store.state.phoneNo}}
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

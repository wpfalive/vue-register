<template>
  <div>
    <div class="login-title">输入密码</div>
    <div class="login-tip">当前手机号+86{{phone}}</div>
    <!-- todo 增加光标 -->
    <div class="login-auto-code">
      <div class="item" v-for="i in 4" :key="i" contenteditable="true">{{numbers[i-1]}}</div>
      <input v-model="numbers" maxlength="4" type="tel" autofocus="autofocus"/>
    </div>
    <div class="login-voice-code">
      <span class="login-voice-code-left">找回密码</span>
      <!-- <router-link to="/faq">
        <span class="login-voice-code-right">重新发送(21)</span>
      </router-link> -->
    </div>
    <div class="login-submit">
      <button class="login-btn-submit">下一步</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LoginPassword',
  data () {
    return {
      phone: '18158176356',
      numbers: ''
    }
  }
}
</script>
<style scoped>
  .login-title {
    margin: .5rem .6rem 0;
    font-size: .45rem;
  }
  .login-tip {
    margin: .2rem .6rem 0;
    color: #ccc;
  }
  .login-auto-code {
    position: relative;
    margin: auto;
    height: 80px;
    width: 300px;
    display: flex;
  }
  .item {
    flex-basis: 25%;
    font-size: 40px;
    text-align: center;
    line-height: 80px;
    margin-right: 10px;
    border-bottom: 1px solid #ccc;
  }
  .login-auto-code input {
    position: absolute;
    height: 80px;
    opacity: 0;
    left: 0;
    width: 300px;
    caret-color: #f85d43;
  }
  .login-voice-code {
    margin: .3rem .6rem;
    display: flex;
    justify-content: space-between;
  }
  .login-voice-code .login-voice-code-left {
    color: #f85d43;
  }
  .login-voice-code .login-voice-code-right {
    color: #ccc;
  }
  .login-submit {
    display: flex;
    justify-content: center;
    padding: 0 .6rem;
    margin-top: 2rem;
  }
  .login-btn-submit {
    width: 100%;
    line-height: .6rem;
    border-radius: .4rem;
    background: #f85d43;
    color: #fff;
  }
</style>

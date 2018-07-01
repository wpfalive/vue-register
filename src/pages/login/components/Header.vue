<template>
  <div>
    <router-link to="/">
      <div class="login-header">
        <div class="iconfont back-icon">&#xe600;</div>
      </div>
    </router-link>
    <ul class="header-nav" @click="headerNavClick">
      <li id="authcode" :class="{ active: isActive}">验证码登陆</li>
      <li id="password" :class="{ active: !isActive}">密码登陆</li>
    </ul>
    <component
      :is="currentTabComponent"
      class="tab"
    ></component>
  </div>
</template>
<script>
import LoginPassword from './Password'
import LoginAuthcode from './Authcode'
export default {
  name: 'LoginHeader',
  data () {
    return {
      isActive: true,
      currentTab: 'Authcode'
    }
  },
  computed: {
    currentTabComponent () {
      return 'Login' + this.currentTab
    }
  },
  methods: {
    headerNavClick (e) {
      const isAuthcode = e.target.id === 'authcode'
      this.isActive = isAuthcode
      this.currentTab = isAuthcode ? 'Authcode' : 'Password'
    }
  },
  components: {
    LoginPassword,
    LoginAuthcode
  }
}
</script>
<style>
  .login-header .back-icon {
    line-height: 1rem;
    font-size: .4rem;
    text-indent: .5rem;
  }
  .header-nav {
    display: flex;
    list-style: none;
    justify-content: center;
    width: 100%;
  }
  .header-nav li {
    position: relative;
    padding: 20px;
    color: #000;
    line-height: 1;
    cursor: pointer;
    transition: left 0.2s linear, width .2s linear;
  }
  li::before {
    content: "";
    position: absolute;
    top: 0;
    left: 100%;
    width: 0;
    height: 100%;
    border-bottom: 2px solid #000;
    transition: left .2s linear, width .2s linear;
  }
  /* li:hover::before {
    width: 100%;
    top: 0;
    left: 0;
    xtransition-delay: .1s;
    border-bottom-color: #000;
    xtransition: left .2s linear, width .2s linear;
  }
  li:hover ~ li::before {
    left: 0;
    transition: left .2s linear, width .2s linear;
  }
  li:active {
    xbackground: #000;
    xcolor: #fff;
  } */
  .active ~ li::before {
    left: 0;
  }
  .active::before {
    width: 100%;
    left: 0;
    top: 0;
  }
</style>

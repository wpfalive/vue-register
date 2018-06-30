<template>
  <div class="phone">
    <div class="phone-header">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="phone-title">输入手机号</div>
    <div class="phone-content">
      <router-link to="/city" class="phone-areacode">
        <span>{{this.areacode}}</span>
        <span class="iconfont right-icon">></span>
      </router-link>
      <input type="text" v-model="num" class="phone-input">
    </div>
    <div class="split"></div>
    <div class="phone-protocol">
      <span class="phone-protocol-left">继续表示您同意《乐刻服务协议》</span>
      <router-link to="/faq">
        <span class="phone-protocol-right">遇到问题?</span>
      </router-link>
    </div>
    <div class="phone-next">
      <button class="phone-btn-next">下一步</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'phone',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      areacode: '+86'
    }
  }
}
</script>

<style scoped>
  .phone-header {
    width: .8rem;
    line-height: 1rem;
    overflow: hidden;
  }
  .phone-header .back-icon {
    float: left;
    font-size: .4rem;
    text-align: center;
    text-indent: .4rem;
  }
  .phone-title {
    margin: .5rem .6rem;
    font-size: .45rem;
    font-weight: 300;
  }
  .phone-content {
    margin-left: .6rem;
    line-height: .4rem;
    font-size: .3rem;
    vertical-align: bottom;
  }
  .phone-areacode {
    border: .02rem solid #fff;
  }
  .phone-input {
    margin-left: .2rem;
    caret-color: #f85d43;
    width: 6rem;
    background: silver;
  }
  .split {
    margin: .3rem .6rem;
    border-bottom: .02rem solid #f0f0f0;
  }
  .phone-protocol {
    margin: .3rem .6rem;
    display: flex;
    justify-content: space-between;
  }
  .phone-protocol .phone-protocol-left {
    color: #ccc;
  }
  .phone-protocol .phone-protocol-right {
    color: gray;
  }
  .phone-next {
    display: flex;
    justify-content: center;
  }
  .phone-btn-next {
    width: 7rem;
    line-height: .6rem;
    border-radius: .4rem;
    background: #f85d43;
    color: #fff;
  }
</style>

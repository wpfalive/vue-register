<template>
  <div class="phone">
    <div class="phone-header">
      <div class="iconfont back-icon">&#xe600;</div>
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
    <other-way class="phone-other-way"></other-way>
  </div>
</template>

<script>
import otherWay from './components/OtherLoginWay'
export default {
  name: 'phone',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      areacode: '+86'
    }
  },
  components: {
    otherWay
  }
}
</script>

<style scoped>
  .phone-header {
    line-height: 1rem;
  }
  .phone-header .back-icon {
    font-size: .4rem;
    text-indent: .5rem;
  }
  .phone-title {
    margin: .5rem .6rem;
    font-size: .45rem;
  }
  .phone-content {
    display: flex;
    margin-left: .6rem;
    line-height: .4rem;
    font-size: .3rem;
    vertical-align: bottom;
  }
  .phone-areacode {
    border: .02rem solid #ccc;
  }
  .phone-input {
    flex-grow: 1;
    margin-left: .2rem;
    margin-right: .6rem;
    caret-color: #f85d43;
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
    padding: 0 .6rem;
  }
  .phone-btn-next {
    width: 100%;
    line-height: .6rem;
    border-radius: .4rem;
    background: #f85d43;
    color: #fff;
  }
  .phone-other-way {
    margin-top: .8rem;
    margin-left: .6rem;
  }
</style>

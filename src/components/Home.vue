<template>
  <div class="middle" :style="backgroundDiv">
    <Navbar/>
    <div class="content">
        <div class="container">
            <div class="row my-3">
                <div class="col-12 home-title">運輸安全評量平台</div>
            </div>
            <div class="row">
                <div class="col-12 home-subtitle">提供查詢各類運輸業公司之運輸安全評量分數</div>
            </div>
            <div class="row my-4">
                <div class="col-12 txt-align">
                    <b-button class="enter-btn" variant="light">
                        <div class="">查詢分數</div>
                    </b-button>
                </div>
            </div>
            <div class="row my-4">
                <div class="col-12 txt-align">
                    <router-link class="login-link" :to="{ name:'login'}">我是從業人員，我要登入</router-link>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar'
export default {
  components:{
    Navbar
  },
  name:'',
  data() {
    return {
        backgroundDiv: {
            backgroundImage: 'url(' + require('@/assets/L_homebg_user.png') + ')'
        }
    }
  }
}
</script>

<style scoped>
.middle {
    margin-top: 0;
    height: 100vh;
    /* width: 100vh; */
    background: no-repeat center top;
    background-size: cover;
}
.home-title{
    font-weight: bold;
    font-size: 3rem;
    text-align: left;
    color: white;
}
.home-subtitle{
    text-align: left;
    font-size: 1rem;
}
.enter-btn{
    background-color: black;
    color: white;
    border-radius: 1.5rem;
    /* margin-top: 5rem; */
}
.login-link{
    color: white;
}
.txt-align{
    text-align: left;    
}
</style>
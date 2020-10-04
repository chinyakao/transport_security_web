<template>
    <div class="middle" :style="backgroundDiv">
        <Navbar/>
        <div class="content">
            <div class="container">
                <div class="row">
                    <div class="col-9">
                        <div class="login-title">運輸安全評量平台</div>
                        <div class="login-subtitle">提供政府方查詢與輸入各類運輸業公司之運輸安全評量分數</div>
                    </div>
                    <div class="col-3" style="text-algin: center;">
                        <div>
                        <b-tabs content-class="mt-3" style="color: #34DCA2" justified>
                            <b-tab title="登入" active>
                                <b-form @submit="onLoginSubmit">
                                    <b-form-group
                                        class="mt-3"
                                        id="input-group-1"
                                        label=""
                                        label-for="input-1"
                                        description=""
                                    >
                                        <b-form-input
                                            id="input-1"
                                            v-model="form1.email"
                                            type="email"
                                            required
                                            placeholder="姓名"
                                        ></b-form-input>
                                    </b-form-group>
                        
                                    <b-form-group
                                        class="mt-3"
                                        id="input-group-2" 
                                        label="" 
                                        label-for="input-2"
                                    >
                                        <b-form-input
                                            id="input-2"
                                            v-model="form1.name"
                                            required
                                            placeholder="編號"
                                        ></b-form-input>
                                    </b-form-group>
                        
                                    <b-button class="submit-btn w-50 mt-4 mb-2" size="sm" type="submit" variant="light">登入</b-button>
                                </b-form>
                            </b-tab>
                            <b-tab title="註冊">
                                <b-form @submit="onRegisterSubmit">
                                <b-form-group
                                    class="mt-3"
                                    id="input-group-3"
                                    label=""
                                    label-for="input-3"
                                    description=""
                                >
                                    <b-form-input
                                        id="input-3"
                                        v-model="form.username"
                                        type="text"
                                        required
                                        placeholder="姓名"
                                    ></b-form-input>
                                </b-form-group>
                    
                                <b-form-group
                                    class="mt-3"
                                    id="input-group-4" 
                                    label="" 
                                    label-for="input-4"
                                >
                                    <b-form-input
                                        id="input-4"
                                        v-model="form.password"
                                        type="password"
                                        required
                                        placeholder="編號"
                                    ></b-form-input>
                                </b-form-group>
                    
                                <div class="error">{{ error }}</div>
                    
                                <b-button class="submit-btn w-50 mt-4 mb-2" size="sm" type="submit" variant="light">註冊</b-button>
                            </b-form>
                            
                        
                            </b-tab>
                        </b-tabs>
                        <b-link class="forget-link" href="#foo">忘記編號?</b-link>
                        </div>
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
  data() {
    return {
        backgroundDiv: {
            backgroundImage: 'url(' + require('@/assets/L_homebg_gov.png') + ')'
        },
        activeName: 'first',
        form: {
          username: '',
          password: '',  
        },
        error: null,
        //Login
        form1: {
          email: '',
          name: '',
        },
        show: true
    }
  },
}
</script>

<style scoped>
.btn{
    border-radius: 1.5rem;
    border-color: transparent;
}
.middle {
    margin-top: 0;
    height: 100vh;
    /* width: 100vh; */
    background: no-repeat center top;
    background-size: cover;
}
.login-title{
    font-weight: bold;
    font-size: 3rem;
    text-align: left;
    color: white;
}
.login-subtitle{
    text-align: left;
    font-size: 1rem;
}
.submit-btn{
    color: white;
    background-color: #34DCA2;
}
.forget-link{
    color: darkgray;
    font-size: 0.75rem;
}
.error{
  text-align: left;
  color:red;
  font-size: .75rem;
}
</style>
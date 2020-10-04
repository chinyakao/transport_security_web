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
                        <b-tabs v-model="tabIndex" content-class="mt-3" justified>
                            <b-tab title="登入" :title-link-class="linkClass(0)">
                                <b-form @submit="onLoginSubmit">
                                    <b-form-group
                                        class="mt-3"
                                        id="input-group-1"
                                        label-for="input-1"
                                        :invalid-feedback="invalidFeedback1"
                                        :valid-feedback="validFeedback1"
                                        :state="state1"
                                    >
                                        <b-form-input
                                            id="input-1"
                                            v-model="form_login.email"
                                            type="email"
                                            required
                                            placeholder="帳號"
                                        ></b-form-input>
                                    </b-form-group>
                        
                                    <b-form-group
                                        class="mt-3"
                                        id="input-group-2" 
                                        label-for="input-2"
                                        :invalid-feedback="invalidFeedback2"
                                        :valid-feedback="validFeedback2"
                                        :state="state2"
                                    >
                                        <b-form-input
                                            id="input-2"
                                            v-model="form_login.pwd"
                                            type="password"
                                            required
                                            placeholder="密碼"
                                        ></b-form-input>
                                    </b-form-group>
                                    <div class="error text-danger">{{ error }}</div>
                                    <b-button class="submit-btn w-50 mt-4 mb-2" size="sm" type="submit" variant="light">登入</b-button>
                                </b-form>
                            </b-tab>
                            <b-tab title="註冊" :title-link-class="linkClass(1)">
                                <b-form @submit="onRegisterSubmit">
                                <b-form-group
                                    class="mt-3"
                                    id="input-group-3"
                                    label=""
                                    label-for="input-3"
                                    description=""
                                    :invalid-feedback="invalidFeedback3"
                                    :valid-feedback="validFeedback3"
                                    :state="state3"
                                >
                                    <b-form-input
                                        id="input-3"
                                        v-model="form_register.email"
                                        type="email"
                                        required
                                        placeholder="帳號"
                                    ></b-form-input>
                                </b-form-group>
                    
                                <b-form-group
                                    class="mt-3"
                                    id="input-group-4" 
                                    label="" 
                                    label-for="input-4"
                                    :invalid-feedback="invalidFeedback4"
                                    :valid-feedback="validFeedback4"
                                    :state="state4"
                                >
                                    <b-form-input
                                        id="input-4"
                                        v-model="form_register.pwd"
                                        type="password"
                                        required
                                        placeholder="密碼"
                                    ></b-form-input>
                                </b-form-group>
                                <div class="error text-danger">{{ error }}</div>
                                <b-button class="submit-btn w-50 mt-4 mb-2" size="sm" type="submit" variant="light">註冊</b-button>
                            </b-form>
                            
                        
                            </b-tab>
                        </b-tabs>
                        <b-link class="forget-link" href="#foo">忘記密碼?</b-link>
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
        tabIndex: 0,
        backgroundDiv: {
            backgroundImage: 'url(' + require('@/assets/L_homebg_gov.png') + ')'
        },
        form_login: {
          email: '',
          pwd: '',
        },
        form_register: {
          email: '',
          pwd: '', 
        },
        validUserData: [
            {email: 'adminadmin@gmail.com', pwd: 'adminadmin'},
            {email: 'rileykao@gmail.com', pwd: '1234567890'},
            {email: 'thetestemail@gmail.com', pwd: 'testemail'},
        ],
        error: '',

    }
  },
  methods: {
      onRegisterSubmit(evt){
        evt.preventDefault()
        alert(JSON.stringify(this.form_register))
      },
      onLoginSubmit(evt){
        evt.preventDefault()
        let userData = this.validUserData
        let emailValid = false
        let userDataIndex = -1
        for(var i=0; i < userData.length; i++){
           if(this.form_login.email == userData[i].email) {
               emailValid = true
               userDataIndex = i
           }
        }
        
        if(emailValid){
            if(this.form_login.pwd == userData[userDataIndex].pwd){
                this.error = ''
                alert("登入成功!")
            }else{
                this.error = '密碼錯誤'
            }
        }else{
            this.error = '此信箱沒有註冊'
        }

      },
      linkClass(idx) {
        if (this.tabIndex === idx) {
          return 
        } else {
          return ['text-info']
        }
      }
  },
  computed: {
      state1() {
        return this.form_login.email.indexOf("@") !== -1 ? true : false
      },
      invalidFeedback1() {  
        if (this.form_login.email.indexOf("@") !== -1) {
          return ''
        } else if (this.form_login.email.length === 0) {
            return ''
        } else if (this.form_login.email.indexOf("@") === -1) {
          return 'Enter the email address'
        }else{
            return ''
        }
      },
      validFeedback1() {
        return this.form_login.email.indexOf("@") !== -1 ? '' : ''
      },
      state2() {
        return this.form_login.pwd.length >= 8 ? true : false
      },
      invalidFeedback2() {  
        if (this.form_login.pwd.length > 8) {
          return ''
        } else if (this.form_login.pwd.length > 0) {
          return 'Enter at least 8 characters'
        }else{
            return ''
        }
      },
      validFeedback2() {
        return this.state === true ? '' : ''
      },
      state3() {
        return this.form_register.email.indexOf("@") !== -1 ? true : false
      },
      invalidFeedback3() {  
        if (this.form_register.email.indexOf("@") !== -1) {
          return ''
        } else if (this.form_register.email.length === 0) {
            return ''
        } else if (this.form_register.email.indexOf("@") === -1) {
          return 'Enter the email address'
        }else{
            return ''
        }
      },
      validFeedback3() {
        return this.state === true ? '' : ''
      },
      state4() {
        return this.form_register.pwd.length >= 8 ? true : false
      },
      invalidFeedback4() {  
        if (this.form_register.pwd.length > 8) {
          return ''
        } else if (this.form_register.pwd.length > 0) {
          return 'Enter at least 8 characters'
        }else{
            return ''
        }
      },
      validFeedback4() {
        return this.state === true ? '' : ''
      }
  }
}
</script>

<style scoped>
.tab-color{
    color: #34DCA2;
}
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
  /* text-align: left; */
  font-size: .75rem;
}
</style>
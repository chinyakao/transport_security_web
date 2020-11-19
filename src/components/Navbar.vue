<template>
  <div>
      <b-navbar class="fixed-top backgroudcolor" toggleable="lg" type="light" variant="">
          <b-navbar-brand @click="toHome">
            <font-awesome-icon class="brand-icon" icon="truck" />
            運輸安全評量平台
          </b-navbar-brand>

          <b-collapse id="nav-collapse" is-nav>
              <span class="abs-center-x title">{{title}}</span>

              <b-navbar-nav class="ml-auto">
                  <b-button v-if="!isAuth" @click="toFeedback" variant="light" size="sm">
                      <font-awesome-icon icon="envelope" />
                      意見回饋
                  </b-button>
                  <b-button v-if="!isAuth" @click="toCompanylist" variant="light" size="sm">
                      <font-awesome-icon icon="search" />
                      查詢分數
                  </b-button>
                  <b-button v-if="isAuth" @click="toDashboard" class="recordBtn" variant="light" size="sm">
                      <font-awesome-icon icon="home" />
                      回到主頁
                  </b-button>
                  <b-button v-if="isAuth" @click="toLogout" class="recordBtn" variant="light" size="sm">
                      <font-awesome-icon icon="sign-out-alt" />
                      登出
                  </b-button>
                  <b-button v-else class="recordBtn" @click="toLogin" variant="light" size="sm">
                      <font-awesome-icon icon="sign-in-alt" />
                      登入
                  </b-button>
              </b-navbar-nav>
          </b-collapse>
      </b-navbar>
  </div>
</template>
<script>
export default {
    props: ['title'],
    computed: {
        isAuth(){
            return this.$store.state.isAuthenticated
        },
        loginID(){
            return this.$store.state.loginID
        }
    },
    methods: {
        toLogout(){
            let path =`/`
            if (this.$route.path !== path) this.$router.push(path)
            this.$store.commit('UPDATEAUTH', false)
            this.$store.commit('UPDATELOGINID', '')

        },
        toLogin(){
            let path =`/login`
            if (this.$route.path !== path) this.$router.push(path)
            // if (this.route.path !== path) this.$route.push(path)
      },
    //   要定義一下login後的page
        toHome(){
            // console.log(this.$route)
            if(this.isAuth){
                if(this.loginID == 'adminadmin@gmail.com'){
                    let path = `/dashboard-gov`
                    this.$router.push(path)
                }else{
                    let path = `/dashboard-com`
                    this.$router.push(path)
                }
            }else{
                let path = `/`
                if (this.$route.path !== path) this.$router.push(path)
            }
        },
        toDashboard(){
            if(this.loginID == 'adminadmin@gmail.com'){
                let path = `/dashboard-gov`
                this.$router.push(path)
            }else{
                let path = `/dashboard-com`
                this.$router.push(path)
            }
        },
        toFeedback(){
            let path = `/feedback`
            if (this.$route.path !== path) this.$router.push(path)
        },
        toCompanylist(){
            let path = `/companylist`
            if (this.$route.path !== path) this.$router.push(path)
        }
    }
}
</script>

<style scoped>
.backgroudcolor{
    background-color: #34DCA2;
}
.brand-icon{
    transform: scaleX(-1);
}
.btn{
    border-radius: 1.5rem;
    border-color: transparent;
    background-color: transparent;
    color: black;
}
.title{
    color: white;
}
</style>
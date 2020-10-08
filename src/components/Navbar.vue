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
                  <b-button href="http://localhost:8080/#/feedback" variant="light" size="sm">
                      <font-awesome-icon icon="envelope" />
                      意見回饋
                  </b-button>
                  <b-button class="recordBtn" href="#" variant="light" size="sm">
                      <font-awesome-icon icon="pen" />
                      填寫紀錄
                  </b-button>
                  <!-- <b-button v-if="loginOrNot" class="recordBtn" href="http://localhost:8080/#/login" variant="light" size="sm">
                      <font-awesome-icon icon="sign-out-alt" />
                      登出
                  </b-button> -->
                  <b-button class="recordBtn" @click="toLogin" variant="light" size="sm">
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
    methods: {
        toLogin(){
            let path =`/login`
            if (this.$route.path !== path) this.$router.push(path)
            // if (this.route.path !== path) this.$route.push(path)
      },
    //   要定義一下login後的page
        toHome(){
            // console.log(this.$route)
            let path = `/`
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
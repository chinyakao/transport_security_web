<template>
  <div>
      <Navbar/>
      <div class="feedback-content">
          <div class="container">
              <div class="row my-4">
                  <div class="col feedback-title">意見回饋</div>
              </div>
              <div class="row my-4">
                  <div class="col-2"></div>   
                  <div class="col-4">
                      <b-form @submit="onSubmit" v-if="show">
                          <b-form-group
                            id="input-group-1"
                            label=""
                            label-for="input-1"
                            description=""
                          >
                            <b-form-input
                              id="input-1"
                              v-model="form.email"
                              type="email"
                              required
                              placeholder="您的email"
                            ></b-form-input>
                          </b-form-group>

                          <b-form-group id="input-group-2" label="" label-for="input-2">
                              <b-form-textarea
                                  id="textarea-auto-height"
                                  placeholder="在這裡寫下您的問題或建議"
                                  rows="5"
                                  v-model="form.advise"
                              ></b-form-textarea>
                          </b-form-group>
                          <b-button 
                            class="submit-btn w-25" 
                            size="sm" 
                            type="submit" 
                            variant="light"
                            >送出</b-button>
                        </b-form>
                  </div> 
                  <div class="col-4 feedback-subcontent">
                      <div class="my-4">
                          <div>您好！</div>
                          <div>我們是製作此平台的團隊，致力為您提供最好的使用體驗。</div>
                          <div>如果您在使用上有任何問題與建議，歡迎寫下來供我們了解！</div>
                      </div>
                      <div class="my-4">
                          <div class="feedback-email">example@email.com</div>
                          <div>002-010-66269735</div>
                      </div>
                  </div>
                  <div class="col-2"></div>   
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
        form: {
          email: '',
          advise: '',
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      }
    },
}
</script>

<style scoped>
.navbar{
    background-color: #34DCA2;
}
.feedback-content{
    padding-top: 3rem;
}
.feedback-subcontent{
    font-size: .8rem;
}
.feedback-title{
    font-weight: 500;
    font-size: 3rem;
    color: #34DCA2;
}
.form-control{
    border-color: #34DCA2;
}
.submit-btn{
    color: white;
    background-color: #34DCA2;
}
.feedback-subcontent{
    text-align: left;
}
.feedback-email{

}
</style>
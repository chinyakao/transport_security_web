<template>
  <div>
    <Navbar :title="'政府人員主頁'"></Navbar>
    <div class="sub-content">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <b-button @click="toCompanylist" class="main-btn" variant="light">
                        <font-awesome-icon class="main-btn-icon" icon="search" />
                        <div class="main-btn-title">查詢分數</div>
                        <div class="main-btn-subtitle">查詢各運輸公司之安全評量分數</div>
                    </b-button>
                    <b-button @click="toInputform" class="main-btn" variant="light">
                        <font-awesome-icon class="main-btn-icon" icon="pen" />
                        <div class="main-btn-title">輸入訪視分數</div>
                        <div class="main-btn-subtitle">選擇公司並輸入訪視後得到之分數</div>
                    </b-button>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <b-button @click="toImportdata" class="main-btn" variant="light">
                        <font-awesome-icon class="main-btn-icon" icon="file-import" />
                        <div class="main-btn-title">匯入資料</div>
                        <div class="main-btn-subtitle">匯入歷史資料與主動蒐集資料</div>
                    </b-button>
                    <b-button @click="toFeedback" class="main-btn" variant="light">
                        <font-awesome-icon class="main-btn-icon" icon="envelope" />
                        <div class="main-btn-title">意見回饋</div>
                        <div class="main-btn-subtitle">歡迎給予團隊任何回覆</div>
                    </b-button>
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
  methods:{
    toCompanylist(){
        let path = `/companylist`
        if (this.$route.path !== path) this.$router.push(path)
    },
    toInputform(){
        let path = `/`
        if (this.$route.path !== path) this.$router.push(path)
    },
    toImportdata(){
        let path = `/importdata`
        if (this.$route.path !== path) this.$router.push(path)
    },
    toFeedback(){
        let path = `/feedback`
        if (this.$route.path !== path) this.$router.push(path)
    }
  }
}
</script>

<style scoped>
.sub-content{ 
  padding-top: 4rem;
}
.btn{
    border-radius: 1.5rem;
    border-color: transparent;
    background-color: transparent;
}
.main-btn{
    border-radius: 1.5rem;
    border-color: #34DCA2;
    margin: 1rem;
    width: 15rem;
    height: 15rem;
}
.main-btn-icon{
    color: #34DCA2;
    font-size: 5rem;
}  
.main-btn-title{
    font-size: 1.5rem;
    font-weight: bold;
}
.main-btn-subtitle{
    color: gray;
    font-size: 0.75rem;
}
/* .import-data-btn{
    border-bottom-color: #34DCA2;
}
.import-data-title{
    text-decoration: underline;
} */
</style>
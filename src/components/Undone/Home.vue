<template>
  <div>
    <Navbar/>
    <b-navbar class="nav-filter" toggleable="lg" type="light" variant="">
        <!-- <b-navbar-toggle target="nav-collapse"></b-navbar-toggle> -->
    
        <b-collapse id="nav-collapse" is-nav>
            <b-button href="#" variant="light" size="sm">
                <font-awesome-icon icon="chevron-left" />
                回上一頁
            </b-button>        
            <!-- Right aligned nav items -->
        </b-collapse>
    </b-navbar>
    <div class="content">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <b-button class="main-btn" variant="light">
                        <font-awesome-icon class="main-btn-icon" icon="search" />
                        <div class="main-btn-title">查詢分數</div>
                        <div class="main-btn-subtitle">查詢各運輸公司之安全評量分數</div>
                    </b-button>
                    <b-button class="main-btn" variant="light">
                        <font-awesome-icon class="main-btn-icon" icon="pen" />
                        <div class="main-btn-title">輸入訪視分數</div>
                        <div class="main-btn-subtitle">選擇公司並輸入訪視後得到之分數</div>
                    </b-button>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <b-button class="import-data-btn" variant="light">
                        <div class="import-data-title">匯入歷史資料與主動蒐集資料</div>
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
    name:'govhome'
}
</script>

<style scoped>
.navbar{
    background-color: transparent;
    position: fixed;
    top: 3.5rem;
    right: 0;
    left: 0;
    height: 2.5rem;
    z-index: 1030;
  }
.main-btn{
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
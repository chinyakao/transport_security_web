<template>
  <div>
      <Navbar :title="'填寫紀錄'"></Navbar>
      <b-navbar class="navbar-2" toggleable="lg" type="light" variant="">
      <!-- <b-navbar-toggle target="nav-collapse"></b-navbar-toggle> -->
          <b-collapse id="nav-collapse" is-nav>
              <b-button href="#" variant="" size="sm">
              <font-awesome-icon icon="chevron-left" />
              回上一頁
              </b-button>

              <span class="abs-center-x mt-4">
                  <!-- <div style="color: #34DCA2;">-</div> -->
                  <el-tabs v-model="activeName" @tab-click="handleClick">
                      <el-tab-pane label="已完成分數輸入" name="first">
                          done
                      </el-tab-pane>
                      <el-tab-pane label="尚未輸入分數" name="second">
                          undone
                      </el-tab-pane>
                      <el-tab-pane label="已儲存但未送出" name="third">
                          unsubmit
                      </el-tab-pane>
                    </el-tabs>
                  <!-- <router-link :to="{ name:'record-done' }">已完成輸入</router-link> 
                  <router-link :to="{name: 'record-undo' }">尚未輸入</router-link> 
                  <router-link :to="{name: 'record-unsubmit' }">儲存未送出</router-link> -->
              </span>
              
              <!-- Right aligned nav items -->
              <b-navbar-nav class="ml-auto">
              </b-navbar-nav>
          </b-collapse>
      </b-navbar>

      <div class="content">
          <div class="container">
              <router-view></router-view>
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
        activeName: 'first',
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  }
}
</script>

<style scoped>
.el-tabs__item{
  font-size: .9rem !important;
  color: darkgray !important;
}
.el-tabs__item.is-active {
  color: black !important;
}
.el-tabs__item:hover {
  color: black !important;
}
.el-tabs__active-bar {
  background-color: black !important;
}

.el-tabs__nav-wrap::after {
  background-color:transparent !important;
}
.navbar{
  background-color: #34DCA2 !important;
}
.navbar-2{
  background-color: #34DCA2;
  position: fixed;
  top: 3.5rem;
  right: 0;
  left: 0;
  height: 2.5rem;
  z-index: 1030;
}
.search-input{
  border-radius: 1.5rem;
}
.content{ 
  padding-top: 6rem;
}
.btn{
  border-radius: 1.5rem;
  border-color: transparent;
  background-color: transparent;
  color: black;
}

.abs-center-x {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>
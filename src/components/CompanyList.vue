<template>
  <div>
    <Navbar :title="'查詢運輸安全分數'"></Navbar>
    <b-navbar class="navbar-2" toggleable="lg" type="light" variant="">
      <!-- <b-navbar-toggle target="nav-collapse"></b-navbar-toggle> -->

      <b-collapse id="nav-collapse" is-nav>
        <b-form inline>
          <span class="abs-center-x">
            <b-form-select v-model="selected1" :options="options1" size="sm" class="mr-sm-2"></b-form-select>
            <b-form-select v-model="selected2" :options="options2" size="sm" class="mr-sm-2"></b-form-select>
            <b-form-select v-model="selected3" :options="options3" size="sm" class="mr-sm-2"></b-form-select>
          </span>
        </b-form>
        
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2 search-input" placeholder="Search"></b-form-input>
            </b-nav-form>
          </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    
    <div class="content">
      <div class="container">
          <div class="row" v-for="(item, index) in com_list" :key='index'>
            <div class="col" v-for="(citem, cindex) in 3" :key='cindex'>
                      {{ com_list[ index*3+cindex ] }}
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
  computed:{
    com_list(){
      console.log("here")
      return this.$store.state.com_list
    }
  },
  data() {
    return {
      selected1: '2020',
      options1: [
        { value: '2020', text: '2020' },
        { value: '2019', text: '2019' },
        { value: '2018', text: '2018' },
        { value: '2017', text: '2017' }
      ],
      selected2: 'a',
      options2: [
        { value: 'a', text: '載物' },
        { value: 'b', text: '載人' },
      ],
      selected3: '1',
      options3: [
        { value: '1', text: '汽車貨運業(專辦搬家業務)' },
        { value: '2', text: '汽車貨運業' },
        { value: '23', text: '汽車貨運、貨櫃貨運業' },
        { value: '3', text: '汽車貨櫃貨運業' },
        { value: '4', text: '汽車路線貨運業' },
        { value: '24', text: '汽車路線貨運、貨運業' }
      ],      
    }
  },
  mounted(){
    this.$store.dispatch('GETLIST')
  },

}
</script>

<style scoped>
.btn{
    border-radius: 1.5rem;
    border-color: transparent;
    background-color: transparent;
    color: black;
}
select{
	background-color: transparent !important; 
	border-color: black !important;
	border-radius: 1.5rem !important; 
	/* margin-right: 0.15rem;
  margin-left: 0.15rem; */
  /* width: 5rem !important; */
}
ul li{
  list-style-type:none !important;
  margin: 0.5rem !important;
}
.navbar{
  background-color: #34DCA2;
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

.list-group-item{
  border: none;
}
</style>
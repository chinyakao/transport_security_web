<template>
  <div>
    <Navbar :title="'選擇輸入分數的公司'"></Navbar>
    <b-navbar class="navbar-2" toggleable="lg" type="light" variant="">
      <!-- <b-navbar-toggle target="nav-collapse"></b-navbar-toggle> -->

      <b-collapse id="nav-collapse" is-nav>
        <b-form inline>
          <span class="abs-center-x">
            <b-form-select v-model="selected1" :options="options1" size="sm" class="mr-sm-2"></b-form-select>
            <b-form-select v-model="selected2" :options="options2" size="sm" class="mr-sm-2"></b-form-select>
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
          <div class="row">
            <div class="col-4">
              <div v-for="(item, index) in com_list1" :key='index'>
                  <ul>
                    <li @click="toInputform">
                      {{ item[0] }}
                    </li>
                  </ul>
              </div>
            </div>
            <div class="col-4">
              <div v-for="(item, index) in com_list2" :key='index'>
                  <ul>
                    <li @click="toInputform">
                      {{ item[0] }}
                    </li>
                  </ul>
              </div>
            </div>
            <div class="col-4">
              <div v-for="(item, index) in com_list3" :key='index'>
                  <ul>
                    <li @click="toInputform">
                      {{ item[0] }}
                    </li>
                  </ul>
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
  computed:{
    com_list1(){
      if(this.selected2 == '0'){
        return this.$store.state.com_list1
      }else{
        var result = []
        this.$store.state.com_list1.forEach(element => {
          if(element[1] == this.selected2) result.push(element)
        });
        return result
      }
    },
    com_list2(){
      if(this.selected2 == '0'){
        return this.$store.state.com_list2
      }else{
        var result = []
        this.$store.state.com_list2.forEach(element => {
          if(element[1] == this.selected2) result.push(element)
        });
        return result
      }
    },
    com_list3(){
      if(this.selected2 == '0'){
        return this.$store.state.com_list3
      }else{
        var result = []
        this.$store.state.com_list3.forEach(element => {
          if(element[1] == this.selected2) result.push(element)
        });
        return result
      }
    },
  },
  data() {
    return {
      selected1: '2020',
      options1: [
        { value: '2020', text: '2020' },
        { value: '2019', text: '2019' },
      ],
      selected2: '0',
      options2: [
        { value: '0', text: '顯示全部' },
        { value: '1', text: '汽車貨運業' },
        { value: '2', text: '汽車貨櫃貨運業' },
        { value: '3', text: '汽車路線貨運業' },
        { value: '4', text: '客運業' },
      ],
      searchClient: ''      
    }
  },
  mounted(){
    this.$store.dispatch('GETLIST')
  },
  methods: {
    toInputform(){
        // console.log(this.$route)
        let path = `/inputform`
        if (this.$route.path !== path) this.$router.push(path)
        
    }
  }
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
  cursor: pointer;
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
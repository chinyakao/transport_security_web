<template>
  <div>
    <Navbar :title="'輸入訪視分數'"></Navbar>
    <b-navbar class="navbar-2" toggleable="lg" type="light" variant="">
      <!-- <b-navbar-toggle target="nav-collapse"></b-navbar-toggle> -->

      <b-collapse id="nav-collapse" is-nav>
        <b-button href="#" variant="" size="sm">
          <font-awesome-icon icon="chevron-left" />
          回上一頁
        </b-button>
        <b-form inline>
          <span class="abs-center-x">
            <b-form-select v-model="selected1" :options="options1" size="sm" class="w-25 mr-sm-2"></b-form-select>
            <b-form-select v-model="selected2" :options="options2" size="sm" class="w-25 mr-sm-2"></b-form-select>
            <b-form-select v-model="selected3" :options="options3" size="sm" class="w-25 mr-sm-2"></b-form-select>
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
            <div class="col-md-4 col-sm-12">
              <ul>
                <li v-for="(item, index) in list1" :key=index>
                  {{ item.name }}
                </li>
              </ul>
            </div>
            <div class="col-md-4 col-sm-12">
              <ul>
                <li v-for="(item, index) in list2" :key=index>
                  {{ item.name }}
                </li>
              </ul>
            </div>
            <div class="col-md-4 col-sm-12">
              <ul>
                <li v-for="(item, index) in list3" :key=index>
                  {{ item.name }}
                </li>
              </ul>
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
    name:'gov-input',
    data() {
      return {
        selected1: null,
        options1: [
          { value: null, text: 'Please select an option' },
          { value: 'a', text: '2020' },
          { value: 'b', text: 'Selected Option' },
          { value: { C: '3PO' }, text: 'This is an option with object value' },
          { value: 'd', text: 'This one is disabled', disabled: true }
        ],
        options2: [
          { value: null, text: 'Please select an option' },
          { value: 'a', text: '載物' },
          { value: 'b', text: 'Selected Option' },
          { value: { C: '3PO' }, text: 'This is an option with object value' },
          { value: 'd', text: 'This one is disabled', disabled: true }
        ],
        selected3: null,
        options3: [
          { value: null, text: 'Please select an option' },
          { value: 'a', text: '汽車貨運業' },
          { value: 'b', text: 'Selected Option' },
          { value: { C: '3PO' }, text: 'This is an option with object value' },
          { value: 'd', text: 'This one is disabled', disabled: true }
        ],
        list1: [
          { id: '123456789', name: '圖斯特國際行銷' },
          { id: '123456789', name: '圖斯特國際行銷' },
          { id: '123456789', name: '圖斯特國際行銷' },
          { id: '123456789', name: '圖斯特國際行銷' },
          { id: '123456789', name: '圖斯特國際行銷' },
          { id: '234567890', name: '台灣日通日電物流' },
          { id: '345678901', name: '台驊國際投資控股' },
          { id: '345678901', name: '台驊國際投資控股' },
          { id: '345678901', name: '台驊國際投資控股' },
          { id: '345678901', name: '台驊國際投資控股' },
          { id: '345678901', name: '台驊國際投資控股' },
          { id: '345678901', name: '台驊國際投資控股' },
          { id: '345678901', name: '台驊國際投資控股' },
          { id: '345678901', name: '台驊國際投資控股' },
          { id: '345678901', name: '台驊國際投資控股' },
          { id: '345678901', name: '台驊國際投資控股' },
          { id: '345678901', name: '台驊國際投資控股' },
          { id: '345678901', name: '台驊國際投資控股' },
          { id: '234567890', name: '台灣日通日電物流' },
          { id: '234567890', name: '台灣日通日電物流' },
          { id: '234567890', name: '台灣日通日電物流' },
          { id: '234567890', name: '台灣日通日電物流' },
          { id: '345678901', name: '台驊國際投資控股' },
        ],
        list2: [
          { id: '123456789', name: '圖斯特國際行銷' },
          { id: '123456789', name: '京揚國際' },
          { id: '123456789', name: '京揚國際' },
          { id: '123456789', name: '京揚國際' },
          { id: '123456789', name: '京揚國際' },
          { id: '234567890', name: '立揚通運' },
          { id: '345678901', name: '嘉里大榮物流' },
          { id: '345678901', name: '嘉里大榮物流' },
          { id: '345678901', name: '嘉里大榮物流' },
          { id: '345678901', name: '嘉里大榮物流' },
          { id: '345678901', name: '嘉里大榮物流' },
          { id: '345678901', name: '嘉里大榮物流' },
          { id: '345678901', name: '嘉里大榮物流' },
          { id: '345678901', name: '嘉里大榮物流' },
          { id: '345678901', name: '嘉里大榮物流' },
          { id: '345678901', name: '嘉里大榮物流' },
          { id: '345678901', name: '嘉里大榮物流' },
          { id: '345678901', name: '嘉里大榮物流' },
          { id: '234567890', name: '立揚通運' },
          { id: '234567890', name: '立揚通運' },
          { id: '234567890', name: '立揚通運' },
          { id: '234567890', name: '立揚通運' },
          { id: '345678901', name: '嘉里大榮物流' },
        ],
        list3: [
          { id: '123456789', name: '台灣聯合物流' },
          { id: '123456789', name: '台灣聯合物流' },
          { id: '123456789', name: '台灣聯合物流' },
          { id: '123456789', name: '台灣聯合物流' },
          { id: '234567890', name: '佳富物流' },
          { id: '345678901', name: '聯倉交通' },
          { id: '345678901', name: '聯倉交通' },
          { id: '345678901', name: '聯倉交通' },
          { id: '345678901', name: '聯倉交通' },
          { id: '345678901', name: '聯倉交通' },
          { id: '345678901', name: '聯倉交通' },
          { id: '345678901', name: '聯倉交通' },
          { id: '345678901', name: '聯倉交通' },
          { id: '345678901', name: '聯倉交通' },
          { id: '345678901', name: '聯倉交通' },
          { id: '345678901', name: '聯倉交通' },
          { id: '345678901', name: '聯倉交通' },
          { id: '345678901', name: '聯倉交通' },
          { id: '345678901', name: '聯倉交通' },
          { id: '345678901', name: '聯倉交通' },
          { id: '345678901', name: '聯倉交通' },
          { id: '345678901', name: '聯倉交通' },
        ],
      }
    }
}
</script>

<style scoped>
select{
	background-color: transparent !important; 
	border-color: black !important;
	border-radius: 1.5rem !important; 
	/* margin-right: 0.15rem;
  margin-left: 0.15rem; */
  width: 3rem !important;
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
/* .row {
  background: #f8f9fa;
  margin-top: 2rem;
}

.col {
  border: solid 1px #6c757d;
  padding: 10px;
} */
</style>
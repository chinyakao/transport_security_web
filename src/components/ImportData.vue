<template>
  <div>
    <Navbar :title="'匯入資料'"></Navbar>
    <div class="content">
        <div class="container">
            <div class="row">
                <div class="col-12 import-data-title">
                    匯入歷史資料與主動蒐集資料
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                        <label class="upload-cover">
                            <input id="upload-input" type="file" @change="tirggerFile1 ($event)">
                            <span class="upload1-title">歷史資料</span>
                            <font-awesome-icon v-if="file1 === null" class="upload-icon" icon="plus-circle" />
                            <font-awesome-icon v-else class="upload-icon" icon="check-circle" />
                            
                            <font-awesome-icon v-if="file1 !== null" class="redo-icon" icon="redo-alt" />
                            <span v-if="file1 !== null" class="redo">重新選擇</span>

                            <span v-if="file1 === null" class="upload-filename">尚未選擇檔案</span>
                            <span v-else class="upload-filename">{{ file1 ? file1.name : '' }}</span>
                        </label>

                        <label class="upload-cover">
                            <input id="upload-input" type="file" @change="tirggerFile2 ($event)">
                            <span class="upload2-title">主動蒐集資料</span>

                            <font-awesome-icon v-if="file2 === null" class="upload-icon" icon="plus-circle" />
                            <font-awesome-icon v-else class="upload-icon" icon="check-circle" />
                            
                            <font-awesome-icon v-if="file2 !== null" class="redo-icon" icon="redo-alt" />
                            <span v-if="file2 !== null" class="redo">重新選擇</span>

                            <span v-if="file2 === null" class="upload-filename">尚未選擇檔案</span>
                            <span v-else class="upload-filename">{{ file2 ? file2.name : '' }}</span>
                        </label>
                        <div>
                            <b-button v-if="file1 !== null || file2 !== null" class="submit-btn" @click="upload()">確認送出</b-button>
                            <b-button v-else class="submit-btn" disabled>確認送出</b-button>
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
        file1: null,
        file2: null,
        // com_data_list: [],
        // com_data: [],
        // be_detail: [],
        // be_score: 0,
        
      }
    },
    methods: {
        tirggerFile1 (event) {
            this.file1 = event.target.files[0]
            // console.log(this.file1)
        },
        tirggerFile2 (event) {
            this.file2 = event.target.files[0]
            // console.log(this.file1)
        },
        upload() {
            if(this.file1 !== null){
                this.$papa.parse(this.file1, {
                    complete: function(res){
                        let com_data_list = res.data
                        for(var k=1; k < com_data_list.length-2; k++){
                          let com_data = com_data_list[k]
                          var be_xg_score = 0
                          var be_ra_score = 0
                          let be_big_weight= [0.487175098, 0.398692364, 0.410719892, 0.492164604, 0.395154658, 0.329578916]
                          let be_weight= [
                              [0.020644938, 0.20093747, 0.067703738, 0.020696064, 0.0765704, 0.0812616, 0.019360888],
                              [0.01909573, 0.1436127, 0.048231084, 0.024776024, 0.0640504, 0.0646664, 0.034260026],
                              [0.06737844, 0.15878678, 0.0390792, 0.049764272, 0.0428432, 0.0296792, 0.0231888],
                              [0.011691472, 0.186319338, 0.103418554, 0.020418414, 0.0765704, 0.0812616, 0.012484826],
                              [0.012389248, 0.138099938, 0.073302846, 0.027744068, 0.0640504, 0.0646664, 0.014901758],
                              [0.05460431, 0.07621334, 0.070678922, 0.030514742, 0.0428432, 0.0296792, 0.025045202],
                          ]
                          if(com_data.length > 0){
                            var type = parseInt(com_data[1])
                            for(let i=0; i<7; i++){
                                be_xg_score = be_xg_score + com_data[3+i] * be_weight[type-1][i]
                                be_ra_score = be_ra_score + com_data[3+i] * be_weight[type+2][i]
                            }
                            be_xg_score = Math.round((be_xg_score / be_big_weight[type-1])*10)/10
                            be_ra_score = Math.round((be_ra_score / be_big_weight[type+2])*10)/10
                            console.log("xg: " + be_xg_score)
                            console.log("ra: " + be_ra_score)
                          }
                        }
                    }
                })
            }
            if(this.file2 !== null){
                this.$papa.parse(this.file2, {
                    complete: function(res){
                        this.com_data_list = res.data
                    }
                })
            }
            this.file1 = null
            this.file2 = null
            alert("上傳成功")
        },
    }
  }
</script>

<style scoped>
.custom-file-label {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1;
    height: 15rem;
    padding: 0.375rem 0.75rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
}

.import-data-title{
  color: #34DCA2;
  font-weight: bold;
  font-size: 1.5rem;
}
.upload-cover {
  margin: 1rem;
  position: relative;
  width: 15rem;
  height: 15rem;
  text-align: center;
  cursor: pointer;
  background: transparent;
  border: 0.1rem solid #34DCA2;
  border-radius: 1.5rem;
}
#upload-input {
  display: none;
}
.upload1-title{
  font-weight: bold;
  font-size: 1.5rem;
  position: absolute;
  top: 10%;
  left: 30%;
}
.upload2-title{
  font-weight: bold;
  font-size: 1.5rem;
  position: absolute;
  top: 10%;
  left: 20%;
}
.upload-icon {
  color: #34DCA2;
  font-size: 5rem;
  position: absolute;
  top: 33%;
  left: 33%;
}
.upload-filename{
  color: gray;
  font-weight: bold;
  font-size: 1rem;
  position: absolute;
  bottom: 10%;
  left: 30%;
}
.redo{
  color: #34DCA2;
  position: absolute;
  bottom: 20%;
  left: 42%;
}
.redo-icon{
  color: #34DCA2;
  position: absolute;
  bottom: 21%;
  left: 32%;

}
.btn{
    border-radius: 1.5rem;
    border-color: transparent;
    background-color: transparent;
    color: black;
}
.submit-btn{
  background-color: #34DCA2;
  color: white;
}
</style>
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
                        this.com_data_list = res.data
                        // this.$store.commit('UPDATEDATA', res.data)
                        console.log(this.com_data_list)
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
<template>
    <div>
        <Navbar :title="'輸入訪視分數'"></Navbar>
        <div class="sub-content">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="company-title">{{ com_data[0] }}</div>
                    </div>
                </div>
                <div class="row">
                    <div class="col"></div>
                    <div class="col">點檢紀錄保存
                        <b-form-input v-model="form.a" size="sm" class="mr-sm-2 input" placeholder="0~100"></b-form-input>
                    </div>
                    <div class="col">駕駛合適性
                        <b-form-input v-model="form.b" size="sm" class="mr-sm-2 input" placeholder="0~100"></b-form-input>
                    </div>
                    <div class="col">運輸安全管理
                        <b-form-input v-model="form.c" size="sm" class="mr-sm-2 input" placeholder="0~100"></b-form-input>

                    </div>
                    <div class="col">貨物相關文件
                        <b-form-input v-model="form.d" size="sm" class="mr-sm-2 input" placeholder="0~100"></b-form-input>

                    </div>
                    <div class="col"></div>
                </div>
                <div class="row">
                    <div class="col"></div>
                    <div class="col">車輛管理規定
                        <b-form-input v-model="form.e" size="sm" class="mr-sm-2 input" placeholder="0~100"></b-form-input>

                    </div>
                    <div class="col">健康檢查
                        <b-form-input v-model="form.f" size="sm" class="mr-sm-2 input" placeholder="0~100"></b-form-input>

                    </div>
                    <div class="col">其他
                        <b-form-input v-model="form.g" size="sm" class="mr-sm-2 input" placeholder="0~100"></b-form-input>

                    </div>
                    <div class="col">貨物保護
                        <b-form-input v-model="form.h" size="sm" class="mr-sm-2 input" placeholder="0~100"></b-form-input>

                    </div>
                    <div class="col"></div>
                </div>
                <div class="row">
                    <div class="col"></div>
                    <div class="col">
                        勞健保
                        <b-form-input v-model="form.i" size="sm" class="mr-sm-2 input" placeholder="0~100"></b-form-input>
                    </div>
                    <div class="col">酒測管理
                        <b-form-input v-model="form.j" size="sm" class="mr-sm-2 input" placeholder="0~100"></b-form-input>

                    </div>
                    <div class="col">貨物乘載與固定
                        <b-form-input v-model="form.k" size="sm" class="mr-sm-2 input" placeholder="0~100"></b-form-input>

                    </div>
                    <div class="col">貨物標記
                        <b-form-input v-model="form.l" size="sm" class="mr-sm-2 input" placeholder="0~100"></b-form-input>

                    </div>
                    <div class="col"></div>
                </div>
                <div class="row">
                    <div class="col"></div>
                    <div class="col">教育訓練
                        <b-form-input v-model="form.m" size="sm" class="mr-sm-2 input" placeholder="0~100"></b-form-input>

                    </div>
                    <div class="col">保險
                        <b-form-input v-model="form.n" size="sm" class="mr-sm-2 input" placeholder="0~100"></b-form-input>

                    </div>
                    <div class="col">貨物完整性
                        <b-form-input v-model="form.o" size="sm" class="mr-sm-2 input" placeholder="0~100"></b-form-input>

                    </div>
                    <div class="col">事故危害
                        <b-form-input v-model="form.p" size="sm" class="mr-sm-2 input" placeholder="0~100"></b-form-input>
                    </div>
                    <div class="col"></div>
                </div>
                <div class="row">
                    <div class="col"></div>
                    <div class="col">
                        <b-button class="submit-btn" @click="submit()">確認送出</b-button>
                        <!-- <b-button v-else class="submit-btn" disabled>確認送出</b-button> -->
                    </div>
                    <div class="col"></div>
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
    computed: {
        com_data(){
            return this.$store.state.com_data
        },
    },
    data(){
        return{
            form: {
                a:'',
                b:'',
                c:'',
                d:'',
                e:'',
                f:'',
                g:'',
                h:'',
                i:'',
                j:'',
                k:'',
                l:'',
                m:'',
                n:'',
                o:'',
                p:'',
                name: '',
            },
        }
    },
    mounted(){
      this.$store.dispatch('GETCOMPANYDATA')
    },
    methods:{
        submit(){
            this.form.name = this.companyName
            console.log(this.form)
            alert("送出成功")
            // alert(JSON.stringify(this.form))
        }
    }

}
</script>

<style scoped>
.sub-content{ 
  padding-top: 4rem;
}
.row{
    margin: 1rem;
}
.col{
    margin: 1rem;
}
.btn{
    border-radius: 1.5rem;
    border-color: transparent;
    background-color: transparent;
}
.submit-btn{
    background-color: #34DCA2;
    color: white;
}
.input{
    border-width: .15rem;
    border-color: #34DCA2;
    border-radius: 1.5rem;
}
.company-title{
    font-size: 2rem;
    font-weight: 450;
    color: #34DCA2;
}
</style>
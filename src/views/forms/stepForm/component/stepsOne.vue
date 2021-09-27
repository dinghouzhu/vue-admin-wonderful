<template>
  <div class="steps-one">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm" size="small">
      <el-form-item label="付款账户：" prop="a1">
        <el-select v-model="ruleForm.a1" placeholder="请选择付款账户" style="width:100%;"  multiple clearable @change="change(ruleForm.a1)"  >
          <el-option v-for="item in options" :key="item.value" :value="item.value" :label="item.label"  :disabled="item.disabled"></el-option>

        </el-select>
      </el-form-item>
      <el-form-item label="收款账户：" prop="a3">
        <el-input placeholder="请输入收款账户" v-model="ruleForm.a3">
          <el-select v-model="ruleForm.a2" slot="prepend" placeholder="请选择" style="width:90px;">
            <el-option label="支付宝" value="1"></el-option>
            <el-option label="微信" value="2"></el-option>
          </el-select>
        </el-input>
      </el-form-item>
      <el-form-item label="收款人姓名：" prop="a4">
        <el-input v-model="ruleForm.a4" placeholder="请输入收款人姓名"></el-input>
      </el-form-item>
      <el-form-item label="转账金额：" prop="a5">
        <el-input v-model="ruleForm.a5" placeholder="请输入转账金额"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')" class="mt20">下一步</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getSession, setSession } from '@/utils/storage'
export default {
  name: 'stepsOne',
  data() {
    return {
      options:[
          {
              label:"1349851865@qq.com",
              value:"1349851865@qq.com",
              disabled:false
          },
          {
              label:"1349851866@qq.com",
              value:"1349851866@qq.com",
              disabled:false
          },
          {
              label:"1349851867@qq.com",
              value:"1349851867.@qq.com",
              disabled:false
          }
      ]  ,

      ruleForm: {
        a1: '',
        a2: '1',
        a3: '',
        a4: '',
        a5: ''
      },
      rules: {
        a1: [{ required: true, message: '请选择付款账户', trigger: 'change' }],
        a3: [{ required: true, message: '请输入收款账户', trigger: 'blur' }],
        a4: [{ required: true, message: '请输入收款人姓名', trigger: 'blur' }],
        a5: [{ required: true, message: '请输入转账金额', trigger: 'blur' }]
      }
    }
  },
  mounted() {
    this.initRuleForm()
  },
  methods: {
     //select change事件
      change(data){
          console.log(Array.from(new Set(data)).join(","));
      } ,

    // 初始化表单
    initRuleForm() {
      if (getSession('stepsOne')) {
        this.ruleForm = getSession('stepsOne')
      }
    },
    // 提交表单
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          setSession('stepsOne', this.ruleForm)
          this.$emit('setActive', 1)
        } else {
          return false;
        }
      });
    }
  },
    computed:{
      query(){
          return this.options[0].value
      }
    }
}
</script>

<style scoped lang="scss">
.steps-one {
  max-width: 530px;
  margin: 50px auto 0;
}
</style>
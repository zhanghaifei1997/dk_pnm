<template>
  <div class="dk_login">
    <div class="dk_login_content">
      <h3 class="mt20vh">毒牙人员管理系统</h3>
      <a-form
        id="components-form-demo-normal-login"
        :form="loginForm"
        class="login-form"
        @submit="loginSubmit"
      >
        <a-form-item>
          <a-input
            size="large"
            autocomplete="off"
            v-decorator="[
              'userName',
              { rules: [{ required: true, message: '请输入用户名!' }] }
            ]"
            placeholder="请输入用户名"
          >
            <a-icon
              slot="prefix"
              type="user"
              style="color: rgba(0,0,0,.25)"
            />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            size="large"
              v-decorator="[
                'password',
                { rules: [{ required: true, message: '请输入密码!' }] }
              ]"
            type="password"
            placeholder="请输入密码"
          >
            <a-icon
              slot="prefix"
              type="lock"
              style="color: rgba(0,0,0,.25)"
            />
          </a-input>
        </a-form-item>
        <a-form-item>
          <div class="btn_area">
            <a-checkbox
              v-decorator="[
                'remember',
                {
                  valuePropName: 'checked',
                  initialValue: true,
                }
              ]"
            >
              记住密码
            </a-checkbox>
            <a
              class="login-form-forgot"
              href=""
            >
              忘记密码
            </a>
          </div>
          <a-button
            type="primary"
            html-type="submit"
            class="login-form-button"
            size="large"
            block
          >
            登 录
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>


    function hasErrors (fieldsError) {
      return Object.keys(fieldsError).some(field => fieldsError[field]);
    }

    export default {
        name: "Login",
        data() {
          return {
            loginForm: this.$form.createForm(this)
          }
        }
      ,
      methods: {
        loginSubmit() {

        }
      }
    }
</script>

<style lang="less" scoped>
.dk_login {
  display: flex;
  align-content: center;
  height: 100vh;
  background: #f0f2f5;
  box-sizing: border-box;
  .dk_login_content {
    margin: 0 auto;
    width: 388px;
    h3 {
      height: 5vh;
      line-height: 5vh;
      text-align: center;
      color: rgba(0,0,0,.85);
      font-size: 3vh;
      /*letter-spacing: 1px;*/
      font-weight: 600;
      font-family: Avenir,Helvetica Neue,Arial,Helvetica,sans-serif;
    }
    .btn_area {
      display: flex;
      margin-bottom: 10px;
      justify-content: space-between;
    }
  }
}
</style>

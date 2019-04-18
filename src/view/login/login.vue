<template>
<transition name="main-fade">
  <div class="login-wrap">
    <div class="login-html">
      <input id="tab-1" type="radio" name="tab" class="sign-in" checked><label for="tab-1" class="tab">로그인</label>
      <input id="tab-2" type="radio" name="tab" class="sign-up"><label for="tab-2" class="tab">회원가입</label>
      <div class="login-form">
        <div class="sign-in-htm">
          <form>
            <div class="group">
              <label for="login_email" class="label" >이메일</label>
              <input name="login_email" type="text" class="input" v-model="login_email" v-validate="'required|email'">
              <p v-if="errors.has('login_email')"> 이메일의 형식에 맞춰 입력해주세요 </p>
            </div>
            <div class="group">
              <label for="login_pass" class="label">비밀번호</label>
              <input name="login_pass" type="password" class="input" v-model="login_pass">
            </div>
            <div class="group">
              <input type="submit" class="button" value="로그인" v-on:click.stop.prevent="login">
            </div>
            <div class="hr"></div>
          </form>
        </div>
        <div class="sign-up-htm">
          <form>
            <div class="group">
              <label for="reg_studentID" class="label">학번</label>
              <input name="reg_studentID" type="text" class="input" v-model="reg_studentID" v-validate="'required'">
              <p v-if="errors.has('reg_studentID')"> 학번을 입력해주세요 </p>
            </div>
            <div class="group">
              <label for="reg_pass" class="label">비밀번호</label>
              <input name="reg_pass" type="password" class="input" v-model="reg_pass" v-validate="'min:6'">
              <p v-if="errors.has('reg_pass')"> 비밀번호는 6자리 이상이어야 합니다 </p>
            </div>
            <div class="group">
              <label for="reg_name" class="label">이름</label>
              <input name="reg_name" type="text" class="input" v-model="reg_name" v-validate="'required'">
              <p v-if="errors.has('reg_name')"> 이름을 입력해주세요 </p>
            </div>
            <div class="group">
              <label for="reg_email" class="label">이메일 </label>
              <input name="reg_email" type="text" class="input" v-model="reg_email" v-validate="'required|email'">
              <p v-if="errors.has('reg_email')"> 이메일의 형식에 맞춰 입력해주세요 </p><br /><br />
            </div>
            <div class="group">
              <input type="submit" class="button" value="회원가입" v-on:click.stop.prevent="regist">
            </div>
          </form>
        <div class="hr"></div>
      </div>
    </div>
  </div>
</div>
</transition>
</template>


<script>
export default {
        data(){
            return{
                login_email:"",
                login_pass:"",
                reg_studentID:"",
                reg_pass:"",
                reg_name:"",
                reg_email:""
            }
        },
        methods:{
            regist(){
              if(this.regist_onSubmit()){
                    this.$http.post('http://localhost:8888/auth/send-auth-mail',{
                    studentID : this.reg_studentID,
                    name : this.reg_name,
                    email : this.reg_email,
                    password : this.reg_pass
                }).then(function(response) {
                    alert("인증 메일이 발송되었습니다.")
                    console.log(response)
                }).catch(function (error){
                    console.log(error.response.data.message)
                })
              }
            },
            login(){
                if(this.login_onSubmit()){
                  console.log("API발송")
                    this.$http.post('http://localhost:8888/auth/login',{
                    email : this.login_email,
                    password : this.login_pass
                }).then((response) => {
                    console.log(response.data)
                      localStorage.setItem('token',response.data.token)
                      localStorage.setItem('studentID',response.data.studentID)
                      alert('로그인 되었습니다.')
                      this.$router.push({ path: '/menu' })
                }).catch(function (error){
                  console.log(error.response.data.message)
                })
              }
            },
            login_onSubmit() {
                this.$validator.validateAll();
                if (this.errors.has('login_email') || this.login_email==""){
                  return false;
                }
                else {
                  return true;
                }
            },
            regist_onSubmit() {
                this.$validator.validateAll();
                if (this.errors.has('reg_studentID') || this.reg_studentID==""){
                  return false;
                }
                if (this.errors.has('reg_pass') || this.reg_pass==""){
                  return false;
                }
                if (this.errors.has('reg_name') || this.reg_name==""){
                  return false;
                }
                if (this.errors.has('reg_email') || this.reg_email==""){
                  return false;
                }
                return true;
            }
        }
    }
</script>

<style scoped>

  *,:after,:before{box-sizing:border-box}
  .clearfix:after,.clearfix:before{content:'';display:table}
  .clearfix:after{clear:both;display:block}
  a{color:inherit;text-decoration:none}

  .login-wrap{
    width:100%;
    margin:auto;
    max-width:525px;
    min-height:700px;
    position:relative;
    background:url('../../assets/loginbackground.jpg') no-repeat center;
    background-size: 100% 100%;
    box-shadow:0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19);
  }
  .login-html{
    width:100%;
    height:100%;
    position:absolute;
    padding:90px 70px 50px 70px;
    background:rgba(160, 160, 160, 0.9);
  }
  .login-html .sign-in-htm,
  .login-html .sign-up-htm{
    top:0;
    left:0;
    right:0;
    bottom:0;
    position:absolute;
    transform:rotateY(180deg);
    backface-visibility:hidden;
    transition:all .4s linear;
  }
  .login-html .sign-in,
  .login-html .sign-up,
  .login-form .group .check{
    display:none;
  }
  .login-html .tab,
  .login-form .group .label,
  .login-form .group .button{
    text-transform:uppercase;
  }
  .login-html .tab{
    font-size:22px;
    margin-right:15px;
    padding-bottom:5px;
    margin:0 15px 10px 0;
    display:inline-block;
    border-bottom:2px solid transparent;
  }
  .login-html .sign-in:checked + .tab,
  .login-html .sign-up:checked + .tab{
    color:#fff;
    border-color:#000000;
  }
  .login-form{
    min-height:345px;
    position:relative;
    perspective:1000px;
    transform-style:preserve-3d;
  }
  .login-form .group{
    margin-bottom:15px;
  }
  .login-form .group p{
    color:red;
  }
  .login-form .group .label,
  .login-form .group .input,  
  .login-form .group .button{
    width:100%;
    color:rgb(255, 255, 255);
    font-weight: bold;
    font-size:15px;
    display:block;
  }
  .login-form .group .input,
  .login-form .group .button{
    border:none;
    padding:15px 20px;
    border-radius:25px;
    background:rgba(255,255,255,.1);
  }
  .login-form .group .input,
  .login-form .group .label{
    color:rgb(0, 0, 0);
    font-size:13px;
  }
  .login-form .group .button{

    background:#525252;
  }
  .login-form .group label .icon{
    width:15px;
    height:15px;
    border-radius:2px;
    position:relative;
    display:inline-block;
    background:rgba(255,255,255,.1);
  }
  .login-form .group label .icon:before,
  .login-form .group label .icon:after{
    content:'';
    width:10px;
    height:2px;
    background:#fff;
    position:absolute;
    transition:all .2s ease-in-out 0s;
  }
  .login-form .group label .icon:before{
    left:3px;
    width:5px;
    bottom:6px;
    transform:scale(0) rotate(0);
  }
  .login-form .group label .icon:after{
    top:6px;
    right:0;
    transform:scale(0) rotate(0);
  }

  .login-html .sign-in:checked + .tab + .sign-up + .tab + .login-form .sign-in-htm{
    transform:rotate(0);
  }
  .login-html .sign-up:checked + .tab + .login-form .sign-up-htm{
    transform:rotate(0);
  }

  .hr{
    height:2px;
    margin:60px 0 50px 0;
    background:rgba(255,255,255,.2);
  }
</style>

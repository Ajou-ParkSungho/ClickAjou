<template>
    <div class="header">
      <div class="info">
        <button @click="handleClickButton_Info" v-if="auth">내 정보 확인</button>
      </div>
        <div class="logo">
            <img src="../assets/logo.png" title="클릭시 메뉴로 돌아갑니다." @click="logoClick" />
        </div>

        <info-my-modal
          title="내 정보 확인"
          :visible.sync="Infovisible">
          <div class="modal_body">
              <div class="label_container">
                <label ref="회원명">회원명 : </label>
                <label ref="회원명_value">{{ name }}</label>
              </div>
              <div class="label_container">
                <label ref="회원학번">학번 : </label>
                <label ref="회원학번_value">{{ studentID }}</label>
              </div>
              <div class="label_container">
                <label ref="회원이메일">이메일 : </label>
                <label ref="회원이메일_value">{{ email }}</label>
              </div>
              <div class="label_container">
                <label ref="예약현황">예약현황 : </label>
                <label ref="예약현황_value">{{ reserveState }}</label>
              </div>
              <br>
              <div class="label_container">
                <label ref="로그아웃"><button type="submit" @click="logout">로그아웃</button></label>
              </div>
          </div>
        </info-my-modal>
    </div>
</template>


<script>
import myModal from '../components/ReserveModal'
export default {
  name: 'parent',
  data() {
    return {
      Infovisible:false,
      auth:localStorage.getItem('studentID'),
      name:'',
      studentID:'',
      email:'',
      reserveState:''
    }
  },
  computed:{
    virtualState(){
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (var i = 0; i < 20; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    }
  },
  components: {
    InfoMyModal: myModal
  },
  
  methods: {
    handleClickButton_Info(){
      this.getuserInfo()
      setTimeout(() => {
        this.Infovisible = !this.Infovisible
      }, 500);
      
    },
    logoClick(){
      if (localStorage.getItem('token')){
        this.$router.push({ path: '/menu' })
      }
      else{
        this.$router.push({ path: '/' })
      }
    },
    getuserInfo(){
      this.reserveState = ''
      this.$http.post('http://localhost:8888/auth/personal',{
            studentID : localStorage.getItem('studentID')
        }, { headers: {'x-access-token': localStorage.getItem('token')} }
        ).then(response => {
          console.log(response)
            this.name = response.data.name
            this.studentID = response.data.studentID
            this.email = response.data.email
            if(response.data.seat){
              this.reserveState += '도서관 ' + response.data.seat.seatNum + '번 좌석 예약 / '
            }
            if(response.data.space){
              this.reserveState += '시설 ' + response.data.space.placeName + ' ' + response.data.space.spaceID + ' 예약 / '
            }
          })
    },

    logout(){
      localStorage.removeItem('token')
      localStorage.removeItem('studentID')
      alert("로그아웃 되었습니다!")
      this.handleClickButton_Info()
      this.$router.push({ path: '/' })
      history.go(0)
    }
  }
}
</script>

<style lang="sass" scoped>
$color: rgb(0,0,0);
$primary: rgb(255, 255, 255);

html, body
  height: 100%
  
body
  display: grid
  font-family: Avenir, sans-serif
  color: $color
a
  text-decoration: none

.cta
  position: relative
  margin: auto
  padding: 25px 22px
  transition: all .2s ease
  &:before
    content: ""
    position: absolute
    top: 0
    left: 0
    display: block
    border-radius: 40px
    background: rgba($primary,.5)
    width: 90px
    height: 80px
    transition: all .3s ease
  span
    position: relative
    font-size: 50px
    line-height: 18px
    font-weight: 900
    letter-spacing: .25em
    text-transform: uppercase
    vertical-align: middle
  svg
    position: relative
    top: 0
    margin-left: 10px
    fill: none
    stroke-linecap: round
    stroke-linejoin: round
    stroke: $color
    stroke-width: 2
    transform: translateX(-5px)
    transition: all .3s ease
  &:hover
    &:before
      width: 100%
      background: rgba($primary,1)
    svg
      transform: translateX(0)
  &:active
    transform: scale(.96)

</style>

<style>
    .header {
        height : auto;
    }
    .header img {
        width : 600px;
        height : 200px;
    }
    .logo {
        text-align: center;
    }
    .info {
        text-align: right;
    }
</style>

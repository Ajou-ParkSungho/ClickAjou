<template>
<transition name="slide">
    <div class="librarymenu">
        <router-link to="/menu/libraryfloor" class="cta">
        <span><img src="../../assets/library/예약.png"> 좌석 예약 & 확인</span>
        <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
        </router-link>
        <div class="hr"></div>
        <span class="cta" @click="handleClickButton_exten">
          <span><img src="../../assets/library/연장.png"> 좌석 시간 연장</span>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </span>
        <div class="hr"></div>
        <span class="cta" @click="handleClickButton_leave">
          <span><img src="../../assets/library/퇴실.png"> 퇴실하기</span>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </span>


    <exten-my-modal
          title="연장 신청"
          :visible.sync="extenvisible">
          <div class="modal_body">
              <div class="label_container">
                <label ref="예약자명">예약자명 : </label>
                <label ref="예약자명_value">{{ studentID }}</label>
              </div>
              <div class="label_container">
                <label ref="좌석번호">좌석번호 : </label>
                <label ref="좌석번호_value">{{seatNum}}</label>
              </div>
              <div class="label_container">
                <label ref="시간">시간 : </label>
                <label ref="시간_value">{{ hour }}시 {{minute}}분 ~ {{ hour+4 }}시 {{minute}}분</label>
              </div>
              <div class="label_container">
                <label ref="연장시간">연장 시간 : </label>
                <label ref="연장시간_value">{{ hour }}시 {{minute}}분 ~ <span style="color:red;">{{ hour+6 }}시 {{minute}}분</span></label>
              </div>
              <h3>위의 정보대로 연장하시겠습니까?</h3>
              <button type="submit" @click="extend">연장</button>
          </div>
        </exten-my-modal>
        <leave-my-modal
      title="퇴실 신청"
      :visible.sync="leavevisible">
      <div class="modal_body">
          <div class="label_container">
            <label ref="예약자명">예약자명 : </label>
            <label ref="예약자명_value">{{ studentID }}</label>
          </div>
          <div class="label_container">
            <label ref="좌석번호">좌석번호 : </label>
            <label ref="좌석번호_value">{{seatNum}}</label>
          </div>
          <h3>퇴실하시겠습니까?</h3>
          <button type="submit" @click="leave">퇴실</button>
      </div>
    </leave-my-modal>


    </div>
</transition>
</template>

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

<style scoped>
.librarymenu {
  margin-top:130px;
}
.hr{
	height:2px;
	margin:60px 0 50px 0;
	background:rgba(255,255,255,.2);
}
img {
  height:50px;
  width:50px;
}

</style>


<script>
import myModal from '../../components/ReserveModal'
export default {
  name: 'parent',
  data() {
    return {
      extenvisible:false,
      leavevisible:false,
      seatNum:'',
      hour:'',
      minute:''
    }
  },
  components: {
    extenMyModal: myModal,
    leaveMyModal: myModal
  },
  computed:{
    studentID(){
      return localStorage.getItem('studentID')
    }
  },
  methods: {
    socketSend(){
      this.$socket.emit("callRefresh");
    },
    handleClickButton_exten(){
        this.getSeatInfo()
        setTimeout(()=>{
          if(this.seatNum){
            this.extenvisible = !this.extenvisible
          }
          else {
            alert("예약한 좌석 정보 없음")
          }
        },500)
        
    }, 
    handleClickButton_leave(){
        this.getSeatInfo()
        setTimeout(()=>{
          if(this.seatNum){
            this.leavevisible = !this.leavevisible
          }
          else {
            alert("예약한 좌석 정보 없음")
          }
        },500)
    },

    getSeatInfo(){
      this.$http.post('http://localhost:8888/auth/personal',{
            studentID : localStorage.getItem('studentID')
        }, { headers: {'x-access-token': localStorage.getItem('token')} }
        ).then(response => {
            this.seatNum = response.data.seat.seatNum
            var d = new Date(response.data.seat.occupiedTime)
            console.log(d)
            this.hour = (d.getHours())
            this.minute = (d.getMinutes())
          }).catch(function (error){
          alert(error.response.data.message)
      })
    },

    leave(){
        this.$http.post('http://localhost:8888/library/return',{
            studentID : localStorage.getItem('studentID')
        }, { headers: {'x-access-token': localStorage.getItem('token')} }
        ).then(response => {
            alert("정상적으로 퇴실되었습니다.")
            this.socketSend()
            this.seatNum = null
      }).catch(function (error){
          alert(error.response.data.message)
      })
      this.leavevisible = !this.leavevisible
    },


    extend(){
          this.$http.post('http://localhost:8888/library/extend',{
            studentID : localStorage.getItem('studentID')
          }, { headers: {'x-access-token': localStorage.getItem('token')} }
          ).then(response => {
            alert("정상적으로 연장되었습니다.")
            this.socketSend()
      }).catch(function (error){
          alert(error.response.data.message)
      })
        this.extenvisible = !this.extenvisible
    }
  }
}

</script>

<template>
  <div class="modal_container">
    <div class="modal_head">
    <button @click="handleClickButton">예약</button>
    </div>
    <app-my-modal
      title="예약 확인"
      :visible.sync="visible">
      <div class="modal_body">
        <div class="label_container">
          <label ref="신청일자">신청일자 : </label>
          <label ref="신청일자_value">{{ $moment().format('ll') }}</label>
        </div>
          <div class="label_container">
          <label ref="예약날짜">예약날짜 : </label>
          <label ref="예약날짜_value">{{ reserveDate.format('YYYY-MM-DD') }}</label>
          </div>
          <div class="label_container">
          <label ref="건물">건물 : </label>
          <label ref="건물_value">{{ this.$route.params.name }} </label>
           </div>
          <div class="label_container">
          <label ref="호실">호실 : </label>
          <label ref="호실_value">{{ this.$route.params.where }}</label>
           </div>
          <div class="label_container">
          <label ref="예약시간">예약 시간 : </label>
          <label ref="예약시간_value">{{ reserveTime }}시 ~ {{ reserveTime + 2 }}시</label>
           </div>
          <div class="label_container">
          <label ref="예약자명">예약자명 : </label>
          <label ref="예약자명_value">{{ name }}</label>
           </div>
          <br>
          <h3>위의 정보대로 예약하시겠습니까?</h3>
          <button type="submit" @click="reserveSubmit">예약</button>
      </div>
    </app-my-modal>
  </div>
</template>

<script>
import myModal from './ReserveModal'
export default {
  name: 'ShowModal',
  props: {
    reserveTime:Number,
    reserveDate:Object,
    index:Number
  },
  data(){
    return {
      visible: false,
      name: localStorage.getItem('studentID')
    }
  },
  components: {
    appMyModal: myModal
  },
  methods: {
    socketSend(){
      this.$socket.emit("callRefresh");
    },
    handleClickButton(){
      this.visible = !this.visible
    },
    reserveSubmit(){
      console.log(this.$moment())
      console.log(this.reserveDate.format('D Z'))
      console.log(this.reserveDate.format('D'))
      this.$http.post('http://localhost:8888/space/reserve',{
        studentID: localStorage.getItem('studentID'),
        rDate:{
          year : parseInt(this.reserveDate.format('YYYY Z')),
          month : parseInt(this.reserveDate.format('M Z')),
          day : parseInt(this.reserveDate.format('D Z')),
          hour : this.reserveTime
        },
        placeName : this.$route.params.name,
        spaceID : this.$route.params.where,
        day : this.index,
        time : this.reserveTime
        }, { headers: {'x-access-token': localStorage.getItem('token')} }
        ).then((response) => {
          console.log(response.data)
          alert('예약되었습니다.')
          this.socketSend()
          this.visible = !this.visible
          history.go(0)
        }).catch(function (error){
            console.log(error.response.data)
      })
    }
  }
}
</script>

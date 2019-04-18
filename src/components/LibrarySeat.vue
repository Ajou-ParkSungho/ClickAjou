<template>
    <div class="modal_container">
    <div class="modal_head">
    <img v-bind:src="linkon" v-bind:title="seatNum" @click="handleClickButton" v-if="!user">
    <img v-bind:src="linkoff" v-bind:title="seatNum" v-else>
    </div>
    <app-my-modal
      title="예약 확인"
      :visible.sync="visible">
      <div class="modal_body">
          <div class="label_container">
            <label ref="예약자명">예약자명 : </label>
            <label ref="예약자명_value">{{ name }}</label>
          </div>
          <div class="label_container">
            <label ref="좌석번호">좌석번호 : </label>
            <label ref="좌석번호_value">{{ seatNum }}</label>
          </div>
          <div class="label_container">
            <label ref="시간">시간 : </label>
            <label ref="시간_value">{{ this.$moment().format('HH시 mm분') }} ~ {{ this.$moment().add(4,'hours').format('HH시 mm분') }}</label>
          </div>
          <h3>위의 정보대로 예약하시겠습니까?</h3>
          <input type="submit" class="button" value="예약" v-on:click.stop.prevent="reserveSeat">
      </div>
    </app-my-modal>
  </div>
</template>

<style scoped>
  .modal_body {
    text-align: left;
      font-size:18px;
      font:black;
      z-index:3;
  }
  .label_container {
    padding: 10px 0 5px 0;

    height: 30px;
  }
  .label_container:hover {
    background:rgba(0,0,0,0.4);
  }
  img {
    height:30px;
    width:30px;
  }
</style>

<script>
import myModal from './ReserveModal'
export default {
  name: 'parent',
  data() {
    return {
      linkon: require('../assets/library/' + this.type + 'on.png'),
      linkoff: require('../assets/library/' + this.type + 'off.png'),
      visible:false
    }
  },
  props: {
    type:String,
    user:String,
    seatNum:Number,
    floor:Number
  },
  computed:{
    name(){
      return localStorage.getItem('studentID')
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
    } ,
    reserveSeat(){
        this.$http.post('http://localhost:8888/library/reserve',{
          seatNum : this.seatNum,
          studentID : localStorage.getItem('studentID')
        }, { headers: {'x-access-token': localStorage.getItem('token')} }
        ).then((response) => {
          alert(this.seatNum + "번 좌석이 예약 되었습니다.")
          this.socketSend()
          this.handleClickButton()
          this.refresh()
        }).catch(function (error){
            alert(error.response.data.message)
        })
    },
    refresh(){
      history.go(0)
    }
  }
}
</script>

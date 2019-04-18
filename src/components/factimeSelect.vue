<template>
  <transition name="slide">
    <div class="timeSelect">
      <div class="modal_head">
        <button @click="handleClickButton">선택</button>
      </div>
      <app-my-modal title="선택한 시간의 빈 강의실 목록" :visible.sync="visible">
        <div class="modal_body">
          <div class="label_container">
            <label ref="선택시간">선택한 시간 : {{ reserveTime }}시 ~ {{ reserveTime + 2 }}시</label>
          </div>
            <br>
            <div class="selectList">
              <select id='faclist' size='10' @change="showClasslist">
                  <option v-for="list in lists" :key="list.index" :value='list.name'>{{list.name}}</option>
              </select>
            </div>
              <div class="block">Block
              </div>
            <div class="selectList">
              <select id='spaceID' size='10' v-if="classes">
                <option v-for="place in classes" :key="place.id" :value='place.spaceID'>{{place.spaceID}}</option>
              </select>
            </div>
            <div class="floatBlock">
              <div class="label_container">
                <button type="submit" @click="reservePlace">예약</button>
              </div>
            </div>
        </div>
      </app-my-modal>
    </div>
  </transition>
</template>

<script>
import myModal from "./ReserveModal";
export default {
  name: "timeSelect",
  data() {
    return {
      visible: false,
      lists:[
          {index:0, name:'성호관'},
          {index:1, name:'율곡관'},
          {index:2, name:'다산관'},
          {index:3, name:'종합관'},
          {index:4, name:'원천관'},
          {index:5, name:'원천정보관'},
          {index:6, name:'서관'},
          {index:7, name:'신학생회관'},
          {index:8, name:'체육관'},
          {index:9, name:'운동장'}
      ],
      classes:[]
    };
  },
  props:{
    reserveTime:Number,
    reserveDate:Object,
    day:Number
  },
  components: {
    appMyModal: myModal
  },
  methods:{
    socketSend(){
      this.$socket.emit("callRefresh");
    },
    handleClickButton(){
      this.visible = !this.visible
    },
    showClasslist() {
      var obj = document.getElementById('faclist');
      var index = obj.selectedIndex;
      var value = obj.options[index].value;
      console.log(this.day)
      console.log(this.reserveTime)
      this.$http.post("http://localhost:8888/space/list",{
            placeName: value,
            day: this.day,
            time: this.reserveTime
          },
          { headers: { "x-access-token": localStorage.getItem("token") } }
        )
        .then(response => {
          this.classes = response.data.spaceList
          var array = this.classes.filter((element) => 
            !element.user)
          this.classes = array
        })
        .catch(function(error) {
          console.log(error.response.data.message);
        });
    },
    reservePlace(){
      if(confirm('확인을 누르면 자동으로 예약이 되며, 예약한 장소의 예약 목록 페이지로 넘어갑니다.') == true){

        var obj = document.getElementById('faclist');
        var index = obj.selectedIndex;
        var placeName = obj.options[index].value;
        obj = document.getElementById('spaceID');
        index = obj.selectedIndex;
        var spaceID = obj.options[index].value;

        this.$http.post('http://localhost:8888/space/reserve',{
        studentID: localStorage.getItem('studentID'),
        rDate:{
          year : parseInt(this.reserveDate.utc().format('YYYY Z')),
          month : parseInt(this.reserveDate.utc().format('M Z')),
          day : parseInt(this.reserveDate.utc().format('D Z')),
          hour : this.reserveTime
        },

        placeName : placeName,
        spaceID : spaceID,
        day : this.day,
        time : this.reserveTime

        },
         { headers: {'x-access-token': localStorage.getItem('token')} }
         ).then((response) => {
          console.log(response.data)
          alert('예약되었습니다.')
          this.socketSend()
          this.visible = !this.visible
          this.$router.push({path: '/menu/faclist/'+ placeName +'/'+ spaceID})
        }).catch(function (error){
            console.log(error.response.data)
        })
      }
    }
  }
};
</script>

<style scoped>
    .timeSelect {
      color:black;
    }
    .selectList {
      float:left;
    }
    .block{
      color:white;
      float:left; 
      width:100px;
      height:100px;
    }
    .floatBlock{
      clear:left;
    }
</style>

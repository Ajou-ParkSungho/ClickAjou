<template>
  <div class="bg">
    <header class="title-bar">
      <h1>예약을 원하시는 시간을 클릭하여 주세요.
        <br>
        강의실에 대한 정보를 확인하고 싶다면 아래의 {{ this.$route.params.name }}에 마우스를 올려주세요.
      </h1>
    </header>

    <div class="container">
      <div class="title">
        <hgroup>
          <div class="tooltip">
            <h1>{{ this.$route.params.name }} . {{ this.$route.params.where }}</h1>
            <span class="tooltiptext">
              <img v-bind:src="link" title class="tooltip-img">
            </span>
          </div>
          <p>{{ todayTime.format('M월 D일') }} ~ {{ tdatTime.format('M월 D일') }}</p>
        </hgroup>
      </div>
      <div class="schedule">
        <!-- Row 1 - Headings -->
        <p class="day no-border"></p>
        <p class="day day-1">오늘</p>
        <p class="day day-2">내일</p>
        <p class="day day-3 no-border">모레</p>

        <!-- Row 2 - Dates -->
        <p class="date no-border"></p>
        <p class="date">
          <strong>{{ todayTime.format('M월 D일') }} |</strong>
          {{ todayTime.format('ddd') }}
        </p>
        <p class="date">
          <strong>{{ tomoTime.format('M월 D일') }} |</strong>
          {{ tomoTime.format('ddd') }}
        </p>
        <p class="date no-border">
          <strong>{{ tdatTime.format('M월 D일') }} |</strong>
          {{ tdatTime.format('ddd') }}
        </p>

        <!-- Times -->
        <p class="time">7 시</p>
        <p class="time">9 시</p>
        <p class="time">11 시</p>
        <p class="time">13 시</p>
        <p class="time">15 시</p>
        <p class="time">17 시</p>
        <p class="time">19 시</p>
        <p class="time">21 시</p>
        <p class="time">23 시</p>

        <div
          v-for="today in todays"
          :key="'1'+today.time"
          v-bind:class="'seminar today t' + today.time"
          v-if="today.state===true"
        >
          <p class="seminar-title">{{ today.name }}님 예약</p>
          <button
            v-if="myReserve(today.name)"
            type="submit"
            @click="returnReserve(todayTime.format('YYYY-M-D'))"
          >취소</button>
        </div>
        <div v-bind:class="'seminar todaynot t' + today.time" v-else>
          <app-show-modal
            class="seminar-title modal"
            v-bind:reserveDate="todayTime"
            v-bind:reserveTime="today.time"
            :index="0"
          />
        </div>

        <div
          v-for="tomo in tomos"
          :key="'2'+tomo.time"
          v-bind:class="'seminar tomo t' + tomo.time"
          v-if="tomo.state===true"
        >
          <p class="seminar-title">{{ tomo.name }}님 예약</p>
          <button
            v-if="myReserve(tomo.name)"
            type="submit"
            @click="returnReserve(tomoTime.format('YYYY-M-D'))"
          >취소</button>
        </div>
        <div v-bind:class="'seminar tomonot t' + tomo.time" v-else>
          <app-show-modal
            class="seminar-title modal"
            v-bind:reserveDate="tomoTime"
            v-bind:reserveTime="tomo.time"
            :index="1"
          />
        </div>

        <div
          v-for="tdat in tdats"
          :key="'3'+tdat.time"
          v-bind:class="'seminar tdat t' + tdat.time"
          v-if="tdat.state===true"
        >
          <p class="seminar-title">{{ tdat.name }}님 예약</p>
          <button
            v-if="myReserve(tdat.name)"
            type="submit"
            @click="returnReserve(tdatTime.format('YYYY-M-D'))"
          >취소</button>
        </div>
        <div v-bind:class="'seminar tdatnot t' + tdat.time" v-else>
          <app-show-modal
            class="seminar-title modal"
            v-bind:reserveDate="tdatTime"
            v-bind:reserveTime="tdat.time"
            :index="2"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShowModal from "../../components/ShowModal";

export default {
  data() {
    return {
      todays: [
        { time: 7, state: "", name: String },
        { time: 9, state: "", name: String },
        { time: 11, state: "", name: String },
        { time: 13, state: "", name: String },
        { time: 15, state: "", name: String },
        { time: 17, state: "", name: String },
        { time: 19, state: "", name: String },
        { time: 21, state: "", name: String },
        { time: 23, state: "", name: String }
      ],
      tomos: [
        { time: 7, state: "", name: String },
        { time: 9, state: "", name: String },
        { time: 11, state: "", name: String },
        { time: 13, state: "", name: String },
        { time: 15, state: "", name: String },
        { time: 17, state: "", name: String },
        { time: 19, state: "", name: String },
        { time: 21, state: "", name: String },
        { time: 23, state: "", name: String }
      ],
      tdats: [
        { time: 7, state: "", name: String },
        { time: 9, state: "", name: String },
        { time: 11, state: "", name: String },
        { time: 13, state: "", name: String },
        { time: 15, state: "", name: String },
        { time: 17, state: "", name: String },
        { time: 19, state: "", name: String },
        { time: 21, state: "", name: String },
        { time: 23, state: "", name: String }
      ],
      todayTime: this.$moment(),
      tomoTime: this.$moment().add(1, "days"),
      tdatTime: this.$moment().add(2, "days"),
      link: require("../../assets/facilities/classImage/" +
        this.$route.params.name +
        "/" +
        this.$route.params.where +
        ".jpg")
    };
  },

  beforeMount() {
    this.getInfo();
  },

  methods: {
    socketSend(){
      this.$socket.emit("callRefresh");
    },
    myReserve(name) {
      if (localStorage.getItem("studentID") == name) return true;
      else return false;
    },
    returnReserve(date) {
      if (confirm("예약을 취소하시겠습니까?")) {
        this.$http
          .post(
            "http://localhost:8888/space/cancel-reservation",
            {
              studentID: localStorage.getItem("studentID")
            },
            { headers: { "x-access-token": localStorage.getItem("token") } }
          )
          .then(response => {
            console.log(response.data);
            alert('예약이 취소되었습니다.')
            this.socketSend()
            history.go(0)
          }).catch(function (error){
          alert(error.response.data.message)
      })
      }
    },
    getInfo() {
      this.$http.post("http://localhost:8888/space/list",{
            placeName: this.$route.params.name,
            spaceID: this.$route.params.where
          },
          { headers: { "x-access-token": localStorage.getItem("token") } }
        )
        .then(response => {
          console.log(response);

          var list = response.data.spaceList.filter(space => space.user);
          console.log(list);
          for (let i in list) {
            if (list[i].day == 0) {
              this.search(list[i], this.todays);
            } else if (list[i].day == 1) {
              this.search(list[i], this.tomos);
            } else if (list[i].day == 2) {
              this.search(list[i], this.tdats);
            }
          }
        })
        .catch(function(error) {
          console.log(error.response.data.message);
        });
    },
    search(nameKey, myArray) {
      for (var i = 0; i < myArray.length; i++) {
        if (myArray[i].time === nameKey.time) {
          myArray[i].state = true;
          myArray[i].name = nameKey.user.studentID
        }
      }
    }
  },
  components: {
    appShowModal: ShowModal
  }
};
</script>



<style scoped>
@import url("./reserve.css");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative;
}

body {
  font-family: "Montserrat", sans-serif;
}

.bg {
  background-position: center;
  background-size: cover;
  min-width: 100vw;
  min-height: 100vh;
  width: 100%;
  height: 100%;
}

.title-bar {
  background: rgb(0, 0, 0);
  color: white;
  height: 120px;
}

.title-bar h1 {
  text-align: center;
  text-transform: uppercase;
  font-size: 1.2rem;
  line-height: 60px;
  font-weight: 600;
}

.container {
  /*   padding: 1.5rem; */
  max-width: 90rem;
  margin: 0 auto;
  z-index: 2;
}

.title {
  font-family: "Barlow Condensed", sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  margin: 1.5rem auto;
  width: auto;
  display: block;
  color: #212121;
}

.title hgroup {
  width: auto;
  display: inline-block;
}

.title h1 {
  font-size: 3rem;
  line-height: 1;
}

.title p {
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  font-size: 1.3rem;
  line-height: 1;
}

.schedule {
  display: grid;
  grid-template-columns: 80px 33% 33% 33%;
  grid-template-rows: 50px 30px 11% 11% 11% 11% 11% 11% 11% 11% 11%;
  margin: 1.5rem 0 2.5rem;
  max-width: calc(100% - 80px);
  z-index: 1;
}

.day {
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.9rem;
  border-right: 1px solid #212121;
  text-align: center;
  padding: 0.5rem;
}

.day-1 {
  color: rgb(253, 168, 22);
}
.day-2 {
  color: rgb(41, 134, 106);
}
.day-3 {
  color: #2d4365;
}

.date {
  background: #212121;
  color: white;
  text-transform: uppercase;
  font-weight: 300;
  font-size: 0.9rem;
  text-align: center;
  padding: 0.5rem 0;
  border-right: 1px solid #aaa;
}

.time {
  background: #212121;
  color: white;
  padding: 0.5rem;
  text-transform: uppercase;
  font-size: 0.9rem;
  text-align: center;
  grid-column: 1 / span 1;
  border-top: 1px solid #aaa;
  padding: 1.2rem 0;
  line-height: 100%;
}

.seminar {
  background: rgba(255, 255, 255, 0.7);
  color: white;
  font-size: 20px;
  padding: 0.5rem;
  border-top: 1px solid #fff;
  font-weight: bold;
}

.seminar-title.modal {
  color: black;
}

.today {
  background: rgba(253, 168, 22, 0.7);
  grid-column: 2 / span 1;
}
.todaynot {
  background: rgba(134, 134, 134, 0.7);
  grid-column: 2 / span 1;
}

.tomo {
  background: rgba(41, 134, 106, 0.7);
  grid-column: 3 / span 1;
}
.tomonot {
  background: rgba(134, 134, 134, 0.7);
  grid-column: 3 / span 1;
}
.tdat {
  background: rgba(45, 67, 101, 0.7);
  grid-column: 4 / span 1;
}
.tdatnot {
  background: rgba(134, 134, 134, 0.7);
  grid-column: 4 / span 1;
}

.no-border {
  border: none;
}

.tooltip-img {
  width: 800px;
  height: 400px;
}
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: auto;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: -80%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
</style>

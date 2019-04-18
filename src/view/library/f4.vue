<template>
    <div class="f4">
      <h1>4층 (D1) 열람실</h1>
      <div class="mark">
        <img src="../../assets/library/일반on.png">일반 좌석 <img src="../../assets/library/노트북on.png">노트북 좌석 <img src="../../assets/library/평테on.png">평테이블 좌석
      </div>
        <div class="sector1">
        <div class="blank"></div>
        <table>
            <tr><td><br></td></tr>
            <tr><td><br></td><td colspan="2"><img class="toilet" src="../../assets/library/womanT.png"></td></tr>
            <tr><br><br><br><br><br></tr>
            <tr><td colspan="9"><img class="exit" src="../../assets/library/exit.png" title="출입구"></td></tr>
            <tr><br><br></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 476 && list.seatNum < 481 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" v-bind:floor="list.floor" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 481 && list.seatNum < 486 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 486 && list.seatNum < 493 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 493 && list.seatNum < 500 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 500 && list.seatNum < 507 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 507 && list.seatNum < 514 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 514 && list.seatNum < 521 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 521 && list.seatNum < 528 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 528 && list.seatNum < 535 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 535 && list.seatNum < 542 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 542 && list.seatNum < 549 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 549 && list.seatNum < 556 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 556 && list.seatNum < 563 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 563 && list.seatNum < 570 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 570 && list.seatNum < 577 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 577 && list.seatNum < 584 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 584 && list.seatNum < 589 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 589 && list.seatNum < 594 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr><td><br><br></td></tr>
          <tr><td colspan="9"><img class="exit" src="../../assets/library/exit.png" title="???"></td></tr>
          <tr><br><br><br></tr>
          <tr><td><br></td><td colspan="2"><img class="toilet" src="../../assets/library/manT.png"></td></tr>
        </table>
      </div>
      <div class="sector2">
        <div class="blank"></div>
        <table>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 594 && list.seatNum < 598 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 598 && list.seatNum < 602 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 602 && list.seatNum < 606 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 606 && list.seatNum < 610 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 610 && list.seatNum < 614 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 614 && list.seatNum < 618 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 618 && list.seatNum < 622 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 622 && list.seatNum < 626 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 626 && list.seatNum < 630 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 630 && list.seatNum < 634 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 634 && list.seatNum < 638 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 638 && list.seatNum < 642 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 642 && list.seatNum < 646 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 646 && list.seatNum < 650 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 650 && list.seatNum < 654 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 654 && list.seatNum < 658 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 658 && list.seatNum < 662 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 662 && list.seatNum < 666 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 666 && list.seatNum < 670 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 670 && list.seatNum < 674 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 674 && list.seatNum < 678 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 678 && list.seatNum < 682 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 682 && list.seatNum < 686 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 686 && list.seatNum < 690 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
        </table>
      </div>
      <div class="sector3">
        <div class="blank"></div>
        <table>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 690 && list.seatNum < 694 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 694 && list.seatNum < 698 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 698 && list.seatNum < 702 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 702 && list.seatNum < 706 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 706 && list.seatNum < 710 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 710 && list.seatNum < 714 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 714 && list.seatNum < 718 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 718 && list.seatNum < 722 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 722 && list.seatNum < 726 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 726 && list.seatNum < 730 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 730 && list.seatNum < 734 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 734 && list.seatNum < 738 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 738 && list.seatNum < 742 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 742 && list.seatNum < 746 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 746 && list.seatNum < 750 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 750 && list.seatNum < 754 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 754 && list.seatNum < 758 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 758 && list.seatNum < 762 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 762 && list.seatNum < 766 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 766 && list.seatNum < 770 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 770 && list.seatNum < 774 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 774 && list.seatNum < 778 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 778 && list.seatNum < 782 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 782 && list.seatNum < 786 && list.floor == 4"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
        </table>
      </div>
    </div>
</template>

<script>

import LibrarySeat from "../../components/LibrarySeat";

export default {
  name: "floor3", 
  data(){
    return {
      lists:[],

    }
  },
  components: {
    LibrarySeat
  },
  beforeMount() {
    this.getList()
  },
  methods:{
    getList(){
          this.$http.get('http://localhost:8888/library/list',{ headers: {'x-access-token': localStorage.getItem('token')} }
            ).then(response => {
          for(let i in response.data.seats){
            this.lists.push(response.data.seats[i])
            if (this.lists[i].type==0)
              this.lists[i].type = "일반"
            else if (this.lists[i].type==1)
              this.lists[i].type = "노트북"
            else
              this.lists[i].type = "평테"
          }
      }).catch(function (error){
          alert(error.response.data.message)
      })
    }
  }
};

</script>

<style scoped>

  .toilet {
    width:50px;
    height:75px;
  }
  .exit {
    float:right;
    height:40px;
    width:40px;
  }
  .f4 {
    display: grid;
    grid-template-columns: 33% 33% 33% 33%;
    margin-left:10%;
    background: rgba(255, 255, 255, 0.5);
    width:1250px;
    height:auto;
  }
.sector1 {
    padding:15px;
    grid-column: 1 / span 1;
    width:auto;
    height:auto;
  }

  .sector2 {
    padding:10px;
    grid-column: 2 / span 1;
    width:auto;
    height:auto;
  }

  .sector3 {
    padding:10px;
    grid-column: 3 / span 1;
    width:auto;
    height:auto;
  }

  table {
    padding: 0px;
    margin: 0px;
    margin-left:30%;
  }
</style>

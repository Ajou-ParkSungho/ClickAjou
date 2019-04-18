<template>
    <div class="f3">
      <h1>3층 (C1) 열람실</h1>
      <div class="mark">
        <img src="../../assets/library/일반on.png">일반 좌석 <img src="../../assets/library/노트북on.png">노트북 좌석 <img src="../../assets/library/평테on.png">평테이블 좌석
      </div>
        <div class="sector1">
        <table>
          <tr><td><br></td></tr>
          <tr><td><br></td><td colspan="2"><img class="toilet" src="../../assets/library/womanT.png"></td></tr>
          <tr><br><br><br><br><br></tr>
          <tr><td colspan="9"><img class="exit" src="../../assets/library/exit.png" title="출입구"></td></tr>
          <tr><td><br><br><br><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum < 10 && list.floor == 3"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 10 && list.seatNum < 19 && list.floor == 3"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 19 && list.seatNum < 28 && list.floor == 3"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 28 && list.seatNum < 37 && list.floor == 3"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 37 && list.seatNum < 46 && list.floor == 3"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 46 && list.seatNum < 55 && list.floor == 3"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 55 && list.seatNum < 64 && list.floor == 3"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 64 && list.seatNum < 73 && list.floor == 3"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 73 && list.seatNum < 82 && list.floor == 3"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 82 && list.seatNum < 91 && list.floor == 3"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 91 && list.seatNum < 100 && list.floor == 3"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 100 && list.seatNum < 109 && list.floor == 3"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 109 && list.seatNum < 118 && list.floor == 3"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 118 && list.seatNum < 127 && list.floor == 3"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 127 && list.seatNum < 136 && list.floor == 3"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 136 && list.seatNum < 145 && list.floor == 3"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 145 && list.seatNum < 154 && list.floor == 3"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 154 && list.seatNum < 163 && list.floor == 3"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 163 && list.seatNum < 172 && list.floor == 3"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 172 && list.seatNum < 181 && list.floor == 3"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br><br></td></tr>
          <tr><td colspan="9"><img class="exit" src="../../assets/library/exit.png" title="출입구"></td></tr>
          <tr><br><br><br><br><br></tr>
          <tr><td><br></td><td colspan="2"><img class="toilet" src="../../assets/library/manT.png"></td></tr>
        </table>
      </div>
      <div class="sector2">
        <div class="blank"></div>
        <table>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 181 && list.seatNum < 186 && list.floor == 3"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 186 && list.seatNum < 191 && list.floor == 3"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 191 && list.seatNum < 196 && list.floor == 3"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 196 && list.seatNum < 201 && list.floor == 3"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 201 && list.seatNum < 206 && list.floor == 3"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br><br><br><br><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 206 && list.seatNum < 211 && list.floor == 3"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 211 && list.seatNum < 216 && list.floor == 3"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 216 && list.seatNum < 221 && list.floor == 3"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 221 && list.seatNum < 226 && list.floor == 3"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 226 && list.seatNum < 231 && list.floor == 3"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 231 && list.seatNum < 236 && list.floor == 3"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 236 && list.seatNum < 241 && list.floor == 3"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 241 && list.seatNum < 246 && list.floor == 3"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 246 && list.seatNum < 251 && list.floor == 3"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 251 && list.seatNum < 256 && list.floor == 3"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 256 && list.seatNum < 261 && list.floor == 3"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 261 && list.seatNum < 266 && list.floor == 3"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 266 && list.seatNum < 271 && list.floor == 3"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 271 && list.seatNum < 276 && list.floor == 3"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 276 && list.seatNum < 281 && list.floor == 3"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 281 && list.seatNum < 286 && list.floor == 3"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 286 && list.seatNum < 291 && list.floor == 3"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 291 && list.seatNum < 296 && list.floor == 3"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 296 && list.seatNum < 301 && list.floor == 3"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 301 && list.seatNum < 306 && list.floor == 3"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br><br><br><br><br><br><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 306 && list.seatNum < 311 && list.floor == 3"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 311 && list.seatNum < 316 && list.floor == 3"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 316 && list.seatNum < 321 && list.floor == 3"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 321 && list.seatNum < 326 && list.floor == 3"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 326 && list.seatNum < 331 && list.floor == 3"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 331 && list.seatNum < 336 && list.floor == 3"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
        </table>
      </div>
      <div class="sector3">
        <div class="blank"></div>
        <table>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 336 && list.seatNum < 340"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 340 && list.seatNum < 344"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 344 && list.seatNum < 348"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 348 && list.seatNum < 352"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 352 && list.seatNum < 356"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 356 && list.seatNum < 360"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 360 && list.seatNum < 364"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 364 && list.seatNum < 368"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 368 && list.seatNum < 372"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 372 && list.seatNum < 376"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 376 && list.seatNum < 380"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 380 && list.seatNum < 384"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 384 && list.seatNum < 388"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 388 && list.seatNum < 392"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 392 && list.seatNum < 396"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 396 && list.seatNum < 400"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 400 && list.seatNum < 404"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 404 && list.seatNum < 408"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 408 && list.seatNum < 412"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 412 && list.seatNum < 416"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 416 && list.seatNum < 420"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr><tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 420 && list.seatNum < 424"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 424 && list.seatNum < 428"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 428 && list.seatNum < 432"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 432 && list.seatNum < 436"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 436 && list.seatNum < 440"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 440 && list.seatNum < 444"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 444 && list.seatNum < 448"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 448 && list.seatNum < 452"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 452 && list.seatNum < 456"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 456 && list.seatNum < 460"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 460 && list.seatNum < 464"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 464 && list.seatNum < 468"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr><td><br></td></tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 468 && list.seatNum < 472"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
          </tr>
          <tr>
            <td v-for="list in lists" :key="list.seatNum" v-if="list.seatNum >= 472 && list.seatNum < 476"><library-seat v-bind:type="list.type" v-bind:user="list.user" v-bind:seatNum="list.seatNum" /></td>
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
  .f3 {
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

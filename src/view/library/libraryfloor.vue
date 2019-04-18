<template>
<transition name="slide">
  <div class="libraryfloor">
    <p>도서관은 3층과 4층에 열람실이 있습니다.</p>
    <p>원하시는 열람실 구역을 선택해주세요. </p>
    <div>
      <p><router-link to="/menu/libraryfloor/3"><img src="../../assets/library/3층.png"></router-link><br />
      </p>
    </div>
    <div>
      <p><router-link to="/menu/libraryfloor/4"><img src="../../assets/library/4층.png"></router-link><br />
      </p>
    </div>
  </div>
</transition>
</template>


<script>

</script>

<style scoped>
  img {
    width:900px;
    height:600px;
  }
</style>

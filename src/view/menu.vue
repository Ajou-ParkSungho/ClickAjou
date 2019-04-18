
<template>
<transition name="main-fade">
  <div class="menu">
    <router-link to="/menu/facmenu"><img src="../assets/MainMenu/시설이용.png" title="시설이용"/></router-link>
    <router-link to="/menu/librarymenu"><img src="../assets/MainMenu/도서관이용.png" title="도서관이용"/></router-link>
  </div>
</transition>
</template>

<style>

  .menu img {
    margin: 50px
  }

</style>


<template>
 <div class="containerMainPage">
   <div class="row">
    <div class="btn-home col-sm-6 col-md-3">
      <router-link :to="{path: '/cursos'}">
      <img src="../images/HOME/COURSE_BTN.png"> 
      Courses
      </router-link>

     </div>
    <div class="btn-home col-sm-6 col-md-3"><img src="../images/HOME/INNOVA_BTN.png"> Innovation </div>
    <div class="btn-home col-sm-6 col-md-3"><img src="../images/HOME/ACHIEVE_BTN.png">Archievements </div>
    <div class="btn-home col-sm-6 col-md-3"><img src="../images/HOME/GAME_BTN.png"> Games </div>
   </div>
   <br>
   <div class=" row">
    <div class="btn-home col-sm-6 offset-md-1 col-md-3"><img src="../images/HOME/STORE_BTN.png"> Courses </div>
    <div class="btn-home col-sm-6 col-md-3"><img src="../images/HOME/SOCIAL_BTN.png"> Social network </div>
    <div class="btn-home col-sm-6 col-md-3"><img src="../images/HOME/REPORT_BTN.png">Report </div>
   </div>
</div> 

</template>

<style>
.btn-home{
  text-align: center;
}

.offset-md-1 {
      margin-left: 11% !important;
}

</style>

<script>
import $ from 'jquery';

</script>
<template>
 <div class="containerMainPage">
   <section class="header-courses">
     
     <div id="menuNavCourses">
       <router-link class="basix-home" :to="{path: '/'}">
       <img src="../images/home.png"> 
       </router-link> 
       <span class="text1">Cursos</span>
       </div> 
       <div>Buscador</div>
     

   </section>
   <br>
   <section id="buttonsModules" class="buttonsCourses row">
      <div class="col-sm-12 col-md-6 col-lg-4 btn-course">
          <div class="done-image">
              <img  src="../images/CURSOS/CASTLE_DONE.png">
          </div>  
          <div class="text-courses-btn">
              Introducción<br>
              <span>1 módulo</span> 
          </div> 
      </div>
      <div id="launchScorm" class="col-sm-12 col-md-6 col-lg-4 btn-course-done">
          <div class="done-image">
              <img  src="../images/CURSOS/CASTLE_UNDONE.png">
          </div>  
          <div class="text-courses-btn">
              Ventas<br>
              <span>4 módulos</span> 
          </div> 
      </div>
      <div class="col-sm-12 col-md-6 col-lg-4 btn-course-na">
          <div class="done-image">
              <img  src="../images/CURSOS/CASTLE_UNDONE.png">
          </div>  
          <div class="text-courses-btn">
              Recursos humanos<br>
              <span>1 módulo</span> 
          </div> 
      </div>
   </section>
<section id="courseScorm">
  <div class="header-courses">
        <div class="titleCourse">Ventas</div>
      <div class="navCourse">
        <div id="backButton">
          <img src="../images/CURSOS/NEXT_BTN.png">
        </div>

        <div id="nextButton">
          <img src="../images/CURSOS/NEXT_BTN.png">
        </div>
      </div>
  </div>
  <div id="loadCourse">
      <video id="slide1" class="objVideo" controls>
        <source src="" type="video/mp4">
      </video>
      <div id="slide2" class="row">
        <div class="col-sm-6">
          "Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim
           ad minim veniam, quis nostrud exercitation ullamco 
           laboris nisi ut aliquip ex ea commodo consequat. 
           Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident,
             sunt in culpa qui officia deserunt mollit anim id est
             laborum."
        </div>
         <div class="col-sm-6">
           <img class="responsive-image" src="../images/CURSOS/link.jpg">
           </div> 
      </div>

  </div>
  <div id="timeLineCourse">
    <img id="localitation" src="../images/CURSOS/LOCATION.png">
    <div><img src="../images/CURSOS/PLACE_UNDONE.png"></div>
    <div><img src="../images/CURSOS/PLACE_UNDONE.png"></div>
    <div id="theme3">

      <img src="../images/CURSOS/CASTLE_UNDONE.png">  
      <img src="../images/CURSOS/PLACE_UNDONE.png">
    </div>
    </div>


</section>

</div> 


</template>

<script>

</script>

<style>

#launchScorm{
  cursor: pointer;
}

#localitation{
  position: absolute;
  transform: translate(50%,-50%);
}

#theme3 img:nth-child(1){
  position:absolute;
  z-index: 1;

}

#timeLineCourse{
  margin-top: 30px;
  background-color: #fcdb5c;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.objVideo{
  width: 100%;
}

.titleCourse{
  text-align: center;
  font-weight: bold;
  width: 100%;
  margin-left: 10%;
  font-size: 2vw;
}

#backButton{
  transform: rotateY(180deg);
}

.navCourse{
  display:flex;
  align-items: center;
}

.done-image{
  width: 60%;
}

.done-image img{
    width: 100%;
    transform: translate(-30%,-5%) scale(0.5);
}

.text-courses-btn{
  width: 70%;
  font-size: 0.7em;
}
.btn-course-done,
.btn-course-na,
.btn-course{
  background-image:url("../images/CURSOS/COURSE_UNDONE.png");
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
align-items: center;
  width: 100%;
}
.btn-course-done{
  background-image:url("../images/CURSOS/COURSE_DONE.png");
  color: #FFF;
}

.btn-course-na{
  background-image:url("../images/CURSOS/COURSE_NA.png");
}



.buttonsCourses{
  display: flex;
  justify-content: space-between;
  align-items: center;
    


}

.header-courses{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text1{
  color:#3db2b2;
  border:3px solid #3db2b2;
  padding: 10px;
  border-radius: 30px;
  cursor:pointer;
}


.text1-active{
  background-color:#3db2b2;
  border:3px solid #3db2b2;
  color:#FFF;
}

</style>
<script>

  $(function() {
    //Init states
      $("#slide2").hide();
      $("#buttonsModules").show();
      $("#courseScorm").hide();

      $(".text1").click(function(){
          $("#slide2").hide();
          $("#buttonsModules").show();
          $("#courseScorm").hide();
          $(".text1").removeClass("text1-active");
          $("#courseActive").remove();
      });

      $("#launchScorm").click(function(){
         $("#buttonsModules").hide();
         $("#courseScorm").show();
         $(".text1").addClass("text1-active");
         $("#menuNavCourses").append('<span id="courseActive" class="text1">Ventas</span>')
      });

      $("#nextButton").click(function(){
          $("#slide1").hide();
          $("#slide2").show();
      });


      $("#backButton").click(function(){
          $("#slide2").hide();
          $("#slide1").show();
      });

  });

</script>

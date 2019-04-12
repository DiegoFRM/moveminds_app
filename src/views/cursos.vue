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
    <div class="window-finish-eva">
        <div class="finish-eva1"> 
          <div class="finish-title">
            Resultados
          </div>
          <div class="close-window">
            <img src="../images/CURSOS/window_evaluation-04.png">
          </div>
        </div>
        <div class="finish-eva1">
            <div class="item-avatar-canvas">
              <img src="../images/CURSOS/window_evaluation-02.png">
            </div>

            <div class="item-avatar-canvas">
              <div class="chart-download-courses">
                <canvas id="download-chart-courses" width="140px" height="140px"></canvas>
                <span id="gauge-value-courses"> % </span>
              </div>  
            </div>
        </div>
        <div class="text-info-windowcourse">
            ¡Evaluación aprovada!
            <br>Tu calificación obtenida es:
        </div>
        <div class="points-windowcourse">
            100
        </div>
        <div class="congratulations-windowcourse">
            ¡Felicidades!
        </div>
        <div  class="finish-eva1">
            <div>
                Aciertos: 2/2
            </div>
            <div class="corrects-images">
                <img src="../images/CURSOS/window_evaluation-06.png">
                <img src="../images/CURSOS/window_evaluation-06.png">
            </div>
        </div>
        <div class="finish-eva2">
            <div class="coins-badges">
                <img src="../images/CURSOS/movecoins.png">
                <span> $3000</span>
            </div>
            <div class="coins-badges">
              <img src="../images/CURSOS/BADGE.png">
              <span>2</span>
            </div>
        </div>
        <div class="continue-btn">
            Continuar
        </div>
      </div>

</section>

</div> 


</template>

<style>

.corrects-images{
  width: 60%;
  border-radius: 2vw;
  border:2px solid #cccccc;
  text-align: center;
}

.continue-btn{
  position:relative;
  background-color: #FF5361;
  width: 50%;
  text-align: center;
  left: 50%;
  color: #FFF;
  border-radius: 1vw;
  padding: 0.5vw;
  transform: translate(-50%,0%);
}

.coins-badges{
  width: 40%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 2vw;
  border:2px solid #cccccc;
}

.congratulations-windowcourse{
  background-image: url("../images/CURSOS/window_evaluation-03.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  text-align: center;
  color:#FFF;
  font-size: 30px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}

.points-windowcourse{
  text-align: center;
  font-size: 30px;
  color:#ABC43A;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;

}

.text-info-windowcourse{
  text-align: center;
}

.chart-download-courses{

}

.item-avatar-canvas{
  width: 50%;
  text-align: center;
}

  #gauge-value-courses {
      color: #000 !important;
      text-anchor: middle;
      font-family: Arial;
      font-size: 29px;
      font-weight: bold;
      fill-opacity: 1;
      position: absolute;
      left: 45%;
      top: 38%;
      display:none;
  }

  #gauge-value-courses:after{
    content: "%";
  }


.finish-title{
  color:#FF5361;
  font-weight: bold;
}

.finish-eva2{
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1vw;
}

.finish-eva1{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1vw;
}

.window-finish-eva{
    background-color:#FFF;
    position:fixed;
    width:30%;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    border-radius: 1vw;
    border:2px solid #CCCCCC;
    padding: 1vw;
}


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
  border-radius: 1vw;
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

import Vue from 'vue';
import { Donut, Gauge } from 'gaugeJS';
export default {

      methods:{

            myFunctionOnLoad: function() {
            loadActions();

        }

      },

      created: function(){

        this.myFunctionOnLoad()

      },
mounted () {
          var opts = {
            lines: 14,
            angle: 0.5,
            lineWidth: 0.15,
            limitMax: 'false', 
            percentColors: [ [1, "#ff0000"]],
            strokeColor: '#ffa726',
            generateGradient: false,
            highDpiSupport: false,


            colorStart: '#ABC43A',
            colorStop: '#2DB2B1', 
            strokeColor: '#e6e9ec',
            generateGradient: true
          };
          var target = document.getElementById('download-chart-courses');
          var gauge = new Donut(target).setOptions(opts);
          gauge.maxValue = 100;
          gauge.animationSpeed = 40;
          gauge.set(90);
          
          gauge.setTextField(document.getElementById("gauge-value-courses"));

   }    

    }

function loadActions(){
  $(function() {

$("#loadCourse").load("../courses/demo/index.html");


    //Init states
      //$("#slide2").hide();
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
}
</script>

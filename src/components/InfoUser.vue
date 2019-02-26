<template>
<!--
<section class="mainContainer">
        <div class="avatar">
            <img  class="avatar_img" src="../images/avatar/avatar_movemind.png">                    
        </div>

     <div id="SectionadvanceUser" class="advanceUser">
              <div class="chart-download">
                <canvas id="download-chart2" width="113px" height="113px"></canvas>
                <span id="gauge-value"> % </span>
              </div> 
      </div>          

</section>
 -->

        <div class="mainContainer">
            <div  class="main_infouser">
                    <div class="avatar">
                        <img @mousedown="handleClick" class="avatar_img" src="../images/avatar/avatar_movemind.png">
                    </div>
            </div>
                <div class="valuesUser">
                <section id="SectionadvanceUser" class=" advanceUser">
              <div class="chart-download">
                <canvas id="download-chart2" width="113px" height="113px"></canvas>
                <span id="gauge-value"> % </span>
              </div>  
                    
                    <img class="image_level" src="../images/level_user.png">

                    <div class="level-user"><p>Nivel</p>
                        <span>3</span>
                    </div>
                    <div class="bg_names_user">
                        <div class="name_infouser">
                            <span><b>Faustino Chávez Galindo</b> </span><br>
                            <span>Copy jr.</span>
                        </div>
                        
                    </div>
                    
                    </section>
                    <section id="data-user-section" class="">
                        <div id="data-user-child" class="data-user">
                            <div> <img src="../images/user-icons-02.png"> $3,000</div>
                            <div class="line"></div>
                            <div> <img src="../images/user-icons-03.png"> 0</div>
                            <img class="buy-icon" src="../images/user-icons-04.png"> 
                        </div>
                        <div id="badge-count" class="badge-count">
                            <img src="../images/user-icons-05.png">
                            <span>2</span>
                            </div>
                    </section>
                </div>
                
                    
        </div>
</template>


<style>

    .valuesUser{
    width: 70%;
    max-width: 600px;
    }

    .avatar{
    position: relative;
    text-align: center;
    padding: 1vw;
    }  

    .main_infouser{
        position: relative;
        color: #FFF;
        width: 27%;
        height: 100%;
    }
   
    .avatar_img{

    position: relative;
    width: 80%;
    transition: width 0.5s;
    max-width: 200px;
    }

.chart-download{
    position: absolute;
    z-index: 1;
    margin-left: 50px;
    margin-top: 2px;
}

  #gauge-value {
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

  #gauge-value:after{
    content: "%";
  }


    .badge-count{
    width: 30%;
    background-color: yellowgreen;
    border-radius: 3vw;
    margin: 2vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color:#FFF;
    }

    .buy-icon{
    transform: translate(30%, -3%);
    height: 100%;
    }

    .line{
    width: 2px;
    height: 80%;
    background-color: gray;
    }

    #data-user-section{
    margin-bottom: 0%;
    border-radius: 3vw;
    display:flex;
    justify-content: space-around;
    align-items: center;
    font-size: 2vw;
    text-align:center;
    transition: all 1s;
    widows: 100%;
    }



   .advanceUser{
        display: flex;
        align-items: center;
        margin-left: -10%;
         transition: all 0.5s;
    }

    .SectionadvanceUser-show{
       
    }

    .data-user{
    background-color: #FFF;
    margin-bottom: 0%;
    margin-top: 0%;
    border-radius: 3vw;
    display:flex;
    justify-content: space-around;
    align-items: center;
    font-size: 2vw;
    text-align:center;
    height: 50px;
    transition: all 1s;
    width: 100%;
    }

    .mainContainer{
        background: #1A1D2D;
        display: flex;
        align-items: center;
    }

    .bg_names_user{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .name_infouser{
        background-color: #FFF;
        padding: 1vw;
        border-radius: 0 3em 3em 0em; 
        width: 100%;
        height: 6em;
        font-family:Verdana, Geneva, Tahoma, sans-serif;
        color:#333333;
    }

    .points_user{
        background-color: #FFF;
    }

    .image_level{
        transform: translate(35%,0);
    }

    .level-user{
    position: absolute;
    /* left: 100px; */
    font-size: 30px !important;
       margin-top: -1%;
    margin-left: 87px;
    }

    .level-user span{
        width: 100%;
        position: absolute;
        text-align: center;
        top: 20px;
        font-weight: bold;
    }

    .name_infouser span{
        margin-left: 2em;
    }



    .show{
        position:relative;
        width: 50%;
        transition: width 0.5s;
    }
   
    .showInfo1{
    } 

</style>


<script>
import Vue from 'vue';
import { Donut, Gauge } from 'gaugeJS';

export default{
    name: 'infouser',
    props: {
    },
    components: {
    },
    methods: {
        mouseOver: function(e){
          console.log( e.target );
        },
        handleClick (e) {
            console.log(e.target)
          e.target.classList.toggle('show');
          document.getElementById("SectionadvanceUser").classList.toggle('SectionadvanceUser-show');
          document.getElementById("data-user-section").classList.toggle('data-userShow');
          document.getElementById("data-user-child").classList.toggle('show-child-data');
          document.getElementById("badge-count").classList.toggle('badge-count-show');
   
   
   }
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
          var target = document.getElementById('download-chart2');
          var gauge = new Donut(target).setOptions(opts);
          gauge.maxValue = 100;
          gauge.animationSpeed = 40;
          gauge.set(90);
          
          gauge.setTextField(document.getElementById("gauge-value"));

   }    
}



</script>





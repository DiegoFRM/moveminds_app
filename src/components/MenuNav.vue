<template>
    <aside class="sideMenu">
        <div class="menu_item">
            <span class="zone-Active"  @mouseover="mouseOver" @mouseleave="mouseOut"  data=0></span>
            <span class="text-nav" style=" background-color:#3db2b2;">
              Cursos 
            </span>
            <div class="image-nav">
                <img src="../images/elementos/CURSOS_MINIBTN.svg">
            </div> 
        </div>

        <div class="menu_item">
            <span class="zone-Active"  @mouseover="mouseOver" @mouseleave="mouseOut" data=1></span>
            <span class="text-nav" style="background-color:#00c674;">
              Inovación 
            </span>
            <div class="image-nav">
                <img src="../images/elementos/INNOVACION_MINIBTN.svg">
            </div>
        </div>

        <div class="menu_item" >
            <span class="zone-Active"  @mouseover="mouseOver" @mouseleave="mouseOut" data=2></span>
            <span class="text-nav" style="background-color:#FF9F45;">
              Éxito 
            </span>
            <div class="image-nav">
                <img src="../images/elementos/H_EXITO_MINIBTN.svg">
            </div>
        </div>

        <div class="menu_item">
            <span class="zone-Active"  @mouseover="mouseOver" @mouseleave="mouseOut" data=3></span>
            <span class="text-nav" style="background-color:#1B689E;">
              Social 
            </span>
            <div class="image-nav">
                <img src="../images/elementos/SOCIAL_MINIBTN.svg">
            </div>
        </div>

        <div class="menu_item" >
            <span class="zone-Active"  @mouseover="mouseOver" @mouseleave="mouseOut" data=4></span>
            <span class="text-nav" style="background-color:#FF5361;">
              Tienda 
            </span>
            <div class="image-nav">
                <img src="../images/elementos/TIENDA_MINIBTN.svg">
            </div>
        </div>

    </aside>



</template>

<style>
    .sideMenu{
    display: table-cell;
    height: 100vh;
    padding: 0 25px;
    vertical-align: top;
    width: 25%;
    transition: width 0.3s ease; 
    }

    .menu_item{
        position: relative;
        width: 100%;
        display: flex;
        justify-content:space-around;
        align-items:center;
        border-radius: 25px;
        color:#FFF;
        margin: 1vw;
        cursor: pointer;
    } 

    .zone-Active{
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 12;
    }

    .image-nav{
        width:50%;
        min-width: 40px;
        max-width: 85px;
         position: relative;
         right: 0;
          transition: margin-left 0.5s;
    }


    .text-nav{
        padding: 10%;
        width: 0%;
        border-radius: 25px 30px 30px 25px;
        position: absolute;
        overflow: hidden;
        transition: width 0.5s;
    }

    .showText{
        width: 90%;       
    }


</style>

<script>

var imagesMenu = [
    "CURSOS_MINIBTN",
    "INNOVACION_MINIBTN",
    "H_EXITO_MINIBTN",
    "SOCIAL_MINIBTN",
    "TIENDA_MINIBTN"
];


export default{
    name: 'sidebar',
    props: {
        navItems: {
          type: Array,
          required: true,
          default: () => []
      }
    },
    components: {
    },
    methods: {
        mouseOver: function(e){
           e.target.parentElement.querySelector('.text-nav').classList.add("showText");
           e.target.parentElement.querySelector('.image-nav').style.marginLeft = "60%";
           var indextarget =  e.target.attributes.data.value;
           var image = e.target.parentElement.querySelector('.image-nav').querySelector("img");
           image.src = "dist/" + imagesMenu[indextarget] + "_OVER.svg";
        },
         mouseOut: function(e){
           e.target.parentElement.querySelector('.text-nav').classList.remove("showText");
           e.target.parentElement.querySelector('.image-nav').style.marginLeft = "0";
           var indextarget =  e.target.attributes.data.value;
           var image = e.target.parentElement.querySelector('.image-nav').querySelector("img");
           image.src = "dist/" + imagesMenu[indextarget]  + ".svg";
           
        },
        handleClick (e) {
          e.preventDefault()
          e.target.parentElement.classList.toggle('show')
      }
    }
}



</script>

<template>
        <header id="basix-header" class="movemind-header">
            <div class="header">
                <div class="logo">
                    <img class="desklogo" src="../images/logo_moveminds.png">
                </div>
                <div class="icons-menusection">

                    <div class="btnMenu mobilelogo">
                        <img src="../images/logo.png">
                    </div>

                    <div class="btnMenu">
                        <img src="../images/bell.png">
                    </div>

                    <div class="btnMenu">
                        <img src="../images/mail.png">
                    </div>
                    <div class="btnMenu">
                        <img src="../images/help.png">
                    </div>
                    <div class="btnMenu">
                        <img src="../images/menu_drop.png">
                    </div>
                </div>
            </div>
        </header><!-- /header -->
</template>
<style>
    .desklogo{
        visibility: hidden;
    }

    .mobilelogo{
        visibility:visible;
    }

    .logo{
        visibility:hidden;
        padding: 1vw;

    }

    .icons-menusection{
        display:flex;
        justify-content: space-around;
        align-items: center;
        margin-top: -60px;
    }

    .header{
        display:block;
        justify-content: space-around;
        align-items: center;
    }

     .btnMenu{
        height: 80%;
    }

    .btnMenu img{
        padding: 1vw;
        width: 50px; 
    }




    header .form-inline .search-form button{
        cursor: pointer;
    }

    .movemind-header{
        background-color: #51547D !important;
    }


@media (min-width: 576px){

  .header{
        display:flex;
        justify-content: space-between;
        align-items: center;
    }

    .icons-menusection{
        margin-top: 0px;
    }

    .logo{
        visibility:visible;
    }

    .desklogo{
        visibility: visible;
    }

    .mobilelogo{
        visibility:hidden;
    }

}

</style>

<script>
    export default {
    name: 'basix-header',
    data (){

    },
    methods: {


      }
    }
</script>


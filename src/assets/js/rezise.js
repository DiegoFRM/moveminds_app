
$(window).ready(function(){
var scaleTemplate = 1;  
var sourceHeigth = 650;
var sourceWidth = 1024;
var contentHeigth = $(window).height();
var contentWidth = $(window).width();     
var _scaleX = contentWidth/sourceWidth;
var _scaleY = contentHeigth/sourceHeigth;  
    
if(_scaleX <= _scaleY){
    scaleTemplate = _scaleX ;
}
else
{
    scaleTemplate = _scaleY; 
} 

if(scaleTemplate>=1.3) 
{
    scaleTemplate = 1.3;  
}     

$('#wrapper').css("transform", "scale("+ scaleTemplate +")");
    
if(navigator.appName.indexOf("Internet Explorer")!=-1){     //yeah, he's using IE
    var badBrowser=(
        navigator.appVersion.indexOf("MSIE 9")==-1 &&   //v9 is ok
        navigator.appVersion.indexOf("MSIE 1")==-1  //v10, 11, 12, etc. is fine too
    );

    if(badBrowser){
        $('#wrapper').css("zoom", scaleTemplate);

    }
}      
    
$('#wrapper').height((sourceHeigth*scaleTemplate)/8);
$('#wrapper').width((sourceWidth*scaleTemplate)/8);
$('#wrapper').css("margin-top", "-"+((sourceHeigth*scaleTemplate))/2  +"px");
$('#wrapper').css("margin-left", "-"+((sourceWidth*scaleTemplate))/2  +"px");

/*
$('#wrapper').css("zoom", scaleTemplate);     
*/

});

$(window).resize(function() {
var scaleTemplate = 1;  
var sourceHeigth = 650;
var sourceWidth = 1024;
var contentHeigth = $(window).height();
var contentWidth = $(window).width();     
var _scaleX = contentWidth/sourceWidth;
var _scaleY = contentHeigth/sourceHeigth;  
    
if(_scaleX <= _scaleY){
    scaleTemplate = _scaleX ;
}
else
{
    scaleTemplate = _scaleY; 
} 

if(scaleTemplate>=1.3) 
{
    scaleTemplate = 1.3;  
}     

$('#wrapper').css("transform", "scale("+ scaleTemplate +")");
    
if(navigator.appName.indexOf("Internet Explorer")!=-1){     //yeah, he's using IE
    var badBrowser=(
        navigator.appVersion.indexOf("MSIE 9")==-1 &&   //v9 is ok
        navigator.appVersion.indexOf("MSIE 1")==-1  //v10, 11, 12, etc. is fine too
    );

    if(badBrowser){
        $('#wrapper').css("zoom", scaleTemplate);

    }
}      
    
$('#wrapper').height((sourceHeigth*scaleTemplate)/8);
$('#wrapper').width((sourceWidth*scaleTemplate)/8);
$('#wrapper').css("margin-top", "-"+((sourceHeigth*scaleTemplate))/2 +"px");
$('#wrapper').css("margin-left", "-"+((sourceWidth*scaleTemplate))/2  +"px");
    

/*
$('#wrapper').css("zoom", scaleTemplate);     
*/

}); 
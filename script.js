$("#menu").on('mouseover',function(){
    console.log("mouseover");
});

$("#logo").on('click',function(){
    console.log("The img was clicked!")
});

$('#menu').on('click', function(){
    $('nav').collapse();
});
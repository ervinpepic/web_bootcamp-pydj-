// $("h1").click(function () {
//   console.log("You just clicked");
// });

// var x = $("h1");
// x.css("color", "red");
// x.css("background", "blue");
// var newCSS = {
//   color: "white",
//   background: "blue",
//   border: "red",
// };
// x.css(newCSS);

// var listItems = $("li");
// listItems.css("color", "blue");
// listItems.eq(0).css("color", "orange");
// listItems.eq(-1).css("color", "green");
// $("h1").text("Brand New Text");
// $("h1").html("<em>New</em>");
// // $("input").eq(1).attr("type", "checkbox");
// // $("input").eq(0).attr("placeholder", "Hello");
// $("h1").addClass("turnRed");

// $("li").click(function () {
//   console.log("Any was clicked");
// });

// $("h1").click(function () {
//   $(this).text("I was changed");
// });

// $('input').eq(0).keypress(function(event){
//     // $('h1').toggleClass('turnRed');
//     if (event.which === 113) {
//         $('h1').toggleClass('turnBlue');
//     }
    
// });
// $('h1').on('mouseenter', function(){
//     $(this).toggleClass('turnBlue');
// });

$('input').eq(1).on('click', function(){
    $(this).slideUp(3000);
});
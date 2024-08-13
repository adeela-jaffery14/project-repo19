//
/* can use these in browser console:
console.log($('h1').css("font-size")); - after .css in the brackets if we have one 
property - it is to check its value
$("h1").hasClass("margin-50");
$("h1").addClass("margin-50") similary removeClass
Add multiple classes by separating them with a space


--With Vanilla JS: this is how we would do change color of h1 on a click event--
let btnsLength = document.querySelectorAll(".btn").length



$("h1").before("<button>NEW</button>");

$("h1").prepend("<button>NEW</button>");

$("h1").append("<button>NEW</button>");


for (var i = 0; i < btnsLength; i++) { 
    document.querySelectorAll(".btn")[i].addEventListener("click", function() { 
        document.querySelector("h1").style.color = "teal";
    });
}
*/

//With jQuery, this is how we would change the color of h1 on a click event:

$("button").click(function () { 
    $("h1").css("color", "teal");
});

$(document).keypress(function(event) { 
    $("h1").html(event.key);
})

$(document).ready(function() { 
    $(document).on("mouseover", function(){ 
$("img").attr("src", "images/icon-1379228_640.png");
$("a").attr("href", "https://www.google.com")

$(".btn").remove();

$("button").text("Click Here");

})
});


$(":button").on("click", function() { 
    $("h1").css("color", "teal").slideUp().animate({fontSize: "2rem"}).text("This is done using jQuery.").slideDown();
    ("h1").slideToggle();
});









/*$("button").on("click", function() { 
    $("h1").hide();
})
    $("button").on("click", function() { 
    $("h1").show();
})

$("button").on("click", function() { 
    $("h1").toggle();
})
$("button").on("click", function() { 
    $("h1").fadeOut();
})

    $("button").on("click", function() { 
    $("h1").fadeIn();
})
Also available are slideUp, slideDown and slideToggle();


$("button").on("click", function() { 
    $("h1").fadeToggle();
})


$("button").on("click", function() { 
    $("h1").animate({opacity: 0.5}); // can only animate properties that have numeric values
})


$("button").on("click", function() { 
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
})
*/



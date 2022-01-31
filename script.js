
$(document).ready(function(){
    $(".searchbar").click(function(){
        $(this).toggleClass("expand")
        $(".input").focus().toggleClass("active-width").val('')
    })

     $(".hero").hover(function(){
        $(this).toggleClass("zoom")
    })

    $(".container").hover(function(){
        $(this).toggleClass("zoom")
    })
    
    $(".menu2").click(function(){
        $(".meet").html("<p>Meet Your Next Favorite Book.</p>")
    }) 

    $(".banner").click(function(){
        $(this).toggleClass("long")
    })

    $(".menuleft").children().click(function(){
        $(this).toggleClass("menuitems")
        $(this).toggleClass("menuitems2")
    })

    $('.zoomimg').hover(function() {
        $(this).css("cursor","pointer");
        $(this).animate({width: "90%", height: "110%"}, 'slow');

    }, function() {
    $(this).animate({
        width: "100%"
    }, 'slow');

    })

    $('.scroll-box').mouseenter(function () {
        $(this).stop();
        var boxWidth = $(this).width();
        var textWidth = $('.scroll-text', $(this)).width();
        if (textWidth > boxWidth) {
            var animSpeed = textWidth * 10;
            $(this).animate({
                scrollLeft: (textWidth - boxWidth)
            }, animSpeed, function () {
                $(this).animate({
                    scrollLeft: 0
                }, animSpeed, function () {
                    $(this).trigger('mouseenter');
                });
            });
        }
    }).mouseleave(function () {
        var animSpeed = $(this).scrollLeft() * 10;
        $(this).stop().animate({
            scrollLeft: 0
        }, animSpeed);
    });

        $( ".container" ).children().draggable();

        $( ".hero" ).children().draggable();

});


    // $( ".menu3" ).children().draggable();
    // $("#menuitem1").click(function(){
    //     console.log("click")
    //     $("#container1").html("<p>this is a funny class</p>");
    // })

    // $("#menuitem2").click(function(){
    //     console.log("menuitem2click")
    //     $("#container1").text("this is a funny text")
    // })
    // $("#menuitem3").click(function(){
    //     console.log("menuitem2click")
    //     $("#container1").append("this is a funny text")
    // })

    // $(".menu2").children().click(function(){
    //     console.log("children!")
    //     $(this).toggleClass("menuitems")
    //     $(this).toggleClass("menuitems2")
    //     // $("#container2").slideToggle();
        // $("#container2").animate({
        //    opacity: '0.2',
        //    height: '60%',
        //    width: '60%',},2000,function(){
        //      alert("The paragraph is now hidden");
        // });

//     })

//     $("#menuitem6").click(function(){
//         console.log("menuitem6clicked")
//         scrollTo(0,5000)
//     })
  
// });

    // $("#menuitem1").click(function(){
    //       $("#container1").html("<p>hello this is an html<br>paragraph element</p>");
    //   })

    // $("#menuitem2").click(function(){
    //     $("#container1").append("this is append");
    // })

    // $("#menuitem3").click(function(){
    //   $("#container1").text("this is text");
    // })

    //   $(".menu2").children().click(function(){
    //     console.log("click")
    //     $(this).toggleClass("menuitems")
    //     $(this).toggleClass("menuitems2")
    //     console.log("click")
    //     $("#container2").slideToggle(1000, "swing");
    //     $("#container2").fadeToggle();
    //     $("#container2").animate({
    //       opacity: '0.2',
    //       height: '60%',
    //       width: '60%',},2000,function(){
    //         alert("The paragraph is now hidden");
    //     });
    //     })
    //   $("#menuitem6").click(function(){
    //       scrollTo(0,5000)
    //   })
    //   $( ".menu3" ).children().draggable();



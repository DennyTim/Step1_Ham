// Function for tabs (Section 3)

$(function tabs(){

	$("#wr-tabs").on("click", ".tab", function(){

		var tabs = $("#wr-tabs .tab"),
		    cont = $("#wr-tabs .tab-cont");

		// Удаляем классы active
		tabs.removeClass("active");
		cont.removeClass("active");
		// Добавляем классы active
		$(this).addClass("active");
		cont.eq($(this).index()).addClass("active");
		return false;
	});
});

// Function for img (Section 5)

let x = 12;
let className = ".goods-img-item";

$(function loadmore() {
    $("#loadAnimation").hide();
    $(className).slice(0, x).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $("#loadMore").hide();
        $("#loadAnimation").show();
        setTimeout(timer, 750)
    });
});

function timer () {
    $(className+":hidden").slice(0, x).slideDown();
    if ($(className+":hidden").length == 0) {
        $("#loadAnimation").hide();
    } else if ($(className+":hidden").length >= x) {
        $("#loadAnimation").hide();
        $("#loadMore").show();
    }
}

// Fuction for filter img (Section 5) 
$(function showHide() {
    $('.goods-title-item').click(function () { 
        $('.goods-title-item').removeClass('goods-title-active');
        $(this).addClass('goods-title-active');
        className = '.' + ($(this).attr('data-rel'));
            $('.goods-img-item').hide();
            $(className).slice(0, x).show();
            if ($(className).length < x ) {
                $("#loadMore").hide();
            } else {
                $("#loadMore").show();
            }
        });
});

// Fuction for filter img (Section 7)

$(function slider () {

    $("#indicators li:first-child").addClass("active").animate({'bottom': +30 +'%'}, 500);

    function slide(target) {
      $("#indicators li").removeClass("active").eq(target).addClass("active");
        $("#indicators li.active").animate({'bottom': +20 +'%'}, 500);
        $("#slider ul li").animate({'right': +174 * target + 'px'}, 250);
    }

    $("#indicators li").click(function() {
        var target = $(this).index();
        slide(target);
    });


    $("#next").click(function() {
        var target = $("#indicators li.active").index();
        if (target == $("#indicators li").length - 1) {
            target = -1;
        }
        target = target + 1;
        slide(target);

    });

    $("#prev").click(function() {
        var target = $("#indicators li.active").index();
        if (target == 0) {
            target = $("#indicators li").length;
        }
        target = target - 1;

        slide(target);
    });
});

// Function for Masonry Img (Section 8)

$('.grid').masonry({
  // options
    itemSelector: '.grid-item',
    fitWidth: true,
    horizontalOrder: true,
});

let z = 9;
let classMore = ".grid-item";

$(function moreBottom() {
    $(classMore).css('display', 'none');
    $(classMore).slice(0, z).css('display', 'inline-block');
    $(".grid").css('height','956px');
    $("#moreBottom").on('click', function () {
        $(".grid").css('height','1846px');
        $(classMore).slideDown().css('display', 'inline-block');
        if ($(classMore+":hidden").length == 0) {
            $("#moreBottom").fadeOut('slow');
        }
    });
});

$(function(){
	/* Header slider */
	$(".header-slider").slick({
		dots: true,
		prevArrow: "<button type='button' class='slick-prev'><img src='../images/arrow-up.svg' alt='arrow navigation up'></button>",
		nextArrow: "<button type='button' class='slick-next'><img src='../images/arrow-down.svg' alt='arrow navigation down'></button>",
		responsive: [
			{
				breakpoint: 361,
				settings: {
					dots: false,
					arrows: false,
					autoplay: true,
					autoplaySpeed: 2000
				}
			}
		]
	});
	
	/* Product sliders */
	$(".product__name").slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		focusOnSelect: true,
		asNavFor: ".product__content",
		vertical: true,
		prevArrow: "<button type='button' class='product-prev'><img src='../images/product-up.svg' alt='arrow navigation up'></button>",
		nextArrow: "<button type='button' class='product-next'><img src='../images/product-down.svg' alt='arrow navigation down'></button>",
	});
	
	$(".product__content").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: ".product__name",
		fade: true,
		arrows: false
	});
	
	/* mobile menu */
	
	$(".menu__btn").on("click", function () {
		$(".menu__list").toggleClass("menu__list--active");
	});
	
});
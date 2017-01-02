
$(document).ready(function () {
    /*Owl Carousel*/  

    $("#owl-banner").owlCarousel({
    items : 1,
    autoPlay : true,
    stopOnHover : true,
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [980,1],
    itemsTablet: [768,1],
    itemsTabletSmall: false,
    itemsMobile : [479,1],
    //Basic Speeds
    slideSpeed : 5000,
    paginationSpeed : 800,
    rewindSpeed : 1000,

    // Navigation
    navigation : false,
    navigationText : ["",""],
    rewindNav : true,
    scrollPerPage : true,
    //Pagination
    pagination : false,
    paginationNumbers: false,
  });
    /*End Owl Carousel*/
 
});

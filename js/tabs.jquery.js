(function($){
  $.fn.tabs = function() {
    return this.each(function() {
      var tabContent = $(".tab-content");
      tabContent.hide();
      $(".tab-head").on("click", function() {
        tabContent.hide();
        var id = $(this).attr("href"); 
        $(id).show();
      })
    });
  };
})(jQuery);


// find
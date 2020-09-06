(function($){
  $.fn.calendar = function() {
    console.log(this)
    return this.each(function() {
      var input = $("input")
      var table = $("#table-parent");
      var day = $(".day");
      day.css("color", "blue");
      table.hide();
      
      input.on("click", function() {
        table.show();
        input.prop('disabled',true);
      })

      day.on("click", function() {
        day.css("color", "blue")
        input.val($(this).text() + "/01/2012");
        $(this).css("color", "yellow");
      })
    });
  };
})(jQuery);
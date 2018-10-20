$(document).ready(function() {
    $(".guess_box").click(function() {
        $(".guess_box p").remove();
        var discount = Math.floor((Math.random()*5)+5);
        var discount_msg = "<p>Your Discount is "+discount + "%</p>"
        $(this).append(discount_msg)
        $(".guess_box").each(function() {
            $(this).unbind("click")
        });
        
    }); //end click function

}); //end doc ready
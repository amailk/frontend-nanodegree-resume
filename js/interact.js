var hideDescriptions = function(){
    $("#workExperience").children(".work-entry").each(function() {
        $(this).children().last().hide();
    });
};


$(window).bind("load", function(){
    hideDescriptions();


    var lastOpened = null;
    $("#workExperience").children(".work-entry").each(function() {
        $(this).click(function() {
            if(lastOpened === this) {
                $(this).children().last().slideUp();
                lastOpened = null;
                return;
            }

            if(lastOpened !== null) {
                $(lastOpened).children().last().slideUp();
            }

            $(this).children().last().slideDown();
            lastOpened = this;
        });
    });

});

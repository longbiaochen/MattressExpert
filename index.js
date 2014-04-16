/**
 * @Felix
 */
var config = {
    ui: {
        screen_num: 7,
        arrow_offset: 27,
        arrow_leap: 44,
        current_screen: 1,
        current_tab: 1
    },
    filters: {},
    favorites: {},
    user: {},


};


$(document).ready(function(){
    // init screens
    $('#nav_1').click();
    
    // test
    // $('#search').click();

});

/*----------------------------------------------------------------------------*/
$('.nav').live('click', function(){
    $('.screen').hide();
    var screen = $(this).attr('screen');
    var $screen = $('#' + screen);
    $screen.fadeIn();
    // update current_screen
    config.ui.current_screen = $(this).attr('sid');
    update_arrow(config.ui.current_screen);
});

$('.tabnav').live('click', function(){
    $('#screen_' + config.ui.current_screen + ' .tab').hide();
    var tab = $(this).attr('tab');
    var $tab = $('#' + tab);
    $tab.fadeIn();
    // update current_tab
    config.ui.current_tab = $(this).attr('tid');
    
});

$('#btn_next').live('click', function(){
    if (config.ui.current_screen < config.ui.screen_num) {
        config.ui.current_screen++;
        $('#nav_' + config.ui.current_screen).click();
    }
});

$('#btn_prev').live('click', function(){
    if (config.ui.current_screen > 1) {
        config.ui.current_screen--;
        $('#nav_' + config.ui.current_screen).click();
    }
    else {
        // on first screen
    }
    
});

$('.screen_btn').live('click', function(){
    var category = $(this).attr('category');
    var selected = config.filters[category];
    
    if ($(this).attr('id') != selected) {
        if (selected != undefined) {
            // toggle previous selection
            $selected = $('#' + selected);
            var src = $selected.attr('src');
            $selected.attr('src', src.substring(0, src.length - 4))
            
        };
        
        var src = $(this).attr('src');
        $(this).attr('src', src + '.png')
        
        config.filters[category] = $(this).attr('id');
    }
});

/*----------------------------------------------------------------------------*/
function update_arrow(pos){
    var top = config.ui.arrow_offset + (pos - 1) * config.ui.arrow_leap;
    $('#arrow').animate({
        'top': top
    });
    //$('#arrow').css('top', top + 'px');
}

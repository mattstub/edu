var users = ['freecodecamp', 'ESL_SC2', 'swifty12', 'diradora', 'meteordev', 'techlahoma', 'swifty'];

users.forEach(function(user, count) {
    $('.user-list').append('<div class="container user-wrapper twitch-user-' + count + '"><div class="row"><div class="container col-xs-2 col-xs-offset-1 logo-wrapper user-logo-' + count + '"></div><div class="container info-wrapper col-xs-6"><div class="row name user-name-' + count + '"></div><div class="row status user-status-' + count + '"></div></div></div></div>');
    
    $.getJSON(createLink('channels', user), function(result) {
        if(!result.error) {
            $.getJSON(createLink('streams', user), function(response) {
                if(response.stream === null) {
                    $('.twitch-user-' + count).addClass('offline');
                    appendInformation(count, '<a href="' + result.url + '" target="_blank"><img src="' + result.logo + '" class="img-rounded"></a>', result.display_name, 'Offline');
                }
                else {
                    $('.twitch-user-' + count).addClass('online');
                    appendInformation(count, '<a href="' + result.url + '"><img src="' + result.logo + '" class="img-rounded"></a>', result.display_name, response.stream.channel.status);
                }
            });
        } else {
            appendInformation(count, '<img src="images/not-available.png">', user, 'Not a valid Twitch.tv stream');
            $('.twitch-user-' + count).addClass('unavailable');
        }
    });
});

function createLink(type, name) {
    return "https://wind-bow.glitch.me/twitch-api/" + type + "/" + name + "?callback=?";
}

function appendInformation(c, logo, name, status) {
    $('.user-logo-' + c).html(logo);
    $('.user-name-' + c).html(name);
    $('.user-status-' + c).html(status); 
}

$(document).ready(function() {
    $('#all').click(function() {
        $('.online').show(1500);
        $('.offline').show(1500);
        $('.unavailable').show(1500);
    });
    $('#online').click(function() {
        $('.offline').toggle(1500);
        $('.unavailable').hide(1500);
    });
    $('#offline').click(function() {
        $('.online').toggle(1500);
        $('.unavailable').hide(1500);
    });
});
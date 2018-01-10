var searchResults = (function() {
    var input = $('.wiki-search').val();
    verifyKeyword(input);
});

var verifyKeyword = (function(key) {
    if (key == "") {
        // display an error message on window
    } else {
        $.ajax({
            url: "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&utf8=1&srsearch=" + key.replace(/\s/gi, '_'),
            timeout: 4000,
            crossDomain: true,
            success: function(response, key) {
                if (response.query.searchinfo.totalhits === 0)
                    $('.search-results').html('<div class="wiki-results">Your search for ' + key + ' did not return any search results</div>');
                else 
                    showResults(response);
            },
            error: function(){
                $('.search-results').html('<div class="wiki-results">Your search for ' + key + 'did not return any search results</div>');
            }
        });
    }
});

var showResults = (function(element) {
    $('.search-results').empty();
    $('.result-quantity').html('Viewing 10 of ' + element.query.searchinfo.totalhits + ' results found..');
    for (var count = 0; count < element.continue.sroffset; count++) {
        var time = element.query.search[count].timestamp;
        time = new Date(time);
        var fileSize = element.query.search[count].size / 1000;
        var titleLink = element.query.search[count].title;
        titleLink = titleLink.replace(/\s/gi, '_');

        $('.search-results').append('<div class="swing wiki-result result-' + count + '"><span class="wiki-title title-' + count + '"></span><br><span class="wiki-snip snip-' + count + '"></span><br><span class="wiki-meta meta-' + count + '"></span></div>');

        $('.title-' + count).html('<a href="https://en.wikipedia.org/wiki/' + titleLink + '" target="_blank">' + element.query.search[count].title + '</a>');
        $('.snip-' + count).html(element.query.search[count].snippet);
        $('.meta-' + count).html(element.query.search[count].wordcount + ' words - ' + fileSize.toFixed(0) + 'kb - ' + time);
    }
});

$(document).ready(function() {
    $('.wiki-search').focus();
    $('#wiki-search-btn').on('click', function() {
        event.preventDefault();
        searchResults();
    });
});

var lyricsArray = [
    { lyrics: "To the ends of the earth would you follow me? There's a world that was meant for our eyes to see",
      band: "Lord Huron",
      song: "Ends of the Earth" },
    { lyrics: "I had all and then most of you, some and now none of you. Take me back to the night we met",
      band: "Lord Huron",
      song: "The Night We Met" },
    { lyrics: "My old ears hear no evil, see no love with vacant eyes; can't find the kindness in common people. So I think I'll leave this place behind",
      band: "City and Colour", 
      song: "Rain" },
    { lyrics: "May there be a peaceful road ahead of you tonight. May there be still waters", 
      band: "City and Colour", 
      song: "Peaceful Road" },
    { lyrics: "I can see the sun, it's setting, it's getting colder, starting to freeze. What makes a man want to break a heart with ease?",
      band: "City and Colour",
      song: "What Makes A Man" },
    { lyrics: "I've never been to Alaska, but I can tell you this, I've been to Lincoln, Nebraska and hell you know it ain't worth shit", 
      band: "City and Colour",
      song: "Comin Home" },
    { lyrics: "I used to drink like a fish and run like a dog. Done a whole lotta shit not permitted by law. People called me the Picasso of painting the town",
      band: "Chris Stapleton",
      song: "Up To No Good Livin'" },
    { lyrics: "And I found love where it wasn't supposed to be; right in front of me, talk some sense to me and I'll use you as a makeshift gauge, of how much to give and how much to take",
      band: "Amber Run",
      song: "I Found" },
    { lyrics: "He said your life is a canvas, You paint some everyday. And when you think you got it all figured out in your head, You know the mans got your final say.",
      band: "Shane Smith & The Saints",
      song: "Canvas"},
    { lyrics: "I was born to run, so run I may, come take my hand on this runaway train. What's that sad look? That look on your face",
      band: "Shane Smith & The Saints",
      song: "Runaway Train"},
    { lyrics: "I know you hate it, but gotta fuel that fire while there's flame. And if it seems your hope has faded, I'll keep praying, please keep waiting. Til Oklahoma City calls our name",
      band: "Shane Smith & The Saints",
      song: "Oklahoma City" }
];

var newLyrics = '', newBand = '', newSong = '', randomNumber = 0;

function printLyrics() {
  randomNumber = Math.floor(Math.random() * lyricsArray.length);
  newLyrics = lyricsArray[randomNumber].lyrics;
  newBand = lyricsArray[randomNumber].band;
  newSong = lyricsArray[randomNumber].song;
  $('#lyricContainer').fadeOut(600, function() {
    $('#lyricContainer').fadeIn(1000).html(newLyrics + "<br><br><strong>Band:</strong> &nbsp&nbsp" + newBand + "<br><strong>Song:</strong> &nbsp&nbsp" + newSong);    
    $('#tweetLyrics').attr('href', 'https://twitter.com/intent/tweet?text=' + newLyrics + " - " + newBand).attr('target', '_blank');
  });
};

$(function() {
  printLyrics();
	$('#lyricButton').click(function() {
    printLyrics();
	});
});
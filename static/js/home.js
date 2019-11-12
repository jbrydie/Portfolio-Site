$(function() {
  $(".typed").typed({
    strings: [
      "stat jordan.brydie<br/>" + 
      "><span class='caret'>$</span> Work: Technology Consultant, Data &amp; Analytics<br/> ^100" +
      "><span class='caret'>$</span> Hobbies: Basketball, Football, Boxing, Coding, Reading<br/> ^300"],
    showCursor: true,
    cursorChar: '_',
    autoInsertCss: true,
    typeSpeed: 0.001,
    startDelay: 50,
    loop: false,
    showCursor: false,
    onStart: $('.message form').hide(),
    onStop: $('.message form').show(),
    onTypingResumed: $('.message form').hide(),
    onTypingPaused: $('.message form').show(),
    onComplete: $('.message form').show(),
    onStringTyped: function(pos, self) {$('.message form').show();},
  });
  $('.message form').hide()
});
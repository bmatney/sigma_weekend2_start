// variables

var i = 0;

// When Page loads

$(document).ready(function () {

  // buildIndex();
  $("#next").on("click", nextStudent);
  $("#previous").on("click", previousStudent);
  makeIndex();
  autoUpdate();

});

// Functions for button for next student

function nextStudent() {
  $.ajax({
    type: "GET",
    url: "/data",
    success: function (data) {
        nextButton(data.sigmanauts);
      },
  });
}

function nextButton(sigmanauts) {
  i++;
  if (i >= 19) {
    i = 0;
  }

  $('#sigma-container').fadeOut(function () {
    $("h2").replaceWith('<h2>' + sigmanauts[i].name + '</h2>');
    $("a").replaceWith('<a href=https://github.com/' + sigmanauts[i].git_username + '>' + "Check out my Github!" + '</a>');
    $("p").replaceWith('<p>' + sigmanauts[i].shoutout + '</p>');
    highlightSelected();
    $('#sigma-container').fadeIn();
  });
}

// Functions for button for previous student

function previousStudent() {
  $.ajax({
    type: "GET",
    url: "/data",
    success: function (data) {
      previousButton(data.sigmanauts);
    },
  });
}

function previousButton(sigmanauts) {
  i--;
  if (i < 0) {
    i = 0;
  }

  $('#sigma-container').fadeOut(function () {
    $("h2").replaceWith('<h2>' + sigmanauts[i].name + '</h2>');
    $("a").replaceWith('<a href=https://github.com/' + sigmanauts[i].git_username + '>' + "Check out my Github!" + '</a>');
    $("p").replaceWith('<p>' + sigmanauts[i].shoutout + '</p>');
    highlightSelected();
    $('#sigma-container').fadeIn();
  });
}

// function foor making index
function makeIndex() {
  $.ajax({
    type: "GET",
    url: "/data",
    success: function (data) {
      buildIndex(data.sigmanauts);
    },
  });
}

function buildIndex(sigmanauts) {
  for (var i = 0; i < sigmanauts.length; i++) {
    $('#classIndex').append('<div class="stuff" id="index' + i + '"></div>');
    $('#index' + i).text(i + 1);
  }
}

function highlightSelected() {
  $('.stuff').css("background-color", "teal")
  $('#index' + i).css("background-color", "grey")
}

function autoUpdate() {
  setInterval(nextStudent, 10000);
}

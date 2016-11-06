var i = 1;

$(document).ready(function () {
  $("#next").on("click", nextStudent);
  $("#previous").on("click", previousStudent);

});

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
  if (i > 19) {
    i = 19;
  }
  $("h2").replaceWith('<h2>' + sigmanauts[i].name + '</h2>');
  $("a").replaceWith('<a href=https://github.com/' + sigmanauts[i].git_username + '>' + "Check out my Github!" + '</a>');
  $("p").replaceWith('<p>' + sigmanauts[i].shoutout + '</p>');
  i++;
}

function previousStudent() {
  $.ajax({
        type: "GET",
        url: "/data",
        success: function (data) {
            previousAction(data.sigmanauts);
          },
      });
}
function previousAction(sigmanauts) {
  if (i < 1) {
    i = 1;
  }
    i--;
  $("h2").replaceWith('<h2>' + sigmanauts[i].name + '</h2>');
  $("a").replaceWith('<a href=https://github.com/' + sigmanauts[i].git_username + '>' + "Check out my Github!" + '</a>');
  $("p").replaceWith('<p>' + sigmanauts[i].shoutout + '</p>');
}

var i = 1;

$(document).ready(function () {
  $("#next").on("click", getAjax);

});

function getAjax() {
  $.ajax({
        type: "GET",
        url: "/data",
        success: function (data) {
            updateDom(data.sigmanauts);
          },
      });
}

function updateDom(sigmanauts) {
  $("h2").replaceWith('<h2>' + sigmanauts[i].name + '</h2>');
  $("a").replaceWith('<a href=https://github.com/' + sigmanauts[i].git_username + '>' + "Check out my Github!" + '</a>');
  $("p").replaceWith('<p>' + sigmanauts[i].shoutout + '</p>');
  i++;
  console.log('#sigma-container');
}

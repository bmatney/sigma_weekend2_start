$(document).ready(function () {

    $("#sigmaRoster").on("click", getAjax);

    function getAjax() {
      $.ajax({
        type: "GET",
        url: "/data",
        success: function (data) {
            console.log(data);
            updateDom(data.sigmanauts);
          },
      });
    }

    function updateDom(sigmanauts) {
      $.each(sigmanauts, function (i, student) {
        $("#sigma-container").append('<div class="indSigma"></div>');
        var $el = $("#sigma-container").children().last();

        $el.append('<h2>' + student.name + '</h2>');
      });
    }
  });

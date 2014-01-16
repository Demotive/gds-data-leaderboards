var topLicences = {

  url: '/licences',

  loadData: function() {
    $.ajax({
      dataType: 'json',
      cache: false,
      url: topLicences.url,
      success: function(d) {
        topLicences.updateDisplay(d);
      }
    });
  },

  updateDisplay: function(d) {
    var htmlStr = '';
    for (var i=0; i<d.data.length; i++) {
      htmlStr += '<div><span class="leaderboard-item">';
      htmlStr += d.data[i].licenceName[0];
      htmlStr += '</span><span class="leaderboard-number">';
      htmlStr += addCommas(d.data[i]._count);
      htmlStr += '</span></div>';
    }
    $('.top-licences .leaderboard-content').html(htmlStr);
  }

};

$(function() {
  topLicences.loadData();
});
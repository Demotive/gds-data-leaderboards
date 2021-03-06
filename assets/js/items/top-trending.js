var topTrending = {

  url: '/trending',

  loadData: function() {
    if (typeof offline !== 'undefined') {
      topTrending.updateDisplay(trending_json);
      return;
    }
    $.ajax({
      dataType: 'json',
      cache: false,
      url: topTrending.url,
      success: function(d) {
        topTrending.updateDisplay(d);
      }
    });
  },

  updateDisplay: function(d) {
    var htmlStr = '';
    var max = d.data[0].percent_change;

    for (var i=0; i<d.data.length; i++) {

      var title = d.data[i].pageTitle;
      title = title.replace(' - GOV.UK', '');

      htmlStr += '<div><span class="leaderboard-item">';
      htmlStr += title;
      htmlStr += '</span><span class="leaderboard-number"><span style="width:' + Math.round(d.data[i].percent_change / max * 100) + '%;"></span></span></div>';
    }
    $('.top-trending .leaderboard-content').html(htmlStr);
  }

};

$(function() {
  topTrending.loadData();
});


var topContent = {

  url: '/content',
  offlineUrl: 'data/most_viewed.json',

  loadData: function() {
    loadUrl = topContent.url;
    if (offline === true) {
      loadUrl = topContent.offlineUrl;
    }
    $.ajax({
      dataType: 'json',
      cache: false,
      url: loadUrl,
      success: function(d) {
        topContent.updateDisplay(d);
      }
    });
  },

  updateDisplay: function(d) {
    var htmlStr = '';
    var max = d.data[0].pageviews;

    for (var i=0; i<d.data.length; i++) {

      var title = d.data[i].pageTitle;
      title = title.replace(' - GOV.UK', '');

      htmlStr += '<div><span class="leaderboard-item">';
      htmlStr += title;
      htmlStr += '</span><span class="leaderboard-number"><span style="width:' + Math.round(d.data[i].pageviews / max * 100) + '%;"></span></span></div>';
    }
    $('.top-content .leaderboard-content').html(htmlStr);
  }

};

$(function() {
  topContent.loadData();
});


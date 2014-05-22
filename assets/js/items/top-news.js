var topNews = {

  url: '/news',
  offlineUrl: '../data/most_viewed_news.json',

  loadData: function() {
    loadUrl = topNews.url;
    if (offline === true) {
      loadUrl = topNews.offlineUrl;
    }
    $.ajax({
      dataType: 'json',
      cache: false,
      url: loadUrl,
      success: function(d) {
        topNews.updateDisplay(d);
      }
    });
  },

  updateDisplay: function(d) {
    var htmlStr = '';
    var max = d.data[0].pageviews;

    for (var i=0; i<d.data.length; i++) {

      var title = d.data[i].pageTitle;
      title = title.replace(' - News stories - GOV.UK', '');

      htmlStr += '<div><span class="leaderboard-item">';
      htmlStr += title;
      htmlStr += '</span><span class="leaderboard-number"><span style="width:' + Math.round(d.data[i].pageviews / max * 100) + '%;"></span></span></div>';
    }
    $('.top-news .leaderboard-content').html(htmlStr);
  }

};

$(function() {
  topNews.loadData();
});


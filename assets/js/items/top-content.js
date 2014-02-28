var topContent = {

  url: '/content',

  loadData: function() {
    $.ajax({
      dataType: 'json',
      cache: false,
      url: topContent.url,
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


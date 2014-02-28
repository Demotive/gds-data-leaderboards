var topPolicies = {

  url: '/policies',

  loadData: function() {
    $.ajax({
      dataType: 'json',
      cache: false,
      url: topPolicies.url,
      success: function(d) {
        topPolicies.updateDisplay(d);
      }
    });
  },

  updateDisplay: function(d) {
    var htmlStr = '';
    var max = d.data[0].pageviews;
    var re = /^ - Polic*?/i;

    for (var i=0; i<d.data.length; i++) {

      var title = d.data[i].pageTitle;
      title = title.replace(' - Policies - GOV.UK', '');
      title = title.replace(' - Policy - GOV.UK', '');

      htmlStr += '<div><span class="leaderboard-item">';
      htmlStr += title;
      htmlStr += '</span><span class="leaderboard-number"><span style="width:' + Math.round(d.data[i].pageviews / max * 100) + '%;"></span></span></div>';
    }
    $('.top-policies .leaderboard-content').html(htmlStr);
  }

};

$(function() {
  topPolicies.loadData();
});


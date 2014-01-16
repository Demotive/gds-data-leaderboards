var topGovernment = {

  url: '/government',

  guides: [],
  transactions: [],
  answers: [],
  smartAnswers: [],
  programmes: [],

  loadData: function() {
    $.ajax({
      dataType: 'json',
      cache: false,
      url: topGovernment.url,
      success: function(d) {
        topGovernment.parseData(d);
      }
    });
  },

  parseData: function(d) {

    for (var i=0; i<d.details.data.length; i++) {
      var item = d.details.data[i];
      if (item.entries !== null && item.format === 'guide') {
        this.guides.push(d.details.data[i]);
      }
      if (item.entries !== null && item.format === 'answer') {
        this.answers.push(d.details.data[i]);
      }
      if (item.entries !== null && item.format === 'smart_answer') {
        this.smartAnswers.push(d.details.data[i]);
      }
      if (item.entries !== null && item.format === 'transaction') {
        this.transactions.push(d.details.data[i]);
      }
      if (item.entries !== null && item.format === 'programme') {
        this.programmes.push(d.details.data[i]);
      }
    }

    // sort arrays by entries descending
    this.guides.sort(function(a,b) { return parseFloat(b.entries) - parseFloat(a.entries) } );
    this.answers.sort(function(a,b) { return parseFloat(b.entries) - parseFloat(a.entries) } );
    this.smartAnswers.sort(function(a,b) { return parseFloat(b.entries) - parseFloat(a.entries) } );
    this.transactions.sort(function(a,b) { return parseFloat(b.entries) - parseFloat(a.entries) } );
    this.programmes.sort(function(a,b) { return parseFloat(b.entries) - parseFloat(a.entries) } );

    // shorten array to 5 items
    this.guides = this.guides.slice(0,5);
    this.answers = this.answers.slice(0,5);
    this.smartAnswers = this.smartAnswers.slice(0,5);
    this.transactions = this.transactions.slice(0,5);
    this.programmes = this.programmes.slice(0,5);

    topGovernment.updateDisplay();
  },

  updateDisplay: function() {
    var htmlStr = '';
    for (var i=0; i<this.guides.length; i++) {
      htmlStr += '<div><span class="leaderboard-item">';
      htmlStr += this.guides[i].title;
      htmlStr += '</span><span class="leaderboard-number">';
      htmlStr += addCommas(this.guides[i].entries);
      htmlStr += '</span></div>';
    }
    $('.top-guides .leaderboard-content').html(htmlStr);

    htmlStr = '';
    for (var i=0; i<this.transactions.length; i++) {
      htmlStr += '<div><span class="leaderboard-item">';
      htmlStr += this.transactions[i].title;
      htmlStr += '</span><span class="leaderboard-number">';
      htmlStr += addCommas(this.transactions[i].entries);
      htmlStr += '</span></div>';
    }
    $('.top-transactions .leaderboard-content').html(htmlStr);

    htmlStr = '';
    for (var i=0; i<this.answers.length; i++) {
      htmlStr += '<div><span class="leaderboard-item">';
      htmlStr += this.answers[i].title;
      htmlStr += '</span><span class="leaderboard-number">';
      htmlStr += addCommas(this.answers[i].entries);
      htmlStr += '</span></div>';
    }
    $('.top-answers .leaderboard-content').html(htmlStr);

    htmlStr = '';
    for (var i=0; i<this.smartAnswers.length; i++) {
      htmlStr += '<div><span class="leaderboard-item">';
      htmlStr += this.smartAnswers[i].title;
      htmlStr += '</span><span class="leaderboard-number">';
      htmlStr += addCommas(this.smartAnswers[i].entries);
      htmlStr += '</span></div>';
    }
    $('.top-smart-answers .leaderboard-content').html(htmlStr);

    htmlStr = '';
    for (var i=0; i<this.programmes.length; i++) {
      htmlStr += '<div><span class="leaderboard-item">';
      htmlStr += this.programmes[i].title;
      htmlStr += '</span><span class="leaderboard-number">';
      htmlStr += addCommas(this.programmes[i].entries);
      htmlStr += '</span></div>';
    }
    $('.top-programmes .leaderboard-content').html(htmlStr);
  }

};

$(function() {
  topGovernment.loadData();
});


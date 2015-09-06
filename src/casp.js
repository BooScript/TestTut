/**
 * Created by Tom on 04/09/2015.
 */
var links = [];
var casper = require('casper').create();

function getLinks() {
    var links = document.querySelectorAll('a');
    return Array.prototype.map.call(links, function(e) {
        return e.getAttribute('href');
    });
}

casper.start('https://www.lendwithcare.org/search/funded/completed/', function() {
    // search for 'casperjs' from google form
   // this.fill('form[action="/search"]', { q: 'twitter' }, true);
});

casper.then(function() {
    casper.then(function() {
        //this.click('#card_container .small');
        casper.thenOpen('https://www.lendwithcare.org/search/funded/completed/?per_page=15&?per_page=45');
    });
    casper.then(function() {
        //this.click('#card_container .small');
        casper.thenOpen('https://www.lendwithcare.org/search/funded/completed/?per_page=15&?per_page=45');
    });
    casper.then(function() {
        //this.click('#card_container .small');
        casper.thenOpen('https://www.lendwithcare.org/search/funded/completed/?per_page=15&?per_page=45');
    });

    casper.then(function() {
        //this.click('#card_container .small');
        casper.thenOpen('https://www.lendwithcare.org/search/funded/completed/?per_page=15&?per_page=45');
    });
    casper.then(function() {
        //this.click('#card_container .small');
        casper.thenOpen('https://www.lendwithcare.org/search/funded/completed/?per_page=15&?per_page=45');
    });
    casper.then(function() {
        //this.click('#card_container .small');
        casper.thenOpen('https://www.lendwithcare.org/search/funded/completed/?per_page=15&?per_page=45');
    });
    casper.then(function() {
        //this.click('#card_container .small');
        casper.thenOpen('https://www.lendwithcare.org/search/funded/completed/?per_page=15&?per_page=15');
    });

    casper.then(function() {
        //this.click('#card_container .small');
        casper.thenOpen('https://www.lendwithcare.org/search/funded/completed/?per_page=15&?per_page=15');
    });
    // aggregate results for the 'casperjs' search
    links = this.evaluate(getLinks);
    // now search for 'phantomjs' by filling the form again
   // this.fill('form[action="/search"]', { q: 'twitter' }, true);
});

casper.then(function() {
    // aggregate results for the 'phantomjs' search
    this.capture('google.png');
    links = links.concat(this.evaluate(getLinks));
    console.log(links);
});

casper.run(function() {
    // echo results in some pretty fashion
    this.echo(links.length + ' links found:');
    this.echo(' - ' + links.join('\n - ')).exit();
});


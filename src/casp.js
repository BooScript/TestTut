/**
 * Created by Tom on 04/09/2015.
 */
var links = [];
var casper = require('casper').create();
var fs = require('fs');



function getProfileLinks() {
    var links = document.querySelectorAll('a');
    return Array.prototype.map.call(links, function(e) {
        return e.getAttribute('href');
    });
}

casper.start('https://www.lendwithcare.org/search/funded/completed/', function() {
    // search for 'casperjs' from google form
   // this.fill('form[action="/search"]', { q: 'twitter' }, true);
});

casper.then(function(){
  //  for(var i=0; i<10; i++) {
    //    if (this.exists('#card_container > div.paginate-more > button')) {
      //      this.echo('found #button', 'INFO');
    //        this.click('#card_container > div.paginate-more > button');
    //    } else {
     //       this.echo('button not found', 'ERROR');
      //  }
//timeout
        this.wait(5000, function () {
            this.echo("I have waited for 5 seconds");
            if (this.exists('#card_container > div.paginate-more > button')) {
                this.echo('found #button', 'INFO');
                this.click('#card_container > div.paginate-more > button');
            } else {
                this.echo('button not found', 'ERROR');
            }
        });
   // }
    //and again

   //casper.click(document.querySelector('#card_container > div.paginate-more > button'));
  //  casper.timeout(5000);
   // this.capture('diditwork.png');
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
    links = this.evaluate(getProfileLinks);
    // now search for 'phantomjs' by filling the form again
   // this.fill('form[action="/search"]', { q: 'twitter' }, true);


    fs.write('linksData.json', JSON.stringify(links), 'w');

});

casper.then(function() {
    // aggregate results for the 'phantomjs' search
//    this.capture('google.png');
    links = links.concat(this.evaluate(getProfileLinks));
  //  console.log(links);
});

casper.run(function() {
    // echo results in some pretty fashion
    this.echo(links.length + ' links found:');
    this.echo(' - ' + links.join('\n - ')).exit();

});


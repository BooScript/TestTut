// scrapes a given profile

var request = require("request"),
    cheerio = require("cheerio"),
    queryUrl = "https://www.lendwithcare.org/entrepreneurs/index/13446";

    var baseURL = 'https://www.lendwithcare.org/';


function profileScrape(queryUrl) {

// function that takes an array of project urls to query and returns object of all projects attributes
//function getKeyAttributes(queryUrlArr){}
    request(queryUrl, function (error, response, body) {
        if (!error) {
            var $ = cheerio.load(body);

            //initialise empty array to store key project attributes
            var keyAttributes = [];
            $('h1').each(function () {
                keyAttributes.push(this.children[0].data);
            });
            $('label').each(function () {
                keyAttributes.push(this.children[0].data);
            });


            $('p').each(function () {
                keyAttributes.push(this.children[0].data);
            });

            $('span.time').each(function () {
                keyAttributes.push(this.children[0].data);
            });
            $('div.gm-style').each(function () {
                keyAttributes.push(this.children.data);
            });

            // loop for each h3 element on page and push key attributes to array
            $('h3').each(function () {
                keyAttributes.push(this.children[0].data);
            });

            $('.span').each(function () {
                keyAttributes.push(this.children[0].data);
            });

            $('td').each(function () {
                keyAttributes.push(this.children[0].data);
            });

            ('').each(function () {
                keyAttributes.push(this.children[0].data);
            });



            console.log(keyAttributes);
        }
        if (error) {
            console.log('http request failed to give response');
        }

        return keyAttributes;
    });

}

var GetProfileLinks = require('./GetProfileLinks_FromDump.js');



var linksArr = GetProfileLinks.getProfileLinks;


for (var i = 0; i < 1; i++){
   var urlCur = baseURL + linksArr[i];
    console.log(urlCur);
    console.log(profileScrape(urlCur) + ' i is ' + i);
}


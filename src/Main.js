// import modules
require('./ProjectClass.js');
var p = require('./profileScrape.js');
// import function to scrape profile
var GetProfileLinks = require('./GetProfileLinks_FromDump.js');

// all profile urls consist of this url
var baseURL = 'https://www.lendwithcare.org/';

//test projattr class is exposed
console.log( projectAttr);

// get array of funded project profile links
var linksArr = GetProfileLinks.getProfileLinks;

//array to hold project data
var profileDataRaw = [];

//scrape profiles
for (var i = 0; i < 50; i++){
   var urlCur = baseURL + linksArr[i];
    console.log(urlCur);
    profileDataRaw.push(p.profileScrape(urlCur) + ' i is ' + i);
    console.log(profileDataRaw[i])
}

// array to hold individual profile data
varprofilesArr = [];

//loop through

// write key project attributes to JSON file for completed projects
//fs.write('CompletedProjects.json', JSON.stringify(), 'w');



/**
 * Created by Tom on 06/09/2015.
 */
var fs = require('fs');

module.exports.getProfileLinks = getProfileLinks();



function getProfileLinks() {
    //function for filtering unique links
    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }

    //read json file
    var linksdump = JSON.parse(fs.readFileSync('linksData2.json', 'utf8'));
    //regex expression for profile link
    var profilelinks = linksdump.filter(function (e) {
        if (e.search(/entrepreneurs.index.\d+/) !== -1) return true;
    });
    //filter for unique links
    var unique = profilelinks.filter( onlyUnique ); // returns ['a', 1, 2, '1']

    return unique;
}


console.log(getProfileLinks());

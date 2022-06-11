// Code your solution here
function findMatching(array, name){
    const isNameMatch = array.filter(function(element){
        return element.toUpperCase() === name.toUpperCase()
    })
    return isNameMatch;
}

function fuzzyMatch(array, query){
    return array.filter(function(element){
        return element.toLowerCase().startsWith(query.toLowerCase()) 
    })
}

const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
];

function matchName(array, queryString){
    function matching(element){
        return element.name.toLowerCase() === queryString.toLowerCase();
    };
    return array.filter(matching);
}

console.log(matchName(drivers, 'sally'))
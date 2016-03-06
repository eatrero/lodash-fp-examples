var _ = require('lodash');
var violations = require('./violations.json');

var pageFilters = {
		'page1' : ['box1', 'box2', 'box2b', 'box3'],
		'page2' : ['box4', 'box5', 'box6', 'box7', 'box8a', 'box8b'],
		'page3' : ['box9', 'box10', 'box11'],
		'page4' : ['box12', 'box13']
};

// returns violations in same format
function filterViolationsChain(violations, pageIds, uuid){
	return _.chain(violations)
	.filter((v) => v.uuid === uuid)
	.filter((v) => violationsOnPages(v, pageIds))
	.map((v) => ({ "boxId": v.id, "messageType" : v.type }))
	.value();
}

function violationsOnPages(v, pageIds){
	return _.some(pageIds, (p) => pageFilters[p].indexOf(v.id) !== -1);
}

console.log(filterViolationsChain(violations, ['page1','page2'], "916a7bb5-fc2a-4edf-a365-32d599d56366"));

var _ = require('lodash');
var violations = require('./violations.json');
var pageFilters = require('./pagefilters.json');

// returns violations in same format
function filterViolationsChain(violations, pageIds, uuid){
	return _.chain(violations)
	.filter((v) => v.uuid === uuid)
	.filter((v) => violationOnPages(v, pageIds))
	.map((v) => ({ "boxId": v.id, "messageType" : v.type }))
	.value();
}

function violationOnPages(v, pageIds){
	return _.some(pageIds, (p) => pageFilters[p].indexOf(v.id) !== -1);
}

console.log(filterViolationsChain(violations, ['page1','page2'], "916a7bb5-fc2a-4edf-a365-32d599d56366"));

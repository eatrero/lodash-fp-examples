var _ = require('lodash');
var violations = require('./violations.json');
var pageFilters = require('./pagefilters.json');

// returns violations in same format
function filterViolationsChain(violations, pageId, uuid){
	return _.chain(violations)
	.filter((v) => v.uuid === uuid)
	.filter((v) => pageFilters[pageId].indexOf(v.id) !== -1)
	.map((v) => ({ "boxId": v.id, "messageType" : v.type }))
	.value();
}

console.log(filterViolationsChain(violations, 'page2', "916a7bb5-fc2a-4edf-a365-32d599d56366"));

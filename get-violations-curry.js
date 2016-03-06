var _ = require('lodash');
var violations = require('./violations.json');
var pageFilters = require('./pagefilters.json');

function uuidCheck(uuid, violations){
	return _.filter(violations, (v) => v.uuid === uuid);
}

var uuidCheckC = _.curry(uuidCheck);

function violationOnPage(pageIds, v){
	return _.some(pageIds, (p) => pageFilters[p].indexOf(v.id) !== -1);
}

function violationsOnPage(pageIds, violations){
	return _.filter(violations, (v) => violationOnPage(pageIds, v));
}

var violationsOnPageC = _.curry(violationsOnPage);

function formatViolations(violations){
	return _.map(violations, (v) => ({boxId : v.id, messageType: v.type}));
}

// returns violations in same format
function filterViolationsFlow(violations, pageIds, uuid){
	
	var filterViolations = _.flow([
			uuidCheckC(uuid), 
			violationsOnPageC(pageIds), 
			formatViolations
		]);

	return filterViolations(violations);
}

console.log(filterViolationsFlow(violations, ['page1','page2'], "916a7bb5-fc2a-4edf-a365-32d599d56366"));

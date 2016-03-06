const violations = require('./violations.json');
const pageFilters = require('./pagefilters.json');

function filterViolationsImp(violations, pageIds, uuid){
	var i, j, out=[];
	for(i=0; i<violations.length; i++){
		if(violations[i].uuid === uuid){
			for(j=0; j<pageIds.length; j++){
				if(pageFilters[pageIds[j]].indexOf(violations[i].id) !== -1)
					out.push( { "boxId" : violations[i].id, "messageType" : violations[i].type });				
			}
		}
	}
	return out;
}

console.log(filterViolationsImp(violations, ['page1','page2'], "916a7bb5-fc2a-4edf-a365-32d599d56366"));

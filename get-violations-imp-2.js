var violations = require('./violations.json');

var pageFilters = {
		'page1' : ['box1', 'box2', 'box2b', 'box3'],
		'page2' : ['box4', 'box5', 'box6', 'box7', 'box8a', 'box8b'],
		'page3' : ['box9', 'box10', 'box11'],
		'page4' : ['box12', 'box13']
};

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
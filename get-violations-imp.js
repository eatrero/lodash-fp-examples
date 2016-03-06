var violations = require('./violations.json');

var pageFilters = {
		'page1' : ['box1', 'box2', 'box2b', 'box3'],
		'page2' : ['box4', 'box5', 'box6', 'box7', 'box8a', 'box8b'],
		'page3' : ['box9', 'box10', 'box11'],
		'page4' : ['box12', 'box13']
};

function filterViolationsImp(violations, pageId, uuid){
	var i, out=[];
	for(i=0; i<violations.length; i++){
		if(violations[i].uuid === uuid){
			if(pageFilters[pageId].indexOf(violations[i].id) !== -1)
				out.push( { "boxId" : violations[i].id, "messageType" : violations[i].type });
		}
	}
	return out;
}

console.log(filterViolationsImp(violations, 'page2', "916a7bb5-fc2a-4edf-a365-32d599d56366"));

// $ node get-violations-imp-2.js
// Outputs:
// [{ boxId: 'box4', messageType: 'TOO_LARGE' },
//  { boxId: 'box5', messageType: 'TOO_SMALL' },
//  { boxId: 'box7', messageType: 'TOO_SMALL' } ]]

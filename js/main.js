/**
* Created with evancaldwell.com.
* User: evancaldwell
* Date: 2014-07-10
* Time: 06:34 AM
* To change this template use Tools | Templates.
*/

function setup() {
	var body = document.getElementsByTagName('body')[0]
	var thinkBoxes = document.getElementById('think-boxes')
	var thinkPics = document.getElementsByClassName('think-pic')
	var thinkDescs = document.getElementsByClassName('think-desc')
	var tBoxesWidth = thinkBoxes.offsetWidth
	var newPicLabel = document.getElementById('new-pic-label')
	newPicLabel.style.right = (body.offsetWidth - tBoxesWidth)/2+10 + 'px'
	thinkDescs[1].style.right = thinkPics[0].offsetWidth*(-1)
	for (var i=0;i<thinkPics.length;i++) {
		thinkPics[i].style.width = tBoxesWidth + 'px'
	}
	for (var j=0;j<thinkDescs.length;j++) {
		thinkDescs[j].style.top = (thinkPics[0].offsetHeight*(-1)+150) + 'px'
	}
}

function picSlide(el) {
	var sibling, desc, direction
	var picLabels = document.getElementsByClassName("pic-label")
	// get the sibling
	if (el.nextElementSibling.id == "old-think" || el.nextElementSibling.id == "new-think") {
		sibling = el.nextElementSibling
		desc = document.getElementById("old-desc1")
		direction = 'left'
	} else if (el.previousElementSibling.id == "old-think" || el.previousElementSibling.id == "new-think") {
		sibling = el.previousElementSibling
		desc = document.getElementById("new-desc1")
		direction = 'right'
	} else {
		console.log("There was a problem getting the sibling div")
	}

	// hide the pic labels
	for (var i=0; i<picLabels.length; i++) {
		picLabels[i].style.height = '0px'
		picLabels[i].style.padding = '0px'
	}

	el.style.width = '100%'
	sibling.style.width = '0px'
	showElement(desc, 'width', direction)
	el.onclick = function() {resetPic(this)}
}

function resetPic(el) {
	var sibling, desc, direction
	var picLabels = document.getElementsByClassName("pic-label")
	if (el.nextElementSibling.id == "old-think" || el.nextElementSibling.id == "new-think") {
		sibling = el.nextElementSibling
		desc = document.getElementById("old-desc1")
		direction = 'right'
	} else if (el.previousElementSibling.id == "old-think" || el.previousElementSibling.id == "new-think") {
		sibling = el.previousElementSibling
		desc = document.getElementById("new-desc1")
		direction = 'left'
	} else {
		console.log("There was a problem getting the sibling div")
	}

	// show the pic labels
	for (var i=0; i<picLabels.length; i++) {
		picLabels[i].style.height = 'auto'
		picLabels[i].style.padding = '5px'
	}



	el.style.width = '50%'
	sibling.style.width = '50%'
	hideElement(desc, 'width', direction)
	el.onclick = function() {picSlide(this)}
}

function hideElement(el, aspect, direction) {
	if (aspect == 'width') {
		el.style.width = '0px'
	} else if (aspect == 'height') {
		el.style.height = '0px'
	} else {
		console.log('There was a problem hiding element: ' + el)
	}

	if (direction == 'left') {
		el.style.margin = '0px'
		el.style.padding = '0px'
		el.style.boxShadow = 'none'
		el.style.border = 'none'
	} else if (direction == 'right') {
		// el.style.right += '0px'
		el.style.margin = '0px'
		el.style.padding = '0px'
		el.style.boxShadow = 'none'
		el.style.border = 'none'
	}
}
function showElement(el, aspect, direction) {
	if (aspect == 'width') {
		el.style.width = '350px'
	} else if (aspect == 'height') {
		el.style.height = '0px'
	} else {
		console.log('There was a problem hiding element: ' + el)
	}

	if (direction == 'right') {
		el.style.margin = '0px'
		el.style.padding = '5px'
		el.style.boxShadow = '-2px 2px 1px 1px rgba(0, 0, 0, 0.3)'
		el.style.border = 'none'
		el.style.right = (document.getElementById('new-pic').offsetWidth-380)*(-1) + 'px'
	} else if (direction == 'left') {
		// el.style.right += '0px'
		el.style.margin = '0px'
		el.style.padding = '5px'
		el.style.boxShadow = '2px 2px 1px 1px rgba(0, 0, 0, 0.3)'
		el.style.border = 'none'
	}
}
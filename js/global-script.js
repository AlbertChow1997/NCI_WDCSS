const isExpanded = document.getElementsByClassName('custom-accordion-btn')[0]
isExpanded.style.transition = 'all 0.25s ease-out'

// listen for click event
isExpanded.addEventListener('click', function () {
	// rotate 90 degrees on each click
	if (isExpanded.style.transform === 'rotate(90deg)') {
		isExpanded.style.transform = 'rotate(0deg)'
	} else {
		isExpanded.style.transform = 'rotate(90deg)'
	}
})

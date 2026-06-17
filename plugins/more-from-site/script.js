
const onShowMoreClick = (s) => {
	const searchBar = document.getElementById("results-search-input")
	if (!searchBar) return;
	
	var targetUrl = s.srcElement.getAttribute("targetUrl")
	var toAdd = " site:" + targetUrl;
	if (!searchBar.value.endsWith(toAdd)){
		const searchButton = document.getElementById("results-search-btn")
		if (!searchButton) return;
		searchBar.value += toAdd
		searchButton.dispatchEvent(new Event('click', { bubbles: true }));
	}
}

const addButtons = () => {
	const searchBar = document.getElementById("results-search-input")
	if (!searchBar) return;
	
	const results = document.querySelectorAll(".result-url-row")
	for(var result of results){
		var existing = result.querySelector(".more-from-site");
		if (!existing){
			var url = result.querySelector(".result-cite");
			if (!url) continue;
			var targetUrl = url.innerHTML
			targetUrl = targetUrl.substring(0,targetUrl.indexOf('/'))
			if (searchBar.value.endsWith(" site:" + targetUrl)) continue;
			
			let text = document.createTextNode("More from site");
			
			var dropdown = result.querySelector(".result-actions-menu")
			if (dropdown)
			{
				let newItem = document.createElement("button");
				newItem.appendChild(text);
				newItem.className = 'more-from-site result-actions-item degoog-menu-item'
				newItem.setAttribute("targetUrl", targetUrl)
				newItem.setAttribute("type", "button")
				newItem.setAttribute("role", "menuitem")
				newItem.addEventListener("click", onShowMoreClick)
				dropdown.appendChild(newItem);
			}
			else {
				let newItem = document.createElement("p");
				newItem.appendChild(text);
				newItem.className = 'more-from-site more-from-site-single'
				newItem.setAttribute("targetUrl", targetUrl)
				newItem.addEventListener("click", onShowMoreClick)
				result.appendChild(newItem);
			}
		}
	}
}

const init = () => {
	const resultsList = document.getElementById("results-list");
	if (!resultsList) return;
	
	const observer = new MutationObserver(() => {
		addButtons();
	});
	observer.observe(resultsList, { childList: true, subtree: true });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", _init);
} else {
  init();
}
const addButtons = () => {
	const searchBar = document.getElementById("results-search-input")
	if (!searchBar) return;
	const searchButton = document.getElementById("results-search-btn")
	if (!searchButton) return;
	
	const results = document.querySelectorAll(".result-url-row")
	for(var result of results){
		var existing = result.querySelector(".more-from-site");
		if (!existing){
			var url = result.querySelector(".result-cite");
			if (!url) continue;
			let newItem = document.createElement("p");
			let text = document.createTextNode("More from site");
			newItem.appendChild(text);
			newItem.className = 'more-from-site'
			newItem.setAttribute("targetUrl", url.innerHTML)
			newItem.addEventListener("click", (s) => {
				var targetUrl = s.srcElement.getAttribute("targetUrl")
				targetUrl = targetUrl.substring(0,targetUrl.indexOf('/'))
				var toAdd = " site:" + targetUrl;
				if (!searchBar.value.endsWith(toAdd)){
					searchBar.value += toAdd
					searchButton.dispatchEvent(new Event('click', { bubbles: true }));
				}
				
			})
			result.appendChild(newItem);
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
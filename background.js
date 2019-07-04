function onUpdated(tab) {
	console.log(`Changed to tab ${tab.id}`);
}

function onRemoved() {
	console.log(`Removed tab ${tab.id}`);
}

function onError(error) {
	console.log(`Error: ${error}`);
}

function findTab(tabs, details) {
	// use the first matched tab URL
	if (tabs.length >= 1) {
		var tab = tabs[0];

		console.log(`Found tab ` + tab.id + ` with same URL. Switching to it...`);

		var switching = browser.tabs.update(tab.id, { active: true });
		switching.then(onUpdated, onError);

		console.log(`Closing existing tab ` + details.tabId);
		
		var closing = browser.tabs.remove(details.tabId);
		closing.then(onRemoved, onError);
	}
}

function beforeNav(details) {
	// strip protocol (e.g. "https://", "http://", "ftp://", etc )
	var url_stripped = details.url.replace(/(^\w+:|^)\/\//, '');
	var querying = browser.tabs.query({url: "*://" + url_stripped});

	querying.then((tabs) => findTab(tabs, details), onError);
}

browser.webNavigation.onCreatedNavigationTarget.addListener(beforeNav);

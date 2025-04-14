function changeTabs(e) {
    // Get the list (parent) of tab (list item) clicked on
    const tabsList = this.parentElement.children;
    // Get list of tabs content by navigating up the tree to section, then back down to tabs-content list
    const tabsContentList = this.parentElement.parentElement.getElementsByClassName('tabs-content')[0];

    // Iterate over all tabs in the list and remove the selected class
    for (const tab of tabsList) {
        tab.classList.remove('selected-tab');
    }

    // iterate over all the tabs content and remove the visible class
    for (const tabContent of tabsContentList.children) {
        tabContent.classList.remove('visible-content');
    }

    // Get the corresponding tab content based on tab's unique class
    const tabContent = tabsContentList.getElementsByClassName(this.classList[0] + '_content')[0];

    // Set clicked tab and its content to selected / visible
    this.classList.add('selected-tab');
    tabContent.classList.add('visible-content');
}

function addTabEventListeners() {
    // Get all lists with ".tabs" class
    const tabbedLists = document.querySelectorAll('.tabs');

    // Iterate over each tabbed list
    for (const tabList of tabbedLists) {
        // Iterate over each tab (list item)
        for (const tab of tabList.children) {
            // Add event lister to each tab
            tab.addEventListener('click', changeTabs);
        }
    }
}

addTabEventListeners();

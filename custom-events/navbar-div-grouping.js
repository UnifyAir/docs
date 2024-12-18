import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';


function sortNavbarItems() {
    // Find the parent div of the selector div
    const parentDiv = document.querySelector('.navbar__items.navbar__items--right');
    // let str = JSON.stringify(parentDiv, null, 4);
    if (!parentDiv) {
        console.error('Parent div with class "navbar__items navbar__items--right" not found');
        return;
    } else {
        console.log("Found parentDiv: " + parentDiv.toString());
    }

    // Get all first-level children of the parent div
    const children = Array.from(parentDiv.children);

    // Create two groups: a and b
    const groupA = [];
    const groupB = [];

    children.forEach(child => {
        if (child.classList.contains('navbar-center')) {
            groupA.push(child);
        } else {
            groupB.push(child);
        }
    });

    // Remove the original selector div
    parentDiv.innerHTML = '';

    // Create and append the "navbar__items a" div
    const groupADiv = document.createElement('div');
    groupADiv.className = 'navbar__items navbar-center-container';
    groupA.forEach(item => groupADiv.appendChild(item));
    parentDiv.parentNode.appendChild(groupADiv);

    // Create and append the "navbar__items b" div
    const groupBDiv = document.createElement('div');
    groupBDiv.className = 'navbar__items navbar-right-container';
    groupB.forEach(item => groupBDiv.appendChild(item));
    parentDiv.parentNode.appendChild(groupBDiv);

    parentDiv.remove();

    console.log('Grouping complete. Original selector div removed, and Group A and B divs have been added.');
}

if (ExecutionEnvironment.canUseDOM) {
    // As soon as the site loads in the browser, register a global event listener
    // window.addEventListener('DOMContentLoaded', sortNavbarItems);
    const observer = new MutationObserver(() => {
        const parentDiv = document.querySelector('.navbar__items.navbar__items--right');
        if (parentDiv) {
            observer.disconnect(); // Stop observing once the element is found
            sortNavbarItems(); // Call the function
        }
    });

    // Start observing the document body for changes
    observer.observe(document.body, { childList: true, subtree: true });
}


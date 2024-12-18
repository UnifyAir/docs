import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

function updateOpacityOnScroll(selector) {

    console.log("updateOpacityOnScroll Called");

    // Add scroll event listener to the window
    window.addEventListener("scroll", () => {
        // Calculate the scroll position relative to the document height
        const element = document.querySelector(selector);
        if (!element) {
            console.error(`Element with ID '${selector}' not found.`);
            return;
        }
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        // Calculate opacity as a ratio of scroll position to document height
        // const opacity = 1-Math.max(0, Math.min(1, 1 - scrollTop / documentHeight));
        //
        // Scale opacity between 0 and 1 for the first 100px, after that it remains 1
        const pixelHeight = 500;
        const opacity = scrollTop <= 500 ? scrollTop / 100 : 1;
        // Update the element's opacity
        element.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
        console.log("on scroll called, opacity: ", opacity);
    });
}

if (ExecutionEnvironment.canUseDOM) {
    // As soon as the site loads in the browser, register a global event listener
    updateOpacityOnScroll(".navbar")
}

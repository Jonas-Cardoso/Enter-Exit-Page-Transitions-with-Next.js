# Enter/Exit Page Transitions with Next.js 14

`npm i` 

`npm run dev`
 
Next.js 13 introduced the App folder and removed support for next/router, a workaroud to implement page transitions is to use a custom <Link> Component that implements navigation progamatically, intercepting the route and calling the route transition via the Context API. 

This is a skeleton to use as Base for Larger Projects.

Notes: 
1. To transition with Forward/Backward browser navigation is necessary to implement a useEffect that conditionally checks if the navigation was requested from a link component.
2. The transition plays only once the current page has loaded but since sometimes the page will load while data is still being fetched, there might be ocasions where page will load, transition will play while page is not ready to show content. In this scenario adding a state to the Navigation Context to keep track of longer network calls and calling the exit once completed will fix this behavior.
3. To use framer motion you can just replaced the init / in / out functions with the respective initial / animate / exit behavior, and conditionally render the loader based on the context `isLoading`.
# Enter-Exit-Page-Transitions-with-Next.js

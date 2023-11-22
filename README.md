# Enter/Exit Page Transitions with Next.js 14

`npm i`

`npm run dev`

Next.js 13 introduced the App folder and removed support for next/router, a workaroud to implement page transitions is to use a custom <Link> Component that implements navigation progamatically, intercepting the route and calling the route transition via the Context API.

This is a skeleton to use as Base for Larger Projects.

Notes:

1. To transition with Forward/Backward browser navigation add a useEffect without a depedency array add follow a similar logic so it runs every time.

2. To use framer motion you can just replaced the init / in / out functions with the respective initial / animate / exit behavior, and conditionally render the loader based on the Context.

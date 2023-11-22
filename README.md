# Enter/Exit Page Transitions with Next.js 14

## Getting Started

To set up the project, run the following commands in your terminal:

```bash
npm i
npm run dev
```

With the release of Next.js 13, the App folder was introduced, which resulted in the removal of support for next/router. As a workaround to implement page transitions, one can utilize a custom <Link> Component. This component facilitates navigation programmatically by intercepting the route and invoking the route transition via the Context API.

## Implementation Details

This project structure serves as a base for larger projects. Here are a few important notes to consider during implementation:

### Forward/Backward Browser Navigation

To enable smooth transitions with forward/backward browser navigation, consider utilizing the useEffect hook without a dependency array. This approach makes the transition logic execute each time the navigation occurs.

### Integration with Framer Motion

For integration with Framer Motion, replace the init/_enter/_exit functions with the respective initial/animate/exit behavior.

Add a FINISHED = "FINISHED" property to the LOADING_STATES enum.

```typescript
export enum LOADING_STATES {
  INIT = "INITIALIZED",
  LOADING = "PENDING",
  LOADED = "COMPLETE",
  FINISHED = "FINISHED",
}
```

Add logic to the _enter function so it adds the finished state if the animation has been loaded.

```typescript
if (loading === LOADING_STATES.LOADED) {
  //once animation is complete
  setLoading(LOADING_STATES.FINISHED);
}
```

Conditionally render the loader based on the FINISHED state.

```typescript
{loading != LOADING_STATES.FINISHED && (<>Component</>)}

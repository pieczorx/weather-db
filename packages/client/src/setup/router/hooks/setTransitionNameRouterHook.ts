export function setTransitionNameRouterHookFactory() {
  let firstRouterReach = true
  return function setTransitionNameRouterHook(to, from) {
    if(firstRouterReach) {
      to.meta.transitionName = 'initial-transition'
      firstRouterReach = false
    } else {
      const fromDepth = from.meta.depth || 100
      const toDepth = to.meta.depth || 100
      to.meta.transitionName = `depth-transition-${fromDepth}-to-${toDepth}`
      console.log(to.meta.transitionName)
    }
  }
}

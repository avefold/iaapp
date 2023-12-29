export function routingHandler(callback: any) {
  try {
    if (typeof callback !== "function") {
      throw new Error("Callback function is required.")
    }

    const handleRoutingCallback = () => {
      const parseQueryParameters = (queryString: any) => {
        const queryParams: any = {}
        const searchParams = new URLSearchParams(queryString)
        for (let [key, value] of searchParams.entries()) { queryParams[key] = value }
        return queryParams
      }
      const currentRoute = window.location.pathname
      const queryParams = parseQueryParameters(window.location.search)
      callback(currentRoute, queryParams)
    }

    window.addEventListener("popstate", handleRoutingCallback)
    handleRoutingCallback()
  } catch (error) { console.error("Error occurred:", error) }
}

export function handleNavigation(path: any, parameters: any) {
  try {
    if (parameters && typeof parameters === "object") {
      const queryString = Object.entries(parameters)
        .map(
          ([key, value]: any) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join("&")
      path += `${queryString}`
    }

    window.history.pushState(null, "", path)
    const event = new PopStateEvent("popstate")
    window.dispatchEvent(event)
  } catch (error) { console.error("Error occurred while navigating:", error) }
}
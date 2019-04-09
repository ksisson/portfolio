/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

exports.onPreRouteUpdate = ({ location, prevLocation }) => {
  // console.log('new pathname', location.pathname)
  // console.log('old pathname', prevLocation ? prevLocation.pathname : null)
  localStorage.setItem("location", location.pathname)
  localStorage.setItem("prevLocation", prevLocation ? prevLocation.pathname : null)
  const location1 = location.pathname;
  const prevLocation1 = prevLocation ? prevLocation.pathname : null;
  return [location1, prevLocation1]
}

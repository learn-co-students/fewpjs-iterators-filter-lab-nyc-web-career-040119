// Code your solution here
function findMatching(drivers, string) {
  return drivers.filter( driver => driver.toLowerCase() === string.toLowerCase() )
}

function fuzzyMatch(drivers, string) {
  let driverName = drivers.map( driver => driver.name)
  driverName.filter( handler => handler[0] === string[0])
}

function matchName(drivers, string) {
  let matchName = drivers.map(driver => driver.name)
  matchName.filter(handler => handler.toLowerCase() === string.toLowerCase() )
}

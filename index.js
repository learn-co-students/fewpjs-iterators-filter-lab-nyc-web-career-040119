let findMatching = (array, name) => {
  return array.filter(n => n === name || n.toLowerCase() === name.toLowerCase())
  // check if n === name or if lower n === lower name
}

let fuzzyMatch = (array, name) => {
  return array.filter(n => n[0] === name[0])
}

let matchName = (array, name) => {
  return array.filter(n => n.name === name)
}

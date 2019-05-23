const findMatching = (driversArr, driverName) => (
  driversArr.filter(driver => (
    driver.toLowerCase() === driverName.toLowerCase()
  ))
)

const fuzzyMatch = (driversArr, beginLetters) => (
  driversArr.filter(driver => (
    driver.substr(0, beginLetters.length) === beginLetters
  ))
)

const matchName = (driversArr, name) => (
  driversArr.filter(driverObj => (
    driverObj.name === name
  ))
)

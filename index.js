const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name)
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
  drivers.pop()
}
  
function destructivelyRemoveFirstDriver() {
  drivers.shift()
}

function appendDriver(name) {
  const newDrivers = [...drivers, name]
  return newDrivers
}

function prependDriver(name) {
  const newDrivers = [name, ...drivers]
  return newDrivers
}

function removeLastDriver() {
  drivers.slice(-1)
  const newDrivers = drivers
  return newDrivers
}
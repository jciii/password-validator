function checkLength(valid) {
  if (valid.length >= 8) {
    return true
  }
}
function checkLower(valid) {
  let hasLower = false
  let i = 0
  while (!hasLower && i < valid.length) {
    hasLower = valid.charCodeAt(i) >= 97 && valid.charCodeAt(i) <= 122
    i++
  }
  if (hasLower) {
    return true
  }
}
function checkUpper(valid) {
  let hasUpper = false
  let i = 0
  while (!hasUpper && i < valid.length) {
    hasUpper = valid.charCodeAt(i) >= 65 && valid.charCodeAt(i) <= 90
    i++
  }
  if (hasUpper) {
    return true
  }
}
function checkNumbers(valid) {
  let hasNums = false
  let i = 0
  while (!hasNums && i < valid.length) {
    hasNums = valid.charCodeAt(i) >= 48 && valid.charCodeAt(i) <= 57
    i++
  }
  if (hasNums) {
    return true
  }
}
function checkSpecial(valid) {
  let hasSpecial = false
  let i = 0
  while (!hasSpecial && i < valid.length) {
    hasSpecial = valid.charCodeAt(i) >= 33 && valid.charCodeAt(i) <= 47
    i++
  }
  if (hasSpecial) {
    return true
  }
}
function validatePassword(valid) {
  if (checkLength(valid) && checkLower(valid) && checkUpper(valid) &&
    checkNumbers(valid) && checkSpecial(valid)) {
    return true

  }
  else (!valid)
  return false

}

module.exports = validatePassword
module.exports = function check(str, bracketsConfig) {
  
  let config = bracketsConfig.flat()
  let arrLength = []

  for (let i = 0; i < config.length; i++) {
    arrLength.push(str.split("").filter(item => item === config[i]).length);
  }

  let filteredArr = arrLength.filter((item, index) => index === arrLength.indexOf(item))

  return (filteredArr.length % 2 != 0) ? true : false

}

export function getGeoLocation(options) {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options)
  })
}

export function mobilePhoneValidation(mobilePhone) {
  let reg = /^(00213|\+213|0)(5|6|7)[0-9]{8}$/
  return reg.test(mobilePhone)
}

export function timeValidation(time) {
  let reg = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/
  return reg.test(time)
}

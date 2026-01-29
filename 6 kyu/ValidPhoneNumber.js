function validPhoneNumber(phoneNumber){
  let regex = /^\(\d{3}\) \d{3}-\d{4}$/gi
  return regex.test(phoneNumber)
}
// "(123) 456-7890"  => true
// "(1111)555 2345"  => false
// "(098) 123 4567"  => false
console.log(validPhoneNumber("(123) 456-7890"))
console.log(validPhoneNumber("(098) 123-4567"))
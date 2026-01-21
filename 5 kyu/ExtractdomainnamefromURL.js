function domainName(url){
 return url.match(/(?:https?:\/\/)?(?:www\.)?([^.\/?]+)/)[1]
}
// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

console.log(domainName("http://github.com/carbonfive/raygun"))

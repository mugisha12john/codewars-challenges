// Write a JavaScript function that fetches data from an API and retries
// the request a specified number of times if it fails.
//  ( Bonus question for preparing the practical mental model).

async function getData() {
    let num = 0;
  let api = await fetch("https://api.github.com/users/mugisha12ujohn");
  while (!api.ok && num<=3) {
    // let retry = await fetch("https://api.github.com/users/muggisha12ohn");
    // api = retry;
    console.log("am failed")
    num++
  }
  console.log("good job");
}
getData();

async function getData() {
  let num = 0;
  //   let username = window.prompt("Enter your username here!");

  let api = await fetch(
    `https://api.github.com/users/${window.prompt(
      "Enter your username here!"
    )}/repos`
  );
  while (!api.ok && num < 3) {
    let retry = await fetch(
      `https://api.github.com/users/${window.prompt(
        "Enter your username here!"
      )}/repos`
    );
    if (retry.ok) {
      api = retry;
      return;
    }

    num++;
  }
  console.log(api);
}
getData();

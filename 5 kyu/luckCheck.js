function luckCheck(ticket) {
  if (!/^\d+$/.test(ticket)) {
    throw new Error("error");
  }

  if (ticket.length % 2 === 0) {
    let a = ticket.length / 2;
    let leftSide = ticket
      .slice(0, a)
      .toString()
      .split("")
      .map(Number)
      .reduce((a, b) => a + b, 0);
    let rightSide = ticket
      .slice(a)
      .toString()
      .split("")
      .map(Number)
      .reduce((a, b) => a + b, 0);
    return rightSide === leftSide ? true : false;
  } else {
    let middle = Math.round(ticket.length / 2);
    let leftSide = ticket
      .slice(0, middle - 1)
      .toString()
      .split("")
      .map(Number)
      .reduce((a, b) => a + b, 0);
    let rightSide = ticket
      .slice(middle)
      .toString()
      .split("")
      .map(Number)
      .reduce((a, b) => a + b, 0);
    return rightSide === leftSide ? true : false;
  }
}
// 17935     #         1 + 7 = 3 + 5  // if the length is odd, you should ignore the middle number when adding the halves.
console.log(luckCheck("683179"));
console.log(luckCheck("17935"));
console.log(luckCheck("56328116"));
console.log(luckCheck("003111"));

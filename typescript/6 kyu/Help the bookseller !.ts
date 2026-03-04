// A bookseller has lots of books classified in 26 categories labeled A, B, C, ..., Z. Each book has a code of at least 3 characters. The 1st character of a code is a capital letter which defines the book category.

// In the bookseller's stocklist each code is followed by a space and by a positive integer, which indicates the quantity of books of this code in stock.

// Task
// You will receive the bookseller's stocklist and a list of categories. Your task is to find the total number of books in the bookseller's stocklist, with the category codes in the list of categories. Note: the codes are in the same order in both lists.

// Return the result as a string described in the example below, or as a list of pairs (Haskell/Clojure/Racket/Prolog).

// If any of the input lists is empty, return an empty string, or an empty array/list (Clojure/Racket/Prolog).

// Example
// # the bookseller's stocklist:
// "ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"

// # list of categories:
// "A", "B", "C", "W"

// # result:
// "(A : 20) - (B : 114) - (C : 50) - (W : 0)"
// Explanation:

// category A: 20 books (ABART)
// category B: 114 books = 25 (BKWRK) + 89 (BTSQZ)
// category C: 50 books (CDXEF)
// category W: 0 books
// export const stockList = (listOfArt: string[], listOfCat: string[]):string=> {
//   if (listOfArt === null || listOfCat === null) return "";
//   let pairs: (string|number)[] = [];
//   for (let i = 0; i < listOfArt.length; i++) {
//     if (listOfCat.includes(listOfArt[i][0])) {
//       let booknumber = listOfArt[i].match(/\d+/gi);
//       let singeletter = listOfArt[i][0];
//       pairs.push([listOfArt[i][0], booknumber[0]]);
//     }
//   }
//   let obj:unknown = {};
//   pairs.forEach(([key, value]) => {
//     if (!obj[key]) {
//       obj[key] = [];
//     }
//     obj[key].push(Number(value));
//   });
//   for(let a in obj){
//     obj[a] = obj[a].reduce((a,b)=>a+b,0)
//   }
// let result:string = ''
//   for(let cat of listOfCat){

//     if(cat in obj){
//       result+=`- (${cat} : ${obj[cat]}) `
//     }else{
//       result+=`(${cat} : 0) `
//     }
//   }
//   return result
// };
export const stockList = (listOfArt: string[], listOfCat: string[]): string => {
  if (listOfArt.length === 0 || listOfCat.length === 0) return "";

  const totals: Record<string, number> = {};

  for (const cat of listOfCat) {
    totals[cat] = 0;
  }

  for (const art of listOfArt) {
    const category = art[0];
    if (category in totals) {
      const qty = parseInt(art.split(" ")[1]);
      totals[category] += qty;
    }
  }

  return listOfCat.map((cat) => `(${cat} : ${totals[cat]})`).join(" - ");
};
let b: string[] = ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"];
let c: string[] = ["A", "B", "C", "D"];
// res = "(A : 0) - (B : 1290) - (C : 515) - (D : 600)";
console.log(stockList(b, c));

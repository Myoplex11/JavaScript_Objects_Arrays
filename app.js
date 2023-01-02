console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");


const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(numbers) {
    sum = 0;
    numbers.forEach(number => {
        sum += number;
    });
    return sum;
}

console.log(arraySum(numbers));




// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let book = {}
    book.title = "Harry Potter",
    book.author = "Rowling",
    book.pages = 400,
    book.readCount = 3,


   book.info = function() {
   return(`${this.title} by ${this.author}, ${this.pages} pages, read ${this.readCount} times.`);
   }

   console.log(book.info());









// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let sentence = "The quick brown fox jumps over the lazy dog";



function reverseWORD(sentence) {
    let result =[];


    let arrayWords = sentence.split(" ");
    for(i =0; i < arrayWords.length; i++) {
        let letters = arrayWords[i].split("");
        letters.reverse();
        wordsReversed = letters.join("");
        result.push(wordsReversed);

    }
    return result.join(" ");
}

console.log(reverseWORD(sentence));


// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

let result = [];

function fileCoverter(data) {
    let rows = data.split("\n");
    let headers = rows[0].split(",");

    for(i =1; i < rows.length; i++) {
        object = {};
        let values = rows[i].split(",");
        values.forEach((val,idx) => {
            object[headers[idx]] = val;
        })
    result.push(object);
    }

   return result;
}

console.log(fileCoverter(csvData));

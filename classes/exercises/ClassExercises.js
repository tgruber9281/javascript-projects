// Define your Book class here:
class Book {
    constructor(title, author, copyrightDate, ISBN, numPages, timesCheckedOut = 0, discarded = 'No') {
        this.title = title,
        this.author = author,
        this.copyrightDate = copyrightDate,
        this.ISBN = ISBN,
        this.numPages = numPages,
        this.timesCheckedOut = timesCheckedOut,
        this.discarded = discarded
    }
    checkOut(uses = 1) {
        this.timesCheckedOut += uses;
    }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor(title, author, copyrightDate, ISBN, numPages, timesCheckedOut = 0, discarded = 'No') {
        super(title, author, copyrightDate, ISBN, numPages, timesCheckedOut = 0, discarded = 'No');
    }
    discard() {
        let currentDate = new Date();
        let date = new Date(this.copyrightDate)
        let age = Math.floor(Math.abs(currentDate.getTime() - date.getTime()) / (1000 * 60 * 60 * 24) / 365)
        if (age > 5) {
            this.discarded = 'Yes';
        }
    }
}

class Novel extends Book {
    constructor(title, author, copyrightDate, ISBN, numPages, timesCheckedOut = 0, discarded = 'No') {
        super(title, author, copyrightDate, ISBN, numPages, timesCheckedOut = 0, discarded = 'No');
    }
    discard() {
        if (this.timesCheckedOut > 100) {
            this.discarded = 'Yes';
        }
    }
}
// Declare the objects for exercises 2 and 3 here:
let pride = new Novel('Pride and Prejudice', 'Jane Austen', '5/13/1813', '1111111111111', 432, 32, 'No')
let shuttleMan = new Manual('Top Secret Shuttle Building Manual', 'Redacted', '8/24/2013', '0000000000000', 1147, 1, 'No')
// Code exercises 4 & 5 here:

shuttleMan.discard();
pride.checkOut(5);
pride.discard();
console.log(pride);
console.log(shuttleMan);
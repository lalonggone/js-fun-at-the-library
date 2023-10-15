function createTitle(title) {
  return "The " + title;
}

function buildMainCharacter(charName, charAge, charPronouns) {
  return {
    name: charName,
    age:charAge,
    pronouns: charPronouns,
  }
}

function saveReview(quote, reviews) {
  if (!reviews.includes(quote)) {
    reviews.push(quote);
  }
}

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20;
}

function writeBook(bookTitle, bookCharacter, genre) {

var pageCount = bookTitle.length * 20;

  return {
    title: bookTitle,
    mainCharacter: bookCharacter,
    genre: genre,
    pageCount: pageCount
  }
}

function editBook(book) {
  book.pageCount = book.pageCount * 3/4;
}


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
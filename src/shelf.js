function shelfBook(book, shelf) {
if (shelf.length < 3) {
  shelf.unshift(book);
}
}

function unshelfBook(bookName, shelf) {
  var index = shelf.findIndex(book => book.title === bookName);

  if (index !== -1) {
    shelf.splice(index, 1);
  }
}

function unshelfBook(bookName, shelf) {
  for (let i = 0; i < shelf.length; i++) {
    if (shelf[i].title === bookName) {
      shelf.splice(i, 1);
    }
  }
}

function listTitles(shelf) {
  var titles = [];
  for (var i = 0; i < shelf.length; i++) {
    titles.push(shelf[i].title);
  }
  return titles.join(', ');
}

function searchShelf(shelf, titleToFind) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === titleToFind) {
      return true; 
    }
  }
  return false;
}



module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
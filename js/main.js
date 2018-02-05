//Listen for form Submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(e){
  //Get form values

  var siteName = document.getElementById('siteName').value;
  var siteUrl = document.getElementById('siteUrl').value;

  var bookmark = {
    name: siteName,
    url: siteUrl
  }
  
 //Local storage test
 // localStorage.setItem('test', 'hello world');
 // console.log(localStorage.getItem('test'));

//Test if bookmark is null
if(localStorage.getItem('bookmarks') === null){
  //Initialize array
  var bookmarks = [];
  bookmarks.push(bookmark);
  //Set to localStorage
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}

  //Prevent form from submitting
  e.preventDefault();
}

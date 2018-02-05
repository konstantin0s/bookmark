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
} else {
  //Get bookmarks from localStorage
   var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
   //Add bookmark to array
   bookmarks.push(bookmark);
   //Re-set to localStorage
   localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

}

  //Prevent form from submitting
  e.preventDefault();
}

//fetch bookmarks
function fetchBookmarks(){
  //GEt bookmarks from localStorage
 var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

//Get output id
var bookmarksResults = document.getElementById('bookmarksResults');

//Build output
bookmarksResults.innerHTML = '';
for (var i = 0; i < bookmarks.length; i++){
  var name = bookmarks[i].name;
  var url = bookmarks[i].url;

  bookmarksResults.innerHTML += '<div class="well">'+
                                '<h3>'+name+
                                '</h3>'+
                                '</div>';

 }
}

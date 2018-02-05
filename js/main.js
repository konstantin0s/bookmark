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
//refetch bookmarks
fetchBookmarks();
  //Prevent form from submitting
  e.preventDefault();
}

//delete bookmark
function deleteBookmark(url) {
  //GEt bookmarks from localStorage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  // loop through bookmarksResults
  for (var i = 0; i < bookmarks.length; i++){
    if(bookmarks[i].url == url){
      //remove from URL
      bookmarks.splice(i, 1);
    }
  }
  //Re-set to localStorage
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  //refetch bookmarks
  fetchBookmarks();
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
                                ' <a class="btn btn-default" target="_blank" href="'+url+'">Visit</a>' +
                                ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="'+url+'">Delete</a>' +
                                '</h3>'+
                                '</div>';

 }
}

var query_string = window.location.search;
var urlParmsArr = new URLSearchParams(query_string);
var id = urlParmsArr.get('id');
console.log(id);

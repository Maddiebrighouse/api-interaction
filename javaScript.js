window.onload = function (){
  document.getElementById("ajaxButton").addEventListener('click', makeRequest);
}
makeRequest()
function makeRequest(){
  var httpRequest = new XMLHttpRequest();
  if (!httpRequest){
    alert('Can not create XMLHTTP instace');
    return false;
  }

  httpRequest.onreadystatechange = alertContents;
  httpRequest.open('GET','https://eda-te-reo.herokuapp.com/api/proverbs', true);
  httpRequest.send()

  function alertContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE){
      if (httpRequest.status === 200) {
        //var quotes = document.getElementById("quotes");
        //quotes.innerHTML = httpRequest.responseText;
        var quotes = JSON.parse(this.responseText);
        //showQuotes(quotes)
        document.getElementById("maori").innerHTML = quotes.source;
        document.getElementById("english").innerHTML = quotes.translation;

        quotes.innerHTML = httpRequest.responseText;
      } else {
        alert('There was a problem with the request.');
      }
    }
  }


}
  /*function twitter().click(function(){
  function (this).attr("href", 'https://twitter.com/intent/tweet?text=' + quotes);
});
*/

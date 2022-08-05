const quoteContainer = document.getElementById('quote-container');
const quoteText  = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

//show loading
function showLoadingSpinner(){
   loader.hidden =false;
   quoteContainer.hidden = true;
}

//hide loading
function removeLoadingSpinner(){
   if(!loader.hidden){
      quoteContainer.hidden = false;
      loader.hidden =true;
   }
}

//Get Quote from API
async function getQuote() {
   try{
    let proxyUrl = "https://cors-anywhere.herokuapp.com/";
    let apiUrl = "https://forismatic-proxy.herokuapp.com/?lang=en&key=123456";
      
      showLoadingSpinner();
   let response = await fetch('https://forismatic-proxy.herokuapp.com/?lang=en&key=123456');
   let data = await response.json();
   // console.log(data);


   //if author is balnk, add unknown
   if(data.quoteAuthor === ''){
   authorText.innerText = "UNKNOWN";
   } else{
   authorText.innerText = data.quoteAuthor;
   
}

//Reduce font size for long quotes
if(data.quoteText.length > 120){
quoteText.classList.add('long-quote');
}
else{
   quoteText.classList.remove('long-quote');
}
quoteText.innerText = data.quoteText;

//stop loader, show quotes: 
   removeLoadingSpinner();
throw new Error('ooh sry an error happend');
}catch(error){
   console.log('ooh sry an error happend',error);
   // getQuote();
}
}


//here end the functionality of new quote Button

//now start the twitter functionality
   function tweetQuote(){
      try{
         const quote = quoteText.innerText;
         const author = authorText.innerText;
         const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
         window.open(twitterUrl , '_blank');
      } catch(error){
         console.log("sry there is an error,," +error);
      }
      
   }

   newQuoteBtn.addEventListener("click",getQuote);
   twitterBtn.addEventListener("click",tweetQuote);

getQuote();





























// async function getQuote(){
//    // const proxyUrl = 'https://cors-anywhere.herokuapp.com';
//    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';

//       try{
//          const response = await fetch(apiUrl);//this mean it won't be set untile it finish up the fetch
//          const data = await response.json();//this mean it won't be set untile it get the response
//          console.log(data);
//       } catch(error){
//          // getQuote();
//          console.log('oh nooo , sry no quote' , error);
//       }
// }

//on load
// getQuote();

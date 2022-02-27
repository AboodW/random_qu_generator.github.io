//Get Quote from API

async function getQuote() {
   console.log('test');
   let response = await fetch('https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json&fbclid=IwAR0U_D4wVVClorSqiSyU-U9CRrsqVTD2G9z9U4Crxn7ctkbFE3n5xRHbNjY');
   let data = await response.json();
   console.log(data);
}
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
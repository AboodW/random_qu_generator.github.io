//Get Quote from API
async function getQuote(){
   // const proxyUrl = 'https://cors-anywhere.herokuapp.com';
   const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';

      try{
         const response = await fetch(apiUrl);//this mean it won't be set untile it finish up the fetch
         const data = await response.json();//this mean it won't be set untile it get the response
         console.log(data);
      } catch(error){
         // getQuote();
         console.log('oh nooo , sry no quote' , error);
      }
}

//on load
getQuote();
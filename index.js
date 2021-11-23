
var ele = document.querySelector('.All-quotes')                    //selected the div with class All-characters

fetch('https://programming-quotes-api.herokuapp.com/quotes')             //fetching all the data of quotes from api
.then((data) => data.json()) 
.then((data1) => {
    for(var i=0;i<data1.length;i++){                                     
        let quote = data1[i];
                                                                
           ele.innerHTML+=   `<blockquote class='quote'><h4>"${quote.en}" — ${quote.author} </h4></blockquote>`
            
            
        }
    }
).catch(function(error) {                                       
        console.log(error);
    });


const http=require('http');
const url=require('url');
const fs=require('fs')


const tempOverview = fs.readFileSync(`${__dirname}/temp/overview.html` , 'utf-8' )
const tempCard = fs.readFileSync(`${__dirname}/temp/template-card.html` , 'utf-8' )
const tempProduct = fs.readFileSync(`${__dirname}/temp/product.html` , 'utf-8' )


const replaceTemplate = (temp , product) => {

    let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%PRICE%}/g, product.price);
  output = output.replace(/{%FROM%}/g, product.from);
  output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
  output = output.replace(/{%QUANTITY%}/g, product.quantity);
  output = output.replace(/{%DESCRIPTION%}/g, product.description);
  output = output.replace(/{%ID%}/g, product.id);
  
  if(!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
  return output;
}


const data = fs.readFileSync(`${__dirname}/1.json` , 'utf-8' )
const dataObj=JSON.parse(data)


//server
const server = http.createServer((req,res) => {
    const pathName=req.url
 
    
    //overview
    
    if(pathName=="/" || pathName==='/overview'){
        res.writeHead(200 , {'content-type': 'text/html' })

        const cardsHtml =dataObj.map(el=> replaceTemplate(tempCard , el)).join('')
        const output =tempOverview.replace(`{%PRODUCT_CARDS%}` , cardsHtml)



        res.end(output)
    }
        
        

    
    
    //api
    else if(pathName==='/api'){
        res.writeHead(200 , {'content-type': 'application/json' })
        res.end(data)
    }

    //notfound
    else{
        res.writeHead(404 , {
            'content-type':'text/html',
            'my-own-header':'hello world'
        })
        res.end("Page not find")
    }
})



//listen
server.listen(3000, '127.0.0.1' , ()=>{
    console.log("server listen at port no 3000")
})


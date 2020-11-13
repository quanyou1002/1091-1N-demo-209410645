 function change(index) {
    const p =document.getElementById('show');
    console.log('show',p);
    switch(index){
        case 1:
       p.innerHTML ='<iframe width=100% height=100% src="./w1/index.html" />';
        break;
        case 2:
          p.innerHTML ='<iframe width=100% height=100% src="./w1pokemon/pokemon.html" />';
         break;
         case 3:
          p.innerHTML ='<iframe width=100% height=100% src="./w2img/img.html" />';
         break;
          case 4:
          p.innerHTML ='<iframe width=100% height=100% src="./w02-blog/blog.html" />';
         break;
         case 5:
          p.innerHTML ='<iframe width=100% height=100% src="./w3/div-demo (1).html" />';
         break;
          case 6:
          p.innerHTML ='<iframe width=100% height=100% src="./w4/div_tku60.html" />';
          break;
          case 7:
          p.innerHTML ='<iframe width=100% height=100% src="./w6/index.html" />';
         break;
    }
    
    
   
 }
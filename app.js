let texts=['Home:Thakurgaon','Work:Student','Collage name:Thakurgaon Polytechnic Instutite']
let count=0;
let index=0
let currentText="";
let letterText="";

(function type(){
    if(count==texts.length){
      count=0;
    }
currentText=texts[count]
letterText=currentText.slice(0,++index)
 document.querySelector("#typing").textContent=letterText;
 if(currentText.length===letterText.length){
     count++
     index=0
 }
 setTimeout(type,500)
})()

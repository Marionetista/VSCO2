var ie = document.all;
var nn6 = document.getElementById && !document.all;
var isdrag = false;
var x,y;
var dobj;
var maxZindex = 1;

var images = document.getElementsByClassName('janela');
//var listaImages = [];
for(var i = 0; i < images.length; i++) {
   // listaImages.push(images[i].src);
   maxZindex++;
}

//function pra clicar em todas as image
window.addEventListener("load", () => {

  //Para cada imagem da página.
  document.querySelectorAll('img').forEach((item) => {
   
    //Registra o evento click para testes
    item.addEventListener('click', (e) => {
     // console.log(e.target);
     // console.log(maxZindex);
    });

  });

});

    function movemouse(e) {
        if (isdrag) {
        dobj.style.left = nn6 ? tx + e.clientX - x : event.clientX - x;
        dobj.style.top = nn6 ? ty + e.clientY - y : ty + event.clientY - y;
        dobj.style.zIndex = maxZindex;
        
        return false;
        }
    }
    
    function selectmouse(e) {
        var fobj = nn6 ? e.target : event.srcElement;
        var topelement = nn6 ? "HTML" : "BODY";

        while (fobj.tagName != topelement && !fobj.classList.contains('janela'))
            {
            fobj = nn6 ? fobj.parentNode : fobj.parentElement;
            }

         if (fobj.classList.contains("janela")){
                isdrag = true;
                dobj = fobj;
                tx = parseInt(dobj.style.left + 0);
                ty = parseInt(dobj.style.top + 0);
                x = nn6 ? e.clientX : event.clientX;
                y = nn6 ? e.clientY : event.clientY;
                document.onmousemove = movemouse;
                return false;
            }
    }
    document.onmousedown = selectmouse;
    document.onmouseup = new Function("isdrag=false");


    // modals
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    //congrats for Golomos
    for(let i = 0; i < images.length; i++){
      images[i].ondblclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      }
      
      images[i].onclick = function(){
      //Array.from(document.querySelectorAll('.is-active')).map(el => el.classList.remove('is-active')); 
      //dobj.classList.add("is-active");
      images[i].style.zIndex = maxZindex;
      maxZindex++;
     }

     images[i].ondragover = function(){
      images[i].style.zIndex = maxZindex;
      maxZindex++;
     }
    }

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() { 
      modal.style.display = "none";
    }
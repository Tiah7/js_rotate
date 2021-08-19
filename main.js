
document.addEventListener("DOMContentLoaded", (event) => {
    window.addEventListener("resize", detectOrientation) ;
    detectOrientation() ;
  });
  
  function detectOrientation(){
    if(window.innerHeight>window.innerWidth){
        document.getElementById('rotateScreen').style.display='block';
    } else{
        document.getElementById('rotateScreen').style.display='none';
        document.getElementById('displayContent').style.display='block';
    }
  }
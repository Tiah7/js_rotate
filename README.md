# js_rotate

## Tournez votre écran
- Objectif : Si vous consultez la page web sur l'écran de votre smartphone orienté verticalement, une animation vous invite à tourner votre écran à l'horizontal pour accéder au contenu de la page web

- Consigne : 
•	Développez la fonction detectOrientation(), qui se compose d'une condition qui vérifie l'angle de rotation du smartphone, et change les propriétés display none et block des div « rotateScreen » et « displayContent » ;
o	Indice :  console.log(window.orientation);
•	Hébergez votre travail sur le serveur codeur.online à l'aide de Filezilla, et testez-le sur un smartphone.

- Ressource utile pour réaliser l'exercice : 
•	Dans une fenêtre où la console de Google Chrome est ouverte, utilisez les touches Ctrl + Shift + M pour ouvrir la Device Toolbar, choisissez un modèle de smartphone et utilisez la fonction « rotate » pour faire vos tests ;
•	DOMContentLoaded
•	Window: resize event
•	Screen.orientation
•	style.display

- Bonus : 
•	Une utilisation pertinente de cette fonctionnalité, ce serait un site web avec du contenu qui défile horizontalement, et non pas verticalement comme sur les pages web habituelles. Donc... faites en sorte que le scroll sur votre page soit horizontale !

Dans HTML : 
                  <!DOCTYPE html>
                  <html lang="en" dir="ltr">
                    <head>
                      <meta charset="utf-8">
                      <meta name="viewport" content="width=device-width, initial-scale=1.0">
                      <title>Screen Orientation</title>
                      <link rel="stylesheet" href="main.css">
                    </head>
                    <body>
                      <div id='rotateScreen'>
                        <img src="rotate.gif" alt="rotate screen">
                        <p>Please rotate your device!</p>
                      </div>
                      <div id='displayContent'>
                        <p>Insert your content here.</p>
                      </div>
                      <script type="text/javascript" src="main.js"></script>
                    </body>
                  </html>
                  
Dans le css :
                  body{
                    margin:0;
                    padding:0;
                    background-color: black;
                    color:white;
                  }

                  #rotateScreen{
                    display: none;
                    text-align: center;
                    margin-top: 50vh;
                    transform: translateY(-50%);
                  }

                  #displayContent{
                    display: none;
                  }
                  
Dans js :
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

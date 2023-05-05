const stat=document.querySelectorAll(".stats");

const fields=document.querySelectorAll(".fields h1");






// const ecriture=document.querySelectorAll(".menuOptions h1 ");

const menuOptions=document.querySelectorAll(".menuOptions");
const title = document.querySelectorAll(".menuOptions h1");
console.log(title.length);
// ecriture.classList.add("title")



stat[0].classList.add("caché");

// for (let i = 0; i < menuOptions.length; i++) {
//   (function (index) {
//     let title = menuOptions[index].querySelector("h1");
//     menuOptions[index].addEventListener("click", () => {
//       menuOptions[index].classList.add("menuOptionsClick");
//       stat[index].classList.remove("caché");
//       for(let j=0;j<menuOptions.length;j++){
//         let titre = menuOptions[j].querySelector("h1");
//         if(j!=index){
//             menuOptions[j].classList.remove("menuOptionsClick")
//             titre.classList.remove("titleClick");
//             stat[j].classList.add("caché");
            
//         }
        
//       }
//       if (menuOptions[index].classList.contains("menuOptionsClick")) {
//         title.classList.add("titleClick");
//       }
     
//     });
//   })(i);
// }

for (let i = 0; i < menuOptions.length; i++) {
  (function (index) {
    // let title = menuOptions[index].querySelector("h1");
    menuOptions[index].addEventListener("click", () => {
      // je vais ajouter le code de gestion d'apparition de fields ici
      if(index==0){
        for (let a = 0; a < fields.length; a++) {
          fields[a].classList.add("caché");
      }
    }else{
      for (let a = 0; a < fields.length; a++) {
       
          fields[a].classList.remove("caché");

    }
      
    }
      menuOptions[index].classList.add("menuOptionsClick");
      if(index!=2){
        stat[index].classList.remove("caché");
        for(let j=0;j<menuOptions.length;j++){
          // let titre = menuOptions[j].querySelector("h1");
          if(j!=index){
              menuOptions[j].classList.remove("menuOptionsClick")
              title[j].classList.remove("titleClick");
              stat[j].classList.add("caché");
              
          }
          
        }
      }else{
        stat[1].classList.remove("caché");
        for(let j=0;j<menuOptions.length;j++){
          // let titre = menuOptions[j].querySelector("h1");
          if(j!=1){
              menuOptions[j].classList.remove("menuOptionsClick")
              title[j].classList.remove("titleClick");
              stat[j].classList.add("caché");
              
          }

      }
     
      
      if (menuOptions[index].classList.contains("menuOptionsClick")) {
        title[index].classList.add("titleClick");
      }
     
    }});
  })(i);
}
for(let i=0;i<menuOptions.length;i++){
  if(menuOptions[i].classList.contains("menuOptionsClick")){
    title[i].classList.add("titleClick");
  }
}

// if(!stat[0].classList.contains("caché")){
//   fields[0].classList.remove("audessus")

// }







const abonnement=document.querySelectorAll(".abonnement");



// test 

menuOptions[0].addEventListener("click",()=>{
  
})




// fin du test 


abonnement[0].classList.add("caché");

abonnement[1].classList.add("caché");


console.log(fields.length);

for (let m = 0; m < fields.length; m++) {
 
  fields[m].addEventListener("click", () => {//l'erreur est par rapport à cette ligne
    console.log("cliqué");
    for (let j = 0; j < abonnement.length; j++) {
      if (j !== m) {
        abonnement[j].classList.add("caché");
      }
      if(abonnement[m].classList.contains("caché")){
        abonnement[m].classList.remove("caché")

      }
    }
  });
}



// if(stat[1].classList.contains("caché")){
//   for (let m = 0; m < fields.length; m++) {
//     fields[m].classList.add("caché");
//   }
  
// }else{
//   for (let m = 0; m < fields.length; m++) {
//     if(fields[m].classList.contains("caché")){
//       fields[m].classList.remove("caché");
//     }
//   }

// }


// for (let i = 0; i < menuOptions.length; i++) {
//   (function (index) {
//     let title = menuOptions[index].querySelector("h1");
//     menuOptions[index].addEventListener("click", () => {
//       // je vais ajouter le code de gestion d'apparition de fields ici
//       if(index==0){
//         for (let a = 0; a < fields.length; a++) {
//           fields[a].classList.add("caché");
//       }
//     }else{
//       for (let a = 0; a < fields.length; a++) {
       
//           fields[a].classList.remove("caché");

//     }
      
//     }
//       menuOptions[index].classList.add("menuOptionsClick");
//       if(index!=2){
//         stat[index].classList.remove("caché");
//         for(let j=0;j<menuOptions.length;j++){
//           let titre = menuOptions[j].querySelector("h1");
//           if(j!=index){
//               menuOptions[j].classList.remove("menuOptionsClick")
//               titre.classList.remove("titleClick");
//               stat[j].classList.add("caché");
              
//           }
          
//         }
//       }else{
//         stat[1].classList.remove("caché");
//         for(let j=0;j<menuOptions.length;j++){
//           let titre = menuOptions[j].querySelector("h1");
//           if(j!=1){
//               menuOptions[j].classList.remove("menuOptionsClick")
//               titre.classList.remove("titleClick");
//               stat[j].classList.add("caché");
              
//           }

//       }
     
      
//       if (menuOptions[index].classList.contains("menuOptionsClick")) {
//         title.classList.add("titleClick");
//       }
     
//     }});
//   })(i);
// }



// là je vais créer une fonction qui va afficher le msg de refus de l'abonnement 

const inlock=document.querySelector(".inlock");
const approuver=document.querySelector(".approuver");
const refuser=document.querySelector(".annuler");
const refusAbonnement=document.querySelector(".RefusAbonnement");

inlock.addEventListener("click",()=>{
  refusAbonnement.classList.add("refusNotif")
})



  approuver.addEventListener("click",()=>{
    refusAbonnement.classList.remove("refusNotif")
    console.log("ohhhhhhhhhh");
  })
  refuser.addEventListener("click",()=>{
    refusAbonnement.classList.remove("refusNotif")
  })

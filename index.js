
const hamburger = document.getElementsByClassName('hamb')[0];
const menu = document.getElementById('get_menu');     
const closeButton = document.getElementById('close');
hamburger.addEventListener('click', () => {
    menu.classList.toggle('menu-show');
    menu.classList.toggle('menu-hide');
})

closeButton.addEventListener('click', () => {
    menu.classList.toggle('menu-show');
    menu.classList.toggle('menu-hide');
});




let speakerSection = document.getElementById('wrapper');

const speakers = [
    {        
        image : 'images/speakers/Brendan_Eich.jpg',
        speakerName : 'Brendan Eich',
        speakerProfession : 'American computer programmer',
        speakerDetail : 'Brendan Eich is an American computer programmer and technology executive.',
    },

    {       
        image : 'images/speakers/Dennis_Ritchie.jpg',
        speakerName : 'Dennis Ritchie',
        speakerProfession : 'American computer scientist',
        speakerDetail : 'Dennis MacAlistair Ritchie was an American computer scientist.',
    },

    {       
        image : 'images/speakers/ken_thompson.jpg',
        speakerName : 'Ken Thompson',
        speakerProfession : 'American computer designer',
        speakerDetail : 'Kenneth Lane Thompson is an American pioneer of computer science.'
    },

    {       
        image : 'images/speakers/Larry_Page.jpg',
        speakerName : 'Larry Page',
        speakerProfession : 'American business magnate',
        speakerDetail : 'Lawrence Edward Page is an American business magnate, computer scientist and internet entrepreneur.',
    },

    {       
        image : 'images/speakers/Margaret_Hamilton.jpg',
        speakerName : 'Margaret Hamilton',
        speakerProfession : 'American computer scientist',
        speakerDetail : 'Margaret Heafield Hamilton is an American computer scientist.',
    },

    {       
        image : 'images/speakers/Radia-Perlman.jpg',
        speakerName : 'Radia Perlman',
        speakerProfession : 'American network engineer',
        speakerDetail : 'Radia Joy Perlman is an American computer programmer and network engineer.',
    }
];


let speakerContent = ``;
speakers.forEach((item) => { 

  speakerContent += ` 
   
        
        <li class="speaker_image_content">
            
            <div class="img_background">
                <img class="speaker_img" src=${item.image} alt="Brendan Eich">
            </div>                
            <div class="speaker_info">
            <div class="speaker_name">${item.speakerName}</div>
            <br>
            <div class="speaker_profession">${item.speakerProfession}</div>
            <hr class="speaker_them">                  
            <div class="speaker_detail">${item.speakerDetail}</div>
           </div>               
        </li>
  
  `;
});

speakerSection.innerHTML = speakerContent;

/*
const tr = document.getElementById('tr');
tr.addEventListener('click', () => {
    alert(speakerContent);
});*/

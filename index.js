
const navbar = document.getElementById('navbar');
const navLinks = navbar.getElementsByTagName('a');

//  navigation bar
navbar.style.backgroundColor = '#1A3F22'; 
navbar.style.padding = '20px 20px'; 
navbar.style.listStyleType = 'none'; 
navbar.style.margin = '0'; 
navbar.style.padding = '15px'; 
navbar.style.display = 'flex'; 
navbar.style.justifyContent = 'space-around';

for (let link of navLinks) {
    link.style.color = 'white'; 
    link.style.textDecoration = 'none'; 
    link.style.padding = '10px 15px'; 
    link.style.transition = 'background-color 0.3s'; 

    link.addEventListener('mouseover', () => {
        link.style.backgroundColor = '#905A01'; 
        link.style.borderRadius = '5px'; 
    });

    link.addEventListener('mouseout', () => {
        link.style.backgroundColor = ''; 
    });
}


const logo = document.getElementById('logo');
logo.style.fontSize = '24px'; 
logo.style.fontWeight = 'bold'; 
logo.style.marginRight = 'auto'; 


// body
const title = document.getElementById('title');
title.style.textAlign = 'center'; 
title.style.color = '#1A3F22';
title.style.fontSize = '50px';
title.style.marginTop = '2cm';


const body = document.body;
body.style.backgroundColor = 'Silver';


const myParagraph = document.getElementById('myParagraph');
myParagraph.style.textAlign = 'center'; 
myParagraph.style.fontSize = '25px';
myParagraph.style.color = '#905A01'



const h3Elements = document.querySelectorAll('h3'); 
h3Elements.forEach(h3 => {
    h3.style.textTransform = 'uppercase'; 
    h3.style.textAlign = 'center'; 
    h3.style.color = '#905A01';
    h3.style.marginTop = '2cm'
});


const shopButton = document.getElementById('shop-button')
shopButton.addEventListener('click', ()=>{

    shopButton.style.backgroundColor = '#905A01'
    shopButton.textContent = 'Confirmed!'
    
});
    shopButton.style.width = '3cm'
    shopButton.style.height = '1cm'
    shopButton.style.marginLeft = '14.3cm'
    shopButton.style.marginTop = '1cm'
    shopButton.style.border = 'none'
    shopButton.style.backgroundColor = '#1A3F22'
    shopButton.style.color = 'white'
    




shopButton.onclick = ()=>{
    title.style.color = '#905A01'
    myParagraph.style.color = '#1A3F22'


      h3Elements.forEach(h3 => {
        h3.style.color =  '#1A3F22'; 
    });

};

const addImagesToList = (list, items) => {
    items.forEach(item => {
        const listItem = document.createElement('li');
        const img = document.createElement('img');
        img.src = item.imgSrc;
        img.style.width = '100px'; 
        img.style.height = 'auto'; 
        listItem.appendChild(img); 
        listItem.appendChild(document.createTextNode(item.name)); 
        list.appendChild(listItem); 
    });
};

const existingFruits = [
    { name: 'Mangoes', imgSrc: 'images/mango2.jpg' },
    { name: 'Bananas', imgSrc: 'images/banan.jpg' },
    { name: 'Water Melons', imgSrc: 'images/melon.jpg' }
];

const existingVegetables = [
    { name: 'Onions', imgSrc: 'images/onions.jpg' },
    { name: 'Tomatoes', imgSrc: 'images/tomatoe2.jpg' },
    { name: 'Kales', imgSrc: 'images/kales2.jpg' }
];


const fruitList = document.getElementById('fruList');
const vegetableList = document.getElementById('vegList');


const existingFruitItems = fruitList.querySelectorAll('li');
existingFruitItems.forEach((item, index) => {
    const img = document.createElement('img');
    img.src = existingFruits[index].imgSrc; 
    img.style.width = '100px'; 
    img.style.height = 'auto'; 

    item.innerHTML = ''; 
    item.appendChild(img); 
    item.appendChild(document.createTextNode(existingFruits[index].name)); 
});

const existingVegetableItems = vegetableList.querySelectorAll('li');
existingVegetableItems.forEach((item, index) => {
    const img = document.createElement('img');
    img.src = existingVegetables[index].imgSrc; 
    img.style.width = '100px'; 
    img.style.height = 'auto'; 

    item.innerHTML = ''; 
    item.appendChild(img);
    item.appendChild(document.createTextNode(existingVegetables[index].name)); 
});


const newFruits = [
    { name: 'Avocado', imgSrc: 'images/avocados.jpg' },
    { name: 'Berries', imgSrc: 'images/berries.jpg' },
    { name: 'Grapes', imgSrc: 'images/grapes.jpg' }
];
addImagesToList(fruitList, newFruits);


const newVegetables = [
    { name: 'Carrots', imgSrc: 'images/carrot2.jpg' },
    { name: 'Spinach', imgSrc: 'images/kales2.jpg' },
    { name: 'Peppers', imgSrc: 'images/pepper3.jpg' }
];
addImagesToList(vegetableList, newVegetables);

// styling
const styleList = (list) => {
    list.style.display = 'flex'; 
    list.style.listStyleType = 'none'; 
    list.querySelectorAll('li').forEach(item => {
        item.style.marginRight = '30px'; 
        item.style.display = 'flex'; 
        item.style.flexDirection = 'column'; 
        item.style.marginLeft = '50px'
    });
};

styleList(fruitList);
styleList(vegetableList);




const searchInput = document.getElementById('fruitSearch');


searchInput.style.width = '82%'; 
searchInput.style.padding = '10px'; 
searchInput.style.marginBottom = '20px';
searchInput.style.border = 'none'; 
searchInput.style.fontSize = '16px'; 
searchInput.style.marginLeft = '2.3cm'; 
searchInput.style.backgroundColor = '#1A3F22'; 
searchInput.style.outline = 'none'; 
searchInput.style.color = 'white'; 

searchInput.addEventListener('input', () => {
    const searchInputValue = searchInput.value.toLowerCase(); 
    const fruitItems = document.querySelectorAll('#fruList li'); 
    const vegetableItems = document.querySelectorAll('#vegList li'); 

    fruitItems.forEach(item => {
        const fruitName = item.textContent.toLowerCase(); 
        if (fruitName.includes(searchInputValue)) {
            item.style.display = ''; 
        } else {
            item.style.opacity = '0.5'; 
        }
    });

    vegetableItems.forEach(item => {
        const vegetableName = item.textContent.toLowerCase(); 
        if (vegetableName.includes(searchInputValue)) {
            item.style.display = ''; 
        } else {
            item.style.opacity = '0.5'; 
        }
    });
});





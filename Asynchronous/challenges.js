'use strict';

/* CHALLENGE #1 */
console.log("-----Challenge #1 Output-----");

const whereAmI = function (lat,lng){
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`).then(res => {
        if (!res.ok)
            throw new Error(`Something with Wrong!!! ${res.status}`);
            return res.json();
    }).then(data => {
        console.log(data);
        console.log(`You are in ${data.city}, ${data.country}`);

        return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    }).then(res=> {
        if(!res.ok)
            throw new Error(`Country not found (${res.status})`);
            return res.json();
    }).then(data => renderCountry(data[0]))
      .catch(err => console.error(`${err.message}`)) ;
};

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);


/* CHALLENGE #2 */
console.log("-----Challenge #2 Output-----");

const wait = function (seconds){
    return new Promise(function (resolve){
        setTimeout(resolve, seconds * 1000);
    });
};

const imgContainer = document.querySelector('.images');

const createImage = function(imgPath){
    console.log(imgPath);
    return new Promise(function (resolve, reject){
        const img = document.createElement('img');
        img.src = imgPath;

        img.addEventListener('load',function(){
            // console.log(img);
            imgContainer.append(img);
            resolve(img);
        });

        img.addEventListener('error', function(){
            reject(new Error("Image not found"));
        });
    });
};

let currentImage;

/*createImage('img/img-1.jpeg').then(img => {
    currentImage = img;
    console.log("Image 1 loaded");
    return wait(2);
}).then(() => {
    currentImage.style.display = "none";
    return createImage('img/img-2.jpeg');
}).then(img => {
    currentImage = img;
    console.log("Image 2 loaded");
    return wait(2);
}).then(() => {
    currentImage.style.display = "none";
    return createImage('img/img-3.jpeg');
}).then(img => {
    currentImage = img;
    console.log("Image 3 loaded");
    return wait(2);
}).then(() => {
    currentImage.style.display = "none";
}).catch(err => console.console.error(err));*/


/* CHALLENGE #3 */
console.log("-----Challenge #3 Output-----");

const loadNPause = async function(){
    try{
        let img = await createImage('img/img-1.jpeg');
        console.log("Image 1 loaded");
        await wait(2);
        img.style.display = "none";

        img = await createImage('img/img-2.jpeg');
        console.log("Image 2 loaded");
        await wait(2);
        img.style.display = "none";
    } catch(err){
        console.error(err);
    }
};

// loadNPause();

const loadAll = async function(imgArr){
    try {
        const imgs = imgArr.map(async img => await createImage(img));
        const imgsEl = await Promise.all(imgs);
        console.log(imgsEl);
        imgsEl.forEach(img => img.classList.add('parallel'));
    }catch(err){
        console.error(err);
    }
}; 

loadAll(['img/img-1.jpg','img/img-2.jpg','img/img-3.jpg']);
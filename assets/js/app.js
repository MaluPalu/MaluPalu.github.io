// sanity check
jQuery(document).ready(function() {
console.log("app.js linked.");

//$(".footerImg").hover(function() {
//  $(".personalPic").animate({
//    "width": "40%"
 // });
// });

let jQue = [
  {
    name: "Vader Zag",
    img: "https://s-media-cache-ak0.pinimg.com/originals/6d/2d/b5/6d2db55ea73aceb13854e041b44023d1.jpg",
    url: "http://friv-games.com/games/darth-vader-games.html",
    desc: "Project for 2-bit Darth Vader game"
  },
  {
    name: "MTG Database",
    img: "http://fc01.deviantart.net/fs70/i/2011/170/6/b/magic_the_gathering_dotp_2012_by_jenack-d3jcych.png",
    url: "http://magic.wizards.com/en",
    desc: "Database for Magic the Gathering"
  },
  {
    name: "Youtube Blue",
    img: "http://oi50.tinypic.com/2ur8bpj.jpg",
    url: "https://www.youtube.com/",
    desc: "Project for new YouTube site"
  }
];
for (let i = 0; i < jQue.length; i++) {
  let p = document.createElement('div');
  let pImage = document.createElement('img');
  pImage.src = jQue[i].img;
  pImage.className = 'projectImg';
  let pDesc = document.createElement('div');
  let pLink = document.createElement('a');
  pLink.href= jQue[i].url;
  pLink.innerHTML = "Visit";
  pDesc.innerHTML = jQue[i].desc + '<br />';
  let pName = document.createElement('div');
  pName.innerHTML = jQue[i].name;
  pDesc.className = "projDesc";
  let pImageContainer = document.createElement('div');
  pImageContainer.className = 'imageContainer';
  p.className = 'project';
  document.getElementById('projects').appendChild(p);
  p.appendChild(pName);
  p.appendChild(pImageContainer);
  p.appendChild(pDesc);
  pDesc.appendChild(pLink);
  pImageContainer.appendChild(pImage);
};

$(".imageContainer").on("click", function() {
 $(this).next(".projDesc").animate({
   "height": "100%"
 });
});
$(".projDesc").on("click", function() {
 $(this).animate({
   "height": "0%"
 });
});
});

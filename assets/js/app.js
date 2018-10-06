// sanity check
jQuery(document).ready(function() {
console.log("app.js linked.");

$(".nav-link").mouseover(function() {
  $(this).animate({
    "color": "RGBA(255, 115, 32, 1)"
  })
})
$(".personalPic").mouseover(function() {
 $(this).animate({
   "width": "+20%"
 });
});
$(".personalPic").mouseleave(function() {
 $(this).animate({
   "width": "+8%"
 });
});
$(".mySig").mouseover(function() {
 $(this).animate({
   "width": "+200px"
 });
});
$(".mySig").mouseleave(function() {
 $(this).animate({
   "width": "+8%"
 });
});

let jQue = [
  {
    name: "Spork",
    img: "https://s-media-cache-ak0.pinimg.com/originals/6d/2d/b5/6d2db55ea73aceb13854e041b44023d1.jpg",
    url: "http://friv-games.com/games/darth-vader-games.html",
    desc: "A social recipe-sharing website where you can upload your own recipes, comment/like other user's recipes and follow other users whose recipes you enjoy."
  },
  {
    name: "PubHub",
    img: "http://fc01.deviantart.net/fs70/i/2011/170/6/b/magic_the_gathering_dotp_2012_by_jenack-d3jcych.png",
    url: "http://magic.wizards.com/en",
    desc: "A public outdoor space locater/sharer where you can post your favorite public outdoor space for casual meetings, get-togethers or parties in San Fransisco City using Google Maps API."
  },
  {
    name: "SoFit",
    img: "http://oi50.tinypic.com/2ur8bpj.jpg",
    url: "https://www.youtube.com/",
    desc: "A social network for people who enjoy tracking certain or all aspects of their fitness lifestyle, whether youre a swimmer, runner, biker or even weight lifter you have real-time data representation of your goals and accomplishments. "
  }
];
for (let i = 0; i < jQue.length; i++) {
  let dropdown = document.createElement('img');
  dropdown.src = "https://d30y9cdsu7xlg0.cloudfront.net/png/399048-200.png";
  dropdown.className = "dropdownbutton";
//createElement div/img for project container
  let p = document.createElement('div');
  let pImage = document.createElement('img');
//set pImage src to sub i array loop and set className to projectImg
  pImage.src = jQue[i].img;
  pImage.className = 'projectImg';
//createElement div/anchor tag for description container
  let pDesc = document.createElement('div');
  let pLink = document.createElement('a');
//set link to site to href sub i array loop and its inner HTML to "visit", also description to sub i array loop
  pLink.href= jQue[i].url;
  pLink.innerHTML = "Visit";
  pDesc.innerHTML = jQue[i].desc + '<br />';
//createElement div for name of project and set that to sub i array loop, also description className to projDesc
  let pName = document.createElement('div');
  pName.innerHTML = jQue[i].name;
  pName.className = "projTitle"
  pDesc.className = "projDesc";
//createElement pImageContainer and set its class name to imageContainer then set parent div to className project
  let pImageContainer = document.createElement('div');
  pImageContainer.className = 'imageContainer';
  p.className = 'project';

//appendChild variables to created divs
  document.getElementById('projects').appendChild(p);
  p.appendChild(dropdown);
  p.appendChild(pName);
  p.appendChild(pImageContainer);
  p.appendChild(pDesc);
  pDesc.appendChild(pLink);
  pImageContainer.appendChild(pImage);
};
//animate projectDesc to reveal once clicked
$(".imageContainer").on("click", function() {
 $(this).next(".projDesc").animate({
     "height": "100%"
 });
});
//animate projDesc to hide when clicked again
$(".projDesc").on("click", function() {
 $(this).animate({
     "height": "0%"
 });
});
$(".dropdownbutton").on("click", function() {
  console.log("hello");
  $(this).nextAll(".projDesc").animate({
    "height": "100%"
  });
});
});

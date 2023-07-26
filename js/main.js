// Load your images on page-load
function preloader() {
  const imagesList = [
    "./images/solar.jpg",
    "./images/water-1562529.jpg",
    "./images/wind-energy-1309345.jpg",
  ];
  const images = [];
  for (let i = 0; i < imagesList.length; i++) {
    images[i] = new Image();
    images[i].src = imagesList[i];
  }

  // Images ready to be used:
  console.log(
    `Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`
  );
}
window.addEventListener("load", preloader);

/* 
Get all buttons in a NODE LIST of buttons (array like structure) */
let buttonlist = document.querySelectorAll(".button");
/* 
Complete your resource-object that will store the dynamic content.

Resource object should 3 sub-objects. Give your sub-objects
meaningful names. Every sub-object should have the following
properties headingContent, bodyText, imgUrl and imgAlt. */

let resource = {
  Solar: {
    heading: "Soler Energy",
    image: "./images/Solar.jpg",
    imagealt: "solar",
    content: "The energy technology sector in the German capital region plays a significant role. in the national energy supply and its transformation towards renewable energies. Excellente Infrastruktur. Top Lage. Services: Investment support, Funding opportunities, International workforce, Commercial locations.",
  },
  Water: {
    heading: "Water Energy",
    image: "./images/Water.jpg",
    imagealt: "Water",
    content: "A hydropower resource can be evaluated by its available power. Power is a function of the hydraulic head and volumetric flow rate. The head is the energy per unit weight (or unit mass) of water.[6] The static head is proportional to the difference in height through which the water falls. Dynamic head is related to the velocity of moving water. Each unit of water can do an amount of work equal to its weight times the head.",
  },
  Wind: {
    heading: "Wind Energy",
    image: "./images/Wind.jpg",
    imagealt: "wind",
    content: "Wind power is the use of wind energy to generate useful work. Historically, wind power was used by sails, windmills and windpumps, but today it is mostly used to generate electricity. This article deals only with wind power for electricity generation. Today, wind power is generated almost completely with wind turbines, generally grouped into wind farms and connected to the electrical grid.",
  },
};
/* 
Get the reference to your HTML-container
that will be dynamically loaded from the resource-object. */
let contentdiv = document.querySelector(".code1");
/* 
The first button in a NODE LIST of buttons will initially 
have the id: active-button - this will uniquely style 
the active button (CSS rule). 

The first content from the
resource-object will be loaded on the page load:
`<h1>${headingContent}</h1>
 <img src="${imgUrl}" alt="${imgAlt}">
 <p>${bodyText}</p>` */

contentdiv.innerHTML = `<h1>${resource.heading}</h1>
 <div class="code">
 <img src="${resource.Solar.image}" alt="${resource.Solar.imagealt}">
 <p>${resource.Solar.content}</p>
 </div>`;

/* 
Start your handleSelection function here. */
function handleSelection(ev) {
  /* 
    Remove the id active-button from the element that
    contains it prior to the click-event. 

    This will require the loop throught the NODE LIST of buttons. 
    Inside the loop, use conditional and the element object method
    hasAttribute() to check if the current button in the loop containes the id.
    If it does, use element-object property removeAttribute()
    to remove the id. */
  for (let i = 0; i < buttonlist.length; i++) {
    if (buttonlist[i].hasAttribute("id")) {
      buttonlist[i].removeAttribute("id");
    }
  }

  /*
    Use the element-object method setAttribute() to set the id active-button 
    to the currently clicked button. */
  ev.target.parentElement.setAttribute("id", "active-button");
  /* 
    Use conditional and event-object to check which button is clicked
    and based on that, create HTML with the data inside the backticks:
    `<h1>${headingContent}</h1>
     <img src="${imgUrl}" alt="${imgAlt}">
     <p>${bodyText}</p>`
    Assign this content to to your HTML-container that will 
    be dynamically loaded (you already got the reference to 
    this container before you started the function handleSelection) */
  if (buttonlist[0].hasAttribute("id")) {
    contentdiv.innerHTML = `<h1>${resource.Solar.heading}</h1>
 <div class="code">
 <img src="${resource.Solar.image}" alt="${resource.Solar.imagealt}">
 <p>${resource.Solar.content}</p>
 </div>`;
  } else if (buttonlist[1].hasAttribute("id")) {
    contentdiv.innerHTML = `<h1>${resource.Water.heading}</h1>
 <div class="code">
 <img src="${resource.Water.image}" alt="${resource.Water.imagealt}">
 <p>${resource.Water.content}</p>
 </div>`;
  } else if (buttonlist[2].hasAttribute("id")) {
    contentdiv.innerHTML = `<h1>${resource.Wind.heading}</h1>
 <div class="code">
 <img src="${resource.Wind.image}" alt="${resource.Wind.imagealt}">
 <p>${resource.Wind.content}</p>
 </div>`;
  } else {
    console.log("error");
  }
  /* 
Close your handleSelection function here. */
}
/* 
Register all buttons to click event. The event-handler handleSelection will listen 
for this event to happen. */
for (let i = 0; i < buttonlist.length; i++) {
  buttonlist[i].addEventListener("click", handleSelection);
}

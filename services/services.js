const package1 = document.getElementById("package1");
const title = document.getElementById("title");
const info = document.getElementById("info");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

const package2 = document.getElementById("package2");
const title2 = document.getElementById("title2");
const info2 = document.getElementById("info2");
const profile_img2 = document.getElementById("profile_img2");
const name2 = document.getElementById("name2");
const animated_bgs2 = document.querySelectorAll(".animated-bg2");
const animated_bg_texts2 = document.querySelectorAll(".animated-bg-text2");

const package3 = document.getElementById("package3");
const title3 = document.getElementById("title3");
const info3 = document.getElementById("info3");
const profile_img3 = document.getElementById("profile_img3");
const name3 = document.getElementById("name3");
const animated_bgs3 = document.querySelectorAll(".animated-bg3");
const animated_bg_texts3 = document.querySelectorAll(".animated-bg-text3");

const package4 = document.getElementById("package4");
const title4 = document.getElementById("title4");
const info4 = document.getElementById("info4");
const profile_img4 = document.getElementById("profile_img4");
const name4 = document.getElementById("name4");
const animated_bgs4 = document.querySelectorAll(".animated-bg4");
const animated_bg_texts4 = document.querySelectorAll(".animated-bg-text4");

const package5 = document.getElementById("package5");
const title5 = document.getElementById("title5");
const info5 = document.getElementById("info5");
const profile_img5 = document.getElementById("profile_img5");
const name5 = document.getElementById("name5");
const animated_bgs5 = document.querySelectorAll(".animated-bg5");
const animated_bg_texts5 = document.querySelectorAll(".animated-bg-text5");

const package6 = document.getElementById("package6");
const title6 = document.getElementById("title6");
const info6 = document.getElementById("info6");
const profile_img6 = document.getElementById("profile_img6");
const name6 = document.getElementById("name6");
const animated_bgs6 = document.querySelectorAll(".animated-bg6");
const animated_bg_texts6 = document.querySelectorAll(".animated-bg-text6");

const package7 = document.getElementById("package7");
const title7 = document.getElementById("title7");
const info7 = document.getElementById("info7");
const profile_img7 = document.getElementById("profile_img7");
const name7 = document.getElementById("name7");
const animated_bgs7 = document.querySelectorAll(".animated-bg7");
const animated_bg_texts7 = document.querySelectorAll(".animated-bg-text7");

const package8 = document.getElementById("package8");
const title8 = document.getElementById("title8");
const info8 = document.getElementById("info8");
const profile_img8 = document.getElementById("profile_img8");
const name8 = document.getElementById("name8");
const animated_bgs8 = document.querySelectorAll(".animated-bg8");
const animated_bg_texts8 = document.querySelectorAll(".animated-bg-text8");

const package9 = document.getElementById("package9");
const title9 = document.getElementById("title9");
const info9 = document.getElementById("info9");
const profile_img9 = document.getElementById("profile_img9");
const name9 = document.getElementById("name9");
const animated_bgs9 = document.querySelectorAll(".animated-bg9");
const animated_bg_texts9 = document.querySelectorAll(".animated-bg-text9");

//deals
const package10 = document.getElementById("package10");
const title10 = document.getElementById("title10");
const info10 = document.getElementById("info10");
const profile_img10 = document.getElementById("profile_img10");
const name10 = document.getElementById("name10");
const animated_bgs10 = document.querySelectorAll(".animated-bg10");
const animated_bg_texts10 = document.querySelectorAll(".animated-bg-text10");

const package11 = document.getElementById("package11");
const title11 = document.getElementById("title11");
const info11 = document.getElementById("info11");
const profile_img11 = document.getElementById("profile_img11");
const name11 = document.getElementById("name11");
const animated_bgs11 = document.querySelectorAll(".animated-bg11");
const animated_bg_texts11 = document.querySelectorAll(".animated-bg-text11");

const package12 = document.getElementById("package12");
const title12 = document.getElementById("title12");
const info12 = document.getElementById("info12");
const profile_img12 = document.getElementById("profile_img12");
const name12 = document.getElementById("name12");
const animated_bgs12 = document.querySelectorAll(".animated-bg12");
const animated_bg_texts12 = document.querySelectorAll(".animated-bg-text12");

const package13 = document.getElementById("package13");
const title13 = document.getElementById("title13");
const info13 = document.getElementById("info13");
const profile_img13 = document.getElementById("profile_img13");
const name13 = document.getElementById("name13");
const animated_bgs13 = document.querySelectorAll(".animated-bg13");
const animated_bg_texts13 = document.querySelectorAll(".animated-bg-text13");

setTimeout(getData, 500);

function getData() {
  package1.innerHTML = '<img src="italy.jpg" alt="italy" />';
  title.innerHTML = "Europe Travels - Italy";
  info.innerHTML = "Sorrento, Italy to Salerno, Italy";
  profile_img.innerHTML = '<img src="italyflag.png" alt="italy flag" />';
  name.innerHTML = "9 nights<br>from $1399";
  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));

  package2.innerHTML = '<img src="dubai.jpg" alt="Dubai" />';
  title2.innerHTML = "Futuristic Vision - Dubai";
  info2.innerHTML = "City in the United Arab Emirates (UAE)";
  profile_img2.innerHTML = '<img src="dubaiflag.png" alt="Flag for Dubai" />';
  name2.innerHTML = "6 nights<br>from $999";
  animated_bgs2.forEach((bg) => bg.classList.remove("animated-bg2"));
  animated_bg_texts2.forEach((bg) => bg.classList.remove("animated-bg-text2"));

  package3.innerHTML = '<img src="australia.jpg" alt="Australia Sydney" />';
  title3.innerHTML = "Sydney, Australia";
  info3.innerHTML = "Coastal Beauty & Cultural Diversity";
  profile_img3.innerHTML =
    '<img src="australiaflag.jpg" alt="Australian flag" />';
  name3.innerHTML = "12 nights<br>from $1799";
  animated_bgs3.forEach((bg) => bg.classList.remove("animated-bg3"));
  animated_bg_texts3.forEach((bg) => bg.classList.remove("animated-bg-text3"));

  package4.innerHTML = '<img src="bali.jpg" alt="Indonesia" />';
  title4.innerHTML = "Bali, Indonesia";
  info4.innerHTML =
    "Bali offers a wide range of romantic accommodations, including private villas & luxury hotels. It consists of private pools, ocean views, and beautifully landscaped gardens, ensuring an intimate and luxurious experience.";
  profile_img4.innerHTML =
    '<img src="indonesiaflag.jpg" alt="Indonesian Flag" />';
  name4.innerHTML = "7 nights<br>from $999";
  animated_bgs4.forEach((bg) => bg.classList.remove("animated-bg4"));
  animated_bg_texts4.forEach((bg) => bg.classList.remove("animated-bg-text4"));

  package5.innerHTML = '<img src="borabora.jpg" alt="bora bora" />';
  title5.innerHTML = "Bora Bora";
  info5.innerHTML =
    " Bora Bora offers a perfect blend of natural beauty, luxury, and cultural experiences. It's an ideal destination for couples looking to deepen their connection, create lasting memories, and celebrate their love.";
  profile_img5.innerHTML =
    '<img src="boraboraflag.png" alt="Bora Bora Flag" />';
  name5.innerHTML = "14 nights<br>from $2199";
  animated_bgs5.forEach((bg) => bg.classList.remove("animated-bg5"));
  animated_bg_texts5.forEach((bg) => bg.classList.remove("animated-bg-text5"));

  package6.innerHTML = '<img src="puntacana.jpg" alt="DR Punta Cana" />';
  title6.innerHTML = "Dominican Republic - Punta Cana";
  info6.innerHTML =
    "Whether you're seeking relaxation on the beach, adventurous water sports, cultural exploration, or private moments together, Punta Cana provides the ideal setting for strengthening your connection and creating cherished memories as a couple.";
  profile_img6.innerHTML =
    '<img src="DRflag.jpg" alt="Dominican Republic Flag" />';
  name6.innerHTML = "10 nights<br>from $1799";
  animated_bgs6.forEach((bg) => bg.classList.remove("animated-bg6"));
  animated_bg_texts6.forEach((bg) => bg.classList.remove("animated-bg-text6"));

  package7.innerHTML = '<img src="cruise.jpg" alt="cruise-ship" />';
  title7.innerHTML = "Sailing Away In Europe";
  info7.innerHTML = "Florence, Italy & Barcelona, Spain";
  profile_img7.innerHTML = '<img src="dolphin.jpg" alt="dolphin" />';
  name7.innerHTML = "8 nights<br>from $1999";
  animated_bgs7.forEach((bg) => bg.classList.remove("animated-bg7"));
  animated_bg_texts7.forEach((bg) => bg.classList.remove("animated-bg-text7"));

  package8.innerHTML = '<img src="cruise2.jpg" alt="Cruise" />';
  title8.innerHTML = "Carribean Getaway";
  info8.innerHTML = "Honduras, Mexico & Bahamas";
  profile_img8.innerHTML = '<img src="palmtrees.jpg" alt="Palm trees" />';
  name8.innerHTML = "9 nights<br>from $1799";
  animated_bgs8.forEach((bg) => bg.classList.remove("animated-bg8"));
  animated_bg_texts8.forEach((bg) => bg.classList.remove("animated-bg-text8"));

  package9.innerHTML = '<img src="cruise3.jpg" alt="Cruise" />';
  title9.innerHTML = "Cruising In Australia";
  info9.innerHTML = "Sydney & Melbourne Australia";
  profile_img9.innerHTML = '<img src="koala.jpg" alt="Koala" />';
  name9.innerHTML = "10 nights<br>from $2199";
  animated_bgs9.forEach((bg) => bg.classList.remove("animated-bg9"));
  animated_bg_texts9.forEach((bg) => bg.classList.remove("animated-bg-text9"));

  package10.innerHTML = '<img src="silver1.jpg" alt="tropical" />';
  title10.innerHTML = "Silver";
  info10.innerHTML =
    "A Silver Package offers travelers a balanced and affordable way to explore a destination. While it may not provide the same level of luxury and exclusivity as gold or diamond packages, it ensures a comfortable and enjoyable experience with inclusions like accommodations, transportation, meals, activities, and local insights. Travelers can expect a pleasant and well-rounded vacation without the premium price tag.";
  profile_img10.innerHTML =
    '<img src="https://www.onlygfx.com/wp-content/uploads/2022/02/golden-star-clipart.png" alt="Star" />';
  name10.innerHTML = "Starts off at $100";
  animated_bgs10.forEach((bg) => bg.classList.remove("animated-bg10"));
  animated_bg_texts10.forEach((bg) =>
    bg.classList.remove("animated-bg-text10")
  );

  package11.innerHTML =
    '<img src="https://www.jetsetter.com//uploads/sites/7/2018/04/c1tkXg5q-1380x1035.jpeg" alt="Resort with pool" />';
  title11.innerHTML = "Gold";
  info11.innerHTML =
    "A Gold Package is designed for travelers seeking a top-tier, luxury experience. These packages provide exclusive accommodations, fine dining, unique activities, and personalized services that cater to the most discerning and indulgent travelers. A gold package vacation ensures an unforgettable and indulgent journey from start to finish.";
  profile_img11.innerHTML =
    '<img src="https://www.onlygfx.com/wp-content/uploads/2022/02/golden-star-clipart.png" alt="Star" />';
  name11.innerHTML = "Starts off at $250";
  animated_bgs11.forEach((bg) => bg.classList.remove("animated-bg11"));
  animated_bg_texts11.forEach((bg) =>
    bg.classList.remove("animated-bg-text11")
  );

  package12.innerHTML = '<img src="diamond1.jpg" alt="Ocean view" />';
  title12.innerHTML = "Diamond";
  info12.innerHTML =
    "Diamond packages are designed for travelers who seek the most opulent and exclusive experiences available, offering a level of indulgence and personalization that is truly extraordinary. A diamond package vacation promises unforgettable memories and the ultimate in luxury and extravagance.";
  profile_img12.innerHTML =
    '<img src="https://www.onlygfx.com/wp-content/uploads/2022/02/golden-star-clipart.png" alt="Star" />';
  name12.innerHTML = "Starts off at $750";
  animated_bgs12.forEach((bg) => bg.classList.remove("animated-bg12"));
  animated_bg_texts12.forEach((bg) =>
    bg.classList.remove("animated-bg-text12")
  );

  package13.innerHTML = '<img src="custom1.jpg" alt="Resort view " />';
  title13.innerHTML = "Custom";
  info13.innerHTML =
    "Custom packages are all about creating a travel experience that is uniquely yours. It offers the freedom to choose every aspect of your journey, allowing you to explore the world in a way that aligns with your interests and desires. Whether you're looking for relaxation, adventure, cultural exploration, or a combination of experiences, a custom package vacation is designed to fulfill your specific travel dreams.";
  profile_img13.innerHTML =
    '<img src="https://www.onlygfx.com/wp-content/uploads/2022/02/golden-star-clipart.png" alt="Star" />';
  name13.innerHTML = "Starts off at $1000";
  animated_bgs13.forEach((bg) => bg.classList.remove("animated-bg13"));
  animated_bg_texts13.forEach((bg) =>
    bg.classList.remove("animated-bg-text13")
  );
}

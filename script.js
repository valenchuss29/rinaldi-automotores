const vehicles = [
  {name:"Volkswagen Amarok V6 Comfortline",year:"2022",km:"110.000 km",price:"$45.000.000",category:"Pickups",photos:["amarok-v6-01.jpeg","amarok-v6-02.jpeg","amarok-v6-03.jpeg"]},
  {name:"Jeep Longitude 1.8 Automática",year:"2018",km:"155.000 km",price:"$23.000.000",category:"Autos",photos:["jeep-longitude-01.jpeg","jeep-longitude-02.jpeg","jeep-longitude-03.jpeg"]},
  {name:"Ford Everest Titanium",year:"2025",km:"16.500 km",price:"$80.000.000",category:"Autos",photos:["ford-everest-01.jpeg","ford-everest-02.jpeg","ford-everest-03.jpeg"]},
  {name:"Ford Ranger V6 XLS",year:"2026",km:"95,8 km",price:"$75.000.000",category:"Pickups",note:"Patentada · Llantas V6 Limited Plus",photos:["ranger-v6-xls-01.jpeg","ranger-v6-xls-02.jpeg","ranger-v6-xls-03.jpeg"]},
  {name:"Fiat 500 Abarth 595 1.4 165 CV",year:"2018",km:"56.000 km",price:"USD 24.000",category:"Autos",photos:["fiat-abarth-01.jpeg","fiat-abarth-02.jpeg","fiat-abarth-03.jpeg"]},
  {name:"Jeep Renegade 1.8 Sport",year:"2018",km:"74.000 km",price:"$24.500.000",category:"Autos",photos:["jeep-sport-01.jpeg","jeep-sport-02.jpeg","jeep-sport-03.jpeg"]},
  {name:"Honda Wave 110 cc",year:"2026",km:"0 km",price:"$3.700.000",category:"Motos",photos:["honda-wave-01.jpeg","honda-wave-02.jpeg"]},
  {name:"Yamaha R3",year:"2019",km:"1.300 km",price:"USD 7.000",category:"Motos",photos:["yamaha-r3-01.jpeg","yamaha-r3-02.jpeg"]},
  {name:"Mini Cooper S 2.0 F55 Chili 192 CV",year:"2017",km:"71.000 km",price:"USD 30.000",category:"Autos",photos:["mini-cooper-01.jpeg","mini-cooper-02.jpeg","mini-cooper-03.jpeg"]},
  {name:"Ford Ranger 3.0 CD 4x4 Limited+ AT 250 CV",year:"2024",km:"32.000 km",price:"USD 45.000",category:"Pickups",photos:["ranger-30-01.jpeg","ranger-30-02.jpeg","ranger-30-03.jpeg"]},
  {name:"Peugeot Expert 1.5 Furgón",year:"2025",km:"Consultar",price:"$45.000.000",category:"Utilitarios",photos:["peugeot-expert-01.jpeg","peugeot-expert-02.jpeg","peugeot-expert-03.jpeg"]},
  {name:"Renault Master Furgón L1H1 HDI",year:"2014",km:"150.000 km",price:"$34.000.000",category:"Utilitarios",photos:["renault-master-01.jpeg","renault-master-02.jpeg","renault-master-03.jpeg"]},
  {name:"Volkswagen Polo 1.6 MSI Track",year:"2026",km:"0 km",price:"$34.000.000",category:"Autos",note:"+ fletes y formularios",photos:["volkswagen-polo-01.jpeg","volkswagen-polo-02.jpeg","volkswagen-polo-03.jpeg"]},
  {name:"BMW X6 3.0 xDrive 35i Pure Extravagance",year:"2018",km:"130.000 km",price:"USD 65.000",category:"Autos",photos:["bmw-x6-01.jpeg","bmw-x6-02.jpeg","bmw-x6-03.jpeg","bmw-x6-04.jpeg"]},
  {name:"Peugeot Partner Patagónica 1.6 VTC Plus",year:"2018",km:"121.000 km",price:"$20.000.000",category:"Utilitarios",photos:["peugeot-partner-01.jpeg","peugeot-partner-02.jpeg","peugeot-partner-03.jpeg"]},
  {name:"Mercedes-Benz GLA 250 AT Sport B.Efficiency",year:"2014",km:"133.000 km",price:"USD 23.000",category:"Autos",photos:["mercedes-gla-01.jpeg","mercedes-gla-02.jpeg","mercedes-gla-03.jpeg"]},
  {name:"Renault Alaskan Intens Automática 4x2",year:"2024",km:"15.000 km",price:"$38.000.000",category:"Pickups",photos:["renault-alaskan-01.jpeg","renault-alaskan-02.jpeg","renault-alaskan-03.jpeg"]},
  {name:"Porsche Panamera Turbo",year:"2012",km:"57.000 km",price:"USD 180.000",category:"Autos",photos:["porsche-panamera-01.jpeg","porsche-panamera-02.jpeg","porsche-panamera-03.jpeg"]},
  {name:"Chevrolet S10 2.8 LS CD TDCI 200 CV 4x2",year:"2023",km:"38.000 km",price:"$37.000.000",category:"Pickups",photos:["chevrolet-s10-01.jpeg","chevrolet-s10-02.jpeg","chevrolet-s10-03.jpeg"]},
  {name:"Ford Ranger V6 Limited Plus",year:"2025",km:"400 km",price:"USD 59.000",category:"Pickups",photos:["ranger-v6-limited-01.jpeg","ranger-v6-limited-02.jpeg","ranger-v6-limited-03.jpeg"]},
  {name:"Ford F-150 Raptor",year:"2026",km:"3.000 km",price:"USD 115.000",category:"Pickups",photos:["f150-raptor-01.jpeg","f150-raptor-02.jpeg","f150-raptor-03.jpeg"]},
  {name:"RAM Dakota 2.2 TD Laramie 4WD AT8",year:"2026",km:"0 km",price:"$65.000.000",category:"Pickups",note:"Patentada",photos:["ram-dakota-01.jpeg","ram-dakota-02.jpeg","ram-dakota-03.jpeg"]},
  {name:"Audi S3",year:"2018",km:"78.000 km",price:"USD 63.000",category:"Autos",photos:["audi-s3-01.jpg","audi-s3-02.jpg","audi-s3-03.jpg"]},
  {name:"Citroën C4 Picasso 1.6 THP Feel Pack 165 CV",year:"2017",km:"110.000 km",price:"$21.000.000",category:"Autos",photos:["c4-picasso-01.jpeg","c4-picasso-02.jpeg","c4-picasso-03.jpeg"]}
];

const categories = ["Todos", "Autos", "Pickups", "Utilitarios", "Motos"];
const whatsapp = "https://wa.me/543512360132";
let selectedCategory = "Todos";
let query = "";
let galleryVehicle = null;
let galleryPhoto = 0;

const grid = document.querySelector("#vehicleGrid");
const count = document.querySelector("#resultCount");
const empty = document.querySelector("#emptyState");
const filterBox = document.querySelector("#filters");
const searchInput = document.querySelector("#searchInput");
const gallery = document.querySelector("#gallery");

function asset(name) { return `assets/${name}`; }
function escapeHtml(value) { return value.replace(/[&<>'"]/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[char]); }

function renderFilters() {
  filterBox.innerHTML = categories.map(category => `<button class="${category === selectedCategory ? "active" : ""}" data-category="${category}">${category}</button>`).join("");
  filterBox.querySelectorAll("button").forEach(button => button.addEventListener("click", () => { selectedCategory = button.dataset.category; renderFilters(); renderVehicles(); }));
}

function renderVehicles() {
  const normalized = query.trim().toLowerCase();
  const filtered = vehicles.filter(vehicle => (selectedCategory === "Todos" || vehicle.category === selectedCategory) && vehicle.name.toLowerCase().includes(normalized));
  count.textContent = `${filtered.length} unidades`;
  empty.hidden = filtered.length !== 0;
  grid.innerHTML = filtered.map(vehicle => {
    const message = encodeURIComponent(`Hola, quiero consultar por ${vehicle.name} ${vehicle.year}.`);
    return `<article class="vehicle"><button class="vehiclePhoto" data-name="${escapeHtml(vehicle.name)}" aria-label="Ver fotos de ${escapeHtml(vehicle.name)}"><img src="${asset(vehicle.photos[0])}" alt="${escapeHtml(vehicle.name)}, vista exterior"><span class="categoryTag">${vehicle.category}</span><span class="photoCount">▣ ${vehicle.photos.length} fotos</span></button><div class="vehicleInfo"><div class="vehicleTitle"><h3>${escapeHtml(vehicle.name)}</h3><span class="year">${vehicle.year}</span></div><div class="specs"><span>${vehicle.km}</span>${vehicle.note ? `<span>${escapeHtml(vehicle.note)}</span>` : ""}</div><div class="priceRow"><strong>${vehicle.price}</strong><a href="${whatsapp}?text=${message}" target="_blank" rel="noreferrer" aria-label="Consultar por ${escapeHtml(vehicle.name)}">→</a></div></div></article>`;
  }).join("");
  grid.querySelectorAll(".vehiclePhoto").forEach(button => button.addEventListener("click", () => openGallery(vehicles.find(vehicle => vehicle.name === button.dataset.name))));
}

function openGallery(vehicle) { galleryVehicle = vehicle; galleryPhoto = 0; renderGallery(); gallery.hidden = false; document.body.classList.add("noScroll"); }
function closeGallery() { gallery.hidden = true; document.body.classList.remove("noScroll"); galleryVehicle = null; }
function renderGallery() {
  document.querySelector("#galleryImage").src = asset(galleryVehicle.photos[galleryPhoto]);
  document.querySelector("#galleryImage").alt = `${galleryVehicle.name}, foto ${galleryPhoto + 1}`;
  document.querySelector("#galleryCounter").textContent = `${galleryPhoto + 1} / ${galleryVehicle.photos.length}`;
  document.querySelector("#galleryTitle").textContent = galleryVehicle.name;
  document.querySelector("#galleryThumbs").innerHTML = galleryVehicle.photos.map((photo, index) => `<button class="${index === galleryPhoto ? "selected" : ""}" data-photo="${index}" aria-label="Ver foto ${index + 1}"><img src="${asset(photo)}" alt=""></button>`).join("");
  document.querySelectorAll("#galleryThumbs button").forEach(button => button.addEventListener("click", () => { galleryPhoto = Number(button.dataset.photo); renderGallery(); }));
}

searchInput.addEventListener("input", event => { query = event.target.value; renderVehicles(); });
document.querySelector("#galleryClose").addEventListener("click", closeGallery);
gallery.addEventListener("click", event => { if (event.target === gallery) closeGallery(); });
document.addEventListener("keydown", event => { if (event.key === "Escape" && !gallery.hidden) closeGallery(); });
renderFilters();
renderVehicles();

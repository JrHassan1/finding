const ADMIN_CODE = "2007";

const products = [
  {name:"pringles", code:"QTR1001", cat:"snacks", aisle:"2", floor:"1", img:"images/pringles.webp"},
  {name:"Water alshamal", code:"QTR1002", cat:"drinks", aisle:"2", floor:"1", img:"images/water.webp"},
  {name:"baked Cakes", code:"QTR1003", cat:"bakery", aisle:"2", floor:"1", img:"images/cake.webp"},
  {name:"flowers", code:"QTR1004", cat:"Plants", aisle:"2", floor:"1", img:"images/flowers.webp"},
  {name:"vegitables and fruits", code:"QTR1010", cat:"fruits and vegetables", aisle:"3", floor:"1", img:"images/fruit-and-vegetables.jpg"},
  {name:"lays", code:"QTR1011", cat:"snacks", aisle:"2", floor:"1", img:"images/lays.jpg"},

];

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const adminPanel = document.getElementById("adminPanel");

function renderProducts(list){
  productGrid.innerHTML = "";
  
  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>القسم: ${p.cat}</p>
      <p>الممر: ${p.aisle}</p>
      <p>الطابق: ${p.floor}</p>
      <p>#${p.code}</p>
    `;
    
    productGrid.appendChild(card);
  });
}

renderProducts(products);

searchInput.addEventListener("input", () => {
  const q = searchInput.value.toLowerCase();
  
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.code.toLowerCase().includes(q)
  );
  
  renderProducts(filtered);
});

function fakeScan(){
  const code = prompt("Scan result / barcode:");
  if(!code) return;

  searchInput.value = code;

  const filtered = products.filter(p =>
    p.code.toLowerCase().includes(code.toLowerCase())
  );

  renderProducts(filtered);
}

function openAdmin(){
  const code = prompt("Enter admin code:");
  
  if(code === ADMIN_CODE){
    adminPanel.style.display = "block";
  } else if(code !== null){
    alert("كود خاطئ!");
  }
}
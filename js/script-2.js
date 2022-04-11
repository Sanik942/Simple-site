let themes = document.querySelectorAll('.themes  a');
let change1 = document.createElement('a');
change1.innerHTML = "Серия F";
change1.href = "/enc/technic-pages/f.html";
let change2 = document.createElement('a');
change2.innerHTML = "Серия K24";
change2.href = "/enc/technic-pages/k24.html";
let change3 = document.createElement('a');
change3.innerHTML = "Серия B";
change3.href = "/enc/technic-pages/B.html";
let change4 = document.createElement('a');
change4.innerHTML = "Серия K20";
change4.href = "/enc/technic-pages/k20.html";
let change5 = document.createElement('a');
change5.innerHTML = "BF2.3 SCHU";
change5.href = "/enc/technic-pages/bf2.3.html";
let change6 = document.createElement('a');
change6.innerHTML = "BF5 SHU";
change6.href = "/enc/technic-pages/bf5.html";
let change7 = document.createElement('a');
change7.innerHTML = "BF10 SHU";
change7.href = "/enc/technic-pages/bf10.html";
let change8 = document.createElement('a');
change8.innerHTML = "BF15 SHU";
change8.href = "/enc/technic-pages/bf15.html";
let change9 = document.createElement('a');
change9.innerHTML = "VTEC";
change9.href = "/enc/technic-pages/vtec.html";
let change10 = document.createElement('a');
change10.innerHTML = "BF225D XDU";
change10.href = "/enc/technic-pages/bf225.html";
let change11 = document.createElement('a');
change11.innerHTML = "Серия J";
change11.href = "/enc/technic-pages/j.html";
let change12 = document.createElement('a');
change12.innerHTML = "Серия H";
change12.href = "/enc/technic-pages/h.html";
let change13 = document.createElement('a');
change13.innerHTML = "Серия D";
change13.href = "/enc/technic-pages/d.html";
let change14 = document.createElement('a');
change14.innerHTML = "Серия R";
change14.href = "/enc/technic-pages/r.html";
let change15 = document.createElement('a');
change15.innerHTML = "Серия C";
change15.href = "/enc/technic-pages/c.html";
let block = document.querySelector('.themes');
function engines() {
    themes = document.querySelectorAll('.themes  a');
    for( let themmes of themes)
    {
       themmes.remove();
    }
    block.append(change2, change3, change4, change1, change11, change12, change13, change14, change15);
    window.scrollTo(0,350);
}
function boats() {
    themes = document.querySelectorAll('.themes  a');
    for( let themmes of themes)
    {
       themmes.remove();
    }
    block.append(change5, change6, change7, change8, change10);
    window.scrollTo(0,200);
}
function vtec() {
    themes = document.querySelectorAll('.themes  a');
    for( let themmes of themes)
    {
       themmes.remove();
    }
    block.append(change9);
    window.scrollTo(0,0);
}
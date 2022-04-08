let themes = document.querySelectorAll('.themes  a');
let change1 = document.createElement('a');
change1.innerHTML = "Серия CMX";
change1.href = "/321/enc/moto-pages/cmx.html";
let change2 = document.createElement('a');
change2.innerHTML = "Серия CB";
change2.href = "/321/enc/moto-pages/cb.html";
let change3 = document.createElement('a');
change3.innerHTML = "VRX 400";
change3.href = "/321/enc/moto-pages/vrx400.html";
let change4 = document.createElement('a');
change4.innerHTML = "Серия GL";
change4.href = "/321/enc/moto-pages/gl.html";
let change5 = document.createElement('a');
change5.innerHTML = "VT 250";
change5.href = "/321/enc/moto-pages/vt250.html";
let change6 = document.createElement('a');
change6.innerHTML = "Серия NC";
change6.href = "/321/enc/moto-pages/nc.html";
let change7 = document.createElement('a');
change7.innerHTML = "Africa Twin";
change7.href = "/321/enc/moto-pages/africa.html";
let change8 = document.createElement('a');
change8.innerHTML = "Серия XR";
change8.href = "/321/enc/moto-pages/xr.html";
let change9 = document.createElement('a');
change9.innerHTML = "Серия XL";
change9.href = "/321/enc/moto-pages/xl.html";
let change10 = document.createElement('a');
change10.innerHTML = "Pan European";
change10.href = "/321/enc/moto-pages/european.html";
let change11 = document.createElement('a');
change11.innerHTML = "Серия CR";
change11.href = "/321/enc/moto-pages/cr.html";
let change12 = document.createElement('a');
change12.innerHTML = "Серия CRF";
change12.href = "/321/enc/moto-pages/crf.html";
let change13 = document.createElement('a');
change13.innerHTML = "Серия CTX";
change13.href = "/321/enc/moto-pages/ctx.html";
let change14 = document.createElement('a');
change14.innerHTML = "DN-01";
change14.href = "/321/enc/moto-pages/dn01.html";
let change15 = document.createElement('a');
change15.innerHTML = "PC-800";
change15.href = "/321/enc/moto-pages/pc800.html";
let change16 = document.createElement('a');
change16.innerHTML = "Super cub";
change16.href = "/321/enc/moto-pages/supercub.html";
let change17 = document.createElement('a');
change17.innerHTML = "Серия AF";
change17.href = "/321/enc/moto-pagess/af.html";
let change18 = document.createElement('a');
change18.innerHTML = "Серия AF Tact";
change18.href = "/321/enc/moto-pages/aftact.html";
let change19 = document.createElement('a');
change19.innerHTML = "Серия SH";
change19.href = "/321/enc/moto-pages/sh.html";
let change20 = document.createElement('a');
change20.innerHTML = "Серия CBR";
change20.href = "/321/enc/moto-pages/cbr.html";
let change21 = document.createElement('a');
change21.innerHTML = "Серия NSR";
change21.href = "/321/enc/moto-pages/nsr.html";
let change22 = document.createElement('a');
change22.innerHTML = "VRF 400";
change22.href = "/321/enc/moto-pages/vrf400.html";
let block = document.querySelector('.themes');
function classic() {
    themes = document.querySelectorAll('.themes  a');
    for( let themmes of themes)
    {
       themmes.remove();
    }
    block.append(change1, change2, change3,change5);
    
}
function tourism() {
    themes = document.querySelectorAll('.themes  a');
    for( let themmes of themes)
    {
       themmes.remove();
    }
    block.append(change4, change9, change10, change13, change14);
    
}
function enduro() {
    themes = document.querySelectorAll('.themes  a');
    for( let themmes of themes)
    {
       themmes.remove();
    }
    block.append(change6, change7, change8);
    
}
function cross() {
    themes = document.querySelectorAll('.themes  a');
    for( let themmes of themes)
    {
       themmes.remove();
    }
    block.append(change11, change12);
    
}
function scuters() {
    themes = document.querySelectorAll('.themes  a');
    for( let themmes of themes)
    {
       themmes.remove();
    }
    block.append(change16, change17, change18, change19);
}
function supersport() {
    themes = document.querySelectorAll('.themes  a');
    for( let themmes of themes)
    {
       themmes.remove();
    }
    block.append(change20, change21, change22);
}
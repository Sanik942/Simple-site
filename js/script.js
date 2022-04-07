let themes = document.querySelectorAll('.themes  a');
let change1 = document.createElement('a');
change1.innerHTML = "Civic";
change1.href = "/321/enc/auto-pages/civic.html";
let change2 = document.createElement('a');
change2.innerHTML = "Accord";
change2.href = "/321/enc/auto-pages/accord.html";
let change3 = document.createElement('a');
change3.innerHTML = "Legend";
change3.href = "/321/enc/auto-pages/legend.html";
let change4 = document.createElement('a');
change4.innerHTML = "Insight";
change4.href = "/321/enc/auto-pages/insight.html";
let change5 = document.createElement('a');
change5.innerHTML = "City";
change5.href = "/321/enc/auto-pages/city.html";
let change6 = document.createElement('a');
change6.innerHTML = "Jazz";
change6.href = "/321/enc/auto-pages/jazz.html";
let change7 = document.createElement('a');
change7.innerHTML = "Brio";
change7.href = "/321/enc/auto-pages/brio.html";
let change8 = document.createElement('a');
change8.innerHTML = "E";
change8.href = "/321/enc/auto-pages/e.html";
let change10 = document.createElement('a');
change10.innerHTML = "CR-V";
change10.href = "/321/enc/auto-pages/crv.html";
let change11 = document.createElement('a');
change11.innerHTML = "HR-V";
change11.href = "/321/enc/auto-pages/hrv.html";
let change12 = document.createElement('a');
change12.innerHTML = "Element";
change12.href = "/321/enc/auto-pages/element.html";
let change13 = document.createElement('a');
change13.innerHTML = "Pilot";
change13.href = "/321/enc/auto-pages/pilot.html";
let change15 = document.createElement('a');
change15.innerHTML = "Crosstour";
change15.href = "/321/enc/auto-pages/crosstour.html";
let change16 = document.createElement('a');
change16.innerHTML = "Integra";
change16.href = "/321/enc/auto-pages/integra.html";
let change17 = document.createElement('a');
change17.innerHTML = "Prelude";
change17.href = "/321/enc/auto-pages/prelude.html";
let change18 = document.createElement('a');
change18.innerHTML = "S2000";
change18.href = "/321/enc/auto-pages/s2000.html";
let change19 = document.createElement('a');
change19.innerHTML = "CR-X";
change19.href = "/321/enc/auto-pages/crx.html";
let change20 = document.createElement('a');
change20.innerHTML = "NSX";
change20.href = "/321/enc/auto-pages/nsx.html";
let change21 = document.createElement('a');
change21.innerHTML = "Odyssey";
change21.href = "/321/enc/auto-pages/odyssey.html";
let change22 = document.createElement('a');
change22.innerHTML = "StepWGN";
change22.href = "/321/enc/auto-pages/stepwgn.html";
let change23 = document.createElement('a');
change23.innerHTML = "Elysion";
change23.href = "/321/enc/auto-pages/elysion.html";
let change24 = document.createElement('a');
change24.innerHTML = "Ridgeline";
change24.href = "/321/enc/auto-pages/ridgeline.html";
let change25 = document.createElement('a');
change25.innerHTML = "Orthia";
change25.href = "/321/enc/auto-pages/orthia.html";
let change26 = document.createElement('a');
change26.innerHTML = "Passport";
change26.href = "/321/enc/auto-pages/passport.html";
let change27 = document.createElement('a');
change27.innerHTML = "Street";
change27.href = "/321/enc/auto-pages/street.html";
let change28 = document.createElement('a');
change28.innerHTML = "Stream";
change28.href = "/321/enc/auto-pages/stream.html";
let change29 = document.createElement('a');
change29.innerHTML = "Jade";
change29.href = "/321/enc/auto-pages/jade.html";
let change30 = document.createElement('a');
change30.innerHTML = "Ascot";
change30.href = "/321/enc/auto-pages/ascot.html";
let change31 = document.createElement('a');
change31.innerHTML = "S660";
change31.href = "/321/enc/auto-pages/s660.html";
let change32 = document.createElement('a');
change32.innerHTML = "SM-X";
change32.href = "/321/enc/auto-pages/smx.html";
let change33 = document.createElement('a');
change33.innerHTML = "Today";
change33.href = "/321/enc/auto-pages/today.html";
let change34 = document.createElement('a');
change34.innerHTML = "Z";
change34.href = "/321/enc/auto-pages/z.html";
let change35 = document.createElement('a');
change35.innerHTML = "CR-Z";
change35.href = "/321/enc/auto-pages/crz.html";
let block = document.querySelector('.themes');
function sedan() {
   if (swit.innerHTML==='Honda')
   {
      themes = document.querySelectorAll('.themes  a');
   for( let themmes of themes)
   {
      themmes.remove();
   }
   block.append(change_1, change_5, change_7, change_8, change_9);
   } else {
   themes = document.querySelectorAll('.themes  a');
   for( let themmes of themes)
   {
      themmes.remove();
   }
   block.append(change1, change2, change3, change5, change30);
   }
}
function hatch() {
   themes = document.querySelectorAll('.themes  a');
   for( themmes of themes)
   {
      themmes.remove();
   }
   block.append(change1, change6, change8, change7, change4, change32, change33);
}
function cross() {
   if (swit.innerHTML==='Honda') 
   {
      themes = document.querySelectorAll('.themes  a');
      for( let themmes of themes)
      {
         themmes.remove();
      }
      block.append(change_2, change_4, change_6);
   } else {
   themes = document.querySelectorAll('.themes  a');
   for( themmes of themes)
   {
      themmes.remove();
   }
   block.append(change10, change11, change12, change13, change15);
         }
}
function coupe() {
   if (swit.innerHTML==='Honda') {
      themes = document.querySelectorAll('.themes  a');
      for( let themmes of themes)
      {
         themmes.remove();
      }
      block.append(change20, change_10, change_11);
   } else {
   themes = document.querySelectorAll('.themes  a');
   for( themmes of themes)
   {
      themmes.remove();
   }
   block.append(change1, change3, change16, change17, change18, change19, change20, change31, change35);
         }
}
function minivan() {
   themes = document.querySelectorAll('.themes  a');
   for( themmes of themes)
   {
      themmes.remove();
   }
   block.append(change21, change22, change23, change27, change28, change29);
}
function pickup() {
   themes = document.querySelectorAll('.themes  a');
   for( themmes of themes)
   {
      themmes.remove();
   }
   block.append( change24);
   
}
function universal() {
   themes = document.querySelectorAll('.themes  a');
   for( themmes of themes)
   {
      themmes.remove();
   }
   block.append(change1, change2, change15, change25);
}



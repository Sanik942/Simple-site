let swit = document.querySelector('.acura-switch');
let h1_change = document.querySelector('.second-block h1');
let themes_a  = document.querySelectorAll('.themes a');
let change_1 = document.createElement('a');
change_1.innerHTML = 'TLX';
change_1.href = '/321/enc/auto-pages/tlx.html';
let change_2 = document.createElement('a');
change_2.innerHTML = 'MDX';
change_2.href = '/321/enc/auto-pages/mdx.html';
let change_3 = document.createElement('a');
change_3.innerHTML = 'NSX';
change_3.href = '/321/enc/auto-pages/nsx.html';
let change_4 = document.createElement('a');
change_4.innerHTML = 'RDX';
change_4.href = '/321/enc/auto-pages/rdx.html';
let change_5 = document.createElement('a');
change_5.innerHTML = 'ILX';
change_5.href = '/321/enc/auto-pages/ilx.html';
let change_6 = document.createElement('a');
change_6.innerHTML = 'CDX';
change_6.href = '/321/enc/auto-pages/cdx.html';
let change_7 = document.createElement('a');
change_7.innerHTML = 'RLX';
change_7.href = '/321/enc/auto-pages/rlx.html';
let change_8 = document.createElement('a');
change_8.innerHTML = 'CSX';
change_8.href = '/321/enc/auto-pages/csx.html';
let change_9 = document.createElement('a');
change_9.innerHTML = 'TSX';
change_9.href = '/321/enc/auto-pages/tsx.html';
let change_10 = document.createElement('a');
change_10.innerHTML = 'RSX';
change_10.href = '/321/enc/auto-pages/rsx.html';
let change_11 = document.createElement('a');
change_11.innerHTML = 'CL';
change_11.href = '/321/enc/auto-pages/cl.html';
let pic = document.querySelector('#select-b-6');
let uni = document.querySelector('#select-b-7');
let hat = document.querySelector('#select-b-2');
let van = document.querySelector('#select-b-5');
let block_ = document.querySelector('.themes');
let select = document.querySelector('.select-body');
function change() {
    if (swit.innerHTML==='Acura')
    {
    swit.innerHTML = 'Honda';
    h1_change.innerHTML = 'Автомобили Acura';
    let themes_a  = document.querySelectorAll('.themes a');  
    for(let themmes of themes_a){
        themmes.remove();
    } 
    block_.append(change_1, change_2, change_3, change_4);
    pic.remove(); uni.remove(); hat.remove(); van.remove();
    } else {
        swit.innerHTML = 'Acura';
        h1_change.innerHTML = 'Автомобили Honda';
        let themes_a  = document.querySelectorAll('.themes a');
        for(let themmes of themes_a){
            themmes.remove();
        } 
        block_.append(change1, change2, change10, change20);  
        select.append(hat, van, pic, uni);    
    }
}
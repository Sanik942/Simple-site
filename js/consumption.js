let inp_1 = document.querySelector(".input_1");
let inp_2 = document.querySelector(".input_2");
let inp_3 = document.querySelector(".input_3");
let outp_1 = document.querySelector(".output_1");
let outp_2 = document.querySelector(".output_2");
let result;
let result_2;
function calculation() {
    result=(inp_1.value/inp_2.value)*100;
    result_2=((inp_1.value/inp_2.value)*100)*inp_3.value;
    outp_1.innerHTML=`Средний расход: ${result.toFixed(2)} литров`;
    outp_2.innerHTML=`Стоимость топлива: ${result_2.toFixed(2)} тг.`;
}
function clean() {
    inp_1.value = "";
    inp_2.value = "";
    inp_3.value = "";
}


function  changefunction(){
var brr = document.getElementById("bruto-input").value;
var bruto_out= document.getElementById("bruto-output").value;
var pio_out =document.getElementById("pio-output");

var bruto_min= 22146;
var bruto_max= 576272;
var k5= 0; //a value that helps with the calculation 
if(brr <= bruto_min){
    k5=bruto_min;
}
else if(brr >= bruto_max){
    k5 = bruto_max;
}
else{
    k5 = brr;
}

var pio = k5* 0.1880; //pio stands for disability and pension insurance
var health= k5 * 0.075;
var work_releated_accident = k5 * 0.005;
var employment_contributions= k5 * 0.012;
var total = pio + health + work_releated_accident + employment_contributions;
var reduced_salary = brr- total;
var personal_release_tax = 8438;
var tax_base =brr-total-personal_release_tax;
var k13= 0;//another value that helps with the calculation   
if((reduced_salary-personal_release_tax)>90000){
    k13=90000;
}
else{
    k13=reduced_salary-personal_release_tax;
}
var base_t10 =0; //base of personal tax 10%
if((reduced_salary-personal_release_tax)<0){
  base_t10=0;
}
else{
  base_t10=k13;
}
var personal_tax_10 = base_t10* 0.10; //personal tax 10%
var k15=0;
if((reduced_salary - personal_release_tax)>90000){
    k15= reduced_salary - personal_release_tax - 90000;
}
var base_t18= k15; // base of personal tax 18%
var personal_tax_18 = base_t18 * 0.18; //personal tax 18%
var total2= personal_tax_10+personal_tax_18;
var neto= 0;
if((brr-total-total2)>=0){
    neto= brr-total-total2;
}
    
    console.log(bruto_out);
    bruto_out = brr;
    document.getElementById("bruto-output").innerHTML = bruto_out;
    document.getElementById("pio-output").innerHTML  = pio.toFixed(2);
    document.getElementById("health-output").innerHTML = health.toFixed(2);
    document.getElementById("work-releated-accident").innerHTML = work_releated_accident.toFixed(2);
    document.getElementById("employment-contributions").innerHTML = employment_contributions.toFixed(2);
    document.getElementById("total-output").innerHTML = total.toFixed(2);
    document.getElementById("reduced-salary").innerHTML = reduced_salary.toFixed(2);
    document.getElementById("tax-base").innerHTML= tax_base.toFixed(2);
    document.getElementById("base-t10").innerHTML=base_t10.toFixed(2);
    document.getElementById("personal-tax-10").innerHTML=personal_tax_10.toFixed(2);
    document.getElementById("base-t18").innerHTML=base_t18.toFixed(2);
    document.getElementById("personal-tax-18").innerHTML=personal_tax_18.toFixed(2);
    document.getElementById("total2").innerHTML=total2.toFixed(2);
    document.getElementById("neto").innerHTML=neto.toFixed(2);
    document.getElementById("neto-input").value=neto.toFixed(0);

    //for returning graph value in percent
    // var pio_percent = pio/brr *100;
    // var health_percent = health/brr *100;
    // var neto_percent = neto/brr*100;
    // var work_releated_accident_percent = work_releated_accident / brr *100;
    // var employment_contributions_percent = employment_contributions / brr *100;
    // var total2_percent = total2 / brr *100;

    var xValues = ["Pio-sigurimi invalidor dhe pensional", "Sigurim të detyrueshëm shëndetësor",
    "Sigurim në rast lëndimi ose sëmundjeje profesionale", "Kontributet e punësimit", "Tatimi personal","Paga ime Neto"];
        var yValues = [pio.toFixed(2), health.toFixed(2), work_releated_accident.toFixed(2), employment_contributions.toFixed(2), total2.toFixed(2),neto.toFixed(2)];
        var barColors = [
          "#b91d47",
          "#00aba9",
          "#2b5797",
          "#e8c3b9",
          "#1e7145",
          "greenyellow"
        ];
        
        new Chart("myChart", {
          type: "doughnut",
          data: {
            labels: xValues,
            datasets: [{
              backgroundColor: barColors,
              data: yValues
            }]
          },
          options: {
              legend:{
            labels: {
                fontColor: 'black',
                fontSize: 25
            }
        }
            ,
            title: {
              display: true,
              text: "Si shpërndahet paga ime",
              fontSize: 35
            }
          }
        });    



}
function netfunction(){
    var net = document.getElementById("neto-input").value *1;
    var personal_release_tax = 8432;
    var dallimi = net - personal_release_tax;
    var income_tax_bruto_neto = 0.1111111;
    var personal_income_tax = dallimi * income_tax_bruto_neto;
    var bruto1 = net + personal_income_tax;
    console.log(bruto1);
    var divider = 0.72;
    // var max_pay = 658256;
    var bruto_cal = bruto1 / divider;
  
   var bruto_min= 22146;
   var bruto_max= 658256;
   var k5= 0;
   if(bruto_cal <= bruto_min){
       k5=bruto_min;
   }
   else if(bruto_cal >= bruto_max){
       k5 = bruto_max;
   }
   else{
       k5 = bruto_cal;
   }
   var pio = k5* 0.1880; //18.8%
var health= k5 * 0.075; //0.75%
var work_releated_accident = k5 * 0.005;//0.5%
var employment_contributions= k5 * 0.012;//12%
var total = pio + health + work_releated_accident + employment_contributions;
var reduced_salary = bruto_cal- total;

var tax_base =bruto_cal-total-personal_release_tax;
var k13= 0;
if((reduced_salary-personal_release_tax)>90000){
    k13=90000;
}
else{
    k13=reduced_salary-personal_release_tax;
}
var base_t10 =0;
if((reduced_salary-personal_release_tax)<0){
  base_t10=0;
}
else{
  base_t10=k13;
}
var personal_tax_10 = base_t10* 0.10;
var k15=0;
if((reduced_salary - personal_release_tax)>90000){
    k15= reduced_salary - personal_release_tax - 90000;
}
var base_t18= k15; 
var personal_tax_18 = base_t18 * 0.18;
var total2= personal_tax_10 + personal_tax_18;

    console.log(bruto_cal);
    document.getElementById("bruto-output").innerHTML = bruto_cal.toFixed(2);
    document.getElementById("bruto-input").value =bruto_cal.toFixed(0);

    document.getElementById("pio-output").innerHTML  = pio.toFixed(2);
    document.getElementById("health-output").innerHTML = health.toFixed(2);
    document.getElementById("work-releated-accident").innerHTML = work_releated_accident.toFixed(2);
    document.getElementById("employment-contributions").innerHTML = employment_contributions.toFixed(2);
    document.getElementById("total-output").innerHTML = total.toFixed(2);
    document.getElementById("reduced-salary").innerHTML = reduced_salary.toFixed(2);
    document.getElementById("tax-base").innerHTML= tax_base.toFixed(2);
    document.getElementById("base-t10").innerHTML=base_t10.toFixed(2);
    document.getElementById("personal-tax-10").innerHTML=personal_tax_10.toFixed(2);
    document.getElementById("base-t18").innerHTML=base_t18.toFixed(2);
    document.getElementById("personal-tax-18").innerHTML=personal_tax_18.toFixed(2);
    document.getElementById("total2").innerHTML=total2.toFixed(2);
    document.getElementById("neto").innerHTML=net.toFixed(2);

     //for returning graph value in percent
    // var pio_percent = pio/bruto_cal *100;
    // var health_percent = health/bruto_cal *100;
    // var neto_percent = net/bruto_cal*100;
    // var work_releated_accident_percent = work_releated_accident / bruto_cal *100;
    // var employment_contributions_percent = employment_contributions / bruto_cal *100;
    // var total2_percent = total2 / bruto_cal *100;
    var xValues = ["Pio-sigurimi invalidor dhe pensional", "Sigurim të detyrueshëm shëndetësor",
"Sigurim në rast lëndimi ose sëmundjeje profesionale", "Kontributet e punësimit", "Tatimi personal","Paga ime Neto"];
    var yValues = [pio.toFixed(2) , health.toFixed(2), work_releated_accident.toFixed(2), employment_contributions.toFixed(2), total2.toFixed(2),net.toFixed(2)];
    var barColors = [
      "#b91d47",
      "#00aba9",
      "#2b5797",
      "#e8c3b9",
      "#1e7145",
      "greenyellow"
    ];
    
    new Chart("myChart", {
      type: "doughnut",
      data: {
        labels: 
            xValues ,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      
    },
      options: {
          legend:{
        labels: {
            fontColor: 'black',
            fontSize: 25
        }
    },
        title: {
          display: true,
          text: "Si shpërndahet paga ime",
          fontSize: 35 
        }
        
    }
    
    });    
}
if(document.getElementById("bruto-input").value==0){
new Chart("myChart", {
    type: "doughnut",
    data: {
      labels: 
      ["Pio-sigurimi invalidor dhe pensional", "Sigurim të detyrueshëm shëndetësor",
      "Sigurim në rast lëndimi ose sëmundjeje profesionale", "Kontributet e punësimit", "Tatimi personal","Paga ime Neto"]
        
        
      ,
      
      datasets: [{
        backgroundColor:[
            "#b91d47",
            "#00aba9",
            "#2b5797",
            "#e8c3b9",
            "#1e7145",
            "greenyellow"
          ],
        data: [0,0,0,0,0,0],
      }]
    
  },
    options: {
        legend: {
            labels: {
                fontSize: 25
            }
        },
      title: {
        display: true,
        text: "Jep Bruto apo Neto vlerë për kalkulim",
        fontSize: 35 
      },
  }
  
  });    
}

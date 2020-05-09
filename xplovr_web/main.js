var btn1 = document.getElementById('bu1');
var btn2 = document.getElementById('bu2');
var btn3 = document.getElementById('bu3');
var btn0 = document.getElementById('bu0');

function button_click_1()
{
    window.open("https://www.worldometers.info/coronavirus/");
}
function button_click_2()
{
    window.open("https://drive.google.com/file/d/1Gq7LWtqNps0AYHN14icCCSoSty_YAUmH/view?usp=drivesdk");
}
function button_click_3()
{
    window.open("https://github.com/niteshbharti005101/XploVR");
}

btn1.addEventListener("click", button_click_1);
btn2.addEventListener("click", button_click_2);
btn3.addEventListener("click", button_click_3);
btn0.addEventListener("click", button_click_2);
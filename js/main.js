(function() {
            var $$ = function(selector) {
                return Array.prototype.slice.call(document.querySelectorAll(selector));
           }
           document.addEventListener("DOMContentLoaded", function() {
                var checkbox;
                var result = document.querySelector("#result");
                $$(".switch").forEach(function(switchControl) {
                    if (switchControl.className === ("switch on")) {
                       switchControl.lastElementChild.checked = true;
                    }
                    switchControl.addEventListener("click", function toggleSwitch() {
                        if (switchControl.className === "switch on") {
                            switchControl.className = 'switch off';
                        } else {
                            switchControl.className = ("switch on");
                        }
                        checkbox = switchControl.lastElementChild;
                        checkbox.checked = !checkbox.checked;
                        if (checkbox.checked === true) {
                                result.textContent = "On";
                        } else {
                            result.textContent = "Off";
                            result.innerText = "Off";
                        }
                    }, false);
                });
            }, false);
        })()

function valid()
{
    checkbox = document.getElementById("check");    
    divcheck  = document.getElementById("div-check");   
    result =  document.getElementById("result");   
    if (checkbox.checked == true) {
        divcheck.className = ("switch on");
        result.textContent = "On";        
    }
    
}
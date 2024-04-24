var a = {
    mobiles: {
        Samsung: {
            SamsungA10: {
                name: "Samsung A10",
                ram: "4gb",
                rom: "64gb",
                camera: "13",
                price: "22,000 PKR"
            },
            SamsungA20: {
                name: "Samsung A20",
                ram: "4gb",
                rom: "64gb",
                camera: "18",
                price: "28,000"
            },
            SamsungA30: {
                name: "Samsung A30",
                ram: "4gb",
                rom: "64gb",
                camera: "25",
                price: "29,000"
            }
        },
        IPhone: {
            IPhone11: {
                name: "IPhone11",
                ram: "4gb",
                rom: "64gb",
                camera: "12",
                price: "100,000"
            },
            IPhone12: {
                name: "IPhone12",
                ram: "4gb",
                rom: "64gb",
                camera: "12",
                price: "150,000"
            },
            IPhone13: {
                name: "IPhone13",
                ram: "6gb",
                rom: "128gb",
                camera: "24",
                price: "200,000"
            }
        },
        Oppo: {
            OppoV20: {
                name: "OppoV20",
                ram: "8gb",
                rom: "128gb",
                camera: "64",
                price: "54,999"
            },
            OppoF19: {
                name: "OppoF19",
                ram: "6gb",
                rom: "128gb",
                camera: "48",
                price: "36,999"
            },
            OppoF11: {
                name: "OppoF11",
                ram: "4gb",
                rom: "64gb",
                camera: "48",
                price: "35,999"
            }
        },
        Vivo: {
            VivoY20: {
                name: "VivoY20",
                ram: "4gb",
                rom: "64gb",
                camera: "13",
                price: "26,999"
            },
            VivoY21: {
                name: "VivoY21",
                ram: "4gb",
                rom: "64gb",
                camera: "13",
                price: "43,999"
            },
            VivoY55: {
                name: "VivoY55",
                ram: "8gb",
                rom: "128gb",
                camera: "50",
                price: "64,999"
            }
        }
    }
}
var drop = document.getElementById("drop1");
var model = document.getElementById("drop2");

var all = Object.keys(a.mobiles);
console.log(all);
for(var i = 0; i < all.length; i++){
    drop.innerHTML += `<option value="${all[i]}">${all[i]}</option>`;
}

function selectBrand() {
    var brand = drop.value;
    // console.log(brand);
    var allmodule = Object.keys(a.mobiles[brand]);
    console.log(allmodule);
    model.innerHTML = "";
    for(var i = 0 ; i < allmodule.length; i++){
        model.innerHTML += `<option value="${allmodule[i]}">${allmodule[i]}</option>`;
    }
}
function selectmod () {
    var brand = drop.value;
    var mod = model.value;
    var all = a.mobiles[brand][mod];
    var div = document.getElementById("div1");
    div.innerHTML = "";
    for(var key in all){
        div.innerHTML += `<p style="text-align: left;">${key} : ${all[key]}</p>`;
    }
}
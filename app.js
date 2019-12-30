let countryList = [
    {'Afghanistan, Kabul': ['d',1]},
    {'Armenia, Yerevan': ['d',1,30]},
    {'Azerbaijan, Baku': ['d',1,30]},
    {'Bahrain, Manama': ['d',2,30]},
    {'Bangladesh, Dhaka': ['u',0,30]},
    {'Bhutan, Thimphu': ['u',0,30]},
    {'Brunei, Bandar Seri Begawan': ['u',2,30]},
    {'Cambodia, Phnom Penh': ['u',1,30]},
    {'China, Beijing Municipality, Beijing': ['u',2,30]},
    {'Cyprus, Nicosia': ['d',3,30]},
    {'Cyprus, Northern Cyprus, North Nicosia': ['d',3,30]},
    {'Georgia, Tbilisi': ['d',1,30]},
    {'India, Delhi, New Delhi':['s',0]},
    {'Indonesia, Jakarta Special Capital Region, Jakarta': ['u',1,30]},
    {'Iran, Tehran': ['d',2]},
    {'Iraq, Baghdad': ['d',2,30]},
    {'Israel, Jerusalem': ['d',3,30]},
    {'Japan, Tokyo': ['u',3,30]},
    {'Jordan, Amman': ['d',3,30]},
    {'Kazakhstan, Nursultan': ['u',0,30]},
    {'Kuwait, Kuwait City': ['d',2,30]},
    {'Kyrgyzstan, Bishkek': ['u',0,30]},
    {'Laos, Vientiane': ['u',1,30]},
    {'Lebanon, Beirut': ['d',3,30]},
    {'Malaysia, Kuala Lumpur, Kuala Lumpur': ['u',2,30]},
    {'Mongolia, Ulaanbaatar': ['u',2,30]},
    {'Myanmar, Naypyidaw': ['u',1]},
    {'Nepal, Kathmandu': ['u',0,15]},
    {'North Korea, Pyongyang': ['u',3,30]},
    {'Oman, Muscat': ['d',1,30]},
    {'Pakistan, Islamabadl': ['d',0,30]},
    {'Philippines, Manila': ['u',2,30]},
    {'Qatar, Doha': ['d',2,30]},
    {'Saudi Arabia, Riyadh': ['d',2,30]},
    {'Singapore, Singapore': ['u',2,30]},
    {'South Korea, Seoul': ['u',3,30]},
    {'Sri Lanka, Sri Jayawardenepura Kotte': ['s',0]},
    {'Syria, Damascus': ['d',3,30]},
    {'Taiwan, Taipei': ['u',2,30]},
    {'Tajikistan, Dushanbe': ['d',0,30]},
    {'Thailand, Bangkok': ['u',1,30]},
    {'Timor-Leste, Dili': ['u',3,30]},
    {'Turkey, Ankara': ['d',2,30]},
    {'Turkmenistan, Ashgabat': ['d',0,30]},
    {'United Arab Emirates, Abu Dhabi, Abu Dhabi': ['d',1,30]},
    {'Uzbekistan, Tashkent': ['d',0,30]},
    {'Vietnam, Hanoi': ['u',1,30]},
    {'Yemen, Sana': ['d',2,30]},
];  
let selectCountry = document.getElementById("country");
for(let i = 0 ; i < countryList.length ; i++){  
    selectCountry = document.getElementById("country");
  let optionItem = document.createElement("option");
  optionItem.setAttribute("id",i);
  optionItem.innerHTML = Object.keys(countryList[i]);
    selectCountry.appendChild(optionItem);
}

let currentValue = '';

function display(){
    timeFunction();
}
let timeFunction = setInterval(displayTime, 1000);

function displayTime()

{
    currentValue = '';
    document.getElementById("showClock").innerHTML = currentValue;

    let country = document.getElementById("country").value;
    let obj = countryList.find(obj => Object.keys(obj) == country);
    
    let id = Object.keys(obj);
    let diff = obj[id];
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let countryName = Object.keys(obj);
// 
    // setInterval(() => {
        date = new Date();
        hours = date.getHours();
        minutes = date.getMinutes();
        seconds = date.getSeconds();

        // ==0
        if(diff[0] == 's'){
            console.log("==0");
        }
        // >0
        else if(diff[0] == 'u'){
            console.log(">0");
            // time in hour and minute
            if(diff.length > 2){
                hours = hours + diff[1];
                minutes = minutes + diff[2]
                // hour is eaual to 24 
                if(hours > 24){
                    hours = hours - 24;
                }
                if(hours == 24){
                    hours = 0;
                }
                // minite equal 60
                if(minutes >   60){
                    // console.log(minutes-60)
                    minutes =  minutes  - 60;
                    hours  = hours + 1;                    
                    if(hours > 24){
                        hours = 24 - hours;
                    }
                    if(hours == 24){
                        hours = 0;
                    }
                    if(minutes == 60){
                        minutes = 0;
                    }
                }
            // time in hour 
            }else{
                hours = hours + diff[1];
                if(hours > 24){
                    hours = hours -24 ;
                }
                if(hours == 24){
                    hours = 0;
                }
            }
        }
        //time down compate to india 
        
        else if(diff[0] = 'd'){
            console.log("<0");
            // time in hour and minute
            if(diff.length > 2){
                console.log('welcome');

                hours = hours - diff[1];
                minutes = minutes - diff[2]
                // console.log("min")
                // hour is eaual to 24 
                if(hours < -1){
                    hours = hours + 24;
                }
                if(hours == 24){
                    hours = 0;
                }
                // minite equal 60
                console.log(minutes);
                if(minutes <   -1){
                    // console.log(minutes-60)
                    minutes =  minutes  + 60;
                    hours  = hours - 1;
                    
                    if(hours < -1){
                        hours = 24 + hours;
                    }

                    if(hours == 24){
                        hours = 0;
                    }
                    if(minutes == 60){
                        minutes = 0;
                    }
                }

            // time in hour 
            }else{
                console.log('first time');
                hours = hours - diff[1];
                if(hours < -1){
                    hours = hours + 24 ;
                }
                
                if(hours == 24){
                    hours = 0;
                }
            }

        }
        currentValue = countryName + " <br> " + hours + " : " + minutes + " : " + seconds;

        document.getElementById("showClock").innerHTML = currentValue;

    // }, 1000);
}




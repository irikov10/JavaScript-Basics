function weatherForecast2(input){
    let degrees = Number(input[0]);

    if(degrees >= 26 && degrees <= 35){
        console.log("Hot");
    }else if(degrees >= 20.01 && degrees <= 25.9){
        console.log("Warm");
    }else if(degrees <= 20 && degrees >= 15){
        console.log("Mild");
    }else if(degrees <= 14.9 && degrees >= 12){
        console.log("Cool")
    }else if(degrees <= 11.9 && degrees >= 5){
        console.log("Cold");
    }else{
        console.log("unknown")
    }
}
    weatherForecast2(["0"])
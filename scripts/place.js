document.getElementById("lastModified").innerHTML = `Last modification: ${document.lastModified}`;

let temperature = 8;
let windSpeed = 5

document.getElementById("temperature").innerHTML = `<span>Temperature:</span> ${temperature} °C`;
document.getElementById("wind").innerHTML = `<span>Wind:</span> ${windSpeed} km/h`;

const calculateWindChill = (temperature, windSpeed) => 
  (13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16)));

let windChillFactor = "N/A"; 

if (temperature <= 10 && windSpeed > 4.8) {
  const calculatedChill = calculateWindChill(temperature, windSpeed);
  
  windChillFactor = `${calculatedChill.toFixed(1)} °C`;
}

document.getElementById("windchill").innerHTML = `<span>Wind Chill:</span> ${windChillFactor}`;
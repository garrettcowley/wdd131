const temperature = 44;
const windSpeed = 5;

function calculateWindChill(temp, wind) {
    const windChill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * temp * Math.pow(wind, 0.16));
    return windChill.toFixed(2);
}

if (temperature <= 50 && windSpeed > 3) {
    const windChillFactor = calculateWindChill(temperature, windSpeed);
    const windChillElement = document.getElementById("windChillValue");
    windChillElement.textContent = `${windChillFactor}°F`;
} else {
    console.log("Varibles do not create appreciable windchill");
}

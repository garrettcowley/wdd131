const currentYearSpan = document.getElementById("currentYear");
const currentYear = new Date().getFullYear();
currentYearSpan.textContent = currentYear;

const lastModifiedParagraph = document.getElementById("lastModified");
const lastModifiedDate = document.lastModified;
lastModifiedParagraph.textContent = "Last Modified: " + lastModifiedDate;

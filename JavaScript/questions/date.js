// Current date and time
const currentDate = new Date();

// Function to format date and time
function dateFormat(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1);
    const day = String(date.getDate());
    const hours = String(date.getHours());
    const minutes = String(date.getMinutes());

    // YYYY-MM-DD HH:mm
    const format1 = `${year}-${month}-${day} ${hours}:${minutes}`;

    // DD-MM-YYYY HH:mm
    const format2 = `${day}-${month}-${year} ${hours}:${minutes}`;

    // DD/MM/YYYY HH:mm
    const format3 = `${day}/${month}/${year} ${hours}:${minutes}`;

    return { format1, format2, format3 };
}

// Get formatted date and time
const { format1, format2, format3 } = dateFormat(currentDate);

console.log("Format 1 (YYYY-MM-DD HH:mm):", format1);
console.log("Format 2 (DD-MM-YYYY HH:mm):", format2);
console.log("Format 3 (DD/MM/YYYY HH:mm):", format3);

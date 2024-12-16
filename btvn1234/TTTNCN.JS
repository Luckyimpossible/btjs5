function calculatePersonalIncomeTax(totalIncome, dependents) {
    const taxableIncome = totalIncome - 4 - (dependents * 1.6);
    let taxRate = 0;
    if (taxableIncome <= 0) {
        taxRate = 0;
    } else if (taxableIncome <= 60) {
        taxRate = 5;
    } else if (taxableIncome <= 120) {
        taxRate = 10;
    } else if (taxableIncome <= 210) {
        taxRate = 15;
    } else if (taxableIncome <= 384) {
        taxRate = 20;
    } else if (taxableIncome <= 624) {
        taxRate = 25;
    } else if (taxableIncome <= 960) {
        taxRate = 30;
    } else {
        taxRate = 35;
    }
    const tax = taxableIncome > 0 ? (taxableIncome * taxRate) / 100 : 0;

    return {
        taxableIncome: taxableIncome > 0 ? taxableIncome.toFixed(2) : 0,
        taxRate,
        tax: tax.toFixed(2)
    };
}
const totalIncome = 200; 
const dependents = 2;  

const result = calculatePersonalIncomeTax(totalIncome, dependents);

console.log("Tổng thu nhập năm:", totalIncome, "triệu");
console.log("Số người phụ thuộc:", dependents);
console.log("Thu nhập chịu thuế:", result.taxableIncome, "triệu");
console.log("Thuế suất:", result.taxRate, "%");
console.log("Thuế phải trả:", result.tax, "triệu");

const salaryGross=50000;
console.log("Gross Salary is", salaryGross);
const paye=salaryGross*0.16
console.log("For gross salary is", salaryGross, "PAYE is", paye);
const nhif=2500
console.log("NHIF deduction is", nhif);
const sha=2500
console.log("SHA deduction is", sha);
const totalDeductions=paye+nhif+sha
console.log("Total deductions are", totalDeductions);
const netSalary=salaryGross-totalDeductions
console.log("Net Salary is", netSalary);


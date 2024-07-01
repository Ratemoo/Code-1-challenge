function calculateNetSalary(basicSalary, benefits){
    const PAYE_RATES=[
        {min:0, max:288000, rate:10},
        {min:288001, max:388000, rate:25},
        {min: 388001, max:6000000, rate:30},
        {min: 6000001, max:9600000, rate:32.5},
        {min:9600001,max:Infinity, rate:35}
    ]
    const NHIF_RATES=[
        {min:0,max:5999,deduction:150},
        {min:6000,max:7999,deduction:300},
        {min:8000, max:11999, deduction:400},
        {min:12000,max:14999, deduction:500},
        {min:15000, max:19999, deduction:600},
        {min:20000, max:24999, deduction:750},
        {min:25000, max:29999, deduction:850},
        {min:30000, max:34999, deduction:900},
        { min: 35000, max: 39999, deduction: 950 },
        { min: 40000, max: 44999, deduction: 1000 },
        { min: 45000, max: 49999, deduction: 1100 },
        { min: 50000, max: 59999, deduction: 1200 },
        { min: 60000, max: 69999, deduction: 1300 },
        { min: 70000, max: 79999, deduction: 1400 },
        { min: 80000, max: 89999, deduction: 1500 },
        { min: 90000, max: 99999, deduction: 1600 },
        { min: 100000, max: Infinity, deduction: 1700 }
    ]
    const NSSF_TIER_I_LIMIT=7000
    const NSSF_TIER_II_LIMIT=36000
    const NSSF_RATE_EMPLOYEE=0.06
    const NSSF_RATE_EMPLOYER=0.06
    const HOUSING_LEVY_RATE=0.015
    const grossSalary=basicSalary + benefits
    const annualTaxablePay=grossSalary*12
    let payee=0
    for (let i=0;i<PAYE_RATES.length;i++){
    if(annualTaxablePay>PAYE_RATES[i].min&& annualTaxablePay<= PAYE_RATES[i].max){
        payee=(annualTaxablePay-PAYE_RATES[i].min)*(PAYE_RATES[i].rate/100)
        break
    }
}
let nhifDeductions=0
for(let i=0;i<NHIF_RATES.length;i++){
    if(grossSalary>NHIF_RATES[i].min&&grossSalary<=NHIF_RATES[i].max){
        nhifDeductions=NHIF_RATES[i].deduction
        break
    }
}
let nssfTierI=Math.min(basicSalary,NSSF_TIER_I_LIMIT)*NSSF_RATE_EMPLOYEE
let nssfTierII=Math.min(Math.max(0,basicSalary-NSSF_TIER_I_LIMIT),NSSF_TIER_II_LIMIT-NSSF_TIER_I_LIMIT)*NSSF_RATE_EMPLOYEE
let nssfDeductions=nssfTierI + nssfTierII
const housingLevy=grossSalary*HOUSING_LEVY_RATE
const netSalary=grossSalary-payee-nhifDeductions-nssfDeductions-housingLevy
return {
    grossSalary:grossSalary,
    netSalary:netSalary,
    payee:payee,
    nhifDeductions:nhifDeductions,
    nssfDeductions:nssfDeductions,
    housingLevy:housingLevy
}
    
}
function main(){
    const basicSalary=prompt("Please enter your basic salary:")
    const benefits=prompt("Please enter your benefits:")
    if(basicSalary===null||isNaN(basicSalary)||benefits===null||isNaN(benefits)){
        console.log("Please input a valid number.")
        return
    }
    const parsedBasicSalary =parseInt(basicSalary)
    const parsedBenefits=parseInt(benefits)
    const salaryDetails=calculateNetSalary(parsedBasicSalary,parsedBenefits)
    console.log("Net Salary Calculation:")
    console.log(`Gross Salary: ${salaryDetails.grossSalary}`)
    console.log(`Net Salary:${salaryDetails.netSalary}`)
    console.log(`PAYE:${salaryDetails.payee}`)
    console.log(`NHIF Deductions: ${salaryDetails.nhifDeductions}`)
    console.log(`NSSF Deductions: ${salaryDetails.nssfDeductions}`)
    console.log(`Housing Levy: ${salaryDetails.housingLevy}`)
}
main()
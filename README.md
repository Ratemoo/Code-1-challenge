# Code-1-challenge
## AUTHOR
Name:Brian Ratemo Magucha
Course:Software Engineering
TM: Joseph Mbugua
## Challenge 1- StudentGrade
In this challenge we were required to create a program whereby it would prompt the user to input his/her marks and it would produce the appropriate grade corresponding to the marks inputed.
So I started by creating a function called calculateGrade with its parameters being marks. I then used the if function to input the corresponding marks with their corresponding grades .
I then created another function whose main purpose was to prompt to the user to enter their marks. I used the if statements to ensure that only marks were inputed and not strings and the value of the marks inputed had to be between 0 and 100

## Challenge 2- SpeedDetector
In this challenge we were required to create a program that takes a user's speed and checks whether it is past the speedLimit and by how much Demeritpoints.
I started by coding a function called checkSpeed whose parameters was speed. I then declared the speedLimit variable, kmPerDemeritPoint and maxDemeritPoints.I proceeded to use the if statements whereby if the speed was less than the speedLimit it was okay however if the speed was above thE speedLimit such that the demeritPoints was greater than the maxDemeritpoints then the driver's license was suspended otherwise the driver would get his demeritpoints.
I proceeded to create another function whose main purpose was to fet the drivers speed . I used the if statements to ensure only a number greater than 0 was inputed.

## Challenge 3- NetSalary
In this challenge we were required to write a program whose major task was to calculate an individual's Net Salary by getting the inputs of basic salary and benefits.
I created a function called calculateNetSalary having 2 parameters basicSalary and benefits. I then declared a variable called PAYE_RATES and inputed an array of the different PAYE_RATES. I declared another variable called NHIF_RATES and declared another array of NHIF rates. I declared the NSSF tier 1 and 2 limit and the nssf rate employee and employer and inputed their values. I also declared a housing levy rate together with grossSalary which was gotten by adding the basicSalary to Benefits. I also declared a annualTaxablePay variable that was obtained by multiplying grossSalary by 12(months in a year).
I then declared a variable called payee and assigned it a value of 0 and created a loop where as long as the rates did not reach its maximum it would increment . I also declared another variable called nhifDeductions and did the same thing i did to payee.
I declared a variable called nssfTier1 which would take the lowest value between basicSalary and NSSF_TIER_1_LIMIT and multiply to the nssf rate employee . I declared another variable called nssfTierII that would take the minimum value between the maximum value of either 0 and the value obtained after getting the difference betweeen basicSalary and NSSF_TIER_1_LIMIT and the difference between nssf tier 2 limit and nssf tier 1 limit and multiply it to the nssf rate employee. When the values of nssfTierI and nssfTierII were summed up we would get the nssfDeductions.
I declared a variable called housingLevy that was obtained by finding the product of grossSalary and the Housing Levy Rate
I declared another variable called netSalary whose value was obtained by finding the difference of grossSalary, payee, nhifDeductions, nssfDeductions and housingLevy.
I returned the values to avoid getting the data type undefined.
I created another function which would prompt the user to input their basicSalary and benefits and i declared another variable called salaryDetails whereby i called the calculateNetSalary .
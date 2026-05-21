/*
Question 4 — Build Health Reporter

Problem: Given the percentage of test cases passed in a CI build, report build health.


100% → Green Build
90–99% → Stable (investigate failures)
70–89% → Unstable
Below 70% → Broken Build (block deployment)

Sample Input/Output:

Input: 95
Output: 🟡 Stable — Investigate failures

Input: 65
Output: 🔴 Broken Build — Block deployment
*/


//Solution:

let TC_Passed = 95;

if(TC_Passed===100)
{
    console.log("🟢 Green Build");
}
else if(TC_Passed>=90 && TC_Passed<100)
{
    console.log("🟡 Stable (investigate failures)");
}
else if(TC_Passed>=70 && TC_Passed<90)
{
    console.log("🟠 Unstable");
}
else if(TC_Passed<70)
{
    console.log("🔴 Broken Build (block deployment)");
}


//Solution:

let TC_Passed = 65;

if(TC_Passed===100)
{
    console.log("🟢 Green Build");
}
else if(TC_Passed>=90 && TC_Passed<100)
{
    console.log("🟡 Stable (investigate failures)");
}
else if(TC_Passed>=70 && TC_Passed<90)
{
    console.log("🟠 Unstable");
}
else if(TC_Passed<70)
{
    console.log("🔴 Broken Build (block deployment)");
}


/*Question 5 — Login Lockout After Failed Attempts

Problem: Track failed login attempts. Lock the account after 3 failed attempts.

Sample Input/Output:

Input: attempts = 2
Output: 1 attempt left before lockout

Input: attempts = 3
Output: 🔒 Account Locked — Contact support

Input: attempts = 0
Output: Login successful
*/

//Solution:

let Login_Attempts = 0;

if(Login_Attempts===0)
{
    console.log("Login successful");
}
else if(Login_Attempts===2)
{
    console.log("1 attempt left before lockout");
}
else if(Login_Attempts===3)
{
    console.log("🔒 Account Locked — Contact support");
}

//Solution:

// let Login_Attempts = 2;

// if(Login_Attempts===0)
// {
//     console.log("Login successful");
// }
// else if(Login_Attempts===2)
// {
//     console.log("1 attempt left before lockout");
// }
// else if(Login_Attempts===3)
// {
//     console.log("🔒 Account Locked — Contact support");
// }

// //Solution:

// let Login_Attempts = 3;

// if(Login_Attempts===0)
// {
//     console.log("Login successful");
// }
// else if(Login_Attempts===2)
// {
//     console.log("1 attempt left before lockout");
// }
// else if(Login_Attempts===3)
// {
//     console.log("🔒 Account Locked — Contact support");
// }



const menuButton =
document.querySelector("#menuButton");

const navigation =
document.querySelector("#navigation");

if(menuButton){

menuButton.addEventListener("click",()=>{

navigation.classList.toggle("open");

});

}

document.querySelector("#year").textContent =
new Date().getFullYear();

document.querySelector("#lastModified").textContent =
`Last Modified: ${document.lastModified}`;

const results =
document.querySelector("#results");

if(results){

const params =
new URLSearchParams(window.location.search);

const fname =
params.get("fname");

const lname =
params.get("lname");

const email =
params.get("email");

const subject =
params.get("subject");

const message =
params.get("message");

results.innerHTML = `

<h3>
Submission Details
</h3>

<p>
<strong>
First Name:
</strong>
${fname}
</p>

<p>
<strong>
Last Name:
</strong>
${lname}
</p>

<p>
<strong>
Email:
</strong>
${email}
</p>

<p>
<strong>
Subject:
</strong>
${subject}
</p>

<p>
<strong>
Message:
</strong>
${message}
</p>

`;

}
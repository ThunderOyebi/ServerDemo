console.log("Hello!")

const GETbtn = document.getElementById("button-get")
const form = document.getElementById("account-form")
console.log(typeof form)

async function formMethod() {
    const formData = new FormData(form)
    // eslint-disable-next-line no-unused-vars
    const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        body: formData
    })
}

async function GETmethod() {
    const response = await fetch("http://localhost:3000/users", {
        method: "GET"
    })

    const data = await response.json()
    console.log(data)
    for (const i of data)
    {
        console.log(i)
    }
}

form.addEventListener("submit", async (event) => {
    event.preventDefault()
    formMethod()
})

GETbtn.addEventListener("click", GETmethod)

async function sendFormData() {
    event.preventDefault()
    const form = document.getElementById("account-form")
    const formData = new FormData(form)

    // eslint-disable-next-line no-unused-vars
    const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        body: formData
    })
}

async function getFormData() {
    event.preventDefault()
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

function FormComponent() {
    return (
        <div id="form-component">
            <form id="account-form">
                    <label htmlFor="Username">Username</label>
                    <input id="Username" type="text" name="Username"/>
                    <label htmlFor="Email">Email</label>
                    <input id="Email" type="text" name="Email"/>
                    <label htmlFor="Password">Password</label>
                    <input id="Password" type="text" name="Password"/>
                    <input type="submit" value="Submit" onClick={sendFormData}/>
            </form>
            <button id="button-get" onClick={getFormData}>GET</button>
        </div>
    )
}

function HeaderComponent() {
    return (
        <div id="header-component">
            <p>Hello World!</p>
        </div>
    )
}

function MainComponent() {
    return (
        <div id="main-component">
            <p>Hello World!</p>
        </div>
    )
}

function FooterComponent() {
    return (
        <div id="footer-component">
            <p>Hello World!</p>
        </div>
    )
}
  
function App() {
  return (
    <>
        <HeaderComponent />
        <MainComponent />
        <FooterComponent />
    </>
  )
}

export default App

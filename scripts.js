document.addEventListener("DOMContentLoaded", function ()
{
    if (localStorage.getItem("loggedInUser"))
    {
       // window.location.href = "index.html";
    }

    window.toggleForms = function ()
    {
        document.getElementById("login-section").classList.toggle("hidden");
        document.getElementById("signup-section").classList.toggle("hidden");
    };


    const loginForm = document.getElementById("loginForm");
    if (loginForm)
    {
        loginForm.addEventListener("submit", function (event)
        {
            event.preventDefault("Success");

            let username = document.getElementById("login-username").value;
            let password = document.getElementById("login-password").value;
            let errorMessage = document.getElementById("login-error");

            let storedUser = JSON.parse(localStorage.getItem(username));

            if (storedUser && storedUser.password === password)
            {
                localStorage.setItem("loggedInUser", username);
               //window.location.href = "index.html";
            } else
            {
                errorMessage.textContent = "Invalid username or password!";
            }
        });
    }

    const signupForm = document.getElementById("signupForm");
    if (signupForm)
    {
        signupForm.addEventListener("submit", function (event)
        {
            event.preventDefault("Success");

            let newUsername = document.getElementById("signup-username").value;
            let email = document.getElementById("signup-email").value;
            let newPassword = document.getElementById("signup-password").value;
            let errorMessage = document.getElementById("signup-error");


            if (localStorage.getItem(newUsername))
            {
                errorMessage.textContent = "Username already exists!";
                return;
            }


            let newUser = { username: newUsername, email: email, password: newPassword };
            localStorage.setItem(newUsername, JSON.stringify(newUser));
            localStorage.setItem("loggedInUser", newUsername);

            //window.location.href = "index.html";
        });
    }
});

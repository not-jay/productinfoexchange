function login() {
    //Hide login modal first
    $("#login").modal("hide");

    var accounts = [
        {
            "user": "admin",
            "pass": "password",
            "redirectTo": "admin-index.html"
        },
        {
            "user": "producer",
            "pass": "password",
            "redirectTo": "producer_view.html"
        },
        {
            "user": "consumer",
            "pass": "password",
            "redirectTo": "consumer_view.html"
        }
    ];
    var u = document.loginform.username.value;
    var p = document.loginform.password.value;
    var isValid = false;
    var accountId = 0;

    for(var i = 0; i < accounts.length; i++) {
        if(accounts[i].user == u && accounts[i].pass == p) {
            isValid = true;
            accountId = i;
        }
    }

    if(!isValid) {
        //Set error message
        var errorMsg = document.getElementById("errorMessage");
        errorMsg.innerHTML = "Invalid username/password!";

        //Show error modal
        $("#error").modal('show');
    } else {
        window.location.replace(accounts[accountId].redirectTo);
    }
}

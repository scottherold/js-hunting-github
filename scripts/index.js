function buttonClick() {
    $.get("https://api.github.com/users/scottherold", displayName)
    function displayName(data) {
        console.log(data);

        // Grabs #display div
        var display = document.getElementById('display');

        // appends the name to the innerHTML of div
        display.innerHTML += data.name;
    }
}
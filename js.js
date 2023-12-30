
document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');
    var resultsElement = document.getElementById('results');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission and page reload

        var selectedOption = document.querySelector('input[name="presedinte"]:checked');

        if (selectedOption) {
            if (selectedOption.value === 'Basescu') {
                resultsElement.innerHTML = "<p>Esti bazat boss, esti ce trebuie</p>";
            } else if (selectedOption.value === 'Iohannis') {
                resultsElement.innerHTML = "<p>Esti gay, mergi si culca-te</p>";
            }
        } else {
            resultsElement.innerHTML = "<p>Please select an option</p>";
        }
    });
});
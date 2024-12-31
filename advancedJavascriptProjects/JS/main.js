function favoriteAnimal() {
    var userInput = document.getElementById("animalInput").value;
    var response = "";

    switch (userInput) {
        case "Aardvark":
            response = "What a wonderful, strange choice...";
            break;
        case "Chimpanzee":
            response = "Aahhh, one of the most unexpectedly violent creatures...";
            break;
        case "Donkey":
            response = "Everybody needs a good faithful steed";
            break;
        case "Giraffe":
            response = "Probably the tallest mammal most people can think of";
            break;
        case "Sasquatch":
            response = "Arguably the best of all Earthlings...";
            break;
        default:
            response = "Hmmm, your animal didn't make our list...";
            break;
    }
    document.getElementById("animalAnswer").innerHTML = response;
}
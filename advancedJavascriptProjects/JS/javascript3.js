function displayModel(brand) {
    var modelName = brand.getAttribute("data-model-best");
    alert(modelName + " is the best model offered by " + brand.innerHTML + ", in my opinion.");
}
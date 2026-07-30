const foodHub = document.querySelector(".f");
foodHub.textContent = "FOODHUBS";

const deliciousMeals = document.querySelector(".d");
deliciousMeals.textContent = "Delicious Meals For Everybody";

const addAkaraClass = document.querySelectorAll(".akara");
addAkaraClass.forEach((element) => {
    element.textContent = "Akara and" + " " + element.textContent.toLowerCase();
});
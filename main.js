arr = ["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"];
parent = document.createElement("ul");
document.body.append(parent);

getArray = function (arr, parent) {
  arr.forEach((element) => {
    li = document.createElement("li");
    li.innerHTML = element;
    parent.append(li);
  });
};
getArray(arr, parent);

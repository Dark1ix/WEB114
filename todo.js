const text = document.getElementById("taskInput");
const list = document.getElementById("tasklist");
const button = document.getElementById("addTaskBtn")

button.addEventListener("click", function() {
    const taskInput = text.value.trim();

    if (taskInput === "") {
      alert("You can not enter nothing.");
      return; }
    const itemlist = document.createElement("li")
    itemlist.textContent = taskInput;

    const remove = document.createElement("button");
    remove.textContent = "Delete";

    remove.addEventListener("click", function () {
          list.removeChild(itemlist);
        });
    itemlist.appendChild(remove);
    list.appendChild(itemlist);
    text.value = "";
    text.focus();
});

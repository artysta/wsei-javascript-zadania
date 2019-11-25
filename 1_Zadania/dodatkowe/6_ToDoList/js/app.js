document.addEventListener("DOMContentLoaded", event => {
  var taskList = document.getElementById("taskList");
  var input = document.getElementById("taskInput");
  var addBtn = document.getElementById("addTaskButton");
  var removeBtn = document.getElementById("removeFinishedTasksButton");
  var counter = document.getElementById("counter");
  refreshCounter();

  addBtn.addEventListener("click", event => {
    var taskName = input.value;

    if (taskName.length < 6 || taskName.length > 99) return;

    var taskLi = document.createElement("li");

    // Dodaję atrybut data-completed, by móc kontrolować stan wykonania zadania.
    // > "true" - zadanie wykonane, "false" - zadanie niewykonane <
    taskLi.setAttribute("data-completed", "false");

    var taskH1 = document.createElement("h1");
    taskH1.innerHTML = taskName;

    var taskDeleteBtn = document.createElement("button");
    taskDeleteBtn.innerHTML = "Delete";
    taskDeleteBtn.addEventListener("click", function(event) {
      taskList.removeChild(this.parentElement);
      refreshCounter();
    });

    var taskCompleteBtn = document.createElement("button");
    taskCompleteBtn.innerHTML = "Complete";

    taskCompleteBtn.addEventListener("click", function(event) {
      var h1 = this.previousSibling.previousSibling;

      if (this.parentElement.dataset.completed == "false") {
        h1.style.color = "#FF0000";
        this.parentElement.dataset.completed = "true";
      } else {
        h1.style.color = "";
        this.parentElement.dataset.completed = "false";
      }

      refreshCounter();
    });

    taskLi.appendChild(taskH1);
    taskLi.appendChild(taskDeleteBtn);
    taskLi.appendChild(taskCompleteBtn);

    taskList.appendChild(taskLi);

    input.value = "";
    refreshCounter();
  });

  removeBtn.addEventListener("click", function(event) {
    if (taskList.children.length == 0) return;

    var tmpLength = taskList.children.length;

    for (var i = 0; i < taskList.children.length; i++) {
      if (taskList.children[i].dataset.completed == "true") {
        taskList.removeChild(taskList.children[i]);
        i--;
      }
    }

    refreshCounter();
  });

  function refreshCounter() {
    var count = 0;

    for (var i = 0; i < taskList.children.length; i++) {
      if (taskList.children[i].dataset.completed == "false") {
        count++;
      }
    }

    counter.innerHTML = count;
  }

});

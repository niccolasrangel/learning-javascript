const form = document.querySelector("#task-form");
const input = document.querySelector("#task-input");
const list = document.querySelector("#task-list");
const emptyMessage = document.querySelector("#empty-message");
const storageKey = "estudos-javascript-tasks";

function readTasks() {
  try {
    const savedTasks = JSON.parse(localStorage.getItem(storageKey) ?? "[]");
    return Array.isArray(savedTasks) ? savedTasks : [];
  } catch (error) {
    console.error("Não foi possível carregar as tarefas salvas.", error);
    return [];
  }
}

let tasks = readTasks();

function saveTasks() {
  localStorage.setItem(storageKey, JSON.stringify(tasks));
}

function renderTasks() {
  list.replaceChildren();

  for (const task of tasks) {
    const item = document.createElement("li");
    item.classList.toggle("completed", task.completed);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.setAttribute("aria-label", `Marcar "${task.text}" como concluída`);
    checkbox.addEventListener("change", () => {
      task.completed = checkbox.checked;
      saveTasks();
      renderTasks();
    });

    const text = document.createElement("span");
    text.textContent = task.text;

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.textContent = "Remover";
    removeButton.setAttribute("aria-label", `Remover "${task.text}"`);
    removeButton.addEventListener("click", () => {
      tasks = tasks.filter((savedTask) => savedTask.id !== task.id);
      saveTasks();
      renderTasks();
    });

    item.append(checkbox, text, removeButton);
    list.append(item);
  }

  emptyMessage.hidden = tasks.length > 0;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value.trim();

  if (!text) {
    return;
  }

  tasks.push({ id: crypto.randomUUID(), text, completed: false });
  saveTasks();
  renderTasks();
  form.reset();
  input.focus();
});

renderTasks();

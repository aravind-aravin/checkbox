let checkboxWithLabelContainerEl =  document.getElementById("checkboxWithLabelContainer");

checkboxWithLabelContainerEl.classList.add("text-center", "p-5");

let checkBoxEl =  document.createElement("input");
checkBoxEl.id = "checkbox";
checkBoxEl.type = "checkbox";
checkboxWithLabelContainerEl.appendChild(checkBoxEl);

let labelEl = document.createElement("label");
labelEl.classList.add("ml-2");
labelEl.setAttribute("for", "checkbox");
labelEl.textContent = "Click Me!";
labelEl.id = "checkboxLabel";
checkboxWithLabelContainerEl.appendChild(labelEl);
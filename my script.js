    const missionInput = document.getElementById('missionInput');
    const missionList = document.getElementById('missionList');
    const completedList = document.getElementById('completedList');

    // Add mission
    function addmission() {
      if (missionInput.value.trim() === "") {
        alert("Please enter a mission!");
        return;
      }

      let li = document.createElement('li');
      li.innerHTML = `
        <span onclick="toggleComplete(this)">${missionInput.value}</span>
        <button class="delete-btn" onclick="deletemission(this)">X</button>
      `;

      missionList.appendChild(li);
      missionInput.value = "";
    }

    // Mark as completed (toggle strike-through)
    function toggleComplete(mission) {
      mission.parentElement.classList.toggle('completed');
    }

    // Delete mission and move it to completed section
    function deletemission(button) {
      let li = button.parentElement;
      let missionText = li.querySelector("span").innerText;

      // Add to completed section
      let completedItem = document.createElement('div');
      completedItem.className = "completed-mission";
      completedItem.innerText = "✔ " + missionText;
      completedList.appendChild(completedItem);

      // Remove from current list
      li.remove();
    }
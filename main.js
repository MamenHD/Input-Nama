document.getElementById("showNameButton").addEventListener("click", function () {
    const nameInput = document.getElementById("nameInput").value;
    const nameDisplay = document.getElementById("nameDisplay");

    if (nameInput.trim() !== "") {
        nameDisplay.textContent = `Selamat datang di website gabut, ${nameInput}>_<`;
        nameDisplay.classList.remove("hidden");
    } else {
        nameDisplay.textContent = "Harap masukkan nama Anda.";
        nameDisplay.classList.remove("hidden");
    }
});

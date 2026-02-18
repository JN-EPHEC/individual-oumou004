// 1. Au chargement de la page, appel GET /api/users
document.addEventListener("DOMContentLoaded", () => {
    loadUsers();
});

function loadUsers() {
    fetch("/api/users")
        .then(response => response.json())
        .then(users => {
            const list = document.getElementById("user-list");
            list.innerHTML = "";

            // 2. Ajouter un <li> pour chaque utilisateur
            users.forEach(user => {
                const li = document.createElement("li");
                li.textContent = user.name;
                list.appendChild(li);
            });
        });
}

// 3. Intercepter la soumission du formulaire
document.getElementById("user-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const name = nameInput.value;

    fetch("/api/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: name })
    })
    .then(response => response.json())
    .then(() => {
        // 4. Rafraîchir la liste sans recharger la page
        loadUsers();
        nameInput.value = "";
    });
});

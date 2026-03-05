document.addEventListener("DOMContentLoaded", loadUsers);

function loadUsers() {
    fetch("/api/users")
        .then(res => res.json())
        .then(users => {
            const list = document.getElementById("user-list");
            list.innerHTML = "";
            users.forEach(user => {
                const li = document.createElement("li");
                li.textContent = user.name;
                list.appendChild(li);
            });
        });
}

document.getElementById("user-form").addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("name").value;

    fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name })
    })
    .then(() => {
        loadUsers();
    });
});

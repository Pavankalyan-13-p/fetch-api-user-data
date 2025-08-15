async function fetchData() {
    const container = document.getElementById('user-container');
    container.innerHTML = "Loading...";

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
            throw new Error("HTTP error! Status: " + response.status);
        }

        const users = await response.json();
        container.innerHTML = "";

        users.forEach(user => {
            const div = document.createElement('div');
            div.className = 'user';
            div.innerHTML = `
                <strong>${user.name}</strong><br>
                Email: ${user.email}<br>
                Address: ${user.address.street}, ${user.address.city}
            `;
            container.appendChild(div);
        });

    } catch (error) {
        console.error('Fetch error:', error);
        container.innerHTML = `<p class="error">Error fetching data. Please check your internet and try again.</p>`;
    }
}

// Load on page start
fetchData();

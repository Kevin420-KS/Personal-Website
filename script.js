const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleBtn");
const content = document.getElementById("content");
const links = document.querySelectorAll(".sidebar a");

// Toggle hanya dengan tombol bar
toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

// Fungsi load halaman
async function loadPage(page) {
  try {
    const res = await fetch(`${page}/index.html`);
    if (!res.ok) throw new Error("Gagal load konten");
    const html = await res.text();
    content.innerHTML = html;
  } catch (err) {
    content.innerHTML = `<p style="color:red">${err.message}</p>`;
  }
}

// Klik menu → load konten
links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const page = link.dataset.page;
    loadPage(page);
  });
});

// Default buka home
loadPage("home");

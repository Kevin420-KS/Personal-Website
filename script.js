function loadPage(page) {
  fetch(`${page}/content.html`)
    .then(res => res.text())
    .then(html => {
      document.getElementById("content").innerHTML = html;
    })
    .catch(err => {
      document.getElementById("content").innerHTML = "<p>Halaman tidak ditemukan.</p>";
    });
}

// default buka home
window.onload = () => loadPage("home");

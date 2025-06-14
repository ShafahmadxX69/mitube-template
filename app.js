const files = [
  { name: "report.xlsx", type: "xlsx", url: "/files/report.xlsx" },
  { name: "summary.pdf", type: "pdf", url: "/files/summary.pdf" }
];

function renderFiles(filter = 'all') {
  const tbody = document.querySelector("#file-list tbody");
  tbody.innerHTML = '';
  files.forEach(file => {
    if (filter === 'all' || file.type === filter) {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${file.name}</td>
        <td>${file.type}</td>
        <td><a href="${file.url}" download>Download</a></td>
      `;
      tbody.appendChild(row);
    }
  });
}

function filterFiles(type) {
  renderFiles(type);
}

function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
  document.getElementById(pageId).classList.remove('hidden');
}

document.getElementById("upload-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.getElementById("file-input");
  const file = input.files[0];
  if (file) {
    const ext = file.name.split('.').pop();
    files.push({ name: file.name, type: ext, url: URL.createObjectURL(file) });
    alert("File uploaded (simulasi)!");
    renderFiles();
    input.value = '';
  }
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js');
}

window.onload = () => renderFiles();

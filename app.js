const files = [
  { name: "Laporan Keuangan 2025.xlsx", url: "public/files/data.xlsx" },
  { name: "Surat Pengantar.pdf", url: "files/dokumen1.pdf" }
];

window.onload = () => {
  const fileList = document.getElementById("file-list");
  files.forEach(file => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${file.name}</td>
      <td><a href="${file.url}" download>📥 Unduh</a></td>
    `;
    fileList.appendChild(row);
  });
};

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}

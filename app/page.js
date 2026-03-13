export default function renderPage() {
  const root = document.getElementById('app');
  if (!root) return;

  root.innerHTML = `
    <div>
      <h1>Welcome to Rutgers Car Cleaning</h1>
      <p>Get your car sparkling clean!</p>
    </div>
  `;
}
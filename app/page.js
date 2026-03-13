Your page.js is currently using JSX, which will error unless you have a build step (Babel/React). For plain JS in the browser, make it render HTML via DOM APIs instead.

Update page.js to:

````javascript
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
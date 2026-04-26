import { checks, workflowSteps } from './templateData'

export function App() {
  return (
    <main className="app-shell">
      <section className="hero" aria-labelledby="app-title">
        <p className="eyebrow">React App Template</p>
        <h1 id="app-title">Production-ready React app starter</h1>
        <p className="hero-copy">
          A small Vite + React baseline with TypeScript, linting, tests, browser smoke coverage, and
          GitHub Pages deployment workflows already wired together.
        </p>
        <div className="actions" aria-label="project actions">
          <a
            className="primary-link"
            href="https://vite.dev/guide/"
            rel="noreferrer"
            target="_blank"
          >
            Vite Docs
          </a>
          <a
            className="secondary-link"
            href="https://react.dev/learn"
            rel="noreferrer"
            target="_blank"
          >
            React Docs
          </a>
        </div>
      </section>

      <section className="content-grid" aria-label="template capabilities">
        <article>
          <h2>Verification</h2>
          <ul>
            {checks.map((check) => (
              <li key={check}>{check}</li>
            ))}
          </ul>
        </article>

        <article>
          <h2>Delivery Flow</h2>
          <ol>
            {workflowSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </article>
      </section>
    </main>
  )
}

import './App.css'

function App() {
  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <main className="signup-page">
      <section className="signup-card" aria-labelledby="signup-title">
        <div className="signup-content">
          <a className="brand" href="/" aria-label="Crease home">
            <span className="brand-mark" aria-hidden="true">🏏</span>
            <span>crease.</span>
          </a>
          <header className="signup-heading">
            <p className="eyebrow">Your game, organised</p>
            <h1 id="signup-title">Create your account</h1>
            <p className="intro">Set up your organiser profile and get your season underway.</p>
          </header>
          <form className="signup-form" onSubmit={handleSubmit}>
            <label htmlFor="full-name">Full name</label>
            <input id="full-name" name="name" type="text" placeholder="Enter your full name" autoComplete="name" required />
            <label htmlFor="email">Email address</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" placeholder="At least 6 characters" autoComplete="new-password" minLength={6} required />
            <button type="submit">Create account <span aria-hidden="true">→</span></button>
          </form>
          <p className="signin">Already have an account? <a href="#signin">Sign in</a></p>
          <p className="legal">By continuing, you agree to our <a href="#terms">Terms</a> and <a href="#privacy">Privacy Policy</a>.</p>
        </div>
      </section>
    </main>
  )
}

export default App

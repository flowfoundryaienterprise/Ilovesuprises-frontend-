import { useAppStore } from './stores/useAppStore'
import './App.css'

export default function App() {
  const { count, increment, reset } = useAppStore()

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Frontend Starter Template</h1>
        <p>React + TypeScript + Vite + Zustand + TanStack Query</p>
      </header>

      <section className="store-verification">
        <p>Zustand Store Verification</p>
        <div className="button-group">
          <button type="button" onClick={increment}>
            Count: {count}
          </button>
          <button type="button" onClick={reset}>
            Reset
          </button>
        </div>
      </section>
    </div>
  )
}

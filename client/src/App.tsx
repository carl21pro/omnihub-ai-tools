import { Route, Switch } from 'wouter'
import Home from './pages/Home'
import Tools from './pages/Tools'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/tools" component={Tools} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default App


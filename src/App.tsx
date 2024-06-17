import logo from './logo.svg';
import './App.css';
import Hello from './presentation/Hello';
import HelloViewModel from './presentation/HelloViewModel';
import DependenciesResolver from './di/DependenciesResolver';

function App() {
  const viewModel = new HelloViewModel(DependenciesResolver.getNameUserCase);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <main>
          <Hello viewModel={viewModel} />
        </main>
      </header>
    </div>
  );
}

export default App;

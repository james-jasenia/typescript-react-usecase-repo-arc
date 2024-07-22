import logo from './logo.svg';
import './App.css';
import Hello from './presentation/Hello';
import HelloViewModel from './presentation/HelloViewModel';
import DependenciesResolver from './di/DependenciesResolver';
import ProductCard from './presentation/ProductCard';

function App() {
  const viewModel = new HelloViewModel(DependenciesResolver.getProductUseCase);

  let products = DependenciesResolver.getProductUseCase.execute();

  return (
    <div className="App">
      <header className="App-header">
        <main>
          <ProductCard></ProductCard>
          <Hello viewModel={viewModel} />
        </main>
      </header>
    </div>
  );
}

export default App;

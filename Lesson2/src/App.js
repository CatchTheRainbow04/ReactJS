import logo from './logo.svg';
import './App.css';
import FuncJsxDoanh from './components/Func_JSX_Doanh';
import ClassJsxDoanh from './components/Class_JSX_Doanh';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Demo JSX</h1>
      {/* function Component Demo */}
      <FuncJsxDoanh />
      <FuncJsxDoanh fullName = "Thành Doanh" age = "20" />
      <ClassJsxDoanh />
      <ClassJsxDoanh info = "HIHI" time = "18" />

    </div>
  );
}

export default App;
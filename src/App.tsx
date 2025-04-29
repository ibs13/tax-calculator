import Description from "./components/Description";
import Header from "./components/Header";
import TaxCalculationForm from "./components/TaxCalculationForm";

function App() {
  return (
    <>
      <Header />
      <div className="grid grid-cols-2 gap-4">
        <Description />
        <TaxCalculationForm />
      </div>
    </>
  );
}

export default App;

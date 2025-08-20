import ProductList from "./components/ProductList";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100  p-6">
        <h1 className="font-bold text-3xl text-black text-center my-6">
          Catalog
        </h1>
        <ProductList />
      </div>
    </>
  );
};
export default App;

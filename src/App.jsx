import ProductList from "./components/ProductList";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100  p-6">
      <h1 className="font-bold text-3xl text-black text-center my-6">
        Shopping Cart
      </h1>
      {/* {error && (
        <p className="text-red-500 text-center text-2xl font-bold">
          Error fetching data
        </p>
      )}
      {loading && <p>Loading...</p>} */}

      <ProductList />
    </div>
  );
};
export default App;

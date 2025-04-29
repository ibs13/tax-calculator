const TaxCalculationForm = () => {
  return (
    <div className="px-24">
      <h2 className="text-4xl text-black font-bold pt-12 pb-8 text-center">
        Calculate your tax
      </h2>
      <form action="">
        <div className="mb-4">
          <label
            htmlFor="income"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Income:
          </label>
          <input
            type="number"
            id="income"
            name="income"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your income"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="deductions"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Tax Free Amount:
          </label>
          <input
            type="number"
            id="deductions"
            name="deductions"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your deductions"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="taxCard"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Select Tax Card:
          </label>
          <select
            id="taxCard"
            name="taxCard"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">-- Select Tax Card --</option>
            <option value="A">Tax Card A</option>
            <option value="B">Tax Card B</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="taxRate"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Tax Rate:
          </label>
          <input
            type="number"
            id="taxRate"
            name="taxRate"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter tax rate"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Calculate Tax
        </button>
      </form>
    </div>
  );
};

export default TaxCalculationForm;

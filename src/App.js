import ExpenseBox from "./components/ExpenseBox";

function App() {
  const expenses = [
    { title: "1", amount: 294.03, date: new Date() },
    { title: "1", amount: 294.03, date: new Date() },
    { title: "1", amount: 294.03, date: new Date() },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseBox expenses={expenses}></ExpenseBox>
    </div>
  );
}

export default App;

import ExpenseItem from "./ExpenceItem";

function ExpenseBox(props) {
  return (
    <div>
      {props.expenses.map((p) => {
        return <ExpenseItem {...p} />;
      })}
    </div>
  );
}

export default ExpenseBox;

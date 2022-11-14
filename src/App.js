import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "toilet paper",
      amount: 94.12,
      date: new Date(2022, 12, 13),
    },
    {
      id: "e2",
      title: "new TV",
      amount: 94.12,
      date: new Date(2022, 12, 13),
    },
    {
      id: "e3",
      title: "car insurance",
      amount: 94.12,
      date: new Date(2022, 12, 13),
    },
    {
      id: "e4",
      title: "new Desk",
      amount: 924.12,
      date: new Date(2022, 11, 23),
    },
  ];
  return (
    <div>
      <h2>Let's Get Started</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
     <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
      <h2></h2>
    </div>
  );
}

export default App;

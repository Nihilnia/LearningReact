function Gloria() {
  return (
    <>
      <h2>Gloria is waiting for:</h2>
      <h3>To being online..</h3>
    </>
  );
}

function Nihil() {
  return <Gloria />;
}

// ReactDOM.render(<Nihil />, document.querySelector("#root"));
// ReactDOM.createRoot(document.querySelector("#root")).render(<Nihil />);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Nihil />);

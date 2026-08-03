/*props are like passing arguements to a function.So we pass props to a component*/
function Parent() {
  /*primitive data types*/
  const str = "Hello World";
  const amount = 2000;
  const isOk = true;
  const notSet = null;

  return (
    <div>
      <h1>I am the Parent component</h1>
      <Child str={str} amount={amount} isOk={isOk} notSet={notSet} />
    </div>
  );
}

function Child(props) {
  console.log(props);
  return (
    <div>
      <h1>I am the child component</h1>
    </div>
  );
}
export default Parent;

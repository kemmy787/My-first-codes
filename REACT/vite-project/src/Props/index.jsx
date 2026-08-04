/*props are like passing arguements to a function.So we pass props to a component*/
function Parent() {
  /*primitive data types*/
  const str = "Hello World";
  const amount = 2000;
  const isOk = true;
  const notSet = null;
  const car = { model: "GLE", manufacture: "Mercedes", engine: { cc: 2500 } };
  const colors = ["blue", "green", "white"];
  return (
    <div>
      <h1>I am the Parent component</h1>
      <Child1 str={str} amount={amount} isOk={isOk} notSet={notSet} />
      <Child2
        str={str}
        amount={amount}
        isOk={isOk}
        notSet={notSet}
        car={car}
        colors={colors}
      />
      <Child3 str={str} amount={amount} isOk={isOk} notSet={notSet} />
    </div>
  );
}
//display prop using prop keyword ->The most inconvenient
function Child1(props) {
  return (
    <div>
      <h1>I am the first child component</h1>
      <ul>
        <li>
          Favorite string<b>{props.str} </b>{" "}
        </li>
        <li>
          Amount<b>{props.amount} </b>{" "}
        </li>
        <li>
          isOk<b>{props.isOk}</b>{" "}
        </li>
        <li>
          isOk<b>{String(props.isOk)} </b>
        </li>
        <li>
          notSet <b>{props.notSet}</b>{" "}
        </li>
      </ul>
    </div>
  );
}

//using destructuring
function Child2(props) {
  const { str, amount, isOk, notSet, car, colors } = props;
  return (
    <div>
      <h1>I am the second child component</h1>
      <ul>
        <li>
          Favorite string<b>{str} </b>{" "}
        </li>
        <li>
          Amount<b>{amount} </b>{" "}
        </li>
        <li>
          isOk<b>{isOk}</b>{" "}
        </li>
        <li>
          isOk<b>{String(isOk)} </b>
        </li>
        <li>
          notSet <b>{notSet}</b>{" "}
        </li>
        <li>
          Car model<b>{car.model}</b>
          {/*Rendering objects time🤩🤩*/}
        </li>
        <li>
          Car manufacturer <b>{car["manufacture"]}</b>
        </li>
        <li>
          Most basic color <b>{colors[0]}</b>
        </li>
        <li>
          Peaceful color <b>{colors[2]}</b>
        </li>
      </ul>
    </div>
  );
}
function Child3({ str, amount, isOk, notSet }) {
  /*direct destructuring*/

  return (
    <div>
      <h1>I am the third child component</h1>
      <ul>
        <li>
          Favorite string<b>{str} </b>{" "}
        </li>
        <li>
          Amount<b>{amount} </b>{" "}
        </li>
        <li>
          isOk<b>{isOk}</b>{" "}
        </li>
        <li>
          isOk<b>{String(isOk)} </b>
        </li>
        <li>
          noitSet <b>{notSet}</b>{" "}
        </li>
      </ul>
    </div>
  );
}
export default Parent;

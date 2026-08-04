function Mapping() {
  //power of numbers
  const numbers = [2, 4, 18, 22, 57];

  const power_of_numbers = numbers.map((q) => {
    console.log("this is n,", q);
    return q * q;
  });

  const justMap = numbers.map(() => {
    "give me some";
  });
  console.log(power_of_numbers);
  console.log(justMap);
  const colors = ["green", "blue", "yellow", "black"];
  //referencing function that l used in map 4
  function singleColor(c, i) {
    if (i == 1) {
      return null;
    }
    return (
      <div
        key={i}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        for index <b>{i} </b>color is <b>{c}</b>
      </div>
    );
  }
  //referencing using a component
  function SingleColorComponent(props) {
    const { c, i } = props;
    return (
      <div
        key={i}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        for index <b>{i} </b>color is <b>{c}</b>
      </div>
    );
  }

  //return JSX to show on screen
  return (
    <div>
      <div style={{ padding: "20px" }}>
        <h2 style={{ textAlign: "center" }}>Power of Numbers </h2>
        <ul>
          {power_of_numbers.map((num, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {num}
            </li>
          ))}
        </ul>
      </div>
      <div>
        {/*second map..using arrow function*/}
        <h2 style={{ textAlign: "center" }}>Mapping colors </h2>
        <h4 style={{ textAlign: "center" }}>Using arrow functions</h4>
        {colors.map((g, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              for index<b>{index}</b>color is<b>{g}</b>
            </div>
          );
        })}
      </div>
      {/*map 3..using anonymous function.*/}
      <div>
        <h2 style={{ textAlign: "center" }}>Using anonymous functions</h2>

        {colors.map(function (color, index) {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              color is <b>{color}</b>
            </div>
          );
        })}
      </div>

      {/*map 4..using referencing the function*/}

      <h4 style={{ textAlign: "center" }}>Using referencing the function </h4>
      {colors.map(singleColor)}

      {/*map5...using a component,*/}
      <h4 style={{ textAlign: "center" }}>Using a component</h4>
      {colors.map(function (c, i) {
        return <SingleColorComponent c={c} i={i} key={i} />;
      })}
    </div>
  );
}

export default Mapping;

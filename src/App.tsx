import React from 'react';

const App: React.FC = () => {
  const greeting: string = "Hello, TypeScript!";
  const numberList: number[] = [5, 10, 15];

  function calculateSum(a: number, b: number): number {
    return a + b;
  }

  return (
    <div>
      <h1>{greeting}</h1>
      <h2>Number List: {numberList.join(', ')}</h2>
      <h3>Sum of first two numbers: {calculateSum(numberList[0], numberList[1])}</h3>
    </div>
  );
};

export default App;
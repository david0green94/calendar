import React, { useCallback, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Calendar } from "./Components /calendargrid";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
`;

const Input = styled.input`
  border: 1px solid red;
`;

function App() {
  const [month, setMonth] = useState(() => new Date().getMonth());
  const [year, setYear] = useState(() => new Date().getFullYear());

  const monthUpdate = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setMonth(+event.target.value);
    },
    []
  );
  const yearUpdate = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setYear(+event.target.value);
    },
    []
  );
  return (
    <div className="App">
      <HeaderWrapper>
        <Input type="number" onChange={monthUpdate} value={month} />
        <Input type="number" onChange={yearUpdate} value={year} />
      </HeaderWrapper>
      <Calendar month={month} year={year} />
    </div>
  );
}

export default App;

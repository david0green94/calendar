import React, { useCallback, useMemo, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Calendar } from "./Components /calendargrid";
import styled from "styled-components";
import Dropdown from "./Components /Dropdown";
import MONTHS from "./Constants/MONTHS";

const HeaderWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const Input = styled.input`
  border: 1px solid red;
`;

const UnitWrapper = styled.div`
  white-space: nowrap;
  cursor: pointer;
  text-align: left;
`;

function App() {
  const [month, setMonth] = useState(() => new Date().getMonth() + 1);
  const [year, setYear] = useState(() => new Date().getFullYear());
  const years = useMemo(() => {
    const year = new Date().getFullYear();
    let years: number[] = [];
    for (let i = 0; i < 10; i++) {
      years = [...years, year - 10 + i];
    }
    for (let i = 0; i < 10; i++) {
      years = [...years, year + i];
    }
    return years;
  }, []);
  return (
    <div className="App">
      <HeaderWrapper>
        <Dropdown
          options={MONTHS.map((month, index) => ({
            id: index + 1,
            label: <UnitWrapper>{month}</UnitWrapper>,
          }))}
          selectedId={month}
          onItemSelect={setMonth}
        />
        <Dropdown
          options={years.map((year) => ({
            id: year,
            label: <UnitWrapper>{year}</UnitWrapper>,
          }))}
          selectedId={year}
          onItemSelect={setYear}
        />
      </HeaderWrapper>
      <Calendar month={month} year={year} />
    </div>
  );
}

export default App;

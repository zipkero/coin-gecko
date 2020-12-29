import React from 'react';
import styled from 'styled-components';

const OptionBox = styled.div`
  select {
    outline: none;
    border: none;
  }

  & + & {
    margin-inline-start: 10px;
  }
`;

function Option({options}) {
  return (
      <OptionBox>
        <select defaultValue={options.find((o) => o.selected === true)?.value}>
          {options &&
          options.map(
              (o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </OptionBox>
  );
}

export default Option;

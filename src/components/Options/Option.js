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

function Option({value, options, onChange}) {
  return (
      <OptionBox>
        <select onChange={onChange} defaultValue={value}>
          {options &&
          options.map(
              (o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </OptionBox>
  );
}

export default Option;

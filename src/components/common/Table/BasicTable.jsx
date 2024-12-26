import React from "react";
import styled from "styled-components";

const BasicTable = styled.table`
  width: 100%;
  border-spacing: 0;
  color: #525252;
`;

const Tr = styled.tr`
  border-bottom: 2px solid #c4e0ff;
`;

const Th = styled.th`
  background: #c4e0ff;
  padding: 12px 8px;
  text-align: center;
  font-weight: 500;
  border-right: 1px solid #d2d2d2;
  border-top: none;
  font-size: 20px;

  &:nth-child(1) {
    border-left: 1px solid #d2d2d2;
  }
`;

const Td = styled.td`
  padding: 12px 8px;
  text-align: left;
  border-bottom: 1px solid #d2d2d2;
  border-right: 1px solid #d2d2d2;
  text-align: center;
  font-size: 18px;

  &:nth-child(1) {
    border-left: 1px solid #d2d2d2;
  }
`;

const BasicTables = ({ headers = [], data = [] }) => {
  return (
    <BasicTable>
      <thead>
        <Tr>
          {headers.map((header, index) => (
            <Th key={index} style={{ width: header.width }}>
              {header.label}
            </Th>
          ))}
        </Tr>
      </thead>
      <tbody>
        {!data.length || !headers.length ? (
          <Tr>
            <Td colSpan={headers.length || 1} style={{ textAlign: "center" }}>
              데이터가 없습니다.
            </Td>
          </Tr>
        ) : (
          data.map((row, rowIndex) => (
            <Tr key={rowIndex}>
              {Object.values(row).map((cell, cellIndex) => (
                <Td key={cellIndex}>{cell}</Td>
              ))}
            </Tr>
          ))
        )}
      </tbody>
    </BasicTable>
  );
};

export default BasicTables;

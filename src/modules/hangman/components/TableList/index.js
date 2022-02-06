import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Table, Thead, Td, Th, Tr } from "./styled";

export const TableList = ({ header, data }) => (
  <>
    <Table>
      <Thead>
        <Tr>
          {header.map((item) => (
            <Th key={item}>{item}</Th>
          ))}
        </Tr>
      </Thead>
      {data.map((item) => (
        <Tr key={item.userName}>
          <Td>{item.userName}</Td>
          <Td>{item.score}</Td>
        </Tr>
      ))}
    </Table>
  </>
);

TableList.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array]),
  header: PropTypes.oneOfType([PropTypes.array]),
};

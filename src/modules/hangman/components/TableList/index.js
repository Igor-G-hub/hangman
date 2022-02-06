import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Table, Thead, Td, Th, Tr, Tbody } from "./styled";

export const TableList = ({ header, data }) => (
  <>
    <Table>
      <Thead>
        <Tr>
          {header.map((item, index) => (
            <Th key={index}>{item}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {data.map((item, index) => (
          <Tr key={index}>
            <Td>{item.userName}</Td>
            <Td>{item.score}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  </>
);

TableList.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array]),
  header: PropTypes.oneOfType([PropTypes.array]),
};

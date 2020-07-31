import React, { useState, useEffect } from "react";
import { v4 } from "uuid";

import "./Table.pcss";

const Table = ({ dataSource }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await dataSource();

      setData(data);
    };

    fetchData();
  }, []);

  if (!data) return null;

  const { headers, rows } = data;

  return (
    <table>
      <thead>
        <tr>
          {headers.map(({ value }) => (
            <th key={v4()}>{value}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={v4()}>
            {Object.values(row).map((val) => (
              <td key={v4()}>{val}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

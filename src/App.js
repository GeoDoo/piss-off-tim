import React from "react";

import Table from "./Table";
// FIXME: temp data just for display
import tableData from "../static-data/table.json";

const fetchTableData = () => tableData;

const App = () => (
  <>
    <h1>Piss off Tim</h1>
    <Table dataSource={fetchTableData} />
  </>
);

export default App;

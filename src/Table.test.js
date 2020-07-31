import React from "react";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import Table from "./Table";
import tableData from "../static-data/table.json";

describe("Table", () => {
  test("renders Table component", async () => {
    const fetchTableData = () => tableData;

    await act(async () => {
      await render(<Table dataSource={fetchTableData} />);
    });

    screen.getByText("Customer");
    screen.getByText("Pass Type Id");
    screen.getByText("Pass Type");
    screen.getByText("Push Token");
    screen.getByText("Balance");
    screen.getByText("Status");
  });
});

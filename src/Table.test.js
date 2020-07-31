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
    
    screen.getByText("Prof. Dr. Kerem Kumcuoğlu");
    screen.getByText("Şahnur Yılmazer");
    screen.getByText("Doç. Dr. Burak Doğan");
    screen.getByText("Sinem Balcı");
    
    screen.getAllByText("pass.com.ocuzdan.main");
    screen.getAllByText("storeCard");
    screen.getAllByText("0");
    screen.getAllByText("1");
  });
});

import React from "react";
import {
  render,
  fireEvent,
  waitFor,
  queryAllByTestId,
} from "@testing-library/react";
import Select from "./Select";
import { items } from "../../data";

describe("Select", () => {
  test("renders a select component", async () => {
    const { queryByTestId } = render(<Select />);

    //Check de default placeholder to be present
    const Placeholder = queryByTestId("placeholder");
    expect(Placeholder).toBeInTheDocument();
    expect(Placeholder).toContainHTML("Select item");

    // Check that select value is present and trigger click to open options list
    const SelectedValue = queryByTestId("selected-value");
    expect(SelectedValue).toBeInTheDocument();
    fireEvent.click(SelectedValue!);

    //Wait until options list display and check that list have the default text when empty
    await waitFor(() => {
      const NoItem = queryByTestId("no-items");
      expect(NoItem).toBeInTheDocument();
      expect(NoItem).toContainHTML("No items to show");
    });
  });

  test("renders a select component with items", async () => {
    const { queryByTestId } = render(<Select items={items} />);

    //Check de default placeholder to be present
    const Placeholder = queryByTestId("placeholder");
    expect(Placeholder).toBeInTheDocument();
    expect(Placeholder).toContainHTML("Select item");

    // Check that select value is present and trigger click to open options list
    const SelectedValue = queryByTestId("selected-value");
    expect(SelectedValue).toBeInTheDocument();
    fireEvent.click(SelectedValue!);

    //Wait until options list display and check that list have the default text when empty
    await waitFor(() => {
      const NoItem = queryByTestId("no-items");
      expect(NoItem).not.toBeInTheDocument();
    });

    //Check if the option list contain the 3 options
    const OptionsContainer = queryByTestId("option-container");
    const OptionItems = queryAllByTestId(OptionsContainer!, "option-item");
    expect(OptionItems).toHaveLength(3);
  });
});

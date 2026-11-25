import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("React Calculator", () => {
  test("applies each operation to the running result", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Type a number");

    fireEvent.change(input, { target: { value: "10" } });
    fireEvent.click(screen.getByRole("button", { name: "add" }));
    expect(screen.getByText("10")).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "4" } });
    fireEvent.click(screen.getByRole("button", { name: "subtract" }));
    expect(screen.getByText("6")).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "3" } });
    fireEvent.click(screen.getByRole("button", { name: "multiply" }));
    expect(screen.getByText("18")).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "2" } });
    fireEvent.click(screen.getByRole("button", { name: "divide" }));
    expect(screen.getByText("9")).toBeInTheDocument();
  });

  test("alerts when dividing by zero and keeps the current result", () => {
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});
    render(<App />);
    const input = screen.getByPlaceholderText("Type a number");

    fireEvent.change(input, { target: { value: "8" } });
    fireEvent.click(screen.getByRole("button", { name: "add" }));

    fireEvent.change(input, { target: { value: "0" } });
    fireEvent.click(screen.getByRole("button", { name: "divide" }));

    expect(alertMock).toHaveBeenCalledWith("Cannot divide by zero");
    expect(screen.getByText("8")).toBeInTheDocument();
    alertMock.mockRestore();
  });

  test("resets the input and result independently", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Type a number");

    fireEvent.change(input, { target: { value: "12" } });
    fireEvent.click(screen.getByRole("button", { name: "add" }));
    fireEvent.click(screen.getByRole("button", { name: "reset input" }));
    expect(input).toHaveValue(null);
    expect(screen.getByText("12")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "reset result" }));
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  test("keeps the initial result at zero", () => {
    render(<App />);
    expect(screen.getByText("0")).toBeInTheDocument();
  });
});

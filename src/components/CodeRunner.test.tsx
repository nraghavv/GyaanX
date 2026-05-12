import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import CodeRunner from "./CodeRunner";
import "@testing-library/jest-dom";

// Mock Editor component because it's hard to test in JSDOM
vi.mock("react-simple-code-editor", () => {
  return {
    default: ({ value, onValueChange }: any) => (
      <textarea
        data-testid="code-editor"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
    ),
  };
});

describe("CodeRunner Component", () => {
  const initialCode = "printf('Hello');";
  const expectedOutput = "Hello";

  beforeEach(() => {
    vi.useFakeTimers();
  });

  it("renders with initial code", () => {
    render(<CodeRunner initialCode={initialCode} />);
    const editor = screen.getByTestId("code-editor");
    expect(editor).toHaveValue(initialCode);
  });

  it("updates code state when edited", () => {
    render(<CodeRunner initialCode={initialCode} />);
    const editor = screen.getByTestId("code-editor");
    fireEvent.change(editor, { target: { value: "new code" } });
    expect(editor).toHaveValue("new code");
  });

  it("handles the run process and updates output", async () => {
    render(<CodeRunner initialCode={initialCode} expectedOutput={expectedOutput} />);
    
    // Initial state
    expect(screen.getByText(/No output yet/i)).toBeInTheDocument();
    
    // Click RUN
    const runButton = screen.getByRole("button", { name: /EXECUTE/i });
    fireEvent.click(runButton);
    
    // Check running status
    expect(screen.getByText(/RUNNING.../i)).toBeInTheDocument();
    expect(screen.getByText(/Compiling source code/i)).toBeInTheDocument();
    
    // Fast-forward 1s
    act(() => {
      vi.advanceTimersByTime(1000);
    });
    
    // Check output
    expect(screen.queryByText(/RUNNING.../i)).not.toBeInTheDocument();
    expect(screen.getByText(expectedOutput)).toBeInTheDocument();
  });

  it("resets code to initial value", () => {
    render(<CodeRunner initialCode={initialCode} />);
    const editor = screen.getByTestId("code-editor");
    
    // Change code
    fireEvent.change(editor, { target: { value: "corrupted code" } });
    expect(editor).toHaveValue("corrupted code");
    
    // Click Reset
    const resetButton = screen.getByTitle(/Reset Code/i);
    fireEvent.click(resetButton);
    
    // Verify reset
    expect(editor).toHaveValue(initialCode);
  });

  it("switches language correctly", () => {
    render(<CodeRunner initialCode={initialCode} />);
    const select = screen.getByRole("combobox");
    
    expect(select).toHaveValue("c");
    
    fireEvent.change(select, { target: { value: "python" } });
    expect(select).toHaveValue("python");
  });
});

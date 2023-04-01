import { render, screen } from "@testing-library/react";
import { test, describe, expect } from "@jest/globals";
import App from "@/App";

describe("App", () => {
  test("App", () => {
    render(<App />);

    expect(screen.getByTestId("app")).not.toBeNull();
  });
});

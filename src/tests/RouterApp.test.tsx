import { screen, render } from "@testing-library/react";
import { describe, test, expect, jest } from "@jest/globals";
import { RouterApp } from "@/Router/RouterApp";

jest.mock("Swiper");

describe("Router", () => {
  test("routes", () => {
    render(<RouterApp />);
  });
});

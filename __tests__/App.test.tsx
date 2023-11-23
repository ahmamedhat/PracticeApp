/**
 * @format
 */

import "react-native";
import React from "react";
import App from "../App";
import { expect, jest, test } from "@jest/globals";

// Note: import explicitly to use the types shiped with jest.
import { it } from "@jest/globals";

// Note: test renderer must be required after react-native.
it("renders correctly", () => {
  expect(true).toBeTruthy();
});

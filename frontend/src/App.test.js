import React from "react"
import { render, waitForElement } from "@testing-library/react"
import App from "./App"

test("renders Home", async () => {
  const { getByText } = render(<App />)

  const homeText = await waitForElement(() => getByText(/Home/))

  expect(homeText).toBeInTheDocument()
})

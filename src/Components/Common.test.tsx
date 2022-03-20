import { render, screen } from "@testing-library/react"
import Common from "./Common"

test("renders app’s title", () => {
  render(<Common />)
  const title = screen.getByText(/Thermomix Recipes/i)
  expect(title).toBeInTheDocument()
})

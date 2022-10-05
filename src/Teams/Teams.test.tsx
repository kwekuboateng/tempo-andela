import { render, cleanup, waitFor } from "@testing-library/react";
import Teams from "./Teams";

afterEach(cleanup);

test("renders the teams component successfully", async () => {
  const { findByTestId } = render(<Teams />);

  waitFor(async () => {
    const componentReady = await findByTestId(
      "7676a4bf-adfe-415c-941b-1739af07039b"
    );
    expect(componentReady).toBeInTheDocument();
  });
});

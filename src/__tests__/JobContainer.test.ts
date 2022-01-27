/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/svelte";
import { _jobs } from "../store";

import JobContainer from "../components/JobContainer.svelte";

test("should contain Remote DevOps Engineer", () => {
  const results = render(JobContainer, { props: { jobs: _jobs } });

  expect(() => results.getByText("Remote DevOps Engineer")).not.toThrow();
});

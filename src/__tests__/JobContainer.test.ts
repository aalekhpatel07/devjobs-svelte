/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/svelte";
import { jobs } from "../stores/job";

import JobContainer from "../components/JobContainer.svelte";

test("should contain Remote DevOps Engineer", () => {
  const results = render(JobContainer, { props: { jobs } });

  expect(() => results.getByText("Remote DevOps Engineer")).not.toThrow();
});

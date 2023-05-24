import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";

it("renders without crashing", function () {
  render(
    <Card
      caption="test"
      src="test"
      currNum={1}
      totalNum={1}
    />
  )
});

it("snapshot tests for stability", function () {
  const { container } = render(
      <Card
        caption={TEST_IMAGES[0].caption}
        src={TEST_IMAGES[0].src}
        currNum={1}
        totalNum={3}
      />
      );
  expect(container).toMatchSnapshot();
})
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

it("renders without crashing", function () {
  render(
    <Carousel
    photos={["test"]}
    title="test"
    />
    )
  });


it("snapshot tests for stability", function () {
    const { container } = render(
        <Carousel
            photos={TEST_IMAGES}
            title="images for testing"
        />
        );
    expect(container).toMatchSnapshot();
})

//TODO: should create separate test instances for going right and left
it("works when you click on the right/left arrow", function() {
  const { container } = render(
    <Carousel
    photos={TEST_IMAGES}
    title="images for testing"
    />
    );
    // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();

  // move back in the carousel
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  fireEvent.click(leftArrow);

  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();
});


it("left arrow is hidden on first image", function() {
  const { container } = render(
    <Carousel
    photos={TEST_IMAGES}
    title="images for testing"
    />
  );

  expect(
    container.querySelector(".leftHidden")).toBeInTheDocument();
});


it("right arrow is hidden on last image", function() {
  const { container } = render(
    <Carousel
    photos={TEST_IMAGES}
    title="images for testing"
    />
  );

  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);

  expect(
    container.querySelector(".rightHidden")).toBeInTheDocument();
});
import profileReducer, { addText } from "./profileReducer";

let state = {
  postsData: [
    { id: 1, text: "True way of Samurai", likes: 5 },
    { id: 2, text: "I finaly understood props", likes: 100 },
  ],
};
test("length of posts should be 3", () => {
  let action = addText("Example text");

  let newState = profileReducer(state, action);

  expect(newState.postsData.length).toBe(3);
});

test("text of new post should be Example text", () => {
  let action = addText("Example text");

  let newState = profileReducer(state, action);

  expect(newState.postsData[2].text).toBe('Example text');
});

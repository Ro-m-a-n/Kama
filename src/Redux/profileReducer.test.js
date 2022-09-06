import {profileReducer, addText } from "./profileReducer";
test("length of posts should be incremented", () => {
 
  // 1. test data

  let state = {
    postsData: [
      { id: 1, text: "True way of Samurai", likes: 5 },
      { id: 2, text: "I finaly understood props", likes: 100 },
    ],
  };
  let newState = profileReducer(state, action);

  // 2. action

  let action = addText("text for test");

  // 3. expectation
  expect(newState.postsData.length).toBe(3);
});

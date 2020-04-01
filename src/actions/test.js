export const test = () => dispatch => {
  dispatch({
    type: "LOGIN",
    payload: {
      test: 'test'
    }
  });
};


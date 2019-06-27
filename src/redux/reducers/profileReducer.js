
const initialState = {
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  memberSince: '',
  gender: 0
}

const profileReducer = (state=initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default profileReducer
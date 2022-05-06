const initState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 2,
        nickname: '민규',
      },
      content: '첫 번째 게시글 #해시테그 #해시2',
      Images: [
        {
          src: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
        },
      ],
      Comments: [
        {
          User: {
            nickname: 'nero',
          },
          content: '대박',
        },
        {
          User: {
            nickname: 'KJ',
          },
          content: '우왕',
        },
      ],
    },
  ],
  imagePath: [],
  postAdded: false,
};

const ADD_POST = 'add_post';

export const addPostAction = () => {
  console.log(1);
  return {
    type: ADD_POST,
  };
};

const dummyPost = {
  id: 2,
  User: {
    id: 2,
    nickname: '민규',
  },
  content: '두번 째 게시글 #해시3 해시4',
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
      break;
    default:
      return state;
      break;
  }
};

export default reducer;

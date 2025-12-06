
export const taskReducer = (state, action) => {

  switch (action.type) {


    case "CREATE_TASK":
      return { ...state, task: action.payload }


    case "CREATE_DESC":
      return { ...state, taskdesc: action.payload }

    case "ADD_TASK":
      return {
        ...state,
        tasklist: [...state.tasklist, { task: state.task, taskdesc: state.taskdesc, createdAt: new Date().toLocaleTimeString() }],
        task: "",
        taskdesc: ""
      }

    case "DELETE_TASK":

      return {
        ...state,
        tasklist: state.tasklist.filter((_, index) => index !== action.payload)

      }

    default:
      return state;
  }
};




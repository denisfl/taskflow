export const ADD_TASK = "ADD_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

let nextTaskID = 0;

export const addTask = text => {
  return {
    type: ADD_TASK,
    id: nextTaskID++,
    text
  };
};

export const setVisibilityFilter = filter => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  };
};

export const toggleTask = id => {
  return {
    type: TOGGLE_TASK,
    id
  };
};

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

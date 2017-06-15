import { connect } from "react-redux";
import { toggleTask } from "../../../actions";
import Tasks from "../List";

const getVisibleTasks = (tasks, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return tasks;
    case "SHOW_COMPLETED":
      return tasks.filter(t => t.completed);
    case "SHOW_ACTIVE":
      return tasks.filter(t => !t.completed);
  }
};

const mapStateToProps = state => {
  return {
    tasks: getVisibleTasks(state.tasks, state.visibilityFilter)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTaskClick: id => {
      dispatch(toggleTask(id));
    }
  };
};

const VisibleTasks = connect(mapStateToProps, mapDispatchToProps)(Tasks);

export default VisibleTasks;

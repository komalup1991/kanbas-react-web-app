import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";


const initialState = {
  assignments: assignments,
  assignment: { title: "Assignment Name", description: "Assignment Description",
  dueDate: "2022-12-12", maxPoints: 100, availableFromDate: "2022-12-12" , availableUntilDate:"2022-12-12", status: "Active",
},
};


const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, action) => {
            const assignment = { ...state.assignment, _id: new Date().getTime().toString(), course: action.payload.courseId};
            console.log("addAssignment action.payload", assignment)
        state.assignments = [
            { ...assignment }
            ,...state.assignments,
        ];
        },
        deleteAssignment: (state, action) => {
        state.assignments = state.assignments.filter(
            (assignment) => assignment._id !== action.payload
        );
        },
        updateAssignment: (state, action) => {
        state.assignments = state.assignments.map((assignment) => {
            console.log("updateAssignment action.payload", assignment)

            if (assignment._id === action.payload._id) {
            return action.payload;
            } else {
            return assignment;
            }
        });
        },
        setAssignment: (state, action) => {
            let payload = action.payload;
            if (JSON.stringify(payload) === '{}') {
                state.assignment = initialState.assignment;
            } else {
                state.assignment = { ...state.assignment, ...action.payload };
            }
            console.log("setAssignment assignment",  state.assignment)

        },
    },
    });
export const {addAssignment,deleteAssignment,updateAssignment,setAssignment} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
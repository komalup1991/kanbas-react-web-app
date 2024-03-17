import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
  assignments: assignments,
  assignment: { title: "New Assignment 123", description: "New Description",
  dueDate: "2022-12-12", maxPoints: 100, availableFromDate: "2022-12-12" , availableUntilDate:"2022-12-12", status: "Active",
},
};


const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, action) => {
        state.assignments = [
            { ...action.payload },
            ...state.assignments,
        ];
        },
        deleteAssignment: (state, action) => {
        state.assignments = state.assignments.filter(
            (assignment) => assignment._id !== action.payload
        );
        },
        updateAssignment: (state, action) => {
        state.assignments = state.assignments.map((assignment) => {
            if (assignment._id === action.payload._id) {
            return action.payload;
            } else {
            return assignment;
            }
        });
        },
        setAssignment: (state, action) => {
            let payload = action.payload;
            if (payload._id === undefined) {
                let assignment = { ...initialState.assignment, course: payload.courseId.courseId, _id: new Date().getTime().toString()};
                state.assignment = assignment;
            } else {
                state.assignment = { ...action.payload };
            }
        },
    },
    });
export const {addAssignment,deleteAssignment,updateAssignment,setAssignment} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actionTypeOneFirstSlice,
  actionTypeTwoFirstSlice,
} from "../../redux/features/firstSlice/firstSlice";
import {
  actionTypeOnesecondSlice,
  actionTypeTwosecondSlice,
} from "../../redux/features/secondSlice/secondSlice";
import { actionTypeOneotherUserProfileSliceOne } from "../../redux/features/otherUserProfilesSlices/otherUserProfileSliceOne";

const TestRedux = () => {
  const dispatch = useDispatch();
  console.log(dispatch);

  const firstValue = useSelector((state) => state.storeSliceOne.value);
  console.log(firstValue);

  const secondValue = useSelector((state) => state.storeSliceTwo.value);
  console.log(secondValue);

  const thirdValue = useSelector((state) => state.storeSliceThree);
  console.log(thirdValue);

  return (
    <div>
      <div>{firstValue}</div>
      <div>{secondValue}</div>
      <div>{thirdValue.value}</div>
      <button onClick={() => dispatch(actionTypeOneFirstSlice("Add Me"))}>
        actionTypeOneFirstSlice
      </button>
      <button onClick={() => dispatch(actionTypeTwoFirstSlice("Add Me"))}>
        actionTypeTwoFirstSlice
      </button>
      <button onClick={() => dispatch(actionTypeOnesecondSlice("Add Me"))}>
        actionTypeOnesecondSlice
      </button>
      <button onClick={() => dispatch(actionTypeTwosecondSlice("Add Me"))}>
        actionTypeTwosecondSlice
      </button>
      <button
        onClick={() =>
          dispatch(actionTypeOneotherUserProfileSliceOne("Add Me"))
        }
      >
        actionTypeOneotherUserProfileSliceOne
      </button>
    </div>
  );
};

export default TestRedux;

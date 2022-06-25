import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {PayloadActionCreator, EmptyActionCreator} from 'typesafe-actions';

export const useDispatchActions = <
  T extends
    | PayloadActionCreator<string, Parameters<T>[0]>
    | EmptyActionCreator<string>,
>(
  actionRequest: T,
): T extends EmptyActionCreator<string>
  ? () => void
  : (payload: Parameters<T>[0]) => void => {
  const dispatch = useDispatch();

  return useCallback(
    // @ts-ignore
    (payload) => {
      dispatch(actionRequest(payload));
    },
    [actionRequest, dispatch],
  );
};

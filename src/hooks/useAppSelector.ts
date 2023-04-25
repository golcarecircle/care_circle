import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';

export const useAppSelector = (selector: (state: RootState) => any) =>
  useSelector(selector);

export const useAppDispatch = () => useDispatch<AppDispatch>();

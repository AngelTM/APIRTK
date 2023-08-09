import { useDispatch,useSelector,TypedUseSelectorHook } from "react-redux/es/exports";
import { AppDispatch,RootState } from "./Store";

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import type { RootState, AppDispatch } from "../redux/store"

// typing some hooks / !!! needs better understanding
type DispatchFn = () => AppDispatch
export const useTypedDispatch : DispatchFn = useDispatch
export const useTypedSelector : TypedUseSelectorHook<RootState> = useSelector
// src/hooks/useTypedSelector.ts
import { useSelector, TypedUseSelectorHook } from 'react-redux';

interface UserState {
  isSignedIn: boolean;
}

interface State {
  user: UserState;
}

// Custom typed useSelector hook
const useTypedSelector: TypedUseSelectorHook<State> = useSelector;

export default useTypedSelector;

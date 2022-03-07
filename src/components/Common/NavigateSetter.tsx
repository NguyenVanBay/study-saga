import { useNavigate } from "react-router-dom";

export type HistoryParams = {
  navigate: Function | undefined;
};

const History: HistoryParams = {
  navigate: undefined,
};

export default function NavigateSetter() {
  History.navigate = useNavigate();

  return null;
}

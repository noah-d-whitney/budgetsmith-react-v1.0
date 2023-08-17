import { useDate } from "../../hooks/useDate";

export function Date() {
  const { date } = useDate(null);

  return <p className="status-bar__date">{date}</p>;
}

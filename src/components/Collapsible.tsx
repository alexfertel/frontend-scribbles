import { useMemo, useReducer } from "react";

interface Item {
  title: string;
  children?: Item[];
}

interface BodyProps {
  expanded: boolean;
  item: Item;
  dispatch: React.Dispatch<Action>;
  color: string;
}

function Body({ color, expanded, item, dispatch }: BodyProps): JSX.Element {
  if (!item.children) return <p style={{ textAlign: "start" }}>{item.title}</p>;

  const handleClick = () => {
    if (expanded) {
      dispatch({ type: "closeExpanded" });
    } else {
      dispatch({ type: "expandClosed", payload: item.title });
    }
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          flex: "1 1 0",
          alignItems: "center",
          justifyContent: "space-between",
          color,
        }}
      >
        <p>{item.title}</p>
        <button onClick={handleClick}>
          {expanded ? "Collapse" : "Expand"}
        </button>
      </div>
      {expanded && <Root items={item.children} />}
    </div>
  );
}

const colors = ["red", "green", "blue", "yellow", "orange", "purple", "pink"];

type AllClosed = null;
type OneExpanded = string;
type State = OneExpanded | AllClosed;

type Action =
  | { type: "expandClosed"; payload: OneExpanded }
  | { type: "closeExpanded" };

function accordionReducer(_state: State, action: Action) {
  switch (action.type) {
    case "expandClosed":
      return action.payload;
    case "closeExpanded":
      return null;
  }
}

interface RootProps {
  items: Item[];
}

function Root({ items }: RootProps) {
  const [titleOfExpanded, dispatch] = useReducer(accordionReducer, null);

  const color = useMemo(
    () => colors[colors.length % Math.abs(Math.round(Math.random() * 10 - 4))],
    []
  );

  return (
    <>
      {items.map((item) => (
        <Body
          key={item.title}
          item={item}
          dispatch={dispatch}
          expanded={titleOfExpanded === item.title}
          color={color}
        />
      ))}
    </>
  );
}

export { Root as Collapsible, Body as CollapsibleBody };

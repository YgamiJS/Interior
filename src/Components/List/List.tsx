interface IProps<T> {
  items: T[];
  className?: string;
  renderList: (element: T) => React.ReactNode;
}

export function List<T>(props: IProps<T>) {
  return (
    <div className={props.className}>{props.items.map(props.renderList)}</div>
  );
}

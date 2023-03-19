interface IProps<T> {
  items: T[];
  [x: string]: any;
  renderList: (element: T) => React.ReactNode;
}

export function List<T>(props: IProps<T>) {
  return <div {...props}>{props.items.map(props.renderList)}</div>;
}

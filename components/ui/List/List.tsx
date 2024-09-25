const List = ({ children, className }: ListProps) => {
  return <ul className={className}>{children}</ul>;
};

export default List;

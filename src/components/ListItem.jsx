function ListItem({ onClick, className, title, children }) {
  return (
    <>
      <li onClick={onClick} className={className}>
        {title}
        {children}
      </li>
    </>
  );
}

export default ListItem;

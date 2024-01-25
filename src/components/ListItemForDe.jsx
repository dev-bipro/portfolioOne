function ListItemForDe({ onClick, className, title, children }) {
    return (
      <>
        <li onClick={onClick} className={className}>
          {children}
          {title}
        </li>
      </>
    );
  }

export default ListItemForDe

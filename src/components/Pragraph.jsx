function Pragraph({ className, title, children }) {
  return (
    <>
      <p className={className}>
        {title}
        {children}
      </p>
    </>
  );
}

export default Pragraph;

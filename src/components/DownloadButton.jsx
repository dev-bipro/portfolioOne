function DownloadButton({ onClick, className, title, children }) {
  return (
    <>
      <button onClick={onClick} className={className}>
        {children}
      </button>
    </>
  );
}
export default DownloadButton;

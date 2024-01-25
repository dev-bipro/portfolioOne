function Button({onClick, className, title, children}) {
    return (
        <>
            <a onClick={onClick} className={className}>{title}{children}</a>
        </>
    )
}

export default Button

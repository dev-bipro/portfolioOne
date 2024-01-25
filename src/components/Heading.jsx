function Heading(props) {
    const {className, title, children} = props ;
    return (
        <>
            <props.tagName className={className}>{title}{children}</props.tagName>
        </>
    )
}

export default Heading

function ImageComp({className, src, alt}) {
    return (
        <>
            <picture>
                <img className={className} src={src} alt={alt} />
            </picture>
        </>
    )
}

export default ImageComp

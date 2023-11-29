function Button(props) {
    const { children, className, onClick, style } = props
    return (
        <button style={style} onClick={onClick} className={className}>{children}</button>
    )
}

export default Button
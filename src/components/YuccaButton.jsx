function YuccaButton({
    children,
    href,
    variant = "primary",
    external = false,
    className = "",
    onClick,
    type = "button",
    ...props
}) {
    const variantClass = {
        primary: "pp-btn-primary",
        blue: "pp-btn-blue",
        outline: "pp-btn-outline",
    }[variant] || "pp-btn-primary";

    const content = (
        <>
            <span className="pp-btn-fill" />
            <span className="pp-btn-text-wrapper">
                <span className="pp-btn-text">{children}</span>
                <span className="pp-btn-text-hover">{children}</span>
            </span>
        </>
    );

    const classes = `pp-btn ${variantClass} ${className}`.trim();

    if (href) {
        return (
            <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className={classes}
                onClick={onClick}
                {...props}
            >
                {content}
            </a>
        );
    }

    return (
        <button type={type} className={classes} onClick={onClick} {...props}>
            {content}
        </button>
    );
}

export default YuccaButton;

const Header = ({logoText}) => {
    return (
        <header className="header">
            <div className="container">
                <a href="" className="logo">
                    {logoText}
                </a>
                <NavItem  />
            </div>
        </header>
    );
}
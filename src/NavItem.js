const NavItem = () => {
    return (
        <nav>
            <ul className="nav-list">
                {Object.values(links).map(({ label, href }) => {
                    return (
                        <li key = {href} className="nav-list__item">
                            <a href = {href}>
                                {label}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
const links = {
    home: {
        label: 'Home',
        href: '/',
    },
    aboutUs: {
        label: 'About Us',
        href: '/#about',
    },
    contactUs: {
        label: 'Contact us',
        href: '/#contact',
    },
    helpPage: {
        label: 'Help page',
        href: '/#help',
    },
};
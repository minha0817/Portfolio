export const NavButton = ({ navTitle, navCallback }) => {
  return (
    <button className="navbar__menu__item" onClick={navCallback}>
      {navTitle}
    </button>
  );
};

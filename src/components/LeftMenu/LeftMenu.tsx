import NavDropdown from 'react-bootstrap/NavDropdown';

/** Компонент с отображением левого меню */
export const LeftMenu = () => {
    return (
        
      <NavDropdown title="Каталог" id="navbarScrollingDropdown">
      <NavDropdown.Item href="/telephone">Телефоны</NavDropdown.Item>
      <NavDropdown.Item href="/TV">Телевизоры</NavDropdown.Item>
      <NavDropdown.Item href="/Computer">Компьютеры и ноутбуки</NavDropdown.Item>
      <NavDropdown.Item href="/appliances">Бытовая техника</NavDropdown.Item>
    </NavDropdown>
    )
};
export default LeftMenu; 

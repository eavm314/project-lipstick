import '../globals.css'
//implementar font awesome icons
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

export default function NavBarLayout({ children }) {
  return (
    <div>
      <div className="navigation-bar">
        <p className="texto-navigation-bar" tabIndex="1">Todos</p>
        <p className="texto-navigation-bar" tabIndex="1">Ojos</p>
        <p className="texto-navigation-bar" tabIndex="1">Cabello</p>
        <p className="texto-navigation-bar" tabIndex="1">Uñas</p>
      </div>
      {children}
    </div>
  )
}

//import { useState } from "react";
import { useSelector } from "react-redux";


function Header() {
  const theme = useSelector(
    (state) => state.app.theme
  );
  const promo = useSelector(
    (state) => state.app.promo
  );
  const user = useSelector(
    (state) => state.user.user
  );

  return (
    <>
      <div
        className={`flex items-center justify-center ${theme.header} text-white h-16 w-full`}
      >
        <p>{promo || "¡Tienda Amigurumis!"}</p>
      </div>
      <div className="flex px-4 md:px-8 lg:px-20 py-4">
        <div className="w-1/2 flex gap-3 items-center justify-end">
          <p>{user && user.nombre ? ` ¡Bienvenido ${user.nombre}!` : "¡Bienvenido!"}</p>
        </div>
      </div>
    </>
  );
}

export default Header;
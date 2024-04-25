import "./settings.css";
// import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Actualiza Tu cuenta</span>
          <span className="settingsTitleDelete">Eliminar Cuenta</span>
        </div>
        <form className="settingsForm">
          <label>Foto de Perfil</label>
          <div className="settingsPP">
            <img
              src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.azcentral.com%2Fstory%2Fnoticias%2F2019%2F02%2F25%2Fgran-canyon-atractivo-turistas%2F2981750002%2F&psig=AOvVaw1xHE8aX07CMhgB0XjAdyD-&ust=1714099143427000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMiD3Yar3IUDFQAAAAAdAAAAABA2"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Número de C.I</label>
          <input type="text" placeholder="" name="name" />
          <label>Apellidos</label>
          <input type="text" placeholder="" name="name" />
          <label>Contraseña</label>
          <input type="password" placeholder="Contraseña" name="password" />
          <button className="settingsSubmitButton" type="submit">
            Actualizar
          </button>
        </form>
      </div>
    </div>
  );
}

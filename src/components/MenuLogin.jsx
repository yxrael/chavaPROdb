import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { startLogout } from "../actions/auth";
import { inicializaListado } from "../actions/listadosActions";

const MenuLogin = () => {

  const { name, uid } = useSelector( state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let isAdmin = false;

    if( uid === 'mHDUnKJe98OtEBYi4siKY43VoEq2' ){
        isAdmin = true;

    } else {
        isAdmin = false;
    };

  const handleClick = () => {
        dispatch(startLogout());
        dispatch( inicializaListado() );
        navigate('/auth/login');
  }

  const handlePedidos = () => {
    navigate('/mispedidos');
  }

  return (
      
    <div className='bg-light'>
        <ul className="nav justify-content-end">

            <li className="nav-item">
                <p className="nav-link disabled alert-link">{name}</p>
            </li>

            {
              !isAdmin
              &&
              <li className="nav-item alert-link">
                <p 
                    className="nav-link auth__logout"
                    onClick={ handlePedidos }>Mis pedidos</p>
              </li>
            }

            <li className="nav-item alert-link">
                <p 
                    className="nav-link auth__logout"
                    onClick={ handleClick }>Salir</p>
            </li>
        </ul>
        
    </div>
  )
}

export default MenuLogin
import axios from 'axios';

async function AddUser (nombUsua,passUsua,nombPers,appaPers,apmaPers,dniPers,telfPers,emailPers,nombRol) {
    try {

        const result = await axios.post('https://incidencias-fiisi.up.railway.app/api/usuario',
                {
                    nombUsua,
                    passUsua,
                    nombPers,
                    appaPers,
                    apmaPers,
                    dniPers,
                    telfPers,
                    emailPers,
                    nombRol,
                }
        )
        
        return {user:result.data};
        
    } catch (error) {

        return {mensaje:error.response.data.mensaje}
        
    }
}
export default AddUser;
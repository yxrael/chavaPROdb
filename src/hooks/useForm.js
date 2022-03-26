import { useState } from "react"

export const useForm = ( initialState = {} ) => {

    const [values, setValues] = useState( initialState );

    const reset = () => {
        setValues( initialState );
    }

    const handleInputChange = ({target}) => {

        setValues({...values, [target.name]: target.value});
    }

    const descafeinadoChange = (desca) => {
        setValues({...values, descafeinado: desca});
    }

    return [ values, handleInputChange, descafeinadoChange ];

}

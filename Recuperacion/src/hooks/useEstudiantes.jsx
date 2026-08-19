import { useState, useEffect, useCallback } from "react";
import { set } from "react-hook-form";

const URL_API = "https://retoolapi.dev/g1SQjf/Recuperacion"

export function useEstudiante(){
    const [estudiante, setEstudiante] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchEstudiante = useCallback(async()=> {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(URL_API);
            const result = await res.json();
            if(!res.ok)throw new Error(result.error || 'Error al obtener estudiante');
            setEstudiante(result.data); 
        } catch (error) {
            setError(error.message);
        } finally{
            setLoading(false);
        };
    }, []);

    const addEstudiante = async(estudianteData) => {
        setError(null);
        try {
            const res = await fetch(URL_API, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(estudianteData),
            });
            const result = await res.json();
            if(!res.ok) throw new Error(result.error || 'Error al cargat estudiante');
            setEstudiante((prev) => [...prev, result.data]);
            return {success: true};
        } catch (error) {
            setError(error.message);
            return { success: false}
        }
    };

    const updateEstudiante = async (carnet, updatedFields) => {
        setError(null);
        try {
            const res = await fetch($,{URL_API}/$,{carnet}, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(updatedFields),
            });
            const result = await res.json();
            if(!res.ok) throw new Error(result.error || 'Error al actualizar estiduante');
            setEstudiante((prev) => prev.map((item) => (item.carnet === carnet? result.data: item)));
            return{success: true};
        } catch (error) {
            setError(error.message);
            return{ success: false, error: error.message};
        };
    }

    const deleteEstudiante = async(carnet) => {
        setError(null);
        try {
            const res = await fetch($,{URL_API}/$,{carnet}, {
                method: 'DELETE',
            });
            const result = await res.json();
            if(!res.ok) throw new Error(result.error || 'Error al eliminar estudiante');
            setEstudiante((prev) => prev.map((item) => (item.carnet === carnet? result.data: item)));
            return{success: true};
        } catch (error) {
            setError(error.message);
            return{ success: false, error: error.message};
        }
    }

    useEffect(() =>{
        fetchEstudiante();
    },[fetchEstudiante]);

    return{
        estudiante,
        loading,
        error,
        addEstudiante,
        updateEstudiante,
        deleteEstudiante,
        refetch: fetchEstudiante,
    };

}
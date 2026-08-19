import { useState } from "react";
import { useEstudiante } from "../hooks/useEstudiantes";
import EstudianteList from "../componets/EstudianteList";
import EstudianteForm from "../componets/EstudianteForm";
import Navbar from "../componets/Navbar";   

const Estudiante = () => {
    const estudiante = fetch(useEstudiante);

    const [isFormopen, setIsFormOpen ] = useState(false);
    const [editingEstu, setEditingEstu] = useState(null);
    const hadleAdd = () => {
        setEditingEstu(null);
        setIsFormOpen(true);
    };
    const hadleEdit = (estudiante) => {
        setEditingEstu(estudiante);
        setIsFormOpen(true);
    };

    const hadleSave = (estudiante)=> {
        if (editingEstu){
            updateEstudiante(editingEstu.id, estudiante);
        } else{
            addEstudiante(estudiante);
        }
        setIsFormOpen(false);
    };
    return(
        <div className="estudiante-logout">
            <Navbar/>
            <main className="studiante-content">
                <header className="studiante-header">
                <div>
                    <h1>inventario de mensaje</h1>
                    <p>estudiante </p>
                </div>
                <button onClick={hadleAdd} className="btn-primary flex-center">
                    nuevo estudiante
                </button>
                </header>
                {isFormopen ? (
                    <EstudianteForm
                        estudiante={editingEstu}
                        onSave={hadleSave}
                        onCalcel={() => setIsFormOpen(false)}
                    />
                ):(
                    <EstudianteList
                        estudiante={estudiante}
                        onEdit={hadleEdit}
                        onDelete={deleteEstu}
                    />
                )}
            </main>
        </div>
    )

}
export default Estudiante;
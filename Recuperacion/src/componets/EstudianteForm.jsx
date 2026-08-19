import { useEffect } from "react";
import { useForm} from 'react-hook-form';


export default function EstudianteForm({ onSubmit, selectdEstudiante, onCalcel}){

    const {register, handleSubmit, reset, formState: {error, isSubmitEstudiante},} = useForm({
        defaultValues: estudinate ||{
            carnet:'',
            nambre: '',
            apellido: '',
            grado: '',
            estado: ''
        }
    });


    useEffect(()=>{
        if(selectdEstudiante){
            reset(selectdEstudiante);
        } else {
            reset({carnet: ",nomnre:", apellido: ",grado:", estado: 'Activo'});
        }
    }, [selectdEstudiante, reset]);

    const handleFormDubmit = async (data) => {
        const success = await onSubmit(data);
        if(success && !selectdEstudiante){
            reset();
        }
    };

    return(
        <form  onSubmit={handleSubmit(handleFormDubmit)} style={{display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: ' 350px'}}>
            <h3>{selectdEstudiante ? 'editar estudiarnte': 'register estudiante'}</h3>
            <div>
                <input placeholder="carnet"{...register('carnet', {required: 'el carnet es obligatorio'})} disabled={!!selectdEstudiante} />
                {error.carnet && <p style={{color: 'red', fontSize: '12px'}}></p>}
            </div>
            <div>
                <input placeholder="nombre"{...register('nombre', {required: 'el carnet es obligatorio'})}/>
                {error.carnet && <p style={{color: 'red', fontSize: '12px'}}></p>}
            </div>
            <div>
                <input placeholder="apellido"{...register('apellido', {required: 'el carnet es obligatorio'})}/>
                {error.carnet && <p style={{color: 'red', fontSize: '12px'}}></p>}
            </div>
            <div>
                <input placeholder="grado"{...register('grado', {required: 'el carnet es obligatorio'})}/>
                {error.carnet && <p style={{color: 'red', fontSize: '12px'}}></p>}
            </div>
            <div>
                <input placeholder="estado
                "{...register('carnet', {required: 'el carnet es obligatorio'})} />
                <option value="Activo">Activo</option>
                <option value="Inactivo">Inativo</option>
                {error.carnet && <p style={{color: 'red', fontSize: '12px'}}></p>}
            </div>
            <div style={{display: 'flex', gap: '8px',}}>
                <button type="submit" disabled={isSubminting}>
                    {selectdEstudiante ? 'Actualizar': 'guardar'}
                </button>
                <button type="button" onClick={onCalcel}>canselar</button>
            </div>
        </form>
    )
}
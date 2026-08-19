import {useState, useMemo} from 'react';

export default function EstudianteList({estudiante, loading, onEdit, onDelete}){
    const [searchTerm, setSearchTerm] = useState('');
    const [filterEstado, setFilterEstado] = useState('todos');

    const filteredEstudiante = useMemo(() => {
        return estudiante.filter((st) => {
            const matchesText = st.carnet.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || st.nambre.toLowerCase().includes(searchTerm.toLocaleLowerCase())
            || st.apellido.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || st.grado.toLowerCase().includes(searchTerm.toLocaleLowerCase());

            const matchesEstado = filterEstado === 'todos' || st.estado === filterEstado;
            return matchesText && matchesEstado;
        });
    }, [estudiante, searchTerm, filterEstado]);

    if(loading) return <p>cargando listado</p>

    return(
        <div style={{display: 'flex', flexDirection: 'colum', gap: '16px'}}>
            <div style={{display: 'flex', gap: '12px'}}>
                <input type="text" placeholder='buscar carnet' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} style={{padding: '8px', width: '250px'}} />
                <select value={filterEstado} name="" id=""></select>
            </div>
        </div>
    )
}
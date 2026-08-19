import { NavLink } from "react-router-dom";

export default function Navbar(){

    const navStyle = {
        display:'flex',
        justifyContent: 'space-between',
        alignItem: 'center',
        padding: '1rem 2rem',
        backgroupColor: '#1e293b',
        color: '#fff',
    }

    const linkStyle = {
        color: isActive ? '#38bdf8': '#ffffff',
        textDecoration: ' none',
        fontWeight: isActive ? '2px solid ': '#38bdf8',
        borderBotton: '4px'
    }
    return (
        <nav style={navStyle}>
            <div style={{fontSize: '1.2rem', fontWeight: 'bold'}}>
                ControlEscolar
            </div>
            <div style={{display: 'felx', gap: '20px'}}>
                <NavLink to={"/"} style={linkStyle}>
                Home</NavLink>
                <NavLink to={"/estudiante"} style={linkStyle}>
                Estudiante</NavLink>
            </div>
        </nav>
    );
}
import '../style.css'

function Header(){
    return(
        <header className="bg-dark text-white text-center py-5">
            <div className="container">
                <img 
                    src="https://i.pinimg.com/originals/2b/aa/12/2baa12e610345d044b4b3a8db776f079.jpg"
                    alt="Foto Perfil"
                    className="foto-perfil mb-3"
                />

                <h1>Juan Pérez</h1>
                <p className="lead">Desarrollador Web Junior</p>
                <p>juan@email.com | +569 123 456 | Santiago, Chile</p>
            </div>
        </header>
    );
}

export default Header;
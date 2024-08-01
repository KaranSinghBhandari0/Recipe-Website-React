import styles from './Navbar.module.css'

const Navbar = ({ value, onChange, onSubmit }) => {

    let HandleLogo = () => {
        window.location.reload();
    }

    return (
        <nav>
            <div className={styles.logo} onClick={HandleLogo}>
                <img src="/images/logo.png" alt="Logo" />
            </div>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search a Dish"
                    value={value}
                    onChange={onChange}
                    required
                />
                <button type="submit" className="btn btn-primary">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>
        </nav>
    );
}

export default Navbar
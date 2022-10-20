export const MainLayout = ({ children }) => {
    return (
        <div
            className="container d-flex align-items-center justify-content-center position-absolute start-0 end-0 bg-light"
            style={ { height: '100vh', zIndex: '-1' } }
        >
            { children }
        </div>
    )
}
export const Item = ({ item }) => {

    const { nombre, imagen, precio } = item

    return (
        <div className="col">
            <div className="card">
                <img src={ imagen }
                    className="card-img-top"
                    alt={ imagen } />
                <div className="card-body">
                    <h5 className="card-title initialism link-secondary" >{ nombre }</h5>
                    <p className="card-text">${ precio }</p>
                </div>
            </div>
        </div>
    )
}
export const Item = () => {

    const sizes = ['XS', 'S', 'M', 'L', 'XL']

    return (
        <div className="container text-center">
            { sizes.map(size => <button
                key={ size }
                className='col-1 mx-2 px-2 btn btn-secondary'
            >{ size }</button>) }
        </div>
    )
}
import { useCustom } from "../../hooks"

export const Custom = () => {

    const { valor, suma, resta, multiplicacion } = useCustom()
    const { valor: otroValor, sumaIndefinida } = useCustom(100)

    return (
        <div className="my-3">
            <h2>Custom Hook:</h2>
            <div>
                <div className="fw-bold form-control my-2">{ valor }</div>
                <button className="btn btn-secondary mx-2" onClick={ suma }>+1</button>
                <button className="btn btn-secondary mx-2" onClick={ resta }>-1</button>
                <button className="btn btn-secondary mx-2" onClick={ () => multiplicacion(2) }>*2</button>
            </div>

            <div>
                <div className="fw-bold form-control my-2">{ otroValor }</div>
                <button className="btn btn-secondary mx-2" onClick={ () => sumaIndefinida() }>+2</button>
                <button className="btn btn-secondary mx-2" onClick={ () => sumaIndefinida(20) }>+20</button>
            </div>

        </div>
    )
}
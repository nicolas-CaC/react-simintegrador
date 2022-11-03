import { Route, Routes } from "react-router-dom"
import { ItemDetailContainer } from "../Home/ItemDetail"
import { ItemListContainer } from "../Home/ItemList"
import { Contacto } from "../Contacto"
import { Perfil } from "../Perfil"
import { Cart } from "../Cart"
import { LoginLayout } from "../layouts"
import { Admin } from './../Admin/Admin'

export const Router = () => {

    return (
        <LoginLayout>
            <Routes>
                <Route path='/' element={ <ItemListContainer /> } />
                <Route path='/perfil' element={ <Perfil /> } />
                <Route path='/carrito' element={ <Cart /> } />
                <Route path='/contacto' element={ <Contacto /> } />
                <Route path='/item/:id' element={ <ItemDetailContainer /> } />
                <Route path='/inicio' element={ <ItemListContainer /> } />
                <Route path='/home' element={ <ItemListContainer /> } />
                <Route path='/admin' element={ <Admin /> } />
                <Route path='*' element={ <ItemListContainer /> } />
            </Routes>
        </LoginLayout>
    )
}
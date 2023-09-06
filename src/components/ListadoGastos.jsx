import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({ gastos, setGastoEditar, borrarGasto }) => {
    return (
        <div className='listado-gastos contenedor'>
            <h2>{gastos.lenght ? 'Gastos' : 'No Hay Gastos aún'}</h2>
            {gastos.map(gasto => (
                <Gasto
                    key={gasto.id}
                    gasto={gasto}
                    setGastoEditar={setGastoEditar}
                    borrarGasto={borrarGasto}
                />
            ))}
        </div>
    )
}

export default ListadoGastos
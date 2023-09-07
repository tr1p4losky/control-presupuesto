import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({ gastos, setGastoEditar, borrarGasto, filtro, gastosFiltrados }) => {
    return (
        <div className='listado-gastos contenedor'>
            {
                filtro ? (
                    <>
                        <h2>{gastosFiltrados.length ? 'Gastos' : 'No hay Gastos en esta categoría'}</h2>
                        {gastosFiltrados.map(gasto => (
                            <Gasto
                                key={gasto.id}
                                gasto={gasto}
                                setGastoEditar={setGastoEditar}
                                borrarGasto={borrarGasto}
                            />
                        ))}

                    </>

                ) : (
                    <>
                        <h2>{gastos.length ? 'Gastos' : 'No hay Gastos aún'}</h2>
                        {gastos.map(gasto => (
                            <Gasto
                                key={gasto.id}
                                gasto={gasto}
                                setGastoEditar={setGastoEditar}
                                borrarGasto={borrarGasto}
                            />
                        ))}
                    </>
                )
            }
        </div>
    )
}

export default ListadoGastos
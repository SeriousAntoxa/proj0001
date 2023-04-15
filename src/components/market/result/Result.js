import { useState, useEffect } from "react"
import Table from "react-bootstrap/Table"
import { connect } from "react-redux"
import { getBasket } from "./../../../redux/basket-reducer"

function Result(props) {

    let [result, setResult] = useState(props.result)

    useEffect(()=>{
        setResult(props.result)
    },[props.result])


    let addResultInBasket = ({square, area, list, pipe, fix, allSum}) => {

        props.getBasket({square, area, list, pipe, fix, allSum})
    }

        return (
            <div>
                <h2>Результат</h2>
                <div>
                    <p>общая площадь: {`${result.square} м2`}</p>
                </div>
                <div>
                    <p>размер ячейки: {result.area}</p>
                </div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Наименование</th>
                            <th>Ед.</th>
                            <th>Кол-во</th>
                            <th>Сумма</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{result.list.name}</td>
                            <td>{result.list.unit}</td>
                            <td>{result.list.count}</td>
                            <td>{result.list.sum}</td>
                        </tr>
                        <tr>
                            <td>{result.pipe.name}</td>
                            <td>{result.pipe.unit}</td>
                            <td>{result.pipe.count}</td>
                            <td>{result.pipe.sum}</td>
                        </tr>
                        <tr>
                            <td>{result.fix.name}</td>
                            <td>{result.fix.unit}</td>
                            <td>{result.fix.count}</td>
                            <td>{result.fix.sum}</td>
                        </tr>
                    </tbody>
                </Table>
                <div>
                    <p>Итого: {result.allSum}</p>
                </div>
                <button onClick={()=>addResultInBasket(result)}>Добавить в корзину</button>
            </div>
        )
}

let MapStateToProps = (state) => ({
    result: state.result,
})

let MarketRedux = connect(MapStateToProps, {
    getBasket,
})(Result)

export default MarketRedux
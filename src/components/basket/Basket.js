import { useEffect, useState } from "react"
import { clearBasket } from "./../../redux/basket-reducer"
import { connect } from "react-redux"
import { Button, Table } from "react-bootstrap"

function Basket(props) {
    let [basketSum, setBasketSum] = useState(0)
    let [tBodyItems, setTBodyItems] = useState([])

    useEffect(() => {
        setTBodyItems(
            props.basket.map((i, ind) => {
                setBasketSum(basketSum + i.allSum)
                return (
                    <tr>
                        <td>{ind + 1}</td>
                        <td>{i.list.name}</td>
                        <td>{i.pipe.name}</td>
                        <td>{i.fix.name}</td>
                        <td>{i.allSum}</td>
                    </tr>
                )
            })
        )
    }, [props.basket])

    return (
        <div>
            <h2>Корзина</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Номер</th>
                        <th colSpan="3">Наименование</th>
                        <th>Сумма</th>
                    </tr>
                </thead>
                <tbody>{tBodyItems}</tbody>
                <tfoot>
                    <tr>
                        <td colSpan="4">Итого</td>
                        <td>{basketSum}</td>
                    </tr>
                </tfoot>
            </Table>
            <Button variant="danger" onClick={() => props.clearBasket()}>
                Очистить корзину
            </Button>
        </div>
    )
}

let MapStateToProps = (state) => ({
    basket: state.basket.basket,
})

let BasketRedux = connect(MapStateToProps, { clearBasket })(Basket)

export default BasketRedux

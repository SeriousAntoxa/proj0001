import { useEffect, useState } from "react"
import { connect } from "react-redux"
import FormRedux from "./form/Form"
import Result from "./result/Result"
import {
    getDataItems,
    getConfigItems,
    getItems,
} from "./../../redux/items-reducer"
import { getResult } from "./../../redux/result-reducer"
import { getBasket } from "./../../redux/basket-reducer"
import calculation from "./calculation"

function Market(props) {
    let findItem = (obj, name) => {
        return obj.find((i) => i.name === name)
    }

    let onSubmit = (form) => {
        let listData = findItem(props.lists, form.selectList)
        let pipeData = findItem(props.pipes, form.selectPipe)
        let frameData = findItem(props.frame, form.selectFrame)

        let result = calculation(
            form,
            listData,
            pipeData,
            frameData,
            props.fixInfo,
            props.fixConfig
        )

        props.getResult(result)
    }

    return (
        <div>
            <FormRedux
                onSubmit={onSubmit}
                lists={props.lists}
                pipes={props.pipes}
                materials={props.materials}
                frame={props.frame}
                size={props.size}
                isItems={props.isItems}
            />
            <Result />
        </div>
    )
}

let MapStateToProps = (state) => ({
    lists: state.items.lists,
    pipes: state.items.pipes,
    fixInfo: state.items.fixInfo,
    materials: state.items.materials,
    frame: state.items.frame,
    fixConfig: state.items.fixConfig,
    size: state.items.size,
    isItems: state.items.isItems,
    result: state.result,
})

let MarketRedux = connect(MapStateToProps, {
    getDataItems,
    getConfigItems,
    getResult,
    getItems,
    getBasket,
})(Market)

export default MarketRedux

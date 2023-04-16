import "./App.css"
import { getData, getConfig } from "./redux/data-reducer"
import { getItems } from "./redux/items-reducer"
import { connect } from "react-redux"
import Market from "./components/market/Market"
import { useEffect, useState } from "react"
import Basket from "./components/basket/Basket"

function App(props) {

    let [isData, setIsData] = useState(props.isData)
    let [isConfig, setIsConfig] = useState(props.isConfig)

    useEffect(() => {
        props.getData()
        props.getConfig()
        props.getItems(props.data, props.config)
    }, [props.data, props.config])
    
    useEffect(() => {
        setIsData(props.isData)
        setIsConfig(props.isConfig)
    }, [props.isData, props.isConfig])

    if (isData && isConfig) {
        return (
            <div className="App">
                <Market
                    data={props.data}
                    config={props.config}
                />
                <Basket /> 
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    data: state.data.data,
    config: state.data.config,
    isData: state.data.isData,
    isConfig: state.data.isConfig,
})

export default connect(mapStateToProps, { getData, getConfig, getItems })(App)

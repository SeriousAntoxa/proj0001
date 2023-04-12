import "./App.css"
import { getData, getConfig } from "./redux/data-reducer"
import { connect } from "react-redux"
import Market from "./components/market/Market"

function App(props) {
    props.getData()
    props.getConfig()

    if (!!props.data) return (
        <div className="App">
            <Market data={props.data} config={props.config} />
        </div>
    )
}

let mapStateToProps = (state) => ({
    data: state.data.data,
    config: state.data.config,
})

export default connect(mapStateToProps, { getData, getConfig })(App)

import { useEffect, useState } from "react"
import { Field, reduxForm } from "redux-form"

import {
    requiredField,
    maxLengthCreator,
    minLengthCreator,
} from "./../../../utils/validators/validators"

function Form(props) {
    let [listMaterial, setListMaterial] = useState(props.materials[0].key)

    let [selectsListMaterial, setSelectsListMaterial] = useState([])
    let [optionsList, setOptionsList] = useState([])
    let [optionsPipe, setOptionsPipe] = useState([])
    let [optionsFrame, setOptionsFrame] = useState([])

    /*
    let [lengthSize, setlengthSize] = useState(null)
    let [widthSize, setwidthSize] = useState(null)
    let [maxLength, setMaxLength] = useState(undefined)
    let [minLength, setMinLength] = useState(undefined)
    let [maxWidth, setMaxWidth] = useState(undefined)
    let [minWidth, setMinWidth] = useState(undefined)

    useEffect(() => {
        setMaxLength(
            maxLengthCreator(props.size.find((i) => i.key === "length").max)
        )
        setMinLength(
            minLengthCreator(props.size.find((i) => i.key === "length").min)
        )
        setMaxWidth(
            maxLengthCreator(props.size.find((i) => i.key === "width").max)
        )
        setMinWidth(
            minLengthCreator(props.size.find((i) => i.key === "width").min)
        )
    }, [maxLength, minLength, maxWidth, minWidth])
*/

    useEffect(() => {
        setSelectsListMaterial(
            props.materials.map((i) => {
                return (
                    <label>
                        <Field
                            name="material"
                            component="input"
                            type="radio"
                            value={i.key}
                            checked={listMaterial === i.key}
                            onClick={() => setListMaterial(i.key)}
                        />
                        {i.name}
                    </label>
                )
            })
        )
    }, [props.materials, listMaterial])

    useEffect(() => {
        setOptionsList(
            props.lists
                .filter((i) => i.material === listMaterial)
                .map((j) => {
                    return <option key={j.name} value={j.name}>{j.name}</option>
                })
        )
    }, [props.lists, listMaterial])

    useEffect(() => {
        setOptionsPipe(
            props.pipes.map((j) => {
                return <option key={j.name} value={j.name}>{j.name}</option>
            })
        )
    }, [props.pipes])

    useEffect(() => {
        setOptionsFrame(
            props.frame.map((j) => {
                return <option key={j.name} value={j.name}>{j.name}</option>
            })
        )
    }, [props.frame])

    return (
        <div>
            <h2>Введите данные</h2>

            <form onSubmit={props.handleSubmit}>
                <div>
                    <label>Ширина</label>
                    <div>
                        <Field
                            name="width"
                            component="input"
                            type="text"
                            placeholder="width"
                            //validate={[maxWidth, minWidth, requiredField]}
                        />
                    </div>
                </div>
                <div>
                    <label>Длина</label>
                    <div>
                        <Field
                            name="height"
                            component="input"
                            type="text"
                            placeholder="height"
                            //validate={[maxLength, minLength, requiredField]}
                        />
                    </div>
                </div>
                <div>
                    <label>Материал листа</label>
                    <div>
                        {selectsListMaterial}
                        <div>
                            <Field name="selectList" component="select">
                                <option key={0}></option>
                                {optionsList}
                            </Field>
                        </div>
                    </div>
                </div>
                <div>
                    <label>Труба</label>
                    <div>
                        <Field name="selectPipe" component="select">
                            <option key={0}></option>
                            {optionsPipe}
                        </Field>
                    </div>
                </div>
                <div>
                    <label>Выбор прочности</label>
                    <div>
                        <Field name="selectFrame" component="select">
                            <option key={0}></option>
                            {optionsFrame}
                        </Field>
                    </div>
                </div>
                <div>
                    <button type="submit">Расчет</button>
                </div>
            </form>
        </div>
    )
}

let FormRedux = reduxForm({
    form: "market",
})(Form)

export default FormRedux

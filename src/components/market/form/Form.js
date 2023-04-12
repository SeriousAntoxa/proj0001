import { useState } from "react"
import { Field, reduxForm } from "redux-form"

function Form(props) {
    let [listMaterial, setListMaterial] = useState(props.materials[0].key)

    let selectsListMaterial = props.materials.map((i) => {
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

    let optionsList = props.lists
        .filter((i) => i.material === listMaterial)
        .map((j) => {
            return <option value={j.name}>{j.name}</option>
        })

    let optionsPipe = props.pipes.map((j) => {
        return <option value={j.name}>{j.name}</option>
    })

    let optionsFrame = props.frame.map((j) => {
        return <option value={j.name}>{j.name}</option>
    })

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <label>Ширина</label>
                <div>
                    <Field
                        name="width"
                        component="input"
                        type="text"
                        placeholder="width"
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
                    />
                </div>
            </div>
            <div>
                <label>Материал листа</label>
                <div>
                    {selectsListMaterial}
                    <div>
                        <Field name="selectList" component="select">
                            {optionsList}
                        </Field>
                    </div>
                </div>
            </div>
            <div>
                <label>Труба</label>
                <div>
                    <Field name="selectPipe" component="select">
                        {optionsPipe}
                    </Field>
                </div>
            </div>
            <div>
                <label>Выбор прочности</label>
                <div>
                    <Field name="selectFrame" component="select">
                        {optionsFrame}
                    </Field>
                </div>
            </div>
            <div>
                <button type="submit">Расчет</button>
                <button type="button">Очистить форму</button>
            </div>
        </form>
    )
}

let FormRedux = reduxForm({
    form: "market",
})(Form)

export default FormRedux

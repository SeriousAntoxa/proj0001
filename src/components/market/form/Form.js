import { useState } from "react"
import { Field, reduxForm } from "redux-form"

function Form(props) {
    let [listMaterial, setListMaterial] = useState('')
    let selects = props.listMaterials.map((i) => {
        return (
            <label>
                <Field
                    name="material"
                    component="input"
                    type="radio"
                    value={i}
                    onClick={() => setListMaterial(i)}
                />
                {i}
            </label>
        )
    })
    let options = props.lists
    .filter((i) => i.material === listMaterial)
    .map((j) => {
        return <option value={j.name}>{j.name}</option>
    })

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <label>Ширина</label>
                <div>
                    <Field
                        name="wight"
                        component="input"
                        type="text"
                        placeholder="wight"
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
                {selects}
                    <div>
                        <Field name="selectMaterial" component="select">
                            {options}
                        </Field>
                    </div>
                </div>
            </div>
            <div>
                <label>Выбор прочности</label>
                <div>
                    <Field name="selectProperty" component="select">
                        <option></option>
                        <option value="lite">легкая</option>
                        <option value="standart">стандартная</option>
                        <option value="strong">усиленная</option>
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

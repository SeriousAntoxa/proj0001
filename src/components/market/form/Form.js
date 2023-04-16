import { Button, Form } from "react-bootstrap"
import { useEffect, useState } from "react"
import { Field, reduxForm } from "redux-form"

function FormData(props) {
    // валидация формы
    let [selectListEnable, setSelectListEnable] = useState(false)
    let [selectPipeEnable, setSelectPipeEnable] = useState(false)
    let [selectFrameEnable, setSelectFrameEnable] = useState(false)
    let [widthDirty, setWidthDirty] = useState(false)
    let [heightDirty, setHeightDirty] = useState(false)
    let [widthError, setWidthError] = useState("")
    let [heightError, setHeightError] = useState("")

    let maxLengthSize = props.size.find((i) => i.key === "length").max
    let minLengthSize = props.size.find((i) => i.key === "length").min
    let maxWidthSize = props.size.find((i) => i.key === "width").max
    let minWidthSize = props.size.find((i) => i.key === "width").min

    let blurHandler = (e) => {
        switch (e.target.name) {
            case "width":
                setWidthDirty(true)
                if (e.target.value === "") {
                    setWidthError("Поле не может быть пустым")
                    break
                }
                if (isNaN(Number(e.target.value))) {
                    setWidthError("Некорректные данные")
                    break
                }
                if (Number(e.target.value) > maxWidthSize) {
                    setWidthError(`Максимальное значение ${maxWidthSize}`)
                    break
                }
                if (Number(e.target.value) < minWidthSize) {
                    setWidthError(`Минимальное значение ${minWidthSize}`)
                    break
                }
                setWidthError("")
                break
            case "height":
                setHeightDirty(true)
                if (e.target.value === "") {
                    setHeightError("Поле не может быть пустым")
                    break
                }
                if (isNaN(Number(e.target.value))) {
                    setHeightError("Некорректные данные")
                    break
                }
                if (Number(e.target.value) > maxLengthSize) {
                    setHeightError(`Максимальное значение ${maxLengthSize}`)
                    break
                }
                if (Number(e.target.value) < minLengthSize) {
                    setHeightError(`Минимальное значение ${minLengthSize}`)
                    break
                }
                setHeightError("")
                break
            default:
                break
        }
    }

    let buttonDisable =
        !widthDirty ||
        widthError ||
        !heightDirty ||
        heightError ||
        !selectListEnable ||
        !selectPipeEnable ||
        !selectFrameEnable

    // заполнения формы значениями
    let [listMaterial, setListMaterial] = useState(props.materials[0].key)

    let [selectsListMaterial, setSelectsListMaterial] = useState([])
    let [optionsList, setOptionsList] = useState([])
    let [optionsPipe, setOptionsPipe] = useState([])
    let [optionsFrame, setOptionsFrame] = useState([])

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
                    return (
                        <option key={j.name} value={j.name}>
                            {j.name}
                        </option>
                    )
                })
        )
    }, [props.lists, listMaterial])

    useEffect(() => {
        setOptionsPipe(
            props.pipes.map((j) => {
                return (
                    <option key={j.name} value={j.name}>
                        {j.name}
                    </option>
                )
            })
        )
    }, [props.pipes])

    useEffect(() => {
        setOptionsFrame(
            props.frame.map((j) => {
                return (
                    <option key={j.name} value={j.name}>
                        {j.name}
                    </option>
                )
            })
        )
    }, [props.frame])

    return (
        <div>
            <h2>Введите данные</h2>

            <Form onSubmit={props.handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Ширина</Form.Label>
                    {widthDirty && widthError && (
                        <div>
                            <Form.Text style={{ color: "red" }}>
                                {widthError}
                            </Form.Text>
                        </div>
                    )}
                    <div>
                        <Field
                            name="width"
                            component="input"
                            type="text"
                            placeholder="Введите ширину"
                            onBlur={(e) => blurHandler(e)}
                        />
                    </div>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Длина</Form.Label>
                    {heightDirty && heightError && (
                        <div>
                            <Form.Text style={{ color: "red" }}>
                                {heightError}
                            </Form.Text>
                        </div>
                    )}
                    <div>
                        <Field
                            name="height"
                            component="input"
                            type="text"
                            placeholder="Введите длину"
                            onBlur={(e) => blurHandler(e)}
                        />
                    </div>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Материал листа</Form.Label>
                    <div>{selectsListMaterial}</div>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Листы</Form.Label>
                    {!selectListEnable && (
                        <div>
                            <Form.Text style={{ color: "red" }}>
                                Выберите значение
                            </Form.Text>
                        </div>
                    )}
                    <div>
                        <Field
                            name="selectList"
                            component="select"
                            onChange={() => setSelectListEnable(true)}
                        >
                            <option key={0} disabled></option>
                            {optionsList}
                        </Field>
                    </div>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Трубы</Form.Label>
                    {!selectPipeEnable && (
                        <div>
                            <Form.Text style={{ color: "red" }}>
                                Выберите значение
                            </Form.Text>
                        </div>
                    )}
                    <div>
                        <Field
                            name="selectPipe"
                            component="select"
                            onChange={() => setSelectPipeEnable(true)}
                        >
                            <option key={0} disabled></option>
                            {optionsPipe}
                        </Field>
                    </div>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Выбор прочности</Form.Label>
                    {!selectFrameEnable && (
                        <div>
                            <Form.Text style={{ color: "red" }}>
                                Выберите значение
                            </Form.Text>
                        </div>
                    )}
                    <div>
                        <Field
                            name="selectFrame"
                            component="select"
                            onChange={() => setSelectFrameEnable(true)}
                        >
                            <option key={0} disabled></option>
                            {optionsFrame}
                        </Field>
                    </div>
                </Form.Group>
                <Button
                    variant="primary"
                    type="submit"
                    disabled={buttonDisable}
                >
                    Расчет
                </Button>
            </Form>
        </div>
    )
}

let FormRedux = reduxForm({
    form: "market",
})(FormData)

export default FormRedux

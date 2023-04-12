import FormRedux from "./form/Form"

function Market(props) {
    let filterItems = (obj, type) => {
        return obj.filter((i) => i.type === type)
    }
    let findItem = (obj, name) => {
        return obj.find((i) => i.name === name)
    }

    let lists = filterItems(props.data, "list")
    let pipes = filterItems(props.data, "pipe")

    let materials = filterItems(props.config, "material")
    let frame = filterItems(props.config, "frame")
    let fix = filterItems(props.config, "fix")

    let onSubmit = (form) => {
        let listData = findItem(lists, form.selectList)
        let pipeData = findItem(pipes, form.selectPipe)
        let frameData = findItem(frame, form.selectFrame)
        let fixData = fix.find(i=> i.key === listData.material)

        let needSquare = form.width * form.height

        let countList = Math.ceil(needSquare / listData.width)

        let widthPipe = Math.floor((pipeData.width / 1000) * 100) / 100

        let stepCounter = (insideSide, step, widthPipe, side) => {
            let countStep = 0
            for (let i = 0; i < side; ) {
                if (insideSide > step) {
                    insideSide =
                        Math.floor((insideSide - step - widthPipe) * 100) / 100
                    countStep++
                    i += step + widthPipe
                } else break
            }
            return countStep
        }

        let insideWidth = form.width - widthPipe * 2
        let countStepWidth =
            stepCounter(insideWidth, frameData.step, widthPipe, form.width) + 2

        let insideHeight = form.height - widthPipe * 2
        let countStepHeight =
            stepCounter(insideHeight, frameData.step, widthPipe, form.height) +
            2

        let areaWidth =
            Math.floor((insideWidth / (countStepWidth - 1)) * 100) / 100
        let areaHeight =
            Math.floor((insideHeight / (countStepHeight - 1)) * 100) / 100

        let area = `${areaWidth} x ${areaHeight}`

        let countPipe =
            countStepWidth * areaWidth * (countStepHeight + 1) * areaHeight +
            (countStepWidth + 1) * areaWidth * countStepHeight * areaHeight

        countPipe = Math.floor(Math.ceil(countPipe * 100)) / 100

        let fixCount = fixData.value * needSquare

        let sumPipe = countPipe * pipeData.price
        let sumList = countList * listData.price
        let sumFix = fixCount * (fixData.price || 1)


        console.log("config", props.config) //файл конфигурации
        console.log("form", form) //данные из формы
        console.log("listData", listData) //данные выбранного листа
        console.log("pipeData", pipeData) //данные выбранной трубы
        console.log("needSquare", needSquare)  //общая площадь настила
        console.log("countList", countList) //необходимое количество листов
        console.log("countPipe", countPipe) //необходимое количесво трубы
        console.log("fixCount", fixCount) //необходимое количество саморезов 

        console.log("frameData", frameData) //данные выбранного стиля каркаса
        console.log("countStepWidth", countStepWidth) //количество труб по ширине  
        console.log("countStepHeight", countStepHeight) //количество труб по длинне
        console.log("areaWidth", areaWidth) //область ячейки по ширине
        console.log("areaHeight", areaHeight) //область ячейки по длинне
        console.log("area", area) //общая область ячейки
        console.log("sumPipe", sumPipe) //Сумма за трубы
        console.log("sumList", sumList) //Сумма за листы
        console.log("sumFix", sumFix) //Сумма за саморезы
    }

    return (
        <div className="">
            <h1>Введите данные</h1>
            <FormRedux
                onSubmit={onSubmit}
                frame={frame}
                lists={lists}
                pipes={pipes}
                materials={materials}
            />
        </div>
    )
}

export default Market

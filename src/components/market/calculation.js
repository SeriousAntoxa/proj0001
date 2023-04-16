export let mathFloor = (value) => {
    return Math.floor(value * 100) / 100
}

//Функция для определения количества внутренних труб по стороне
let stepCounter = (insideSide, step, widthPipe, side) => {
    let countStep = 0
    for (let i = 0; i < side; ) {
        if (insideSide > step) {
            insideSide = mathFloor(insideSide - step - widthPipe)
            countStep++
            i += step + widthPipe
        } else break
    }
    return countStep
}

let calculation = (form, listData, pipeData, frameData, fixInfo, fixConfig) => {
    // Общая площадь
    let square = form.width * form.height

    //Количество листов
    let countList = Math.ceil(square / listData.width)

    //Ширина трубы в метрах
    let widthPipe = mathFloor(pipeData.width / 1000)

    //Внутренняя ширина для расчета к-ва внутренних труб
    let insideWidth = form.width - widthPipe * 2

    //Количества труб по ширине
    let countStepWidth =
        stepCounter(insideWidth, frameData.step, widthPipe, form.width) + 2

    //Внутренняя длина для расчета к-ва внутренних труб
    let insideHeight = form.height - widthPipe * 2

    //Количества труб по длине
    let countStepHeight =
        stepCounter(insideHeight, frameData.step, widthPipe, form.height) + 2

    //Ширина ячейки между труб
    let areaWidth = mathFloor(insideWidth / (countStepWidth - 1))

    //Высота ячейки между труб
    let areaHeight = mathFloor(insideHeight / (countStepHeight - 1))

    //Общая область ячейки
    let area = `${areaWidth}м * ${areaHeight}м`

    //Общее к-во труб
    let countPipe =
        countStepWidth * areaWidth * (countStepHeight + 1) * areaHeight +
        (countStepWidth + 1) * areaWidth * countStepHeight * areaHeight

    //Общее к-во труб в мп
    countPipe = Math.floor(Math.ceil(countPipe * 100)) / 100

    //Определение необходимых саморезов исходя из материала
    let fixData = fixConfig.find((i) => i.key === listData.material)

    //Подсчет к-ва саморезов исходя из типа листа и площади
    let fixCount = fixData.value * square

    //Выбор объекта с инфомацией по саморезам
    let fixMainInformation = fixInfo.find((i) => i.type === fixData.type)
    
    //Подсчет сумм по каждому пункту + общаяя
    let sumPipe = mathFloor(countPipe * pipeData.price)
    let sumList = mathFloor(countList * listData.price)
    let sumFix = mathFloor(fixCount * fixMainInformation.price)
    let allSum = mathFloor(sumPipe + sumList + sumFix)

    //Формирование объектов для выдачи в результатах
    let listResult = {
        name: listData.name,
        count: countList,
        sum: sumList,
        unit: listData.unit,
    }

    let pipeResult = {
        name: pipeData.name,
        count: countPipe,
        sum: sumPipe,
        unit: pipeData.unit,
    }

    let fixResult = {
        name: fixMainInformation.name,
        count: fixCount,
        sum: sumFix,
        unit: fixMainInformation.unit,
    }

    return { square, area, listResult, pipeResult, fixResult, allSum }
    /*
    console.log("form", form) //данные из формы
    console.log("listData", listData) //данные выбранного листа
    console.log("pipeData", pipeData) //данные выбранной трубы
    console.log("needSquare", needSquare) //общая площадь настила
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
    console.log("sumFix", sumFix) //Сумма за саморезы*/
}

export default calculation

import FormRedux from "./form/Form";

function Market(props) {

        let lists = props.data.filter((i) => i.type === "list")
        let pipe = props.data.filter((i) => i.type === "pipe")

        function material(arr) {
            arr = arr.map(i=>i.material)
            return Array.from(new Set(arr));
          }
          
        let listMaterials = material(lists)

        let onSubmit = (form) => {
            console.log(form)
        }

    return (
        <div className="">
            <h1>Введите данные</h1>
            <FormRedux onSubmit={onSubmit} lists={lists} pipe={pipe} listMaterials={listMaterials}/>
        </div>
    )
}

export default Market

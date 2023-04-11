function Market(props) {
    let items = props.data.map((i)=>{
        return Object.keys(i)
    })
  return (
    <div className="">
        <h1>Введите данные</h1>
    {items}
    </div>
  );
}

export default Market;
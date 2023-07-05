import hambur from "./images/hambur-nueva.jpg";


const Nueva = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col text-center">
                    <img src={hambur} alt={"hamburguesa"} className="img-fluid" width={700} />
                    <h2 className="my-2">NUEVA ESTRENO</h2>
                    <a href="/" className="btn btn-dark"><b>COMPRAR</b></a>
                </div>
            </div>
        </div>
    )
}

export default Nueva;
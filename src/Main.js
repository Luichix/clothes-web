import Note from './components/Note'

const notes = [
    {
      id: 1,
      content: 'HTML is easy',
      date: '2019-05-30T17:30:31.098Z',
      important: true,
    },
    {
      id: 2,
      content: 'Browser can execute only JavaScript',
      date: '2019-05-30T18:39:34.091Z',
      important: false,
    },
    {
      id: 3,
      content: 'GET and POST are the most important methods of HTTP protocol',
      date: '2019-05-30T19:20:14.298Z',
      important: true,
    },
  ]
  
const Item = (props) => {
    return(
        (
            <div className="item-gallery">
                <div className="photo-gallery">
                    <img className="img-photo" alt ="" src={props.urlImg}></img>
                </div>
                <div className="info-photo">
                    <h4>{props.item}</h4>
                    <p><b>Precio: {props.precio}</b></p>
                </div>
            </div> 
        )
    )
}

function Main () {
    const item = "CAMISA CASUAL CHANEL"
    const precio = "$10"
    const urlImg = "https://www.selectfashion.co.uk/media/catalog/product/s/0/s055_1601_004_macchiato-8.jpg?optimize=low&amp;bg-color=255,255,255&amp;fit=bounds&amp;height=420&amp;width=280&amp;canvas=280:420&amp;dpr=2"
    return(
        <main className="main-container">
            <article className="discoint-article"><span>20% DE DESCUENTO EXTRA CON CODIGO DE DESCUENTO</span></article>
            <h2 className="title-section">Todo lo que tenemos...</h2>
            <p className="message-section">Escuchamos que estabas buscando la venta oficial de Select... Bueno, has venido al lugar correcto, boo. Ingrese directamente a nuestro lugar favorito en el sitio: nuestra sección de ventas de siguiente nivel donde ... </p>
            <div>
                <h3>Notes</h3>
                <ul>
                    {notes.map(note => (
                        <Note key={note.id} note={note}></Note>
                    ))}
                </ul>
            </div>
            <section className="gallery-grid">

                <Item item={item} precio={precio} urlImg={urlImg} ></Item>
                <Item item={item} precio={precio} urlImg={urlImg} ></Item>
                <Item item={item} precio={precio} urlImg={urlImg} ></Item>
                <Item item={item} precio={precio} urlImg={urlImg} ></Item>
                <Item item={item} precio={precio} urlImg={urlImg} ></Item>
                <Item item={item} precio={precio} urlImg={urlImg} ></Item>
                <Item item={item} precio={precio} urlImg={urlImg} ></Item>
                <Item item={item} precio={precio} urlImg={urlImg} ></Item>
                <Item item={item} precio={precio} urlImg={urlImg} ></Item>
                <Item item={item} precio={precio} urlImg={urlImg} ></Item>
                <Item item={item} precio={precio} urlImg={urlImg} ></Item>
                <Item item={item} precio={precio} urlImg={urlImg} ></Item>

            </section>
        </main>
    )
}

export default Main


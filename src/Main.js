import React,{useState,useEffect} from 'react'
import Note from './components/Note'
import noteService from './services/note'


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
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('')
    const [showAll, setShowAll] = useState(true);
    const [errorMessage, setErrorMessage] = useState('some error happened...')

    useEffect(()=> {      
        noteService
            .getAll()
            .then( initialNotes =>{
                setNotes(initialNotes)
        })
    },[])

    const notesToShow = showAll
        ? notes
        : notes.filter(note => note.important) 

    const addNote = (event) => {
        event.preventDefault()
        const noteObject = {
            content: newNote,
            date: new Date().toString(),
            important: Math.random() <0.5,
        }

        noteService
            .create(noteObject)
            .then(returnedNote => {
                setNotes(notes.concat(returnedNote))
                setNewNote('')
            })

    }

    const toggleImportanceOf = id => {
        const note = notes.find(n => n.id === id)
        const changedNote = {...note, important: !note.important}
        
        noteService
            .update(id,changedNote)
            .then(returnedNote => {
            setNotes(notes.map(note => note.id !== id ? note: returnedNote))
        })  
            .catch(error => {
                setErrorMessage(`Note '${note.content}' was already removed from server`)
                setTimeout(()=>{
                    setErrorMessage(null)
                },5000)
                setNotes(notes.filter(n => n.id !== id ))
            }) 

    }

    const Notification = ({ message }) => {
        if (message === null){
            return null
        }
        return (
            <div className='error'>
                {message}               
            </div>
        )
    }

    const handleNoteChange = (event) =>{
        setNewNote(event.target.value)
    }

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
                <Notification message={errorMessage}  />
                <div>
                    <button onClick={()=> setShowAll(!showAll)}>
                        show {showAll ? 'important' : 'all'}
                    </button>
                </div>
                <ul>
                    {notesToShow.map((note) => (
                        <Note 
                            key={note.id} 
                            note={note} 
                            toggleImportance={()=>toggleImportanceOf(note.id)} 
                        />
                    ))}
                </ul>
                <form onSubmit={addNote}>
                    <input value={newNote} onChange={handleNoteChange}></input>
                    <button type="submit">save</button>
                </form>
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


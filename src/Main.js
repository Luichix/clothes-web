import React,{useState,useEffect} from 'react'
import Note from './components/Note'
import noteService from './services/note'
import './Login.css'
import loginService from './services/login'


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
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)

    useEffect(()=> {      
        noteService
            .getAll()
            .then( initialNotes =>{
                setNotes(initialNotes)
        })
    },[])

    useEffect(()=> {
        const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
        if(loggedUserJSON){
            const user = JSON.parse(loggedUserJSON)
            setUser(user)
            noteService.setToken(user.token)
        }
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
    
    const handleLogin = async (event) => {
        event.preventDefault()

        try{ 
            const user = await loginService.login({
                username, password
            })
            window.localStorage.setItem(
                'loggedNoteappUser', JSON.stringify(user)
            )
            noteService.setToken(user.token)
            setUser(user)
            setUsername('')
            setPassword('')
        } catch (exception){
            setErrorMessage('Wrong credentials')
            setTimeout(() => {
                setErrorMessage(null)
            }, 5000)
        }
    
    }

    const loginForm = () => (
        <div className='login'>
            <img className='login_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt='' />
            <div className='login_container'>
                <h1>Sign-in</h1>
                <form onSubmit={handleLogin}>
                    <h5>username</h5>
                    <input type='text' value={username} name='Username' 
                        onChange={({ target }) => setUsername(target.value)} />
    
                    <h5>Password</h5>
                    <input type='password' value={password} name='Password' 
                        onChange={({ target }) => setPassword(target.value)} />
    
                    <button type='submit' className='login_signInButton' >login</button>
                </form>
            </div>
        </div>
    )
    
    const noteForm = () => (
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
                    <Note key={note.id} note={note} 
                       toggleImportance={()=>toggleImportanceOf(note.id)} />))}
            </ul>
            <form onSubmit={addNote}>
                <input value={newNote} onChange={handleNoteChange}></input>
                <button type="submit">save</button>
            </form>
        </div>
    )


    return(
        <main className="main-container">

            <article className="discoint-article"><span>20% DE DESCUENTO EXTRA CON CODIGO DE DESCUENTO</span></article>
            <h2 className="title-section">Todo lo que tenemos...</h2>
            <p className="message-section">Escuchamos que estabas buscando la venta oficial de Select... Bueno, has venido al lugar correcto, boo. Ingrese directamente a nuestro lugar favorito en el sitio: nuestra sección de ventas de siguiente nivel donde ... </p>
          
            {user === null ? loginForm() : 
                <div>
                    <p>{user.name} logged-in</p>
                    {noteForm()}
                </div>
            }
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


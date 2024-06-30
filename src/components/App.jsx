import Header from './Header'
import Note from './Notes'
import notes from '../noteData'
import Footer from './Footer'

function App() {
    
  return(
    <>
      <Header />

      {notes.map((note)=>{
        return (
          <Note
            key={note.key}
            title={note.title}
            content={note.content}
          />
        )
      })}

      <Footer />
    </>
    
  )

}

export default App

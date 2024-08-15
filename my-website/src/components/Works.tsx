import '../styles/Works.css'
import fr from '../assets/fr.jpg'
import vi from '../assets/vi.png'
import mi from '../assets/mi.jpg'
import web from '../assets/web.png'

function Works() {
  
    return (
      <div className='works-container'>

          <div className='works'>
            <div className='works-description'>
              <h1>TANGIBLE MUSIC INTERFACES</h1>
              <p>The interactive application was developed with the aim of providing inclusive access for blind and visually impaired people and was created in cooperation with the Museum of Musical Instruments (MiM) in Berlin. The three musical interfaces are each inspired by historical musical instruments in their functionality and appearance. These are the hurdy-gurdy, the clavichord and the shelf. By touching or pressing these tactile interfaces, the samples of the respective exhibits produce sound and encourage visitors to make music <br /> <br /> TECHNOLOGIES: <br /> Arduino microcontrollers (C++) <br /> Max for Live MIDI tools(Ableton)</p>
            </div>
            <img src={mi} alt="" />
          </div>

          <div className='works'>
            <img src={vi} alt="" />
            <div className='works-description'>
              <h1>VISHNEVSKA.COM</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae rerum eligendi consectetur perspiciatis at neque tenetur asperiores placeat? Magnam dolorum numquam suscipit autem quibusdam libero accusamus distinctio blanditiis minus voluptatibus velit deleniti consectetur hic voluptates ducimus, dolorem delectus quos cum culpa adipisci nobis veniam ex fuga optio? Iste, debitis temporibus.</p>
            </div>
          </div>
          
          <div className='works'>    
            <div className='works-description'>
              <h1>FRAGMENTE</h1>
              <p>"Fragmente" is a narrative installation in which visitors are invited to take a are invited to take a seat in a small living room. There is a photo album on a side table, which takes visitors on a journey into the past.
              The installation was programmed using Python in combination with a Computer Vision. This makes it possible to extract meaningful information from individual images from a live camera transmission 
              images from a live camera transmission, and thus to record when visitors browse through the album.
              <br/><br/>
              TECHNOLOGIES: <br /> Python <br /> Tensorflow</p>
            </div>
            <img src={fr} alt="" />
          </div>

          <div className='works' style={{marginBottom: "5vh"}} >
          <img src={web} alt=""  />
          <div className='works-description'>
            <h1>WEB-PLAYER</h1>
            <p >A web player developed to show short films as part of the Artificialism project.Allows visitors to get short information about the movie and to start it. Automatically returns to the main menu at the end of the movie.
            <br/><br/>
            TECHNOLOGIES: <br /> JavaScript</p>
            </div>
          </div >
          <div>.</div>
      </div>
    )
  }
  
  export default Works
  
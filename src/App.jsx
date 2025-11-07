import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'


function App() {

  return (
      <>
          {/*Navbar*/}
          <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
              <div className="container">
                  <a href="#" class="navbar-brand">A$AP ROCKY</a>

                  <button
                      class="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navmenu"
                  >
                      <span class="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse" id="navmenu">
                      <ul class="navbar-nav ms-auto">
                          <li className="nav-item">
                              <a href="#WHO" className="nav-link">WHO?</a>
                          </li>
                          <li className="nav-item">
                              <a href="#MUSIC" className="nav-link">MUSIC</a>
                          </li>
                          <li className="nav-item">
                              <a href="#questions" className="nav-link">FACTS</a>
                          </li>

                      </ul>
                  </div>
              </div>
          </nav>

          {/*Showcase*/}
          <section className="hero-video">
          <video
                  className="hero-video__background"
                  width="100%"
                  height="auto"
                  autoPlay
                  muted
                  loop
              >
                  <source src="A$AP Rocky - Sundress (Official Video).mp4" type="video/mp4"/>
              </video>
              <div className="hero-video__content">
                  <div className="container text-center text-sm-start">
                      <div>
                          <button
                              className="btn btn-warning btn-lg btn-over-video"
                              data-bs-toggle="modal"
                              data-bs-target="#enroll"
                          >
                              Register
                          </button>
                      </div>
                  </div>
              </div>
          </section>

          {/*Newsletter*/}
          <section className="bg-secondary text-light p-5" style={{ margin: '8px 14px' }}>
              <div className="container">
                  <div className="d-md-flex justify-content-between align-items-center">
                      <h3 className="mb-3 mb-md-0">Sign Up For Notifications</h3>

                      <div className="input-group news-input">
                          <input type="text" class="form-control" placeholder="Enter Email"/>
                          <button class="btn btn-dark btn-lg" type="button">Submit</button>
                      </div>
                  </div>
              </div>
          </section>

          {/*Boxes*/}
          <section className="p-5">
              <div className="container">
                  <div className="row text-center g-4">
                      <div className="col-md">
                          <div className="card bg-dark text-light">
                              <div className="card-body text-center">
                                  <div className="h1 mb-3">
                                      <i className="bi bi-laptop"></i>
                                  </div>
                                  <h3 className="card-title mb-3">Spotify</h3>
                                  <p className="card-text">
                                      About to bless your ears
                                  </p>
                                  <a href="https://open.spotify.com/intl-de/artist/13ubrt8QOOCPljQ2FL1Kca" target="_blank"
                                     class="btn btn-primary">Your Welcome</a>
                              </div>
                          </div>
                      </div>
                      <div className="col-md" id="WHO">
                          <div className="card bg-secondary text-light">
                              <div className="card-body text-center">
                                  <div className="h1 mb-3">
                                      <i className="bi bi-person-square"></i>
                                  </div>
                                  <h3 className="card-title mb-3">My Label</h3>
                                  <p className="card-text">
                                      RCA Records
                                  </p>
                                  <a href="https://www.rcarecords.com/" target="_blank" class="btn btn-dark">It's a pleasure doing
                                      business</a>
                              </div>
                          </div>
                      </div>
                      <div className="col-md">
                          <div className="card bg-dark text-light">
                              <div className="card-body text-center">
                                  <div className="h1 mb-3">
                                      <i className="bi bi-people"></i>
                                  </div>
                                  <h3 className="card-title mb-3">My wife</h3>
                                  <p className="card-text">
                                      RIHANNA
                                  </p>
                                  <a href="https://www.instagram.com/badgalriri/" target="_blank" class="btn btn-primary">Excuse me?</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          {/*WHO? Sections*/}
          <section  className="p-5">
              <div className="container">
                  <div className="row align-items-center justify-content-between">
                      <div className="col-md">
                          <img src="Me.jpg" className="img-fluid" alt=""/>
                      </div>
                      <div className="col-md p-5">
                          <h2>Who is me?</h2>
                          <p>
                              Hey, was geht? A$AP Rocky hier, direkt aus den Straßen von Harlem. Ich bin nicht nur ein
                              Rapper - ich bin ein Multitalent. Meine Musik ist eine Mischung aus urbanen Beats und
                              persönlichen Geschichten, die das Leben in der Großstadt widerspiegeln. Als Mode-Ikone
                              mische ich High Fashion mit Streetwear und setze Trends auf der ganzen Welt. Aber meine
                              Kreativität endet nicht dort. Auch auf der Leinwand habe ich meine Spuren hinterlassen,
                              und ich liebe es, in verschiedene Rollen zu schlüpfen und Geschichten zu erzählen. Trotz
                              meines Erfolgs vergesse ich nie meine Wurzeln und setze mich für meine Community ein. Ich
                              bin hier, um Grenzen zu sprengen und die Welt zu inspirieren.
                          </p>
                          <h6 id={"MUSIC"}>-ChatGPT</h6>
                      </div>
                  </div>
              </div>
          </section>


          <section className="p-5 bg-secondary">
              <div className="container">
                  <h2 className="text-center text-white">My Music</h2>
                  <p className="lead text-center text-white mb-5">

                  </p>
                  <div className="row g-4">
                      <div className="col-md-6 col-lg-3">
                          <div className="card bg-light">
                              <img src="LIVE.LOVE.A$AP.jpg" className="mb-3 card-img-top" alt=""/>
                              <div className="card-body text-center">
                                  <h3 className="card-title mb-3">LIVE.LOVE.A$AP</h3>
                                  <a href="https://open.spotify.com/intl-de/album/4l6EPpP9hjQrLb8qNB9eC5" target="_blank" className="btn btn-primary">Have a listen</a>
                              </div>
                          </div>
                      </div>

                      <div className="col-md-6 col-lg-3">
                          <div className="card bg-light">
                              <img src="LONG.LIVE.A$AP.jpg" className="mb-3 card-img-top" alt=""/>
                              <div className="card-body text-center">
                                  <h3 className="card-title mb-3">LONG.LIVE.A$AP</h3>
                                  <a href="https://open.spotify.com/intl-de/album/6rzMufuu8sLkIizM4q9c7J" target="_blank" className="btn btn-primary">Have a listen</a>
                              </div>
                          </div>
                      </div>

                      <div className="col-md-6 col-lg-3">
                          <div className="card bg-light">
                              <img src="AtLongLastASAPCover.jpg" className="mb-3 card-img-top" alt=""/>
                              <div className="card-body text-center">
                                  <h3 className="card-title mb-3">AT.LONG.LAST.A$AP</h3>
                                  <a href="https://open.spotify.com/intl-de/album/3arNdjotCvtiiLFfjKngMc" target="_blank" className="btn btn-primary">Have a listen</a>
                              </div>
                          </div>
                      </div>

                      <div className="col-md-6 col-lg-3">
                          <div className="card bg-light">
                              <img src="Testing.jpg" className="mb-3 card-img-top" alt=""/>
                              <div className="card-body text-center">
                                  <h3 className="card-title mb-3">TESTING</h3>
                                  <a href="https://open.spotify.com/intl-de/album/3MATDdrpHmQCmuOcozZjDa" target="_blank" className="btn btn-primary">Have a listen</a>
                              </div>
                          </div>
                      </div>


                  </div>
              </div>
          </section>


          {/*Question Accordion*/}
          <section id="questions" className="p-5 bg-warning">
              <div className="container">
                  <h2 className="text-center mb-4">Fakten über Rocky</h2>
                  <div className="accordion accordion-flush" id="questions">
                      {/**/}
                      <div className="accordion-item">
                          <h2 className="accordion-header">
                              <button
                                  class="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#question-one"
                              >
                                  Ursprung des Namens
                              </button>
                          </h2>
                          <div
                              id="question-one"
                              className="accordion-collapse collapse"
                              data-bs-parent="#questions"
                          >
                              <div className="accordion-body">
                                  Der Künstlername "ASAP" von ASAP Rocky steht für "Always Strive and Prosper".
                                  Es ist eine Abkürzung, die seine Einstellung und seine Botschaft reflektiert.
                                  "Always Strive and Prosper" kann auf Deutsch mit "Immer streben und gedeihen" übersetzt werden.
                                  Der Name soll eine positive Lebensphilosophie vermitteln, die darauf abzielt,
                                  ständig nach Verbesserung zu streben und Erfolg zu erlangen.
                              </div>
                          </div>
                      </div>
                      {/**/}
                      <div className="accordion-item">
                          <h2 className="accordion-header">
                              <button
                                  class="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#question-two"
                              >
                                  Herkunft
                              </button>
                          </h2>
                          <div
                              id="question-two"
                              className="accordion-collapse collapse"
                              data-bs-parent="#questions"
                          >
                              <div className="accordion-body">
                                  ASAP Rockys Wurzeln liegen in den Vereinigten Staaten, genauer gesagt in Harlem, New York City.
                                  Seine Eltern stammen aus den USA, aber er hat auch schwedische Wurzeln.
                                  Während seiner Jugend verbrachte er einige Zeit in verschiedenen Stadtteilen von New York,
                                  aber auch in anderen Städten wie Philadelphia. Darüber hinaus lebte er auch für einige Zeit in Stockholm,
                                  Schweden, wo seine Mutter ihren Wohnsitz hatte.
                                  Diese vielfältigen Einflüsse prägten seine musikalische und künstlerische Entwicklung und
                                  trugen zu seinem einzigartigen Stil und seiner Persönlichkeit bei.
                              </div>
                          </div>
                      </div>
                      {/**/}
                      <div className="accordion-item">
                          <h2 className="accordion-header">
                              <button
                                  class="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#question-three"
                              >
                                  Kollaborationen
                              </button>
                          </h2>
                          <div
                              id="question-three"
                              className="accordion-collapse collapse"
                              data-bs-parent="#questions"
                          >
                              <div className="accordion-body">
                                  ASAP Rocky hat mit einer Vielzahl von Künstlern und Kreativen in verschiedenen Bereichen zusammengearbeitet.
                                  Seine Kollaborationen erstrecken sich über die Musik-, Mode- und Kunstwelt.
                                  Er hat mit renommierten Musikern wie Kanye West, Drake, Kendrick Lamar und Lana Del Rey zusammengearbeitet.
                                  In der Modewelt hat er mit Marken wie Guess, adidas Originals und
                                  Under Armour zusammengearbeitet und eigene Modemarken wie "VLONE" unterstützt.
                                  Darüber hinaus hat er mit Regisseuren und Produzenten zusammengearbeitet, um visuell beeindruckende Musikvideos zu kreieren,
                                  und er hat auch mit bildenden Künstlern zusammengearbeitet, um kreative Projekte außerhalb der Musik zu realisieren.
                                  Diese vielfältigen Kollaborationen zeigen seine breite künstlerische Palette und
                                  sein Interesse daran, über die Grenzen des traditionellen Hip-Hop hinauszugehen.
                              </div>
                          </div>
                      </div>

                      <div className="accordion-item">
                          <h2 className="accordion-header">
                              <button
                                  class="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#question-four"
                              >
                                  Mode-Interesse
                              </button>
                          </h2>
                          <div
                              id="question-four"
                              className="accordion-collapse collapse"
                              data-bs-parent="#questions"
                          >
                              <div className="accordion-body">
                                  ASAP Rocky ist für sein starkes Interesse an Mode und Streetwear bekannt.
                                  Er gilt als Stil-Ikone in der Hip-Hop-Szene und
                                  hat seinen eigenen einzigartigen Modestil entwickelt,
                                  der von vielen Menschen auf der ganzen Welt bewundert wird.
                              </div>
                          </div>
                      </div>

                      <div className="accordion-item">
                          <h2 className="accordion-header">
                              <button
                                  class="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#question-five"
                              >
                                  Gewonnene Awards
                              </button>
                          </h2>
                          <div
                              id="question-five"
                              className="accordion-collapse collapse"
                              data-bs-parent="#questions"
                          >
                              <div className="accordion-body">
                                  ASAP Rocky hat im Laufe seiner Karriere mehrere Auszeichnungen und Preise gewonnen.
                                  Dazu gehören unter anderem der BET Award für "Best Collaboration" im Jahr 2013 für seinen Song "Fin' Problems",
                                  der BET Hip Hop Award für "Best Mixtape" im Jahr 2012 für "Live.Love.A$AP" und der MTV Video Music Award für "Best Editing"
                                  im Jahr 2013 für sein Musikvideo zu "Fin' Problems". Diese Auszeichnungen unterstreichen seinen Einfluss und
                                  seine Anerkennung in der Musikindustrie sowie seine Fähigkeit,
                                  innovative und ansprechende Musik und Videos zu produzieren.
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>


          {/*Footer*/}
          <footer class="p-5 bg-dark text-white text-center position-relative">
              <div className="container">
                  <p className="lead">Copyright &copy; A$AP ROCKY</p>


                  <a href="https://twitter.com/asvpxrocky?lang=de" target="_blank" className="p-1"><i className="bi bi-twitter text-light mx-1"></i></a>
                  <a href="https://www.facebook.com/asaprocky/?locale=de_DE" target="_blank" className="p-1"><i className="bi bi-facebook text-light mx-1"></i></a>
                  <a href="https://www.instagram.com/asaprocky/" target="_blank" className="p-1"><i className="bi bi-instagram text-light mx-1"></i></a>


                  <a href="#" className="position-absolute bottom-0 end-0 p-5">
                      <i className="bi bi-arrow-up-circle h1"></i>
                  </a>
              </div>
          </footer>

          {/*Modal*/}
          <div
              className="modal fade"
              id="enroll"
              tabindex="-1"
              aria-labelledby="enrollLabel"
              aria-hidden="true"
          >
              <div className="modal-dialog">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h5 class="modal-title" id="enrollLabel">Enrollment</h5>
                          <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                          ></button>
                      </div>
                      <div className="modal-body">
                          <p className="lead">Fill out this form and we will get back to you</p>
                          <form>
                              <div className="mb-3">
                                  <label for="first-name" class="col-form-label">
                                      First Name:
                                  </label>
                                  <input type="text" class="form-control" id="first-name"/>
                              </div>
                              <div className="mb-3">
                                  <label for="last-name" class="col-form-label">Last Name:</label>
                                  <input type="text" class="form-control" id="last-name"/>
                              </div>
                              <div className="mb-3">
                                  <label for="email" class="col-form-label">Email:</label>
                                  <input type="email" class="form-control" id="email"/>
                              </div>
                              <div className="mb-3">
                                  <label for="phone" class="col-form-label">Phone:</label>
                                  <input type="tel" class="form-control" id="phone"/>
                              </div>
                          </form>
                      </div>
                      <div className="modal-footer">
                          <button
                              type="button"
                              class="btn btn-secondary"
                              data-bs-dismiss="modal"
                          >
                              Close
                          </button>
                          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}

export default App

import styles from "./App.module.css"
import { Route, Routes, Link } from "react-router-dom"
import { ProjectDetail } from "./components/projects/ProjectDetails/ProjectDetail"
import { NoMatch } from "./components/NoMatch/NoMatch"
import { Homepage } from "./Homepage"

function App() {

  return (
    <>
      <div className={styles.App}>
        <Link to="/projectDetails"></Link> 
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="projectDetails" element={<ProjectDetail />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>


      </div>
    </>
  )
}

export default App

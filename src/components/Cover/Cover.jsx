import "./Cover.scss"
import TypographicEffect from "../Atoms/TypographicEffect/TypographicEffect"
import { Link } from "react-router-dom"

function Cover() {

    return (
      <>
        <div className="cover">
          <TypographicEffect></TypographicEffect>
          <p className="big">Passionately crafting Python-powered solutions and building full-stack experiences that meld innovation with functionality.</p>
        </div>
      </>
    )
  }
  
export default Cover
  
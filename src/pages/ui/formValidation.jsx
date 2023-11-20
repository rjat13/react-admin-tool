import { useState } from "react"
import { useEffect } from "react"


const FormValidation = () => {
    const [load, setLoad] = useState(false)
    const t = useEffect(() => {
        setLoad(true)
    }, [])
  return (
    <div>{console.log("effect", t, " load", load)}
        FormValidation
    </div>
  )
}

export default FormValidation
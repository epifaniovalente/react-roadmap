import { useRef } from "react"

export default function Artigo03() {
    const inputRef = useRef(null);

    const focarInput=()=>{
        inputRef.current.focus();
    }

    return(
        <div>
            <input type="text" ref={inputRef} name="" id="" />
            <button type="button" onClick={focarInput}>
                Fucar noinpput
            </button>
        </div>
    )
}
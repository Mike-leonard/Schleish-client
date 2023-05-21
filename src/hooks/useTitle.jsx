import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Schleish A Toy Marketplace`
    }, [title])
}

export default useTitle
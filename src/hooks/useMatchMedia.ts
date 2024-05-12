import { useEffect, useState } from "react"

export default function useMatchMedia(size = 992) {
    const [isMobile, setIsMobile] = useState(window.innerWidth < size)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < size)
        }

        handleResize()

        window.addEventListener("resize", handleResize)

        // after changing orientation is ios event "resize" not triggered so we should use "orientationchange" event
        window.addEventListener("orientationchange", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
            window.removeEventListener("orientationchange", handleResize)
        }
    }, [size])

    return [isMobile]
}

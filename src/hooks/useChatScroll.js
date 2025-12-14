import { useEffect, useRef } from "react";


export default function useChatScroll(dep) {
const ref = useRef(null);


useEffect(() => {
if (ref.current) ref.current.scrollTop = ref.current.scrollHeight;
}, [dep]);


return ref;
}
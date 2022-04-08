import { useState } from "react"

const useFirebase = () => {
    const [user, setUser] = useState({});
    const signInWithGoogle = () => {
        console.log('google');
    }

    return { user, signInWithGoogle };
}
export default useFirebase;
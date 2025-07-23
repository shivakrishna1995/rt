import { addDoc, collection } from "firebase/firestore";
import { firestore } from "./firebase";

const trackPageView = async (customData) => {
    try {
        const payload = {
            event_name: "page_view",
            page_location: window.location.href,
            page_path: location.pathname,
            created_at: new Date().toLocaleString(),
            user_id: localStorage.getItem("user_id"),
        }
        if (customData) payload.customData = customData;

        const docRef = await addDoc(collection(firestore, localStorage.getItem("user_id")), payload);

        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};

const trackClick = async (customData) => {
    try {
        const payload = {
            event_name: "click",
            page_location: window.location.href,
            page_path: location.pathname,
            created_at: new Date().toLocaleString(),
            user_id: localStorage.getItem("user_id"),
        }
        if (customData) payload.customData = customData;

        const docRef = await addDoc(collection(firestore, localStorage.getItem("user_id")), payload);

        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};

export { trackPageView, trackClick };
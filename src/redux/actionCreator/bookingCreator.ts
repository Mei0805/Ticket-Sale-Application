import { collection,getDocs} from "firebase/firestore";
import { Dispatch } from "redux";
import { database } from "../../firebase/fbConfig";
import { ActionProps } from "../action/bookingAction";



// Load du lieu 
export const LoadDuLieu = () => async (dispatch: Dispatch<ActionProps>) => {
    try {
        const snapshot = collection(database,"DanhSachVe");
        console.log('snap',snapshot);
        // const data: Array<any> = [];
        const snapshotdata = await getDocs(snapshot);
        console.log('data', snapshotdata);
        dispatch({
            type: 'LOAD_DU_LIEU',
            payload: snapshotdata
        })

        
    }
    catch(error) {
        console.log('Lỗi:', error);
    }
}
import { collection, getDocs } from "firebase/firestore";
import { database } from "../firebase/fbConfig";


export type TicketType = {
    id?: string;
    BookingCode: string;
    TenSuKien: string;
    CongCheckIn: string;
    NgaySuDung: any;
    NgayXuatVe:any;
    TenLoaiVe:string;
    DoiSoat:string;
    TinhTrang:string;
};

export const all = async () => {
    try {
        const snapshot = await collection(database,"DanhSachVe");
        console.log('snap',snapshot);
        const data: Array<any> = [];
        const snapshotdata = await getDocs(snapshot);
        console.log('data', snapshotdata);
        // eslint-disable-next-line array-callback-return
        snapshotdata.docs.map((_data: { id: any; data: () => any; }) => {
            data.push({
                id: _data.id, 
                ..._data.data(), 
            });
        });
    
        return data as Array<TicketType>;
    }
    catch(error) {
        console.log('Lỗi: ', error)
    }
};


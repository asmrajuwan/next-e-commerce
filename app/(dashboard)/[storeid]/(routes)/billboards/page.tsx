import { BillBoardClient } from "./components/client";

const BillBoardsPage = () => {
    return ( 
        <div className="flex-col">
            <div className="flex- space-y-8 pt-6">
                <BillBoardClient/>
            </div>
        </div>
     );
}
 
export default BillBoardsPage;
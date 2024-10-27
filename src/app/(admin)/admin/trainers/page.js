import { TrainerTable } from "@/components/DataTables/Trainers";
import { TrainerDialog } from "@/components/Dialogs/TrainersModal";


export default function Traniner(){
    return(
        <div className="min-h-screen p-10">
             <div className="flex justify-between">
                <h1 className="text-3xl font-bold text-center">Trainers Page</h1>
                <TrainerDialog/>
            </div> 
            
            <TrainerTable/>
        </div>
    )
}
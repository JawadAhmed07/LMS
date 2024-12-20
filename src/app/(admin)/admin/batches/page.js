import { getBatches } from "@/action/batches";
import { getCourses } from "@/action/course";
import { BatchesTable } from "@/components/DataTables/BatchTable";
import { BatchModal } from "@/components/Dialogs/BatchModal";


export default async function batches() {
    const { batches } = await getBatches();
    const { courses } = await getCourses();

    return (
        <div className="min-h-screen p-10">
            <div className="flex justify-between">
                <h1 className="text-3xl font-bold text-center">Batches Page</h1>
                <BatchModal courses={courses}/>
            </div>
            <BatchesTable data={batches}/>
        </div>
    )
}
import { StudentTable } from "@/components/DataTables/StudentsTable";
import { StudentModal } from "@/components/Dialogs/StudentModal";
import { Button } from "@/components/ui/button";


export default function students() {
    return (
        <div className="min-h-screen p-10">
            <div className="flex justify-between">
                <h1 className="text-3xl font-bold text-center">Students Page</h1>
                <StudentModal />
            </div>
            <StudentTable />

        </div>
    )
}


import { getCourses } from "@/action/course";
import { CourseTable } from "@/components/DataTables/CourseTable";
import { CourseDialog } from "@/components/Dialogs/CourseModals";
import { Button } from "@/components/ui/button";


export default async function courses(){
    const {courses} = await getCourses()
    console.log("course=>",courses)
    return(
        <div className="min-h-screen p-10">
            <div className="flex justify-between">
            <h1 className="text-3xl font-bold text-center">Courses Page</h1>
            <CourseDialog/>
            </div>
            
            <CourseTable courses={courses}/>
        </div>
    )
}
import { ModeToggle } from "@/components/mode-toggle"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { auth } from "../../../../auth"
import { redirect } from "next/navigation"


export default async function Layout({ children }) {
const session= await auth()
if(session?.user.role!="admin") redirect("/")


  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList
        TabsList className="w-full justify-around">
        <div>
        <Link href={`/`}>
          <TabsTrigger value="home">Home</TabsTrigger>
        </Link>
        <Link href={`/admin/dashboard`}>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
        </Link>
        <Link href={`/admin/courses`}>
          <TabsTrigger value="courses">Course</TabsTrigger>
        </Link>
        <Link href={`/admin/trainers`}>
          <TabsTrigger value="trainers">Trainers</TabsTrigger>
        </Link>
        <Link href={`/admin/students`}>
          <TabsTrigger value="students">Students</TabsTrigger>
        </Link>
        <Link href={`/admin/batches`}>
          <TabsTrigger value="batches">Batch</TabsTrigger>
        </Link>
        </div>
        <ModeToggle />
      </TabsList>
      <TabsContent value="home">{children}</TabsContent>
      <TabsContent value="dashboard">{children}</TabsContent>
      <TabsContent value="courses">{children}</TabsContent>
      <TabsContent value="trainers">{children}</TabsContent>
      <TabsContent value="students">{children}</TabsContent>
      <TabsContent value="batches">{children}</TabsContent>
    </Tabs>

  )
}
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"


export default function Layout({children}){
    return (
        <Tabs defaultValue="account" className="w-full">
  <TabsList className="w-full">
    <Link href={`/admin/dashboard`}>
    <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
    </Link>
    <Link href={`/admin/courses`}>
    <TabsTrigger value="courses">course</TabsTrigger>
    </Link>
    <Link href={`/admin/trainers`}>
    <TabsTrigger value="trainers">trainers</TabsTrigger>
    </Link>
    <Link href={`/admin/students`}>
    <TabsTrigger value="students">students</TabsTrigger>
    </Link>
    <Link href={`/admin/batches`}>
    <TabsTrigger value="batches">batch</TabsTrigger>
    </Link>
  </TabsList>
  <TabsContent value="dashboard">{children}</TabsContent>
  <TabsContent value="courses">{children}</TabsContent>
  <TabsContent value="trainers">{children}</TabsContent>
  <TabsContent value="students">{children}</TabsContent>
  <TabsContent value="batches">{children}</TabsContent>
</Tabs>

    )
}
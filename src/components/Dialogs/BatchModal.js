"use client"
import * as React from "react"

import { cn } from "@/lib/utils"
// import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { addBatches } from "@/action/batches"

export function BatchModal({ courses }) {
    const [open, setOpen] = React.useState(false)
    const isDesktop = true;

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button variant="outline">Add Batch</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add Batch</DialogTitle>
                    </DialogHeader>
                    <BatchForm courses={courses} />
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button variant="outline">Add Batch</Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    <DrawerTitle>Add Batch</DrawerTitle>
                    <DrawerDescription>
                        You can add batch details here
                    </DrawerDescription>
                </DrawerHeader>
                <BatchForm className="px-4" />
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

function BatchForm({ className,courses }) {
    return (
        <form
            action={addBatches}
            className={cn("grid items-start gap-4", className)}>
            <div className="grid gap-2">
                <Label htmlFor="batch-name">Batch Name</Label>
                <Input 
                required 
                id="batchName"
                type="text"
                name="title"
                defaultValue="" />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="batch-name">Description</Label>
                <Input 
                required 
                id="description"
                type="text"
                name="description"
                defaultValue="" />
            </div>
            {/* <div className="grid gap-2">
                <Label htmlFor="status">Status</Label>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="ongoing">Ongoing</SelectItem>
                        <SelectItem value="merged">Merged</SelectItem>
                    </SelectContent>
                </Select>
            </div> */}
            <div className="grid gap-2">
                <Label htmlFor="course">Course</Label>
                <Select required name="course">
                    <SelectTrigger>
                        <SelectValue placeholder="Select course" />
                    </SelectTrigger>
                    <SelectContent>
                        {
                            courses.map((course) => (
                                <SelectItem key={course._id} value={course._id}>
                                    {course.title}
                                </SelectItem>
                            ))
                        }
                    </SelectContent>
                </Select>
            </div>
            <Button type="submit">Add Batch</Button>
        </form>
    )
}

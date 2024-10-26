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

export function CourseDialog() {
    const [open, setOpen] = React.useState(false)
    const isDesktop = true;

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button variant="outline">Edit Profile</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add course</DialogTitle>
                        {/* <DialogDescription>
              Make changes to your profile here. Click save when youre done.
            </DialogDescription> */}
                    </DialogHeader>
                    <CourseForm />
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button variant="outline">Add course</Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    <DrawerTitle>Add course</DrawerTitle>
                    <DrawerDescription>
                        You can add course here          </DrawerDescription>
                </DrawerHeader>
                <CourseForm className="px-4" />
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

function CourseForm({ className }) {
    return (
        <form className={cn("grid items-start gap-4", className)}>
            <div className="grid gap-2">
                <Label htmlFor="course">Course</Label>
                {/* <Input required type="text" id="course" defaultValue="Enter course name" /> */}
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Select course" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="web-development">Web development</SelectItem>
                        <SelectItem value="graphic">Graphic designing</SelectItem>
                        <SelectItem value="python">Python</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="grid gap-2">
                <Label htmlFor="duration">Duration</Label>
                <Input required id="duration" defaultValue="" />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Input required id="description" defaultValue="" />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="status">Status</Label>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Active or Not-active" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="not-active">Not active</SelectItem>
                    </SelectContent>
                </Select>

            </div>
            <Button type="submit">Add course</Button>
        </form>
    )
}

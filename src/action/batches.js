"use server";

import { revalidatePath } from "next/cache";

export async function getBatches() {
  let batches = await fetch(`${process.env.BASE_URL}api/batches`);
  batches = await batches.json();
  return batches;
}

export async function addBatches(formData) {
  const obj = {
    title: formData.get("title"),
    description: formData.get("description"),
    course:formData.get("course")
  };

  const course = await fetch(`${process.env.BASE_URL}api/batches`, {
    method: "POST",
    body: JSON.stringify(obj),
  });
  if (course.ok) {
    revalidatePath("/admin/batches");
  }
}
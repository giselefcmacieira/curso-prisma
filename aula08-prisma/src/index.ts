import prisma from "./database";

(async () => {
  const students = await prisma.student.groupBy({
    by: ["class"],
    _count: {id: true}
  }); // TODO: Faça a implementação aqui
  const unemployedStudents = await prisma.student.groupBy({
    by: ["class"],
    _count: {id: true},
    where: {
      jobId: null
    }
  })
  console.log(students);
  console.log(unemployedStudents)
})()


import z from "zod";

const user = z.object({
  fullName: z
    .string("fullName deve ser string")
    .trim()
    .min(5, "fullName deve ter no mínimo 5 caracteres")
    .max(30, "fullName não deve ter mais que 30 caracteres"),
  userName: z
    .string("userName deve ser string")
    .trim()
    .min(3, "fullName deve ter no mínimo 5 caracteres")
    .max(25, "fullName não deve ter mais que 30 caracteres"),
  email: z.email("Email inválido"),
});

const createUser = user

const updateUser = user.partial()


const userParam = z.object({
	userId:z.uuid("Formato de id inválido")
})

export default{
	createUser,
	updateUser,
	userParam
}

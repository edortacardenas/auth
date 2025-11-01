import { clerkClient } from "@clerk/nextjs/server";
import { removeRole, setRole } from "./actions";

export default async function Admin() {
  const client = await clerkClient();

  const users = (await client.users.getUserList()).data;

  return (
    <>
      {users.map((user) => {
        return (
          <div
            key={user.id}
            className={`p-4 ${
              users.indexOf(user) % 2 === 0
                ? "bg-neutral-50 dark:bg-neutral-800"
                : "bg-white dark:bg-neutral-900"
            }`}
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              {/* Contenedor para la información del usuario en móviles */}
              <div className="flex flex-col mb-4 lg:mb-0">
                {/* Primera fila: Nombre */}
                <div className="dark:text-neutral-200 font-bold">
                  {user.firstName} {user.lastName}
                </div>

                {/* Segunda fila: Correo y Rol */}
                <div className="flex items-center gap-2 dark:text-neutral-200 text-sm">
                  <span>
                    {
                      user.emailAddresses.find(
                        (email) => email.id === user.primaryEmailAddressId
                      )?.emailAddress
                    }
                  </span>
                  <span className="font-semibold">
                    ({user.publicMetadata.role as string || 'No role'})
                  </span>
                </div>
              </div>

              {/* Tercera fila (en móvil): Roles a setear */}
              <div className="flex gap-2 justify-start">
                <form action={setRole} className="inline">
                  <input type="hidden" value={user.id} name="id" />
                  <input type="hidden" value="admin" name="role" />
                  <button
                    type="submit"
                    className="px-2 py-1 text-sm border border-neutral-300 dark:border-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-700"
                  >
                    Hacer Admin
                  </button>
                </form>

                <form action={setRole} className="inline">
                  <input type="hidden" value={user.id} name="id" />
                  <input type="hidden" value="moderator" name="role" />
                  <button
                    type="submit"
                    className="px-2 py-1 text-sm border border-neutral-300 dark:border-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-700"
                  >
                    Hacer Moderador
                  </button>
                </form>

                <form action={removeRole} className="inline">
                  <input type="hidden" value={user.id} name="id" />
                  <button
                    type="submit"
                    className="px-2 py-1 text-sm border border-neutral-300 dark:border-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-700"
                  >
                    Quitar Rol
                  </button>
                </form>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
import Image from "next/image";
import { getSession } from "@auth0/nextjs-auth0";

export default async function Profile() {
  const { user } = (await getSession()) ?? {};

  return (
    <section className="flex justify-center items-center h-screen bg-cover text-center px-5 pt-12  transition-colors duration-300 bg-white text-black dark:bg-gray-800 dark:text-white">
      <div className=" backdrop-blur-md max-w-2xl mx-auto p-10 rounded-lg border border-black transition-colors duration-300 bg-white text-black dark:bg-gray-800 dark:text-white">
        <h1 className="text-5xl mb-3">Profile</h1>
        <p className="text-lg mb-5">I`m a creative Next web developer</p>
        <div className="flex flex-col md:flex-row justify-between items-center transition-colors duration-300 bg-white text-black dark:bg-gray-800 dark:text-white">
          <div className="flex-1 md:mr-5">
            <h4 className="text-2xl text-left">About me</h4>
            <p className="text-left pt-2 text-sm">
              I am an all-round web developer. I am a senior programmer with
              good knowledge of front-end techniques. Vitae sapien pellentesque
              habitant morbi tristique senectus et. Aenean sed adipiscing
            </p>
          </div>
          <div className="flex justify-center mt-5 md:mt-0">
            {user && (
              <Image
                width={200}
                height={200}
                src={user.picture}
                alt={user.name}
                className="rounded-full object-cover h-48"
              />
            )}
          </div>
          <div className="flex-1 md:ml-5 mt-5 md:mt-0 ">
            <h4 className="text-2xl text-left">Details</h4>
            <div className="flex flex-col items-start pt-2 space-y-3">
              <div className="flex flex-col items-start text-gray-400 text-lg ">
                <span className="font-bold">Name:</span>
                {user && <p className="text-black text-sm transition-colors duration-300 dark:bg-gray-800 dark:text-white">{user.name}</p>}
              </div>
              <div className="flex flex-col items-start text-gray-400 text-lg">
                <span className="font-bold">Email:</span>
                {user && <p className="text-black text-sm transition-colors duration-300 dark:bg-gray-800 dark:text-white">{user.email}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import ThemeToggle from "./components/toggleTheme";

export default function Home() {
  
  return (
    <main className="flex min-w-full justify-evenly">
     Blog App 1
     <div className="w-7 bg-purple-200 h-fit rounded-lg flex items-center justify-center" ><ThemeToggle/></div>
    </main>
  )
}

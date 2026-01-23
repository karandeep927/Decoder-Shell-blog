import { useState } from "react"
import { Link } from "react-router-dom"

function LogIn(){
    const [email,setEmail ] = useState('')
    const [password,setPassword ] = useState('')
    return(
        <div className="w-full min-h-screen flex items-center justify-center bg-muted dark:bg-base">
  <form
    className="
      w-full max-w-sm
      bg-white dark:bg-surface
      shadow-lg
      rounded-2xl
      px-8 py-6
      flex flex-col gap-4
    "
  >
    <h1 className="text-center font-bold text-2xl text-primary capitalize">
      Sign in
    </h1>

    {/* Email */}
    <div className="flex flex-col gap-1">
      <label
        htmlFor="email"
        className="text-sm font-medium text-surface dark:text-muted"
      >
        Email
      </label>

      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="
          px-3 py-2 rounded-lg
          bg-transparent
          border border-primary
          text-surface dark:text-muted
          focus:outline-none
          focus:border-primary
        "
      />
    </div>

    {/* Password */}
    <div className="flex flex-col gap-1">
      <label
        htmlFor="password"
        className="text-sm font-medium text-surface dark:text-muted"
      >
        Password
      </label>

      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="
          px-3 py-2 rounded-lg
          bg-transparent
          border border-primary
          text-surface dark:text-muted
          focus:outline-none
          focus:border-primary
        "
      />
    </div>

    {/* Submit */}
    <button
      type="submit"
      className="
        mt-2
        bg-primary
        hover:bg-surface
        text-white
        py-2
        rounded-lg
        transition-colors
        font-medium
         border border-surface cursor-pointer
        hover:border-primary
      "
    >
      Sign in
    </button>

    {/* Footer text */}
    <p className="text-xs text-center text-surface dark:text-muted">
      Don’t have an account?{" "}
      <Link
        to="/register"
        className="font-semibold text-primary hover:underline"
      >
        Sign up
      </Link>
    </p>
  </form>
</div>
    )
}

export default LogIn
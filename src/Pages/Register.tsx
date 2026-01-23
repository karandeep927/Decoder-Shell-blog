import { useState } from "react"
import { Link } from "react-router-dom"

function Register() {
    const [name,setName ] = useState('')
    const [username,setUserName ] = useState('')
    const [email,setEmail ] = useState('')
    const [password,setPassword ] = useState('')
    const [cpassword,setCpassword ] = useState('')
  return (
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
      Sign up
    </h1>

    {/* Name */}
    <div className="flex flex-col gap-1">
      <label htmlFor="name" className="text-sm font-medium text-surface dark:text-muted">
        Name
      </label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className="
          px-3 py-2 rounded-lg
          border border-primary
          bg-transparent
          text-surface dark:text-muted
          focus:outline-none
          focus:border-primary
        "
      />
    </div>

    {/* Username */}
    <div className="flex flex-col gap-1">
      <label htmlFor="username" className="text-sm font-medium text-surface dark:text-muted">
        Username
      </label>
      <input
        id="username"
        type="text"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Choose a username"
        className="
          px-3 py-2 rounded-lg
          border border-primary
          bg-transparent
          text-surface dark:text-muted
          focus:outline-none
          focus:border-primary
        "
      />
    </div>

    {/* Email */}
    <div className="flex flex-col gap-1">
      <label htmlFor="email" className="text-sm font-medium text-surface dark:text-muted">
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
          border border-primary
          bg-transparent
          text-surface dark:text-muted
          focus:outline-none
          focus:border-primary
        "
      />
    </div>

    {/* Password */}
    <div className="flex flex-col gap-1">
      <label htmlFor="password" className="text-sm font-medium text-surface dark:text-muted">
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
          border border-primary
          bg-transparent
          text-surface dark:text-muted
          focus:outline-none
          focus:border-primary
        "
      />
    </div>

    {/* Confirm Password */}
    <div className="flex flex-col gap-1">
      <label htmlFor="confirm-password" className="text-sm font-medium text-surface dark:text-muted">
        Confirm password
      </label>
      <input
        id="confirm-password"
        type="password"
        value={cpassword}
        onChange={(e) => setCpassword(e.target.value)}
        placeholder="Confirm password"
        className="
          px-3 py-2 rounded-lg
          border border-primary
          bg-transparent
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
        border border-surface cursor-pointer
        hover:border-primary
        text-white
        py-2
        rounded-lg
        transition-colors
        font-medium
      "
    >
      Sign up
    </button>

    {/* Footer text */}
    <p className="text-xs text-center text-surface dark:text-muted">
      Already have an account?{" "}
      <Link to="/login" className="font-semibold text-primary hover:underline">
        Sign in
      </Link>
    </p>
  </form>
</div>

  )
}

export default Register
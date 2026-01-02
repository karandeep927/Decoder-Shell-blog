
function InputBox({placeholder}) {
  return (
    <input
                type="text"
                name="search"
                id="home-search"
                className="border rounded-full py-1 px-3  outline-none text-white"
                placeholder={placeholder}
              />
  )
}

export default InputBox
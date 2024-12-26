

function Logout() {
    const handleLogOut=()=>{
        localStorage.removeItem("accessToken")
        localStorage.removeItem("refreshToken")
        location.reload()
    }
  return (
    <>
      <div className=' w-full flex justify-center items-center'>
        <button onClick={handleLogOut} className=' text-center mx-auto p-2 bg-red-400 hover:bg-red-500 text-white rounded-md'>Log Out</button>
      </div>
    </>
  )
}

export default Logout
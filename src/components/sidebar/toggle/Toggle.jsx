const Toggle = ({setOpen}) => {
  return (
    <button onClick={()=>setOpen(prev=>!prev)}>
      <svg viewBox="0 0 100 80" width="23" height="23" color="white">
  <rect fill="white" width="100" height="20"></rect>
  <rect fill="white" y="30" width="100" height="20"></rect>
  <rect fill="white" y="60" width="100" height="20"></rect>
</svg>
    </button>
  )
}

export default Toggle
type btnStyle = {
    children: any,
    className?: string
}

const GreenBtn = ({children, className} : btnStyle) => {
  return (
    <button className={`btn bg-green-700 text-white hover:bg-green-600 border-none px-10 ${className?className:''}`}>
        {
            children
        }
    </button>
  )
}

export default GreenBtn
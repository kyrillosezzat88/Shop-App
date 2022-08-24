import Loading from '../../Assets/images/spinner.gif';
function Spinner() {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
        <img src={Loading} alt="loading" />
    </div>
  )
}

export default Spinner
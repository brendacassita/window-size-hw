import useWindowSize from './useWindowSize';

const WindowDemo = () => {
  const windowSize = useWindowSize()
 
  return (
    <div>
      <h1>Window Demo</h1>
      <div
        style={{
          margin: '20px auto',
          border: '2px solid purple',
          width: `${windowSize.width/4}px`,
          height: `${windowSize.height/4}px`,
        }}
      >
        <p>hellllooo</p>
        <p>{JSON.stringify(windowSize)}</p>
      </div>
    </div>
  )
}

export default WindowDemo

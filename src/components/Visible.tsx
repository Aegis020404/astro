import { useState } from 'preact/hooks'
export default function Visible() {
    const [count, setCount] = useState(0)
    return (
        <div className='text-lg'>
            <h2>{count}</h2>
            <button onClick={() => setCount((state: number) => state + 1)}
                className='border p-4 bg-red-500'> Increment</button>
        </div>
    )
}
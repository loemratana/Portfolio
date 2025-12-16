export default function Card({children,className=''}){
    return (
        <div
        className={`backdrop-blur-md bg-white/5 border border-white/20 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300b ${className}`}
        >
            {children}
        </div>
    )
}
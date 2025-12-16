export default function Section({id, 
  title, 
  subtitle, 
  children, 
  className = '' }) {
    return (
        <section id={id} className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
            <div className="max-w-7xl mx-auto ">
                <div className="mb-16">
                    {
                        title &&(
                            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{title}</h2>
                        )
                    }
                    {subtitle &&(
                        <p className="text-lg text-gray-400">{subtitle}</p>
                    )}
                </div>
                {children}
            </div>

        </section>
    )
  } 
  